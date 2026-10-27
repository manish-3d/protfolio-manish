"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { COHORTX_META, COHORTX_SECTIONS, CohortxDocSection } from "@/data/cohortxDocData";
import {
  ArrowLeft,
  ExternalLink,
  Search,
  Copy,
  Check,
  BookOpen,
  Layers,
  Database,
  ShieldCheck,
  Terminal,
  Info,
  ChevronRight
} from "lucide-react";

export default function CohortxDocPage() {
  const [activeSectionId, setActiveSectionId] = useState<string>(COHORTX_SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const activeSection = COHORTX_SECTIONS.find((s) => s.id === activeSectionId) || COHORTX_SECTIONS[0];

  const filteredSections = COHORTX_SECTIONS.filter((s) => {
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
          <span className="text-xs font-pixel text-[#F5C66B]">CohortX Audit Brief</span>
        </div>

        <a
          href={COHORTX_META.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playWoodClick()}
          className="inline-flex items-center gap-1.5 mc-btn-primary text-xs py-1 px-3"
        >
          <ExternalLink size={13} />
          <span>Live Feed Demo</span>
        </a>
      </div>

      {/* Hero Header Banner */}
      <div className="mc-panel-wood p-5 md:p-7 bg-[#1c1b19] space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#38342e]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="mc-tag text-xs font-pixel text-[#36C653] border-[#36C653]/40">
                {COHORTX_META.version}
              </span>
              <span className="mc-tag text-xs font-pixel text-[#F5C66B] border-[#F5C66B]/40">
                React + Node.js + Express
              </span>
              <span className="mc-tag text-xs font-pixel text-[#8DE6A0] border-[#8DE6A0]/40">
                PostgreSQL Relational Schema
              </span>
            </div>
            <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl text-[#F4F0E8] font-bold">
              {COHORTX_META.title}
            </h1>
            <p className="font-pixel text-sm text-[#F5C66B] mt-1">
              {COHORTX_META.tagline}
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed max-w-4xl">
          {COHORTX_META.overview}
        </p>

        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search across CohortX pillars, schemas, and endpoints..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs sm:text-sm text-[#F4F0E8] py-2.5 pl-10 pr-4 rounded focus:outline-none placeholder-[#8E8A82]"
          />
          <Search size={16} className="absolute left-3 top-3 text-[#8E8A82]" />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Sidebar */}
        <aside className="lg:col-span-4 space-y-2 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-1">
          <div className="text-xs font-pixel text-[#8E8A82] uppercase px-2 py-1">
            Audit Sections ({filteredSections.length})
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
                    <span className="font-pixel text-xs text-[#F4F0E8] block truncate font-bold">
                      {sec.title}
                    </span>
                    <p className="text-[11px] text-[#8E8A82] line-clamp-1">
                      {sec.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Content */}
        <main className="lg:col-span-8 mc-panel-wood p-6 md:p-8 bg-[#1c1b19] space-y-6">
          <div className="pb-4 border-b border-[#38342e] space-y-2">
            <span className="mc-tag text-xs font-pixel text-[#36C653] border-[#36C653]/40">
              Section {activeSection.number}
            </span>
            <h2 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
              {activeSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#8DE6A0] font-pixel">
              {activeSection.summary}
            </p>
          </div>

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

          <div className="space-y-3">
            {activeSection.content.map((p, idx) => (
              <p key={idx} className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {activeSection.table && (
            <div className="space-y-2 pt-2">
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

          {activeSection.codeBlock && (
            <div className="space-y-2 pt-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#F5C66B]">
                  {activeSection.codeBlock.filename}
                </span>
                <button
                  onClick={() =>
                    handleCopy(activeSection.codeBlock!.code, activeSection.codeBlock!.filename)
                  }
                  className="inline-flex items-center gap-1.5 text-xs text-[#C8C0B3] hover:text-[#36C653] transition-colors"
                >
                  {copiedKey === activeSection.codeBlock.filename ? (
                    <Check size={13} className="text-[#36C653]" />
                  ) : (
                    <Copy size={13} />
                  )}
                  <span className="font-pixel">Copy Code</span>
                </button>
              </div>

              <div className="mc-card-inset rounded overflow-hidden bg-[#121110] border border-[#38342e]">
                <pre className="p-4 text-xs font-mono text-[#e2e8f0] overflow-x-auto leading-relaxed">
                  <code>{activeSection.codeBlock.code}</code>
                </pre>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
