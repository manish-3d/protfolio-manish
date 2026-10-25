"use client";

import React from "react";
import { useLighting } from "@/context/LightingContext";

export default function LiveCabin() {
  const { lights, toggleLight } = useLighting();
  const isCabinLit = lights.cabinLights;
  const isSmoking = lights.chimneySmoke;

  const handleCabinClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLight("cabinLights");
  };

  const handleSmokeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLight("chimneySmoke");
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-6">
      {/* 1. Cabin Chimney Smoke Puffs */}
      <div
        onClick={handleSmokeClick}
        title={isSmoking ? "💨 Chimney Smoke (Click to extinguish fire)" : "🔥 Chimney is cold (Click to ignite fireplace)"}
        className="absolute pointer-events-auto cursor-pointer group"
        style={{
          left: "67.8%",
          top: "46.2%",
          width: "3%",
          height: "6%",
        }}
      >
        {isSmoking && (
          <div className="relative w-full h-full">
            {/* Smoke Puff 1 */}
            <div
              className="absolute bg-[#e6ded5]/70 rounded-sm filter blur-[0.6px]"
              style={{
                width: "9px",
                height: "9px",
                left: "20%",
                top: "10%",
                animation: "mc-smoke-puff-1 2.8s cubic-bezier(0.2, 0.7, 0.5, 1) infinite",
              }}
            />
            {/* Smoke Puff 2 */}
            <div
              className="absolute bg-[#c7bcb0]/65 rounded-sm filter blur-[0.8px]"
              style={{
                width: "11px",
                height: "11px",
                left: "35%",
                top: "15%",
                animation: "mc-smoke-puff-2 3.4s cubic-bezier(0.2, 0.7, 0.5, 1) infinite 1.1s",
              }}
            />
            {/* Smoke Puff 3 */}
            <div
              className="absolute bg-[#ded6cc]/60 rounded-sm filter blur-[0.6px]"
              style={{
                width: "8px",
                height: "8px",
                left: "15%",
                top: "20%",
                animation: "mc-smoke-puff-1 3.1s cubic-bezier(0.2, 0.7, 0.5, 1) infinite 1.9s",
              }}
            />
          </div>
        )}
      </div>

      {/* 2. Cabin Windows & Porch Lantern Lights Container */}
      <div
        onClick={handleCabinClick}
        title={isCabinLit ? "🏮 Cabin Lights are ON (Click to turn OFF)" : "💡 Cabin is DARK (Click to turn ON)"}
        className="absolute pointer-events-auto cursor-pointer group"
        style={{
          left: "63%",
          top: "56%",
          width: "12%",
          height: "28%",
        }}
      >
        {/* Ambient Warm Spill Light Cone onto Porch & Trees */}
        <div
          className={`absolute transition-opacity duration-700 pointer-events-none ${
            isCabinLit ? "opacity-100" : "opacity-0"
          }`}
          style={{
            inset: "-20% -15%",
            background:
              "radial-gradient(ellipse at 45% 65%, rgba(255, 185, 60, 0.32) 0%, rgba(230, 140, 30, 0.15) 45%, transparent 75%)",
            filter: "blur(12px)",
          }}
        />

        {/* Upper Floor Bedroom Window Glow */}
        <div
          className={`absolute rounded-sm transition-all duration-500 ${
            isCabinLit
              ? "bg-[#ffc84a] shadow-[0_0_14px_rgba(255,190,50,0.85)]"
              : "bg-[#181410] border border-[#2b221a]/60 opacity-80"
          }`}
          style={{
            left: "48%",
            top: "14%",
            width: "16%",
            height: "15%",
            animation: isCabinLit ? "mc-candle-flicker 3.2s ease-in-out infinite" : "none",
          }}
        >
          {isCabinLit && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-[#ffad26] to-[#e67300] opacity-90 rounded-sm" />
          )}
        </div>

        {/* Ground Floor Windows Glow (Left pane) */}
        <div
          className={`absolute rounded-sm transition-all duration-500 ${
            isCabinLit
              ? "bg-[#ffb636] shadow-[0_0_18px_rgba(255,175,40,0.9)]"
              : "bg-[#181410] border border-[#2b221a]/60 opacity-80"
          }`}
          style={{
            left: "30%",
            top: "47%",
            width: "15%",
            height: "18%",
            animation: isCabinLit ? "mc-candle-flicker 2.7s ease-in-out infinite 0.4s" : "none",
          }}
        >
          {isCabinLit && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-[#ffa81e] to-[#cc6000] opacity-90 rounded-sm" />
          )}
        </div>

        {/* Ground Floor Windows Glow (Right pane) */}
        <div
          className={`absolute rounded-sm transition-all duration-500 ${
            isCabinLit
              ? "bg-[#ffb636] shadow-[0_0_18px_rgba(255,175,40,0.9)]"
              : "bg-[#181410] border border-[#2b221a]/60 opacity-80"
          }`}
          style={{
            left: "52%",
            top: "47%",
            width: "16%",
            height: "18%",
            animation: isCabinLit ? "mc-candle-flicker 2.9s ease-in-out infinite 0.8s" : "none",
          }}
        >
          {isCabinLit && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-[#ffa81e] to-[#cc6000] opacity-90 rounded-sm" />
          )}
        </div>

        {/* Front Porch Entry Lantern */}
        <div
          className={`absolute rounded-xs transition-all duration-500 ${
            isCabinLit
              ? "bg-[#ffe082] shadow-[0_0_12px_rgba(255,210,80,0.95)]"
              : "bg-[#221c16] border border-[#3d3023]"
          }`}
          style={{
            left: "12%",
            top: "54%",
            width: "8%",
            height: "10%",
            animation: isCabinLit ? "mc-candle-flicker 2.4s ease-in-out infinite 0.2s" : "none",
          }}
        >
          {isCabinLit && (
            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#ffba3b] to-[#e66a00] rounded-xs" />
          )}
        </div>

        {/* Interactive Hover Tooltip Cue */}
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none top-2 left-1/2 -translate-x-1/2">
          <span className="font-pixel text-[10px] text-[#f5c66b] bg-[#141312]/95 border border-[#6b4d32] px-2 py-0.5 rounded shadow whitespace-nowrap">
            🏮 {isCabinLit ? "Cabin: ON (Click to turn off)" : "Cabin: OFF (Click to turn on)"}
          </span>
        </div>
      </div>
    </div>
  );
}
