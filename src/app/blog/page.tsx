"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { BLOG_POSTS } from "@/data/portfolioData";
import { Search, Calendar, Clock } from "lucide-react";

type BlogCategory = "All" | "Web Dev" | "AI" | "IoT" | "DSA" | "Other";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (cat: BlogCategory) => {
    sound.playWoodClick();
    setSelectedCategory(cat);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header Panel */}
      <div className="mc-panel-wood p-5 md:p-6 bg-[#1c1b19]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📜</span>
              <h1 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
                Blog
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8A82] mt-1">
              Notes, tutorials and things I learn.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs text-[#F4F0E8] py-2 pl-9 pr-3 rounded focus:outline-none transition-colors"
            />
            <Search size={14} className="absolute left-3 top-2.5 text-[#8E8A82]" />
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#38342e]">
          {(["All", "Web Dev", "AI", "IoT", "DSA", "Other"] as BlogCategory[]).map((cat) => {
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

      {/* Blog Cards List */}
      <div className="space-y-3.5">
        {filteredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            onClick={() => sound.playWoodClick()}
            onMouseEnter={() => sound.playItemPop()}
            className="mc-panel-wood p-4 bg-[#1c1b19] hover:border-[#8DE6A0] transition-all duration-150 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded group"
          >
            {/* Thumbnail */}
            <div className="relative w-full sm:w-40 h-28 flex-shrink-0 rounded overflow-hidden mc-card-inset border border-[#38342e] bg-[#141312]">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover object-center pixelated group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Post Information */}
            <div className="min-w-0 flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="mc-tag text-[10px] text-[#36C653] border-[#36C653]/30">
                  {post.category}
                </span>
              </div>

              <h2 className="font-pixel text-base text-[#F4F0E8] font-bold group-hover:text-[#8DE6A0] transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-xs text-[#8E8A82] line-clamp-2 leading-relaxed">
                {post.summary}
              </p>

              <div className="flex items-center gap-4 text-[11px] text-[#8E8A82] pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} className="text-[#F5C66B]" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-[#38bdf8]" />
                  {post.readingTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
