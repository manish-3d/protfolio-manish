"use client";

import React, { useState } from "react";
import Image from "next/image";
import { sound } from "@/lib/soundService";
import { FILMS, Film } from "@/data/portfolioData";
import VideoModal from "@/components/modals/VideoModal";
import { Play } from "lucide-react";

type FilmCategory = "All" | "Project Demos";

export default function FilmsPage() {
  const [selectedCategory, setSelectedCategory] = useState<FilmCategory>("All");
  const [activeFilm, setActiveFilm] = useState<Film | null>(null);
  const [inlinePlaying, setInlinePlaying] = useState<boolean>(true);

  const filteredFilms = FILMS.filter((f) => {
    return selectedCategory === "All" || f.category === selectedCategory;
  });

  const featuredFilm = FILMS.find((f) => f.featured) || FILMS[0];
  const secondaryFilms = filteredFilms.filter((f) => f.slug !== featuredFilm.slug);

  const handleCategorySelect = (cat: FilmCategory) => {
    sound.playWoodClick();
    setSelectedCategory(cat);
  };

  const handleOpenVideo = (film: Film) => {
    sound.playWoodClick();
    setActiveFilm(film);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Header Panel */}
      <div className="mc-panel-wood p-5 md:p-6 bg-[#1c1b19]">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📽️</span>
          <h1 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
            Films
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8E8A82] mt-1">
          Full-stack project walkthroughs and architectural demos.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#38342e]">
          {(["All", "Project Demos"] as FilmCategory[]).map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 py-1 font-pixel text-xs rounded transition-all ${
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

      {/* Featured Large Video Player / Card */}
      {featuredFilm && (
        <div className="mc-panel-wood p-4 sm:p-6 bg-[#1c1b19] space-y-4 rounded">
          <div className="flex items-center justify-between pb-2 border-b border-[#38342e]">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#36C653] animate-pulse" />
              <span className="font-pixel text-xs text-[#8DE6A0] tracking-wider uppercase">
                Featured Cinema Screen &bull; {featuredFilm.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playWoodClick();
                  setInlinePlaying(!inlinePlaying);
                }}
                className="mc-card-inset px-2.5 py-1 text-xs text-[#C8C0B3] hover:text-[#F4F0E8]"
              >
                {inlinePlaying ? "Show Poster" : "Play Screen"}
              </button>
              {featuredFilm.htmlUrl && (
                <a
                  href={featuredFilm.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playWoodClick()}
                  className="mc-card-inset px-2.5 py-1 text-xs text-[#38bdf8] hover:underline"
                >
                  Fullscreen ↗
                </a>
              )}
            </div>
          </div>

          {/* Player Viewport */}
          <div className="relative w-full aspect-video rounded overflow-hidden mc-card-inset border-2 border-[#493421] bg-black">
            {inlinePlaying && (featuredFilm.htmlUrl || featuredFilm.isHtmlFilm) ? (
              <iframe
                src={featuredFilm.htmlUrl || featuredFilm.videoUrl}
                title={featuredFilm.title}
                className="w-full h-full border-0"
                allow="fullscreen; autoplay; audio"
              />
            ) : (
              <div
                onClick={() => {
                  sound.playWoodClick();
                  setInlinePlaying(true);
                }}
                className="relative w-full h-full cursor-pointer group"
              >
                <Image
                  src={featuredFilm.thumbnail}
                  alt={featuredFilm.title}
                  fill
                  priority
                  className="object-cover object-center pixelated group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f5c66b] text-[#141312] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play size={28} fill="#141312" className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-[#141312]/90 border border-[#f5c66b]/40 px-3 py-1.5 rounded">
                  <p className="font-pixel text-xs text-[#f5c66b]">
                    Click to Play Interactive 3D Launch Film
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div>
              <h2 className="font-pixel text-xl sm:text-2xl text-[#F4F0E8] font-bold">
                {featuredFilm.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#8E8A82] mt-0.5">
                {featuredFilm.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleOpenVideo(featuredFilm)}
                className="mc-btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
              >
                <Play size={13} fill="#141312" />
                <span>Theater Modal</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Secondary Video Cards Grid (2 Columns) */}
      {secondaryFilms.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryFilms.map((film) => (
            <div
              key={film.slug}
              onClick={() => handleOpenVideo(film)}
              onMouseEnter={() => sound.playItemPop()}
              className="mc-panel-wood p-4 bg-[#1c1b19] hover:border-[#f5c66b] transition-all cursor-pointer group rounded flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-44 rounded overflow-hidden mc-card-inset border border-[#38342e] bg-[#141312] mb-3">
                  <Image
                    src={film.thumbnail}
                    alt={film.title}
                    fill
                    className="object-cover object-center pixelated group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-[#f5c66b] text-[#141312] flex items-center justify-center shadow">
                      <Play size={16} fill="#141312" className="ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="mc-tag text-[10px] bg-[#141312]/90 border-[#f5c66b]/40 text-[#f5c66b] font-bold">
                      ⏱️ {film.duration}
                    </span>
                  </div>
                </div>

                <h3 className="font-pixel text-sm text-[#F4F0E8] font-bold group-hover:text-[#F5C66B] transition-colors">
                  {film.title}
                </h3>
                <p className="text-xs text-[#8E8A82] mt-0.5">
                  {film.subtitle}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#38342e] flex items-center justify-between">
                <span className="text-[11px] text-[#8E8A82]">
                  {film.category}
                </span>
                <span className="font-pixel text-xs text-[#36C653] group-hover:translate-x-1 transition-transform">
                  Watch &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video Modal Player */}
      <VideoModal film={activeFilm} onClose={() => setActiveFilm(null)} />
    </div>
  );
}
