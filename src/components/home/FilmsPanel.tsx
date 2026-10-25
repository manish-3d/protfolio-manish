"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sound } from "@/lib/soundService";
import { FILMS } from "@/data/portfolioData";
import { Play } from "lucide-react";

export default function FilmsPanel() {
  const latest = FILMS.slice(0, 3);

  return (
    <div className="mc-panel-wood p-4 bg-[#1c1b19] flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#38342e]">
          <div className="flex items-center gap-2">
            <span className="text-base">📽️</span>
            <h3 className="font-pixel text-xs md:text-sm text-[#F4F0E8] font-bold tracking-wide">
              Films / Videos
            </h3>
          </div>
          <Link
            href="/films"
            onClick={() => sound.playWoodClick()}
            className="text-[11px] text-[#C8C0B3] hover:text-[#8DE6A0] font-pixel transition-colors"
          >
            View All &rarr;
          </Link>
        </div>

        {/* 3 Video Cards */}
        <div className="space-y-2.5">
          {latest.map((film) => (
            <Link
              key={film.slug}
              href="/films"
              onClick={() => sound.playWoodClick()}
              onMouseEnter={() => sound.playItemPop()}
              className="flex items-center gap-3 p-2 mc-card-inset hover:bg-[#2c2823] hover:border-[#f5c66b] transition-all rounded group"
            >
              {/* Thumbnail with Play Overlay */}
              <div className="relative w-16 h-12 flex-shrink-0 rounded overflow-hidden bg-[#141312] border border-[#38342e]">
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  className="object-cover object-center pixelated group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#f5c66b] text-[#141312] flex items-center justify-center shadow">
                    <Play size={10} fill="#141312" />
                  </div>
                </div>
              </div>

              {/* Title & Duration */}
              <div className="min-w-0 flex-1">
                <h4 className="font-pixel text-xs text-[#F4F0E8] font-bold truncate group-hover:text-[#F5C66B] transition-colors">
                  {film.title}
                </h4>
                <p className="text-[11px] text-[#8E8A82] truncate mt-0.5">
                  {film.subtitle}
                </p>
                <div className="mt-1">
                  <span className="mc-tag text-[10px] py-0 px-1.5 border-[#f5c66b]/40 text-[#f5c66b]">
                    ⏱️ {film.duration}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
