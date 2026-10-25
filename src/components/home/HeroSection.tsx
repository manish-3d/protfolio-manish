"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sound } from "@/lib/soundService";
import { useLighting } from "@/context/LightingContext";
import HangingSigns from "./HangingSigns";
import LiveWaterfall from "./live/LiveWaterfall";
import LiveCabin from "./live/LiveCabin";
import LiveAtmosphere from "./live/LiveAtmosphere";
import RedstoneLightingControls from "./live/RedstoneLightingControls";

export default function HeroSection() {
  const { lights, toggleLight } = useLighting();

  const handleActionClick = () => {
    sound.playWoodClick();
  };

  const handleLanternClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLight("lanternLight");
  };

  const isLanternLit = lights.lanternLight;

  return (
    <section className="relative w-full rounded-md overflow-hidden mc-panel-wood min-h-[480px] md:min-h-[540px] flex items-center justify-between p-4 md:p-8 lg:p-12 mb-6">
      {/* Background Twilight Forest Wallpaper with Live Animations */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Minecraft Twilight Forest Landscape"
          fill
          priority
          className="object-cover object-center pixelated brightness-100"
        />

        {/* 1. Live Waterfall Animation Layer */}
        <LiveWaterfall />

        {/* 2. Live Cabin Windows, Porch & Chimney Smoke */}
        <LiveCabin />

        {/* 3. Live Stars, Shooting Star & Fireflies Atmosphere */}
        <LiveAtmosphere />

        {/* Warm Minecraft Night Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a07]/80 via-[#0c0a07]/40 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#100d08]/90 via-transparent to-transparent pointer-events-none"></div>

        {/* Character Lantern Dynamic Radial Glow */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
            isLanternLit ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "radial-gradient(ellipse 550px 420px at 22% 65%, rgba(245,198,107,0.22) 0%, rgba(230,140,40,0.08) 50%, transparent 75%)",
          }}
        />
      </div>

      {/* Floating Redstone Switchboard Controller (Top-Right of Hero) */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
        <RedstoneLightingControls />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-6 sm:pt-0">
        {/* Left Side: Character on Cliff + Typography */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-2xl text-center md:text-left">
          {/* Seated Character Sprite with Dynamic Lantern Light */}
          <div
            onClick={handleLanternClick}
            title={
              isLanternLit
                ? "🏮 Lantern is LIT (Click to extinguish)"
                : "🔥 Lantern is UNLIT (Click to ignite)"
            }
            className="relative w-36 h-36 md:w-44 md:h-44 flex-shrink-0 group cursor-pointer"
          >
            {/* Outer Warm Lantern Halo when lit */}
            <div
              className={`absolute -inset-2 rounded-full transition-all duration-500 ${
                isLanternLit
                  ? "bg-[#f5c66b]/30 blur-lg group-hover:bg-[#f5c66b]/50"
                  : "bg-transparent opacity-0"
              }`}
              style={{
                animation: isLanternLit
                  ? "mc-lantern-pulse 2.8s ease-in-out infinite"
                  : "none",
              }}
            />

            <div className="relative w-full h-full rounded border-2 border-[#493421] shadow-2xl overflow-hidden mc-card-inset bg-[#141312]">
              <Image
                src="/images/hero/character.jpg"
                alt="Manish sitting on cliff with glowing lantern"
                fill
                className={`object-cover object-center pixelated transition-all duration-500 ${
                  isLanternLit
                    ? "brightness-105"
                    : "brightness-75 contrast-110 saturate-75"
                }`}
              />

              {/* Lantern Wick Flame Highlight (sitting right of character) */}
              {isLanternLit ? (
                <div
                  className="absolute rounded-full bg-white shadow-[0_0_12px_#ffba3b]"
                  style={{
                    right: "26%",
                    bottom: "34%",
                    width: "8px",
                    height: "10px",
                    background:
                      "radial-gradient(circle, #ffffff 10%, #ffe066 40%, #ff9900 80%)",
                    animation: "mc-candle-flicker 2.2s ease-in-out infinite",
                  }}
                />
              ) : (
                <div
                  className="absolute bg-[#181512]/80 rounded-xs"
                  style={{
                    right: "25%",
                    bottom: "33%",
                    width: "10px",
                    height: "12px",
                  }}
                />
              )}

              {/* Interactive Tooltip Badge */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <span className="font-pixel text-[9px] text-[#f5c66b] bg-[#141312]/95 border border-[#6b4d32] px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                  🏮 {isLanternLit ? "Lantern: ON" : "Lantern: OFF"} (Click)
                </span>
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-2">
            <p className="font-pixel text-sm md:text-base text-[#F4F0E8] tracking-wider drop-shadow-md">
              Hey, I&apos;m
            </p>
            <h1
              className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold text-[#36C653] tracking-wide"
              style={{
                textShadow:
                  "3px 3px 0px #1e7a33, 5px 5px 0px #141312, 0 0 15px rgba(54,198,83,0.4)",
              }}
            >
              Manish Kumar
            </h1>
            <p className="font-pixel text-xs sm:text-sm text-[#F5C66B] font-semibold tracking-wide drop-shadow">
              B.Tech CSE (IoT) @ NIET
            </p>
            <p className="text-xs sm:text-sm text-[#D2CBBF] max-w-md leading-relaxed drop-shadow">
              Building real projects, learning in public, and creating cool stuff.
            </p>

            {/* CTA Buttons Row */}
            <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                href="/projects"
                onClick={handleActionClick}
                className="mc-btn-primary text-xs sm:text-sm py-2 px-5"
              >
                <span>➕</span>
                <span>View My Work &rarr;</span>
              </Link>
              <Link
                href="/blog"
                onClick={handleActionClick}
                className="mc-btn-secondary text-xs sm:text-sm py-2 px-5"
              >
                <span>📖</span>
                <span>Read My Blog</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Hanging Signs with Iron Chains */}
        <div className="hidden md:flex flex-shrink-0 pt-2 lg:pt-0">
          <HangingSigns />
        </div>
      </div>
    </section>
  );
}
