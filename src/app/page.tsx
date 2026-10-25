import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HomeStatsBar from "@/components/home/HomeStatsBar";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutMePanel from "@/components/home/AboutMePanel";
import LatestBlogPanel from "@/components/home/LatestBlogPanel";
import LatestTweetsPanel from "@/components/home/LatestTweetsPanel";
import FilmsPanel from "@/components/home/FilmsPanel";
import TechStackPanel from "@/components/home/TechStackPanel";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col space-y-6">
      {/* 1. Panoramic Twilight Hero */}
      <HeroSection />

      {/* 2. 4-Box Quick Stats Shelf */}
      <HomeStatsBar />

      {/* 3. Middle Section: Featured Projects (3/4) + About Me Sidebar (1/4) */}
      <section className="w-full flex flex-col lg:flex-row gap-4 items-stretch">
        <FeaturedProjects />
        <AboutMePanel />
      </section>

      {/* 4. Lower Balanced 4-Column Dashboard */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        <LatestBlogPanel />
        <LatestTweetsPanel />
        <FilmsPanel />
        <TechStackPanel />
      </section>
    </div>
  );
}
