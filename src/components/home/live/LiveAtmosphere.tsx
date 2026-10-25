"use client";

import React from "react";
import { useLighting } from "@/context/LightingContext";

const STARS = [
  { left: "6%", top: "8%", size: 3, delay: "0.2s" },
  { left: "14%", top: "14%", size: 2, delay: "1.4s" },
  { left: "22%", top: "6%", size: 4, delay: "0.7s" },
  { left: "28%", top: "19%", size: 2, delay: "2.1s" },
  { left: "35%", top: "11%", size: 3, delay: "0.5s" },
  { left: "42%", top: "7%", size: 2, delay: "1.8s" },
  { left: "54%", top: "15%", size: 3, delay: "0.9s" },
  { left: "63%", top: "8%", size: 4, delay: "1.2s" },
  { left: "71%", top: "18%", size: 2, delay: "2.4s" },
  { left: "79%", top: "10%", size: 3, delay: "0.3s" },
  { left: "87%", top: "16%", size: 2, delay: "1.6s" },
  { left: "93%", top: "7%", size: 4, delay: "1.0s" },
  { left: "18%", top: "26%", size: 2, delay: "2.8s" },
  { left: "46%", top: "22%", size: 3, delay: "1.5s" },
  { left: "82%", top: "24%", size: 2, delay: "0.8s" },
];

const FIREFLIES = [
  { left: "32%", top: "68%", color: "#ffd269", size: 4, duration: "4.2s", delay: "0s", floatClass: "mc-firefly-float-1" },
  { left: "44%", top: "54%", color: "#8de6a0", size: 5, duration: "5.1s", delay: "0.8s", floatClass: "mc-firefly-float-2" },
  { left: "56%", top: "62%", color: "#ffdf80", size: 4, duration: "3.8s", delay: "1.4s", floatClass: "mc-firefly-float-1" },
  { left: "61%", top: "80%", color: "#ffd269", size: 3, duration: "4.6s", delay: "0.3s", floatClass: "mc-firefly-float-2" },
  { left: "26%", top: "76%", color: "#8de6a0", size: 4, duration: "5.4s", delay: "2.1s", floatClass: "mc-firefly-float-1" },
  { left: "75%", top: "69%", color: "#ffb443", size: 4, duration: "4.0s", delay: "1.7s", floatClass: "mc-firefly-float-2" },
  { left: "84%", top: "58%", color: "#ffe082", size: 3, duration: "4.9s", delay: "0.9s", floatClass: "mc-firefly-float-1" },
  { left: "41%", top: "82%", color: "#54e680", size: 4, duration: "4.3s", delay: "2.5s", floatClass: "mc-firefly-float-2" },
  { left: "51%", top: "45%", color: "#ffd269", size: 3, duration: "5.8s", delay: "1.1s", floatClass: "mc-firefly-float-1" },
  { left: "19%", top: "60%", color: "#8de6a0", size: 4, duration: "4.5s", delay: "3.0s", floatClass: "mc-firefly-float-2" },
  { left: "89%", top: "78%", color: "#ffb443", size: 3, duration: "5.0s", delay: "1.5s", floatClass: "mc-firefly-float-1" },
  { left: "71%", top: "85%", color: "#ffd269", size: 4, duration: "4.1s", delay: "0.6s", floatClass: "mc-firefly-float-2" },
];

export default function LiveAtmosphere() {
  const { lights } = useLighting();
  const showStars = lights.twinklingStars;
  const showFireflies = lights.fireflies;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-4">
      {/* 1. Twinkling Sky & Shooting Star */}
      {showStars && (
        <div className="absolute inset-0 transition-opacity duration-700">
          {/* Shooting Star */}
          <div
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-cyan-100 to-white filter blur-[0.4px]"
            style={{
              left: "24%",
              top: "12%",
              animation: "mc-shooting-star 11s cubic-bezier(0.1, 0.7, 0.3, 1) infinite",
            }}
          />

          {/* Twinkling Stars */}
          {STARS.map((star, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-xs shadow-[0_0_6px_rgba(255,255,255,0.9)]"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `mc-star-twinkle 2.5s ease-in-out infinite ${star.delay}`,
              }}
            />
          ))}

          {/* Soft Lunar Glow over Crescent Moon */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              left: "21.5%",
              top: "12%",
              width: "48px",
              height: "48px",
              background: "radial-gradient(circle, rgba(220, 240, 255, 0.28) 0%, transparent 70%)",
              filter: "blur(4px)",
            }}
          />
        </div>
      )}

      {/* 2. Floating Bioluminescent Fireflies / Spores */}
      {showFireflies && (
        <div className="absolute inset-0 transition-opacity duration-700">
          {FIREFLIES.map((ff, idx) => (
            <div
              key={idx}
              className={`absolute ${ff.floatClass}`}
              style={{
                left: ff.left,
                top: ff.top,
                animationDuration: ff.duration,
                animationDelay: ff.delay,
              }}
            >
              <div
                className="rounded-full shadow-md"
                style={{
                  width: `${ff.size}px`,
                  height: `${ff.size}px`,
                  backgroundColor: ff.color,
                  boxShadow: `0 0 8px ${ff.color}`,
                  animation: `mc-firefly-glow 2.8s ease-in-out infinite ${ff.delay}`,
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
