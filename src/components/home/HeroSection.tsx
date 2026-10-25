"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sound } from "@/lib/soundService";
import HangingSigns from "./HangingSigns";

export default function HeroSection() {
  const handleActionClick = () => {
    sound.playWoodClick();
  };

  return (
    <section className="relative w-full rounded-md overflow-hidden mc-panel-wood min-h-[460px] md:min-h-[520px] flex items-center justify-between p-4 md:p-8 lg:p-12 mb-6">
      {/* Background Twilight Forest Wallpaper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Minecraft Twilight Forest Landscape"
          fill
          priority
          className="object-cover object-center pixelated brightness-90"
        />
        {/* Atmospheric Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101e37]/90 via-[#101e37]/70 to-[#101e37]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#101e37] via-transparent to-black/30"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Side: Character on Cliff + Typography */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-2xl text-center md:text-left">
          {/* Seated Character Sprite with Glow */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 flex-shrink-0 group">
            <div className="absolute -inset-1 rounded-full bg-[#f5c66b]/20 blur-md group-hover:bg-[#f5c66b]/35 transition-all"></div>
            <div className="relative w-full h-full rounded border-2 border-[#493421] shadow-2xl overflow-hidden mc-card-inset bg-[#141312]">
              <Image
                src="/images/hero/character.jpg"
                alt="Manish sitting on cliff with glowing lantern"
                fill
                className="object-cover object-center pixelated"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="space-y-2">
            <p className="font-pixel text-sm md:text-base text-[#F4F0E8] tracking-wider drop-shadow-md">
              Hey, I&apos;m
            </p>
            <h1 className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-bold text-[#36C653] tracking-wide"
                style={{
                  textShadow: "3px 3px 0px #1e7a33, 5px 5px 0px #141312, 0 0 15px rgba(54,198,83,0.4)"
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
