"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sound } from "@/lib/soundService";
import { PROJECTS } from "@/data/portfolioData";

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <div className="mc-panel-wood p-4 md:p-5 bg-[#1c1b19] flex-1">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#38342e]">
        <div className="flex items-center gap-2">
          <span className="text-xl">🟩</span>
          <h2 className="font-pixel text-sm md:text-base text-[#F4F0E8] font-bold tracking-wide">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          onClick={() => sound.playWoodClick()}
          className="text-xs text-[#C8C0B3] hover:text-[#8DE6A0] font-pixel flex items-center gap-1 transition-colors"
        >
          <span>View All Projects</span>
          <span className="text-sm">&rarr;</span>
        </Link>
      </div>

      {/* 2 Flagship Full-Stack Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            onClick={() => sound.playWoodClick()}
            onMouseEnter={() => sound.playItemPop()}
            className="mc-card-inset p-3 bg-[#252320] hover:bg-[#2e2a25] border-2 border-[#38342e] hover:border-[#36C653] transition-all duration-150 flex flex-col justify-between group rounded"
          >
            <div>
              {/* Cover Image */}
              <div className="relative w-full h-40 sm:h-44 rounded overflow-hidden bg-[#141312] mb-3">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-200 pixelated"
                />
                <span className="absolute top-2 left-2 mc-tag text-[10px] bg-[#141312]/90 border border-[#36C653] text-[#8DE6A0]">
                  Full Stack
                </span>
                {project.liveUrl && (
                  <span className="absolute top-2 right-2 mc-tag text-[10px] bg-[#141312]/90 border border-[#36C653]/60 text-[#36C653] flex items-center gap-1 font-pixel">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#36C653] animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-pixel text-base text-[#F4F0E8] font-bold group-hover:text-[#8DE6A0] transition-colors truncate">
                {project.title}
              </h3>
              <p className="text-xs text-[#8E8A82] line-clamp-2 mt-1">
                {project.description}
              </p>
            </div>

            {/* Tags & Action Arrow */}
            <div className="mt-3 pt-2.5 border-t border-[#38342e]/60 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="mc-tag text-[10px] py-0.5 px-2">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[#F5C66B] font-bold text-xs group-hover:translate-x-1 transition-transform">
                View &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
