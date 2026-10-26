"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { Search, BookOpen, Cpu, Database, Globe, ArrowLeft, Copy, Check } from "lucide-react";

interface DocItem {
  id: string;
  category: "Database" | "Fullstack" | "Security" | "Architecture";
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
model Project {
  id        String   @id @default(uuid())
  slug      String   @unique
  authorId  String
  createdAt DateTime @default(now())

  @@index([authorId, createdAt(sort: Desc)])
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
              Architecture notes, setup guides, and full-stack patterns.
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
