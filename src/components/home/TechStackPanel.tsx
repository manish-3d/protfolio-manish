"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { STACK_ITEMS, StackItem } from "@/data/portfolioData";
import { BrandIcon } from "@/components/ui/BrandIcons";

export default function TechStackPanel() {
  const [activeTooltip, setActiveTooltip] = useState<StackItem | null>(null);

  const handleMouseEnter = (item: StackItem) => {
    sound.playItemPop();
    setActiveTooltip(item);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="mc-panel-wood p-4 bg-[#1c1b19] flex flex-col justify-between h-full relative">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#38342e]">
          <div className="flex items-center gap-2">
            <span className="text-base">🧰</span>
            <h3 className="font-pixel text-xs md:text-sm text-[#F4F0E8] font-bold tracking-wide">
              Tech Stack
            </h3>
          </div>
          <Link
            href="/stack"
            onClick={() => sound.playWoodClick()}
            className="text-[11px] text-[#C8C0B3] hover:text-[#8DE6A0] font-pixel transition-colors"
          >
            Inventory &rarr;
          </Link>
        </div>

        {/* Inventory Matrix (4 columns x 3 rows) */}
        <div className="grid grid-cols-4 gap-2 py-1">
          {STACK_ITEMS.slice(0, 12).map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              className="mc-inventory-slot h-12 rounded cursor-pointer group flex items-center justify-center p-2"
            >
              <BrandIcon
                id={item.id}
                size={22}
                className="transition-transform group-hover:scale-110 filter drop-shadow"
              />
              <span className="sr-only">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Helper caption or active tooltip */}
      <div className="mt-3 pt-2 border-t border-[#38342e]/60 min-h-[46px] flex items-center justify-center">
        {activeTooltip ? (
          <div className="w-full text-center animate-in fade-in duration-100">
            <p className="font-pixel text-xs text-[#F5C66B] font-bold">
              {activeTooltip.name}
            </p>
            <p className="text-[10px] text-[#38bdf8]">
              {activeTooltip.proficiency} • {activeTooltip.experience}
            </p>
          </div>
        ) : (
          <p className="text-[10px] text-[#8E8A82] text-center italic">
            Hover inventory slots to inspect items
          </p>
        )}
      </div>
    </div>
  );
}
