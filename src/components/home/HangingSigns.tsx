"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { useLighting } from "@/context/LightingContext";

import { BrandIcon } from "@/components/ui/BrandIcons";

interface SignItem {
  iconId: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

const SIGNS: SignItem[] = [
  { iconId: "github", label: "GitHub Profile", href: "https://github.com/manish-3d", isExternal: true },
  { iconId: "leetcode", label: "LeetCode Profile", href: "https://leetcode.com/u/manixshsg/", isExternal: true },
  { iconId: "linkedin", label: "LinkedIn Profile", href: "https://www.linkedin.com/in/manish-kumar-85904b3a2/", isExternal: true },
  { iconId: "x", label: "X / Twitter", href: "https://x.com/realDijkstra", isExternal: true },
  { iconId: "resume", label: "View Resume", href: "/resume", isExternal: false },
];

export default function HangingSigns() {
  const { lights, toggleLight } = useLighting();
  const isTorchesLit = lights.signTorches;

  const handleClick = () => {
    sound.playWoodClick();
  };

  const handleTorchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleLight("signTorches");
  };

  return (
    <div className="mc-sway-container flex flex-col items-center relative">
      {/* Top Iron Anchor Chains with Optional Wall Torches */}
      <div className="flex justify-between w-52 px-4 -mb-1 z-10 relative">
        {/* Left Chain & Torch */}
        <div
          onClick={handleTorchClick}
          title={isTorchesLit ? "🔥 Sign Torch ON (Click to extinguish)" : "Sign Torch OFF (Click to ignite)"}
          className="flex flex-col items-center cursor-pointer group/torch"
        >
          {isTorchesLit ? (
            <div className="relative -mb-1">
              <div
                className="w-2.5 h-3 bg-gradient-to-t from-[#ff8800] via-[#ffcc00] to-white rounded-xs shadow-[0_0_8px_#ff9900]"
                style={{ animation: "mc-candle-flicker 2.1s ease-in-out infinite" }}
              />
              <div className="w-1.5 h-2.5 bg-[#493421] border border-[#2b1e13] mx-auto" />
            </div>
          ) : (
            <div className="w-1.5 h-2 bg-[#2b1e13] -mb-0.5" />
          )}
          <div className="w-1.5 h-3 bg-neutral-400 border border-neutral-700 shadow-sm"></div>
          <div className="w-1.5 h-3 bg-neutral-300 border border-neutral-700 -mt-0.5 shadow-sm"></div>
        </div>

        {/* Right Chain & Torch */}
        <div
          onClick={handleTorchClick}
          title={isTorchesLit ? "🔥 Sign Torch ON (Click to extinguish)" : "Sign Torch OFF (Click to ignite)"}
          className="flex flex-col items-center cursor-pointer group/torch"
        >
          {isTorchesLit ? (
            <div className="relative -mb-1">
              <div
                className="w-2.5 h-3 bg-gradient-to-t from-[#ff8800] via-[#ffcc00] to-white rounded-xs shadow-[0_0_8px_#ff9900]"
                style={{ animation: "mc-candle-flicker 2.5s ease-in-out infinite 0.3s" }}
              />
              <div className="w-1.5 h-2.5 bg-[#493421] border border-[#2b1e13] mx-auto" />
            </div>
          ) : (
            <div className="w-1.5 h-2 bg-[#2b1e13] -mb-0.5" />
          )}
          <div className="w-1.5 h-3 bg-neutral-400 border border-neutral-700 shadow-sm"></div>
          <div className="w-1.5 h-3 bg-neutral-300 border border-neutral-700 -mt-0.5 shadow-sm"></div>
        </div>
      </div>

      {/* Signs Stack */}
      <div className="flex flex-col items-center space-y-2">
        {SIGNS.map((sign, index) => {
          const content = (
            <div className="relative group">
              <div className="w-52 md:w-56 py-2 px-3.5 bg-[#493421] hover:bg-[#5c4228] border-2 border-[#30251d] hover:border-[#f5c66b] rounded shadow-md transition-all duration-150 transform hover:translate-x-1 flex items-center justify-between text-left">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <BrandIcon id={sign.iconId} size={18} className="text-[#F4F0E8] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="font-pixel text-xs text-[#F4F0E8] font-bold tracking-wide group-hover:text-[#F5C66B] transition-colors">
                    {sign.label}
                  </span>
                </div>
                <span className="text-[#8E8A82] group-hover:text-[#36C653] font-bold text-xs transition-colors">&rarr;</span>
              </div>
            </div>
          );

          return (
            <React.Fragment key={sign.label}>
              {index > 0 && (
                <div className="flex justify-between w-44 px-6 -my-1.5 z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-1.5 h-2.5 bg-neutral-300 border border-neutral-600 shadow-sm"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-1.5 h-2.5 bg-neutral-300 border border-neutral-600 shadow-sm"></div>
                  </div>
                </div>
              )}
              {sign.isExternal ? (
                <a
                  href={sign.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClick}
                >
                  {content}
                </a>
              ) : (
                <Link href={sign.href} onClick={handleClick}>
                  {content}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
