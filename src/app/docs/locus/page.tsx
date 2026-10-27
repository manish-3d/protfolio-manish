"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { LOCUS_META, LOCUS_SECTIONS, LocusDocSection } from "@/data/locusDocData";
import {
  ArrowLeft,
  ExternalLink,
  Search,
  Copy,
  Check,
  BookOpen,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  Terminal,
  PlayCircle,
  Sparkles,
  ChevronRight,
  Info
} from "lucide-react";

export default function LocusDocPage() {
  const [activeSectionId, setActiveSectionId] = useState<string>(LOCUS_SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeSection = LOCUS_SECTIONS.find((s) => s.id === activeSectionId) || LOCUS_SECTIONS[0];

  const filteredSections = LOCUS_SECTIONS.filter((s) => {
    const q = searchQuery.toLowerCase();
    return (
      s.title.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q) ||
      s.content.some((c) => c.toLowerCase().includes(q))
    );
  });

  const handleCopy = (text: string, key: string) => {
    sound.playWoodClick();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const getSectionIcon = (badge: string) => {
    switch (badge) {
      case "Architecture":
        return <Layers size={14} className="text-[#8DE6A0]" />;
      case "AI Engine":
        return <Sparkles size={14} className="text-[#F5C66B]" />;
      case "Data Model":
        return <Database size={14} className="text-[#61dafb]" />;
      case "Security":
        return <ShieldCheck size={14} className="text-[#36C653]" />;
      case "Setup":
        return <Terminal size={14} className="text-[#ff79c6]" />;
      default:
        return <BookOpen size={14} className="text-[#F5C66B]" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Top Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href="/docs"
            onClick={() => sound.playWoodClick()}
            className="inline-flex items-center gap-1.5 text-xs font-pixel text-[#C8C0B3] hover:text-[#8DE6A0] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Technical Documentation</span>
          </Link>
          <span className="text-[#8E8A82] text-xs">/</span>
          <span className="text-xs font-pixel text-[#F5C66B]">Locus Architecture Brief</span>
        </div>

        {/* Quick External Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/films"
            onClick={() => sound.playWoodClick()}
            className="inline-flex items-center gap-1.5 mc-tag text-xs font-pixel py-1 px-2.5 text-[#F5C66B] hover:text-[#F4F0E8] transition-colors"
          >
            <PlayCircle size={13} />
            <span>Launch Film</span>
          </Link>
          <a
            href={LOCUS_META.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playWoodClick()}
            className="inline-flex items-center gap-1.5 mc-btn-primary text-xs py-1 px-3"
          >
            <ExternalLink size={13} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      {/* Hero Header Banner */}
      <div className="mc-panel-wood p-5 md:p-7 bg-[#1c1b19] space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#38342e]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="mc-tag text-xs font-pixel text-[#36C653] border-[#36C653]/40">
                {LOCUS_META.version}
              </span>
              <span className="mc-tag text-xs font-pixel text-[#F5C66B] border-[#F5C66B]/40">
                Full-Stack Next.js 14 App Router
              </span>
              <span className="mc-tag text-xs font-pixel text-[#8DE6A0] border-[#8DE6A0]/40">
                Neon Serverless PostgreSQL
              </span>
            </div>
            <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-[#F4F0E8] font-bold">
              {LOCUS_META.title}
            </h1>
            <p className="font-pixel text-sm text-[#F5C66B] mt-1">
              {LOCUS_META.tagline}
            </p>
          </div>

          {/* Quick Stats Box */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 text-center flex-shrink-0">
            <div className="mc-card-inset p-2.5 bg-[#252320]">
              <div className="font-pixel text-lg text-[#36C653] font-bold">15</div>
              <div className="text-[10px] text-[#8E8A82] uppercase">Chapters</div>
            </div>
            <div className="mc-card-inset p-2.5 bg-[#252320]">
              <div className="font-pixel text-lg text-[#8DE6A0] font-bold">&lt; 40ms</div>
              <div className="text-[10px] text-[#8E8A82] uppercase">DB Query</div>
            </div>
            <div className="mc-card-inset p-2.5 bg-[#252320]">
              <div className="font-pixel text-lg text-[#F5C66B] font-bold">100%</div>
              <div className="text-[10px] text-[#8E8A82] uppercase">Client Math</div>
            </div>
            <div className="mc-card-inset p-2.5 bg-[#252320]">
              <div className="font-pixel text-lg text-[#61dafb] font-bold">AI Broker</div>
              <div className="text-[10px] text-[#8E8A82] uppercase">Grounded RAG</div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed max-w-4xl">
          {LOCUS_META.overview}
        </p>

        {/* Search Bar */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search across all 15 audit chapters, Prisma schemas, formulas, and API endpoints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs sm:text-sm text-[#F4F0E8] py-2.5 pl-10 pr-4 rounded focus:outline-none placeholder-[#8E8A82]"
          />
          <Search size={16} className="absolute left-3 top-3 text-[#8E8A82]" />
        </div>
      </div>

      {/* Main Interactive Documentation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Sidebar: Table of Contents & Chapter Navigator */}
        <aside className="lg:col-span-4 space-y-2 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1">
          <div className="flex items-center justify-between px-2 py-1 text-xs font-pixel text-[#8E8A82] uppercase">
            <span>Audit Chapters ({filteredSections.length})</span>
            <span>Jump to Section</span>
          </div>

          <div className="space-y-1.5">
            {filteredSections.map((sec) => {
              const isActive = sec.id === activeSectionId;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    sound.playWoodClick();
                    setActiveSectionId(sec.id);
                  }}
                  onMouseEnter={() => sound.playItemPop()}
                  className={`w-full text-left p-3 mc-card-inset rounded transition-all flex items-start gap-2.5 ${
                    isActive
                      ? "border-[#36C653] bg-[#2e2a25] shadow-[0_0_12px_rgba(54,198,83,0.3)]"
                      : "bg-[#252320] hover:border-[#8DE6A0] hover:bg-[#282522]"
                  }`}
                >
                  <span
                    className={`font-pixel text-xs font-bold px-1.5 py-0.5 rounded ${
                      isActive
                        ? "bg-[#36C653] text-[#141312]"
                        : "bg-[#141312] text-[#8DE6A0] border border-[#38342e]"
                    }`}
                  >
                    {sec.number}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <span className="font-pixel text-xs text-[#F4F0E8] truncate font-bold">
                        {sec.title}
                      </span>
                      {getSectionIcon(sec.badge)}
                    </div>
                    <p className="text-[11px] text-[#8E8A82] line-clamp-1">
                      {sec.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Content Area: Detailed Chapter Reader */}
        <main className="lg:col-span-8 mc-panel-wood p-6 md:p-8 bg-[#1c1b19] space-y-6">
          {/* Section Header */}
          <div className="pb-4 border-b border-[#38342e] space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-pixel text-xs font-bold px-2 py-0.5 rounded bg-[#36C653] text-[#141312]">
                Chapter {activeSection.number}
              </span>
              <span
                className="mc-tag text-[11px] font-pixel"
                style={{ borderColor: activeSection.badgeColor, color: activeSection.badgeColor }}
              >
                {activeSection.badge}
              </span>
            </div>

            <h2 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
              {activeSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#8DE6A0] font-pixel">
              {activeSection.summary}
            </p>
          </div>

          {/* Callout Alert if present */}
          {activeSection.callout && (
            <div className="p-4 rounded mc-card-inset bg-[#252320] border-l-4 border-[#36C653] flex items-start gap-3">
              <Info size={18} className="text-[#36C653] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-pixel text-xs sm:text-sm text-[#F4F0E8] font-bold">
                  {activeSection.callout.title}
                </h4>
                <p className="text-xs text-[#D2CBBF] mt-1 leading-relaxed">
                  {activeSection.callout.text}
                </p>
              </div>
            </div>
          )}

          {/* Narrative Content Paragraphs */}
          <div className="space-y-3">
            {activeSection.content.map((paragraph, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Structured Table if present */}
          {activeSection.table && (
            <div className="space-y-2 pt-2">
              <h3 className="font-pixel text-xs sm:text-sm text-[#F5C66B] font-bold uppercase tracking-wider">
                Audit Matrix & Specifications
              </h3>
              <div className="mc-card-inset rounded overflow-x-auto bg-[#141312] border border-[#38342e]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#252320] border-b border-[#38342e] text-[#F4F0E8] font-pixel">
                    <tr>
                      {activeSection.table.headers.map((h, i) => (
                        <th key={i} className="p-3 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#38342e]/60">
                    {activeSection.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#1c1b19] transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-3 text-[#D2CBBF] font-mono text-[11px] leading-relaxed">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Code Block if present */}
          {activeSection.codeBlock && (
            <div className="space-y-2 pt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#F5C66B]" />
                  <span className="font-mono text-xs text-[#F5C66B]">
                    {activeSection.codeBlock.filename}
                  </span>
                  <span className="mc-tag text-[10px] text-[#8E8A82]">
                    {activeSection.codeBlock.language}
                  </span>
                </div>

                <button
                  onClick={() =>
                    handleCopy(activeSection.codeBlock!.code, activeSection.codeBlock!.filename)
                  }
                  className="inline-flex items-center gap-1.5 text-xs text-[#C8C0B3] hover:text-[#36C653] transition-colors"
                >
                  {copiedKey === activeSection.codeBlock.filename ? (
                    <>
                      <Check size={13} className="text-[#36C653]" />
                      <span className="text-[#36C653] font-pixel">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="font-pixel">Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mc-card-inset rounded overflow-hidden bg-[#121110] border border-[#38342e]">
                <pre className="p-4 text-xs font-mono text-[#e2e8f0] overflow-x-auto leading-relaxed">
                  <code>{activeSection.codeBlock.code}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Bottom Chapter Pagination Controls */}
          <div className="pt-6 border-t border-[#38342e] flex items-center justify-between">
            {LOCUS_SECTIONS.findIndex((s) => s.id === activeSection.id) > 0 ? (
              <button
                onClick={() => {
                  sound.playWoodClick();
                  const curIdx = LOCUS_SECTIONS.findIndex((s) => s.id === activeSection.id);
                  setActiveSectionId(LOCUS_SECTIONS[curIdx - 1].id);
                }}
                className="mc-btn-secondary text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <ArrowLeft size={13} />
                <span>Previous Chapter</span>
              </button>
            ) : (
              <div />
            )}

            {LOCUS_SECTIONS.findIndex((s) => s.id === activeSection.id) < LOCUS_SECTIONS.length - 1 && (
              <button
                onClick={() => {
                  sound.playWoodClick();
                  const curIdx = LOCUS_SECTIONS.findIndex((s) => s.id === activeSection.id);
                  setActiveSectionId(LOCUS_SECTIONS[curIdx + 1].id);
                }}
                className="mc-btn-primary text-xs py-2 px-3 flex items-center gap-1.5"
              >
                <span>Next Chapter</span>
                <ChevronRight size={13} />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
