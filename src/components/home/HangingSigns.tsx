"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";

interface SignItem {
  icon: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

const SIGNS: SignItem[] = [
  { icon: "⛏️", label: "Build Projects", href: "/projects" },
  { icon: "🪶", label: "Write & Share", href: "/blog" },
  { icon: "📖", label: "Learn & Document", href: "/docs" },
  { icon: "🧭", label: "Open Source", href: "https://github.com", isExternal: true },
  { icon: "📦", label: "Keep Exploring", href: "/stack" },
];

export default function HangingSigns() {
  const handleClick = () => {
    sound.playWoodClick();
  };

  return (
    <div className="mc-sway-container flex flex-col items-center">
      {/* Top Iron Anchor Chains */}
      <div className="flex justify-between w-48 px-6 -mb-1 z-10">
        <div className="flex flex-col items-center">
          <div className="w-1.5 h-3 bg-neutral-400 border border-neutral-700 shadow-sm"></div>
          <div className="w-1.5 h-3 bg-neutral-300 border border-neutral-700 -mt-0.5 shadow-sm"></div>
        </div>
        <div className="flex flex-col items-center">
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
                  <span className="text-base filter drop-shadow">{sign.icon}</span>
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
