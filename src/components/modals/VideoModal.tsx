"use client";

import React, { useEffect } from "react";
import { sound } from "@/lib/soundService";
import { Film } from "@/data/portfolioData";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  film: Film | null;
  onClose: () => void;
}

export default function VideoModal({ film, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        sound.playWoodClick();
        onClose();
      }
    };
    if (film) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="mc-panel-wood max-w-3xl w-full bg-[#1c1b19] p-4 sm:p-6 shadow-2xl relative space-y-4">
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playWoodClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 mc-card-inset hover:border-[#ef4444] text-[#C8C0B3] hover:text-[#ef4444] transition-colors"
          aria-label="Close video player"
        >
          <X size={18} />
        </button>

        {/* Video Header */}
        <div>
          <h2 className="font-pixel text-lg sm:text-xl text-[#F4F0E8] font-bold">
            {film.title}
          </h2>
          <p className="text-xs text-[#8E8A82]">
            {film.subtitle} • {film.duration}
          </p>
        </div>

        {/* Embedded Video Player Simulator / Responsive Iframe */}
        <div className="relative aspect-video w-full rounded overflow-hidden mc-card-inset bg-black flex items-center justify-center border border-[#38342e]">
          <div className="text-center space-y-3 p-6">
            <div className="w-16 h-16 rounded-full bg-[#36C653] text-[#141312] flex items-center justify-center mx-auto shadow-lg animate-pulse">
              <Play size={24} fill="#141312" />
            </div>
            <p className="font-pixel text-xs text-[#F4F0E8]">
              Playing Demonstration Video
            </p>
            <p className="text-[11px] text-[#8E8A82] max-w-md">
              High-definition architecture walkthrough and code trace for {film.title}.
            </p>
            <a
              href={film.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playWoodClick()}
              className="mc-btn-primary text-xs py-1.5 px-4 inline-flex items-center gap-1.5 mt-2"
            >
              <span>Open External High-Res Stream</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
