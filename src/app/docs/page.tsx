"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { Search, BookOpen, Cpu, Database, Globe, ArrowLeft, Copy, Check } from "lucide-react";

interface DocItem {
  id: string;
  category: "Database" | "Hardware" | "AI & Audio" | "Fullstack";
  title: string;
  summary: string;
  codeSnippet: string;
  steps: string[];
}

const DOCS_LIST: DocItem[] = [
  {
    id: "neon-prisma",
    category: "Database",
    title: "Neon Postgres + Prisma Serverless Pooling Setup",
    summary: "Configuring Prisma with Neon's serverless connection pooler to prevent client connection exhaustion in Next.js App Router.",
    steps: [
      "Create a Neon project and copy the pooled connection string (with ?sslmode=require&pgbouncer=true).",
      "Install @prisma/client and @neondatabase/serverless driver.",
      "Initialize PrismaClient with global singleton to preserve instances during hot-reloads."
    ],
    codeSnippet: `// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;`
  },
  {
    id: "esp8266-dht11",
    category: "Hardware",
    title: "ESP8266 + DHT11 GPIO Pinout & PWM Fan Controller",
    summary: "Hardware schematics, circuit wiring, and non-blocking Arduino C++ code for automated thermal regulation.",
    steps: [
      "Connect DHT11 VCC to 3.3V, GND to GND, and DATA pin to GPIO 4 (D2) with a 10k pull-up resistor.",
      "Connect N-Channel MOSFET Gate to GPIO 14 (D5) for PWM speed control of the 12V fan.",
      "Flash the non-blocking timer routine to read temperature every 2000ms without stalling Wi-Fi."
    ],
    codeSnippet: `// firmware/smart_fan.ino
#include <DHT.h>
#define DHTPIN 4
#define DHTTYPE DHT11
#define FAN_PWM_PIN 14

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  pinMode(FAN_PWM_PIN, OUTPUT);
  dht.begin();
  analogWriteRange(255); // 8-bit PWM
}

void loop() {
  float temp = dht.readTemperature();
  if (!isnan(temp)) {
    int pwmSpeed = map(constrain(temp, 22, 35), 22, 35, 60, 255);
    analogWrite(FAN_PWM_PIN, pwmSpeed);
  }
  delay(2000);
}`
  },
  {
    id: "voice-streaming",
    category: "AI & Audio",
    title: "Real-Time Audio Streaming with Web Audio API",
    summary: "Low-latency PCM audio playback buffering directly in the browser via AudioContext and ScriptProcessor/AudioWorklet.",
    steps: [
      "Initialize AudioContext with 24000Hz sample rate to match OpenAI speech output.",
      "Stream binary chunks over WebSocket and schedule playback nodes seamlessly.",
      "Apply WebRTC constraints for acoustic echo cancellation and noise suppression."
    ],
    codeSnippet: `// lib/audioStreamer.ts
const audioCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 24000 });
let nextStartTime = 0;

export function playAudioChunk(pcmData: Int16Array) {
  const float32 = new Float32Array(pcmData.length);
  for (let i = 0; i < pcmData.length; i++) {
    float32[i] = pcmData[i] / 32768.0;
  }
  const buffer = audioCtx.createBuffer(1, float32.length, 24000);
  buffer.getChannelData(0).set(float32);

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);

  const startTime = Math.max(audioCtx.currentTime, nextStartTime);
  source.start(startTime);
  nextStartTime = startTime + buffer.duration;
}`
  }
];

export default function DocsPage() {
  const [selectedDoc, setSelectedDoc] = useState<DocItem>(DOCS_LIST[0]);
  const [search, setSearch] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredDocs = DOCS_LIST.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.summary.toLowerCase().includes(search.toLowerCase()) ||
      d.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleCopy = (code: string, id: string) => {
    sound.playWoodClick();
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Back Link */}
      <div>
        <Link
          href="/"
          onClick={() => sound.playWoodClick()}
          className="inline-flex items-center gap-1.5 text-xs font-pixel text-[#C8C0B3] hover:text-[#8DE6A0] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Spawn</span>
        </Link>
      </div>

      {/* Header */}
      <div className="mc-panel-wood p-5 md:p-6 bg-[#1c1b19]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📖</span>
              <h1 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
                Technical Documentation
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8A82] mt-1">
              Architecture notes, setup guides, and hardware schematics.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search docs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs text-[#F4F0E8] py-2 pl-9 pr-3 rounded focus:outline-none"
            />
            <Search size={14} className="absolute left-3 top-2.5 text-[#8E8A82]" />
          </div>
        </div>
      </div>

      {/* Two Column Layout: Navigation Index on Left + Document Reader on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Document Index List */}
        <div className="space-y-3">
          {filteredDocs.map((doc) => {
            const isSelected = selectedDoc.id === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => {
                  sound.playWoodClick();
                  setSelectedDoc(doc);
                }}
                onMouseEnter={() => sound.playItemPop()}
                className={`p-4 mc-card-inset bg-[#252320] cursor-pointer rounded transition-all ${
                  isSelected
                    ? "border-[#36C653] shadow-[0_0_10px_rgba(54,198,83,0.3)] bg-[#2e2a25]"
                    : "hover:border-[#8DE6A0] hover:bg-[#282522]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="mc-tag text-[10px] text-[#F5C66B] border-[#F5C66B]/40">
                    {doc.category}
                  </span>
                </div>
                <h3 className="font-pixel text-xs sm:text-sm text-[#F4F0E8] font-bold leading-snug">
                  {doc.title}
                </h3>
                <p className="text-[11px] text-[#8E8A82] line-clamp-2 mt-1">
                  {doc.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Document Content */}
        <div className="lg:col-span-2 mc-panel-wood p-6 md:p-8 bg-[#1c1b19] space-y-6">
          <div className="space-y-2 pb-4 border-b border-[#38342e]">
            <span className="mc-tag text-xs text-[#36C653] border-[#36C653]/40">
              {selectedDoc.category}
            </span>
            <h2 className="font-pixel text-xl sm:text-2xl text-[#F4F0E8] font-bold">
              {selectedDoc.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
              {selectedDoc.summary}
            </p>
          </div>

          {/* Implementation Steps */}
          <div className="space-y-3">
            <h3 className="font-pixel text-sm text-[#F5C66B] font-bold uppercase tracking-wide">
              Step-by-Step Implementation
            </h3>
            <div className="space-y-2">
              {selectedDoc.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded mc-card-inset bg-[#252320]">
                  <span className="w-5 h-5 rounded-full bg-[#36C653] text-[#141312] font-pixel text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-[#D2CBBF] leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Implementation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-pixel text-sm text-[#F5C66B] font-bold uppercase tracking-wide">
                Reference Code Snippet
              </h3>
              <button
                onClick={() => handleCopy(selectedDoc.codeSnippet, selectedDoc.id)}
                className="flex items-center gap-1.5 text-xs text-[#C8C0B3] hover:text-[#36C653] transition-colors"
              >
                {copiedId === selectedDoc.id ? <Check size={13} className="text-[#36C653]" /> : <Copy size={13} />}
                <span>{copiedId === selectedDoc.id ? "Copied!" : "Copy Snippet"}</span>
              </button>
            </div>

            <div className="mc-card-inset rounded overflow-hidden bg-[#121110] border border-[#38342e]">
              <pre className="p-4 text-xs font-mono text-[#e2e8f0] overflow-x-auto leading-relaxed">
                <code>{selectedDoc.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
