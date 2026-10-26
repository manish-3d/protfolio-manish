"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { PROFILE_DATA } from "@/data/portfolioData";
import { Calendar, GraduationCap, Sparkles, Wrench } from "lucide-react";

type TabType = "Journey" | "Skills" | "Education" | "Interests";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<TabType>("Journey");

  const handleTabChange = (tab: TabType) => {
    sound.playWoodClick();
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="mc-panel-wood p-6 bg-[#1c1b19] relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded overflow-hidden flex-shrink-0 mc-card-inset border-2 border-[#493421] bg-[#141312]">
            <Image
              src="/images/hero/avatar.jpg"
              alt="Manish profile avatar"
              fill
              className="object-cover object-top pixelated"
            />
          </div>

          <div className="text-center sm:text-left space-y-2">
            <h1 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
              About Me
            </h1>
            <p className="font-pixel text-xs sm:text-sm text-[#F5C66B]">
              A curious builder from India.
            </p>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed max-w-xl">
              {PROFILE_DATA.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Tabbed Interactive Section */}
      <div className="mc-panel-wood p-4 sm:p-6 bg-[#1c1b19]">
        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-2 pb-4 mb-6 border-b border-[#38342e]">
          {(["Journey", "Skills", "Education", "Interests"] as TabType[]).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 font-pixel text-xs rounded transition-all flex items-center gap-2 ${
                  isActive
                    ? "mc-btn-primary"
                    : "mc-card-inset text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320]"
                }`}
              >
                {tab === "Journey" && <Calendar size={14} />}
                {tab === "Skills" && <Wrench size={14} />}
                {tab === "Education" && <GraduationCap size={14} />}
                {tab === "Interests" && <Sparkles size={14} />}
                <span>{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content 1: Journey Timeline */}
        {activeTab === "Journey" && (
          <div className="space-y-4">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#38342e] space-y-6">
              {PROFILE_DATA.journey.map((item) => (
                <div key={item.year} className="relative group">
                  {/* Glowing Year Badge on Timeline */}
                  <div className="absolute -left-[35px] sm:-left-[43px] top-0 flex items-center justify-center">
                    <span className="font-pixel text-[11px] font-bold px-2 py-0.5 rounded bg-[#36C653] text-[#141312] border border-[#1e7a33] shadow-md group-hover:scale-110 transition-transform">
                      {item.year}
                    </span>
                  </div>

                  <div className="mc-card-inset p-3 bg-[#252320] rounded group-hover:border-[#36C653] transition-colors ml-4 sm:ml-2">
                    <h3 className="font-pixel text-sm text-[#F4F0E8] font-bold">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8E8A82] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 2: Skills */}
        {activeTab === "Skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mc-card-inset p-4 bg-[#252320]">
              <h3 className="font-pixel text-sm text-[#8DE6A0] font-bold mb-3 flex items-center gap-2">
                <span>🌐</span> Full Stack & Frontend
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"].map((s) => (
                  <span key={s} className="mc-tag text-xs">{s}</span>
                ))}
              </div>
            </div>

            <div className="mc-card-inset p-4 bg-[#252320]">
              <h3 className="font-pixel text-sm text-[#F5C66B] font-bold mb-3 flex items-center gap-2">
                <span>⚙️</span> Backend & Databases
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "RESTful APIs", "JWT Auth", "Relational Modeling"].map((s) => (
                  <span key={s} className="mc-tag text-xs">{s}</span>
                ))}
              </div>
            </div>

            <div className="mc-card-inset p-4 bg-[#252320]">
              <h3 className="font-pixel text-sm text-[#60a5fa] font-bold mb-3 flex items-center gap-2">
                <span>🏛️</span> Core Computer Science
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"].map((s) => (
                  <span key={s} className="mc-tag text-xs">{s}</span>
                ))}
              </div>
            </div>

            <div className="mc-card-inset p-4 bg-[#252320]">
              <h3 className="font-pixel text-sm text-[#f43f5e] font-bold mb-3 flex items-center gap-2">
                <span>🛠️</span> Tools & Workflow
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Git & GitHub", "Docker", "Linux / Bash", "VS Code", "Postman", "Vercel"].map((s) => (
                  <span key={s} className="mc-tag text-xs">{s}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 3: Education */}
        {activeTab === "Education" && (
          <div className="space-y-4">
            {PROFILE_DATA.education.map((edu) => (
              <div key={edu.institution} className="mc-card-inset p-5 bg-[#252320] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-pixel text-base text-[#F4F0E8] font-bold">
                    {edu.institution}
                  </h3>
                  <span className="mc-tag text-xs border-[#f5c66b]/40 text-[#f5c66b]">
                    {edu.period}
                  </span>
                </div>
                <p className="font-pixel text-xs text-[#36C653] font-semibold">
                  {edu.degree}
                </p>
                <p className="text-xs text-[#D2CBBF] leading-relaxed pt-1">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 4: Interests */}
        {activeTab === "Interests" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PROFILE_DATA.interests.map((interest, i) => (
              <div key={i} className="mc-card-inset p-3.5 bg-[#252320] flex items-center gap-3">
                <span className="text-xl">✨</span>
                <p className="text-xs text-[#F4F0E8] font-medium leading-relaxed">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA to Contact or Resume */}
        <div className="mt-8 pt-4 border-t border-[#38342e] flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/resume"
            onClick={() => sound.playWoodClick()}
            className="mc-btn-secondary text-xs py-2 px-4"
          >
            <span>📄</span>
            <span>View Verified Resume</span>
          </Link>
          <Link
            href="/contact"
            onClick={() => sound.playWoodClick()}
            className="mc-btn-primary text-xs py-2 px-4"
          >
            <span>✉️</span>
            <span>Send a Message &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
