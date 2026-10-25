"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { PROFILE_DATA } from "@/data/portfolioData";
import { Download, ArrowLeft, GraduationCap, Code2, Briefcase } from "lucide-react";

export default function ResumePage() {
  const handleDownload = () => {
    sound.playWoodClick();
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Top Controls */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          onClick={() => sound.playWoodClick()}
          className="inline-flex items-center gap-1.5 text-xs font-pixel text-[#C8C0B3] hover:text-[#8DE6A0] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Return to Spawn</span>
        </Link>

        <button
          onClick={handleDownload}
          className="mc-btn-primary text-xs py-2 px-4"
        >
          <Download size={14} />
          <span>Print / Save Verified PDF</span>
        </button>
      </div>

      {/* Verified Resume Sheet */}
      <div className="mc-panel-wood p-6 sm:p-10 bg-[#1c1b19] space-y-8 text-[#D2CBBF]">
        {/* Header */}
        <div className="border-b border-[#38342e] pb-6 space-y-2">
          <h1 className="font-pixel text-3xl sm:text-4xl text-[#F4F0E8] font-bold">
            {PROFILE_DATA.name}
          </h1>
          <p className="font-pixel text-sm text-[#36C653] font-semibold">
            {PROFILE_DATA.title}
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-[#8E8A82] pt-1">
            <span>📍 Greater Noida, India</span>
            <span>•</span>
            <a href={PROFILE_DATA.socials.github} target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline">
              github.com/manish
            </a>
            <span>•</span>
            <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-[#38bdf8] hover:underline">
              linkedin.com/in/manish
            </a>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-3">
          <h2 className="font-pixel text-base text-[#F5C66B] font-bold uppercase tracking-wide flex items-center gap-2">
            <GraduationCap size={16} />
            <span>Education</span>
          </h2>
          <div className="mc-card-inset p-4 bg-[#252320] space-y-1 rounded">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <h3 className="font-pixel text-sm text-[#F4F0E8] font-bold">
                Noida Institute of Engineering and Technology (NIET)
              </h3>
              <span className="text-xs text-[#8E8A82]">2022 - 2026</span>
            </div>
            <p className="text-xs text-[#36C653]">
              B.Tech in Computer Science and Engineering (Internet of Things)
            </p>
            <p className="text-xs text-[#8E8A82] pt-1 leading-relaxed">
              Coursework: Distributed Systems, Embedded Microcontrollers, Data Structures & Algorithms, Database Management Systems, Cloud Computing.
            </p>
          </div>
        </div>

        {/* Technical Experience & Projects */}
        <div className="space-y-3">
          <h2 className="font-pixel text-base text-[#F5C66B] font-bold uppercase tracking-wide flex items-center gap-2">
            <Briefcase size={16} />
            <span>Flagship Projects & Shipped Builds</span>
          </h2>

          <div className="space-y-3">
            {/* Locus */}
            <div className="mc-card-inset p-4 bg-[#252320] space-y-1.5 rounded">
              <div className="flex items-center justify-between">
                <h3 className="font-pixel text-sm text-[#F4F0E8] font-bold">
                  Locus — AI Real Estate Platform
                </h3>
                <span className="mc-tag text-[10px]">Next.js 14 • Prisma • Neon PG • AI</span>
              </div>
              <p className="text-xs text-[#D2CBBF] leading-relaxed">
                • Built a modern real estate platform supporting real-time conversational voice agents for property tours.
                <br />
                • Reduced voice round-trip latency to &lt;350ms through streaming WebRTC audio and Web Audio API buffers.
                <br />
                • Designed serverless database pooling using Prisma ORM on Neon PostgreSQL to handle high concurrent traffic.
              </p>
            </div>

            {/* Smart Fan IoT */}
            <div className="mc-card-inset p-4 bg-[#252320] space-y-1.5 rounded">
              <div className="flex items-center justify-between">
                <h3 className="font-pixel text-sm text-[#F4F0E8] font-bold">
                  Smart Fan — IoT Automated Embedded System
                </h3>
                <span className="mc-tag text-[10px]">ESP8266 • DHT11 • Embedded C++</span>
              </div>
              <p className="text-xs text-[#D2CBBF] leading-relaxed">
                • Engineered an automated ambient climate control fan system with PWM duty-cycle modulation.
                <br />
                • Integrated PIR presence sensing with an auto-sleep mode, reducing idle energy consumption by 40%.
                <br />
                • Implemented sub-50ms WebSocket telemetry streaming to a localized web control dashboard.
              </p>
            </div>

            {/* CohortX */}
            <div className="mc-card-inset p-4 bg-[#252320] space-y-1.5 rounded">
              <div className="flex items-center justify-between">
                <h3 className="font-pixel text-sm text-[#F4F0E8] font-bold">
                  CohortX — Developer Collaboration Hub
                </h3>
                <span className="mc-tag text-[10px]">React • Node.js • Express • PostgreSQL</span>
              </div>
              <p className="text-xs text-[#D2CBBF] leading-relaxed">
                • Designed a peer-review and project collaboration hub with milestone-based progress boards and karma bounties.
              </p>
            </div>
          </div>
        </div>

        {/* Core Technical Stack */}
        <div className="space-y-3">
          <h2 className="font-pixel text-base text-[#F5C66B] font-bold uppercase tracking-wide flex items-center gap-2">
            <Code2 size={16} />
            <span>Technical Skills</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="mc-card-inset p-3 bg-[#252320]">
              <span className="font-pixel text-[#8DE6A0] block mb-1">Languages:</span>
              <span>TypeScript, JavaScript, Python, C/C++, HTML5, CSS3/Tailwind</span>
            </div>
            <div className="mc-card-inset p-3 bg-[#252320]">
              <span className="font-pixel text-[#8DE6A0] block mb-1">Frameworks:</span>
              <span>Next.js 14, React 18, Node.js, Express, Prisma ORM, Three.js</span>
            </div>
            <div className="mc-card-inset p-3 bg-[#252320]">
              <span className="font-pixel text-[#8DE6A0] block mb-1">Hardware / IoT:</span>
              <span>ESP8266, NodeMCU, Arduino, DHT11, PWM, WebSockets, MQTT</span>
            </div>
            <div className="mc-card-inset p-3 bg-[#252320]">
              <span className="font-pixel text-[#8DE6A0] block mb-1">Databases & Tools:</span>
              <span>PostgreSQL, Neon, Docker, Git, Linux, VS Code, Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
