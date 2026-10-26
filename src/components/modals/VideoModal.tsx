"use client";

import React, { useEffect } from "react";
import { sound } from "@/lib/soundService";
import { Film } from "@/data/portfolioData";
import { X, ExternalLink } from "lucide-react";

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

  // Decide iframe source: prioritize htmlUrl or /films/locus-launch.html for HTML films
  const videoSrc = film.htmlUrl || (film.videoUrl && film.videoUrl.endsWith(".html") ? film.videoUrl : "/films/locus-launch.html");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-150">
      <div className="mc-panel-wood max-w-5xl w-full bg-[#1c1b19] p-3 sm:p-5 shadow-2xl relative space-y-3 border-2 border-[#493421]">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-[#38342e]">
          <div>
            <h2 className="font-pixel text-base sm:text-lg text-[#F4F0E8] font-bold">
              {film.title}
            </h2>
            <p className="text-xs text-[#8E8A82]">
              {film.subtitle} &bull; {film.duration}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={videoSrc}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playWoodClick()}
              className="mc-card-inset px-2.5 py-1 text-xs text-[#38bdf8] hover:underline flex items-center gap-1"
              title="Open full window in new tab"
            >
              <span>Fullscreen Tab</span>
              <ExternalLink size={12} />
            </a>

            <button
              onClick={() => {
                sound.playWoodClick();
                onClose();
              }}
              className="p-1.5 mc-card-inset hover:border-[#ef4444] text-[#C8C0B3] hover:text-[#ef4444] transition-colors"
              aria-label="Close video player"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Video Player Box: Embeds the HTML Launch Film Directly Inside */}
        <div className="relative aspect-video w-full rounded overflow-hidden mc-card-inset bg-black border-2 border-[#493421] shadow-inner">
          <iframe
            src={videoSrc}
            title={film.title}
            className="w-full h-full border-0 absolute inset-0"
            allow="fullscreen; autoplay; audio; accelerometer; gyroscope"
            allowFullScreen
          />
        </div>

        {/* Footer Lore Status */}
        <div className="flex items-center justify-between pt-1 text-[11px] text-[#8E8A82] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-[#36C653] animate-pulse" />
            <span>Interactive WebGL 3D Villa &bull; Web Audio Synthesizer</span>
          </div>
          <span>Press ESC or ✕ to exit</span>
        </div>
      </div>
    </div>
  );
}
