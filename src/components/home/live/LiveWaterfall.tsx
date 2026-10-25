"use client";

import React from "react";
import { useLighting } from "@/context/LightingContext";

export default function LiveWaterfall() {
  const { lights, toggleLight } = useLighting();
  const isFlowing = lights.waterfallFlow;

  const handleWaterfallClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLight("waterfallFlow");
  };

  return (
    <div
      onClick={handleWaterfallClick}
      title={isFlowing ? "💧 Waterfall is ACTIVE (Click to Freeze/Pause)" : "❄️ Waterfall is FROZEN (Click to Flow)"}
      className="absolute inset-0 pointer-events-auto cursor-pointer group z-5"
    >
      {/* Upper Waterfall Cascade (Mountain Cliff) */}
      <div
        className={`absolute transition-all duration-700 ${
          isFlowing ? "opacity-90" : "opacity-35 saturate-50 brightness-75"
        }`}
        style={{
          left: "48.2%",
          top: "39%",
          width: "3.4%",
          height: "22%",
          clipPath: "polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)",
        }}
      >
        {/* Animated Water Texture */}
        <div className={`w-full h-full ${isFlowing ? "mc-waterfall-stream" : "bg-[#296496]"}`} />
        {/* Shimmer Highlight */}
        {isFlowing && (
          <div className="absolute inset-0 mc-waterfall-shimmer opacity-70 mix-blend-overlay" />
        )}
      </div>

      {/* Middle Waterfall Drop (Rocky Ledge) */}
      <div
        className={`absolute transition-all duration-700 ${
          isFlowing ? "opacity-95" : "opacity-30 saturate-50"
        }`}
        style={{
          left: "47.8%",
          top: "58%",
          width: "4.2%",
          height: "17%",
          clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className={`w-full h-full ${isFlowing ? "mc-waterfall-stream" : "bg-[#20527c]"}`} />
        {isFlowing && (
          <div className="absolute inset-0 mc-waterfall-shimmer opacity-80" />
        )}
      </div>

      {/* Lower Waterfall Splash & Base Cascade */}
      <div
        className={`absolute transition-all duration-700 ${
          isFlowing ? "opacity-95" : "opacity-30"
        }`}
        style={{
          left: "47.2%",
          top: "72%",
          width: "5.4%",
          height: "14%",
          clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div className={`w-full h-full ${isFlowing ? "mc-waterfall-stream" : "bg-[#19456b]"}`} />
        {isFlowing && (
          <div className="absolute inset-0 mc-waterfall-shimmer opacity-90" />
        )}
      </div>

      {/* Waterfall Pool Splash, Foam & Mist Particles */}
      {isFlowing && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: "45.8%",
            top: "82%",
            width: "8%",
            height: "8%",
          }}
        >
          {/* Animated Water Spray Foam Bubbles */}
          <div
            className="absolute rounded-full bg-cyan-100/90 filter blur-[0.5px]"
            style={{
              width: "12px",
              height: "7px",
              left: "25%",
              top: "15%",
              animation: "mc-splash-bubble 0.85s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full bg-white/85 filter blur-[0.5px]"
            style={{
              width: "16px",
              height: "9px",
              left: "42%",
              top: "22%",
              animation: "mc-splash-bubble 0.7s ease-in-out infinite 0.2s",
            }}
          />
          <div
            className="absolute rounded-full bg-cyan-200/80 filter blur-[0.5px]"
            style={{
              width: "10px",
              height: "6px",
              left: "60%",
              top: "10%",
              animation: "mc-splash-bubble 0.9s ease-in-out infinite 0.4s",
            }}
          />

          {/* Water Surface Ripples */}
          <div
            className="absolute border border-cyan-300/60 rounded-full"
            style={{
              inset: "15% 10%",
              animation: "mc-water-ripple 1.8s cubic-bezier(0.1, 0.8, 0.3, 1) infinite",
            }}
          />
          <div
            className="absolute border border-cyan-200/50 rounded-full"
            style={{
              inset: "10% 5%",
              animation: "mc-water-ripple 1.8s cubic-bezier(0.1, 0.8, 0.3, 1) infinite 0.9s",
            }}
          />

          {/* Rising Mist Haze */}
          <div
            className="absolute rounded-full bg-gradient-to-t from-cyan-400/25 to-transparent filter blur-md"
            style={{
              width: "120%",
              height: "140%",
              left: "-10%",
              top: "-40%",
            }}
          />
        </div>
      )}

      {/* Subtle Hover Cue for interactivity */}
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{ left: "48%", top: "42%" }}
      >
        <span className="font-pixel text-[10px] text-cyan-300 bg-[#141312]/90 border border-cyan-500/60 px-2 py-0.5 rounded shadow whitespace-nowrap">
          💧 {isFlowing ? "Flowing (Click)" : "Frozen (Click)"}
        </span>
      </div>
    </div>
  );
}
