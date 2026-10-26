"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sound } from "@/lib/soundService";
import { PROFILE_DATA } from "@/data/portfolioData";

export default function AboutMePanel() {
  return (
    <div className="mc-panel-wood p-4 md:p-5 bg-[#1c1b19] lg:w-80 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#38342e]">
          <span className="text-xl">🧑</span>
          <h2 className="font-pixel text-sm md:text-base text-[#F4F0E8] font-bold tracking-wide">
            About Me
          </h2>
        </div>

        {/* Avatar + Bio Snippet */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative w-14 h-14 rounded overflow-hidden flex-shrink-0 mc-card-inset border border-[#493421] bg-[#141312]">
            <Image
              src="/images/hero/avatar.jpg"
              alt="Manish profile avatar"
              fill
              className="object-cover object-top pixelated"
            />
          </div>
          <p className="text-xs text-[#D2CBBF] leading-relaxed line-clamp-4">
            {PROFILE_DATA.bio}
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="space-y-2 my-3">
          <div className="mc-card-inset p-2 bg-[#141312] flex items-center justify-between text-xs">
            <span className="text-[#8E8A82]">Branch:</span>
            <span className="font-pixel text-[#36C653] font-bold">B.Tech CSE @ NIET</span>
          </div>
          <div className="mc-card-inset p-2 bg-[#141312] flex items-center justify-between text-xs">
            <span className="text-[#8E8A82]">Focus:</span>
            <span className="font-pixel text-[#8DE6A0] font-bold">Full Stack Web</span>
          </div>
          <div className="mc-card-inset p-2 bg-[#141312] flex items-center justify-between text-xs">
            <span className="text-[#8E8A82]">Status:</span>
            <span className="font-pixel text-[#F5C66B] font-bold">Available for Roles</span>
          </div>
        </div>
      </div>

      {/* Button Action */}
      <Link
        href="/about"
        onClick={() => sound.playWoodClick()}
        className="mc-btn-primary w-full text-center justify-center text-xs py-2 mt-2"
      >
        <span>More About Me &rarr;</span>
      </Link>
    </div>
  );
}
