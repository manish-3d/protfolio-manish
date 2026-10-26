"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { PROFILE_DATA } from "@/data/portfolioData";
import { Download, ArrowLeft, GraduationCap, Code2, Briefcase } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon } from "@/components/ui/SocialIcons";

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
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#8E8A82] pt-1">
            <span>📍 Greater Noida, India</span>
            <span>•</span>
            <a href={PROFILE_DATA.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#38bdf8] hover:underline">
              <GithubIcon size={14} />
              <span>github.com/manish-3d</span>
            </a>
            <span>•</span>
            <a href={PROFILE_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#38bdf8] hover:underline">
              <LinkedinIcon size={14} />
              <span>linkedin.com/in/manish-kumar-85904b3a2</span>
            </a>
            <span>•</span>
            <a href={PROFILE_DATA.socials.leetcode} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#FFA116] hover:underline">
              <LeetcodeIcon size={14} />
              <span>leetcode.com/u/manixshsg</span>
            </a>
            <span>•</span>
            <a href={PROFILE_DATA.socials.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#38bdf8] hover:underline">
              <TwitterIcon size={14} />
              <span>x.com/realDijkstra</span>
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
              B.Tech in Computer Science and Engineering
            </p>
            <p className="text-xs text-[#8E8A82] pt-1 leading-relaxed">
              Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Programming, Full Stack Web Architecture.
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
                  Locus — Full-Stack Real Estate Platform
                </h3>
                <span className="mc-tag text-[10px]">Next.js 14 • Prisma • Neon PG • Tailwind</span>
              </div>
              <p className="text-xs text-[#D2CBBF] leading-relaxed">
                • Built a modern full-stack real estate application supporting interactive property catalogs and dynamic filtering.
                <br />
                • Designed serverless database pooling using Prisma ORM on Neon PostgreSQL to handle high concurrent traffic with low query latency.
                <br />
                • Implemented dynamic mortgage calculators and real-time appointment scheduling workflows.
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
                <br />
                • Architected normalized PostgreSQL relational schemas with foreign keys and cascade rules for reliable user cohorts.
                <br />
                • Implemented secure JWT-based authentication and modular REST API microservices in Node.js & Express.
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
              <span>TypeScript, JavaScript, SQL, HTML5, CSS3</span>
            </div>
            <div className="mc-card-inset p-3 bg-[#252320]">
              <span className="font-pixel text-[#8DE6A0] block mb-1">Frameworks & Libraries:</span>
              <span>Next.js 14, React 18, Node.js, Express.js, Prisma ORM, Tailwind CSS</span>
            </div>
            <div className="mc-card-inset p-3 bg-[#252320]">
              <span className="font-pixel text-[#8DE6A0] block mb-1">Core CS & Architecture:</span>
              <span>Data Structures & Algorithms, OOP, Database Design, System Design, REST APIs</span>
            </div>
            <div className="mc-card-inset p-3 bg-[#252320]">
              <span className="font-pixel text-[#8DE6A0] block mb-1">Databases & Tools:</span>
              <span>PostgreSQL, Neon, Docker, Git & GitHub, Linux / Bash, VS Code, Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
