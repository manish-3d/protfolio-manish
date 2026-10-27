"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import {
  Search,
  BookOpen,
  Cpu,
  Database,
  Globe,
  ArrowLeft,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Layers,
  FileCode2
} from "lucide-react";

interface DocItem {
  id: string;
  category: "AI & Agents" | "Database" | "Fullstack" | "Security" | "Architecture";
  title: string;
  summary: string;
  codeSnippet: string;
  steps: string[];
}

const DOCS_LIST: DocItem[] = [
  {
    id: "locus-ai-broker",
    category: "AI & Agents",
    title: "Locus AI Broker: Streaming Route Handler & Structured Extraction",
    summary: "Implementing a conversational real estate broker in Next.js 14 App Router using OpenAI structured JSON outputs and Prisma relational filters.",
    steps: [
      "Define strict system prompt enforcing Fair Housing non-discriminatory guidelines and schema matching.",
      "Extract structured JSON filter criteria from natural language queries (city, price bracket, bedrooms, amenities).",
      "Execute parameterized Prisma queries against Neon PostgreSQL and return matching property records via streaming responses."
    ],
    codeSnippet: `// app/api/ai-broker/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { 
        role: "system", 
        content: "You are Locus AI. Extract search criteria JSON: { city?, maxPrice?, bedrooms? }. Ground all advice strictly in database facts." 
      },
      { role: "user", content: message }
    ],
    response_format: { type: "json_object" }
  });

  const criteria = JSON.parse(completion.choices[0].message.content || "{}");

  const properties = await prisma.property.findMany({
    where: {
      status: "FOR_SALE",
      ...(criteria.city && { city: { equals: criteria.city, mode: "insensitive" } }),
      ...(criteria.maxPrice && { price: { lte: criteria.maxPrice } }),
      ...(criteria.bedrooms && { bedrooms: { gte: criteria.bedrooms } })
    },
    take: 6,
    include: { images: true }
  });

  return NextResponse.json({ criteria, properties });
}`
  },
  {
    id: "locus-mortgage",
    category: "Fullstack",
    title: "Dynamic Mortgage Amortization & In-Browser Financial Modeling",
    summary: "Running high-performance client-side loan amortization calculations in React to provide zero-latency slider interactions without server overhead.",
    steps: [
      "Derive principal balance by subtracting down payment from listing price.",
      "Calculate monthly payment using standard fixed-rate formula: M = P * [r(1+r)^n] / [(1+r)^n - 1].",
      "Incorporate monthly property tax, insurance, and HOA dues to display comprehensive monthly cost."
    ],
    codeSnippet: `// lib/mortgage.ts
export function calculateMortgage(price: number, downPercent: number, annualRate: number, years: number) {
  const downPayment = price * (downPercent / 100);
  const principal = price - downPayment;
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = years * 12;

  let monthlyPI = 0;
  if (monthlyRate > 0) {
    const factor = Math.pow(1 + monthlyRate, totalMonths);
    monthlyPI = principal * (monthlyRate * factor) / (factor - 1);
  } else {
    monthlyPI = principal / totalMonths;
  }

  const monthlyTax = (price * 0.012) / 12; // 1.2% est. annual tax
  const monthlyInsurance = (price * 0.0035) / 12;

  return {
    monthlyPrincipalAndInterest: Math.round(monthlyPI),
    monthlyTax: Math.round(monthlyTax),
    totalMonthlyPayment: Math.round(monthlyPI + monthlyTax + monthlyInsurance)
  };
}`
  },
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
    id: "jwt-auth-express",
    category: "Security",
    title: "JWT Authentication & Middleware Protection in Express",
    summary: "Implementing secure stateless JWT authentication, password hashing with bcrypt, and route authorization guards in Node.js.",
    steps: [
      "Hash incoming user passwords with bcrypt (salt rounds = 10) before persisting to PostgreSQL.",
      "Sign JWT access tokens with a secure secret and reasonable expiration (e.g. 24h).",
      "Attach authenticateToken middleware to private Express routes to verify bearer headers."
    ],
    codeSnippet: `// middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    (req as any).user = user;
    next();
  });
}`
  },
  {
    id: "postgres-indexing",
    category: "Database",
    title: "PostgreSQL Indexing & Query Optimization Patterns",
    summary: "Improving relational query performance with composite B-Tree indexes and EXPLAIN ANALYZE profiling.",
    steps: [
      "Identify high-frequency WHERE and JOIN predicates across user and project tables.",
      "Add composite B-Tree indexes in PostgreSQL migration scripts.",
      "Use EXPLAIN ANALYZE to verify index scans and eliminate sequential table scans."
    ],
    codeSnippet: `// schema.prisma
model Property {
  id           String        @id @default(cuid())
  slug         String        @unique
  city         String
  propertyType PropertyType
  price        Decimal       @db.Decimal(12, 2)
  status       ListingStatus @default(FOR_SALE)

  @@index([status, price])
  @@index([city, propertyType])
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
                Technical Documentation & Architecture
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8A82] mt-1">
              Code-verified repository audit briefs, architecture specifications, and implementation patterns.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search docs & snippets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs text-[#F4F0E8] py-2 pl-9 pr-3 rounded focus:outline-none placeholder-[#8E8A82]"
            />
            <Search size={14} className="absolute left-3 top-2.5 text-[#8E8A82]" />
          </div>
        </div>
      </div>

      {/* Featured Architecture Specifications Callout Banner */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-[#F5C66B]" />
          <h2 className="font-pixel text-sm text-[#F5C66B] uppercase font-bold tracking-wider">
            Flagship Project Architecture Specifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Locus Master Spec Card */}
          <div className="mc-panel-wood p-5 bg-[#1c1b19] border-2 border-[#36C653] hover:border-[#8DE6A0] transition-all flex flex-col justify-between space-y-4 shadow-[0_0_15px_rgba(54,198,83,0.15)]">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="mc-tag text-[10px] font-pixel text-[#36C653] border-[#36C653]/40">
                  Production Verified • 15 Chapters
                </span>
                <span className="text-xs text-[#8E8A82] font-mono">v1.4 Spec</span>
              </div>

              <h3 className="font-pixel text-lg sm:text-xl text-[#F4F0E8] font-bold">
                Locus — AI Real Estate Discovery
              </h3>

              <p className="text-xs text-[#D2CBBF] leading-relaxed">
                Exhaustive engineering audit brief detailing product thesis, conversational AI Broker pipeline, Prisma schemas, Neon PgBouncer serverless pooling, in-browser amortization math, and sub-second catalog architecture.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Next.js 14", "Prisma ORM", "Neon Postgres", "OpenAI", "Tailwind"].map((t) => (
                  <span key={t} className="mc-tag text-[10px] text-[#C8C0B3]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/docs/locus"
                onClick={() => sound.playWoodClick()}
                className="w-full mc-btn-primary text-xs py-2 px-3 flex items-center justify-center gap-1.5"
              >
                <BookOpen size={13} />
                <span>Read Complete Locus Architecture Spec</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>

          {/* CohortX Master Spec Card */}
          <div className="mc-panel-wood p-5 bg-[#1c1b19] border-2 border-[#493421] hover:border-[#F5C66B] transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="mc-tag text-[10px] font-pixel text-[#F5C66B] border-[#F5C66B]/40">
                  Handoff Brief • 6 Core Sections
                </span>
                <span className="text-xs text-[#8E8A82] font-mono">v1.0 Spec</span>
              </div>

              <h3 className="font-pixel text-lg sm:text-xl text-[#F4F0E8] font-bold">
                CohortX — Developer Proof-of-Work
              </h3>

              <p className="text-xs text-[#D2CBBF] leading-relaxed">
                Repository audit brief establishing the 4-pillar model (Build, Prove, Improve, Connect), developer proof-of-work profiles, relational schemas, REST microservices, and live sprint workflows.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React 18", "Node.js", "Express", "PostgreSQL", "JWT"].map((t) => (
                  <span key={t} className="mc-tag text-[10px] text-[#C8C0B3]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/docs/cohortx"
                onClick={() => sound.playWoodClick()}
                className="w-full mc-btn-secondary text-xs py-2 px-3 flex items-center justify-center gap-1.5 text-[#F5C66B] hover:text-[#F4F0E8]"
              >
                <BookOpen size={13} />
                <span>Read CohortX Audit Brief</span>
                <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Snippet Library Section Header */}
      <div className="pt-2">
        <h2 className="font-pixel text-sm text-[#F5C66B] uppercase font-bold tracking-wider mb-3">
          Implementation Snippets & Design Patterns
        </h2>

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
                  {copiedId === selectedDoc.id ? (
                    <>
                      <Check size={13} className="text-[#36C653]" />
                      <span className="text-[#36C653] font-pixel">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="font-pixel">Copy Snippet</span>
                    </>
                  )}
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
    </div>
  );
}
