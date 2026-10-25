"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sound } from "@/lib/soundService";
import { BLOG_POSTS } from "@/data/portfolioData";

export default function LatestBlogPanel() {
  const latest = BLOG_POSTS.slice(0, 3);

  return (
    <div className="mc-panel-wood p-4 bg-[#1c1b19] flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#38342e]">
          <div className="flex items-center gap-2">
            <span className="text-base">📜</span>
            <h3 className="font-pixel text-xs md:text-sm text-[#F4F0E8] font-bold tracking-wide">
              Latest Blog Posts
            </h3>
          </div>
          <Link
            href="/blog"
            onClick={() => sound.playWoodClick()}
            className="text-[11px] text-[#C8C0B3] hover:text-[#8DE6A0] font-pixel transition-colors"
          >
            View All &rarr;
          </Link>
        </div>

        {/* 3 Post Rows */}
        <div className="space-y-2.5">
          {latest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              onClick={() => sound.playWoodClick()}
              onMouseEnter={() => sound.playItemPop()}
              className="flex items-center gap-3 p-2 mc-card-inset hover:bg-[#2c2823] hover:border-[#8DE6A0] transition-all rounded group"
            >
              <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-[#141312] border border-[#38342e]">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover object-center pixelated group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-pixel text-xs text-[#F4F0E8] font-bold truncate group-hover:text-[#8DE6A0] transition-colors">
                  {post.title}
                </h4>
                <p className="text-[11px] text-[#8E8A82] truncate mt-0.5">
                  {post.summary}
                </p>
                <div className="flex items-center gap-2 text-[10px] text-[#8E8A82] mt-1">
                  <span>{post.publishedAt}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
