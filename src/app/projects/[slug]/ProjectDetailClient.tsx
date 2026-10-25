"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { Project } from "@/data/portfolioData";
import { ExternalLink, ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

type DetailTab = "Overview" | "Features" | "Tech Stack" | "Screenshots" | "Learnings";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<DetailTab>("Overview");
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  const handleTabChange = (tab: DetailTab) => {
    sound.playWoodClick();
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Return Link */}
      <div>
        <Link
          href="/projects"
          onClick={() => sound.playWoodClick()}
          className="inline-flex items-center gap-1.5 text-xs font-pixel text-[#C8C0B3] hover:text-[#8DE6A0] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Hero Showcase Card */}
      <div className="mc-panel-wood p-5 md:p-8 bg-[#1c1b19] space-y-6">
        {/* Project Cover Preview */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-md overflow-hidden bg-[#141312] border-2 border-[#493421] shadow-2xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover object-center pixelated"
          />
        </div>

        {/* Title, Tagline & Description */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="font-pixel text-3xl sm:text-4xl text-[#F4F0E8] font-bold">
                {project.title}
              </h1>
              <p className="font-pixel text-sm text-[#F5C66B] mt-0.5">
                {project.tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playWoodClick()}
                  className="mc-btn-primary text-xs py-2 px-4"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playWoodClick()}
                  className="mc-btn-secondary text-xs py-2 px-4"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Tech Badges Row */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((t) => (
              <span key={t} className="mc-tag text-xs font-pixel py-0.5 px-2">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tab Controls Bar */}
        <div className="pt-4 border-t border-[#38342e]">
          <div className="flex flex-wrap items-center gap-2 pb-4">
            {(["Overview", "Features", "Tech Stack", "Screenshots", "Learnings"] as DetailTab[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-3 py-1.5 font-pixel text-xs rounded transition-all ${
                    isActive
                      ? "bg-[#252320] text-[#8DE6A0] border border-[#36C653] shadow-inner"
                      : "mc-card-inset text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "Overview" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="mc-card-inset p-4 bg-[#252320] space-y-3">
                <h3 className="font-pixel text-base text-[#F4F0E8] font-bold">
                  Overview & Engineering Architecture
                </h3>
                <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Screenshots Carousel */}
              <div className="space-y-3">
                <div className="relative w-full h-64 sm:h-80 rounded overflow-hidden mc-card-inset border border-[#38342e]">
                  <Image
                    src={project.screenshots[activeScreenshotIdx] || project.coverImage}
                    alt={`${project.title} Screenshot`}
                    fill
                    className="object-cover object-center pixelated"
                  />
                </div>
                {project.screenshots.length > 1 && (
                  <div className="flex justify-center gap-2">
                    {project.screenshots.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          sound.playItemPop();
                          setActiveScreenshotIdx(idx);
                        }}
                        className={`w-3 h-3 rounded-full border transition-all ${
                          activeScreenshotIdx === idx
                            ? "bg-[#36C653] border-[#1e7a33] scale-110"
                            : "bg-[#252320] border-[#38342e]"
                        }`}
                        aria-label={`View screenshot ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Features */}
          {activeTab === "Features" && (
            <div className="mc-card-inset p-5 bg-[#252320] space-y-4 animate-in fade-in duration-150">
              <h3 className="font-pixel text-base text-[#F4F0E8] font-bold">
                Implemented Core Features
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded bg-[#1c1b19]/60 border border-[#38342e]/60">
                    <CheckCircle2 size={16} className="text-[#36C653] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#D2CBBF]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Tech Stack */}
          {activeTab === "Tech Stack" && (
            <div className="mc-card-inset p-5 bg-[#252320] space-y-4 animate-in fade-in duration-150">
              <h3 className="font-pixel text-base text-[#F4F0E8] font-bold">
                Technology Breakdown & Roles
              </h3>
              <div className="space-y-2">
                {project.techStackDetails.map((tech, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded bg-[#1c1b19] border border-[#38342e] gap-1">
                    <span className="font-pixel text-xs text-[#8DE6A0] font-bold">
                      {tech.name}
                    </span>
                    <span className="text-xs text-[#8E8A82]">
                      {tech.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Screenshots */}
          {activeTab === "Screenshots" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-150">
              {project.screenshots.map((shot, i) => (
                <div key={i} className="relative h-48 rounded overflow-hidden mc-card-inset border border-[#38342e]">
                  <Image
                    src={shot}
                    alt={`${project.title} gallery ${i + 1}`}
                    fill
                    className="object-cover object-center pixelated"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Tab 5: Learnings */}
          {activeTab === "Learnings" && (
            <div className="mc-card-inset p-5 bg-[#252320] space-y-4 animate-in fade-in duration-150">
              <h3 className="font-pixel text-base text-[#F4F0E8] font-bold">
                Engineering Challenges & Key Learnings
              </h3>
              <div className="space-y-3">
                {project.learnings.map((learn, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded bg-[#1c1b19] border border-[#38342e]">
                    <ChevronRight size={16} className="text-[#F5C66B] flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
                      {learn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
