"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { PROJECTS } from "@/data/portfolioData";
import { Search } from "lucide-react";

type CategoryFilter = "All" | "Full Stack";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (cat: CategoryFilter) => {
    sound.playWoodClick();
    setSelectedCategory(cat);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="mc-panel-wood p-5 md:p-6 bg-[#1c1b19]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⛏️</span>
              <h1 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
                Projects
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8A82] mt-1">
              Full-stack applications I&apos;ve built and shipped.
            </p>
          </div>

          {/* Search Field */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs text-[#F4F0E8] py-2 pl-9 pr-3 rounded focus:outline-none transition-colors"
            />
            <Search size={14} className="absolute left-3 top-2.5 text-[#8E8A82]" />
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#38342e]">
          {(["All", "Full Stack"] as CategoryFilter[]).map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3 py-1 font-pixel text-xs rounded transition-all ${
                  isActive
                    ? "mc-btn-primary py-1 px-3"
                    : "mc-card-inset text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid: 2 Columns */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={() => sound.playWoodClick()}
              onMouseEnter={() => sound.playItemPop()}
              className="mc-panel-wood p-4 bg-[#1c1b19] hover:border-[#36C653] transition-all duration-150 flex flex-col justify-between group rounded"
            >
              <div>
                {/* Cover Preview Image */}
                <div className="relative w-full h-48 rounded overflow-hidden bg-[#141312] mb-3 border border-[#38342e]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-200 pixelated"
                  />
                  <div className="absolute top-2 right-2 flex items-center gap-1.5">
                    <span className="mc-tag text-[10px] bg-[#141312]/90 border-[#36C653]/40 text-[#8DE6A0] font-bold">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <span className="mc-tag text-[10px] bg-[#141312]/90 border-[#36C653]/60 text-[#36C653] flex items-center gap-1 font-pixel">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#36C653] animate-pulse" />
                        Live
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h2 className="font-pixel text-lg text-[#F4F0E8] font-bold group-hover:text-[#8DE6A0] transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-[#8E8A82] mt-1 line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Row */}
              <div className="mt-4 pt-3 border-t border-[#38342e] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span key={t} className="mc-tag text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[#F5C66B] font-bold text-sm group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="mc-panel-wood p-12 text-center bg-[#1c1b19] space-y-3">
          <span className="text-4xl">📦</span>
          <h3 className="font-pixel text-base text-[#F4F0E8] font-bold">
            No projects found
          </h3>
          <p className="text-xs text-[#8E8A82] max-w-sm mx-auto">
            No builds matched your filter. Try searching for a different keyword or category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mc-btn-secondary text-xs py-1.5 px-4 mt-2"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
