import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HomeStatsBar from "@/components/home/HomeStatsBar";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col space-y-6">
      {/* 1. Panoramic Twilight Hero (Spawn Point) */}
      <HeroSection />

      {/* 2. 4-Box Player Stats HUD */}
      <HomeStatsBar />
    </div>
  );
}
