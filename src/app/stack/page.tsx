"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { STACK_ITEMS, StackItem } from "@/data/portfolioData";
import { BrandIcon } from "@/components/ui/BrandIcons";

export default function TechStackPage() {
  const [inspectedItem, setInspectedItem] = useState<StackItem | null>(STACK_ITEMS[0]);

  const frontendItems = STACK_ITEMS.filter((i) => i.category === "Frontend");
  const backendItems = STACK_ITEMS.filter((i) => i.category === "Backend");
  const toolItems = STACK_ITEMS.filter((i) => i.category === "Tools & Others");

  const handleItemSelect = (item: StackItem) => {
    sound.playItemPop();
    setInspectedItem(item);
  };

  const renderSlotRow = (items: StackItem[], categoryTitle: string, icon: string) => (
    <div className="mc-card-inset p-4 sm:p-5 bg-[#252320] space-y-3">
      <div className="flex items-center gap-2 pb-2 border-b border-[#38342e]">
        <span className="text-base">{icon}</span>
        <h3 className="font-pixel text-sm text-[#F4F0E8] font-bold">
          {categoryTitle}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((item) => {
          const isSelected = inspectedItem?.id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleItemSelect(item)}
              onMouseEnter={() => sound.playItemPop()}
              className={`p-3 rounded mc-card-inset bg-[#141312] cursor-pointer transition-all flex items-center gap-3 group ${
                isSelected
                  ? "border-[#36C653] shadow-[0_0_12px_rgba(54,198,83,0.3)] bg-[#1e1c19]"
                  : "hover:border-[#8DE6A0] hover:bg-[#1a1815]"
              }`}
            >
              <div className="w-10 h-10 rounded mc-inventory-slot flex-shrink-0 flex items-center justify-center p-1.5 bg-[#0e0d0c]">
                <BrandIcon
                  id={item.id}
                  size={24}
                  className="group-hover:scale-110 transition-transform filter drop-shadow"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-pixel text-xs text-[#F4F0E8] font-bold group-hover:text-[#8DE6A0] transition-colors truncate">
                  {item.name}
                </p>
                <p className="text-[10px] text-[#8E8A82]">
                  {item.proficiency}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="mc-panel-wood p-5 md:p-6 bg-[#1c1b19]">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧰</span>
          <h1 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
            Tech Stack
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8E8A82] mt-1">
          Technologies I use and explore in real projects.
        </p>
      </div>

      {/* Main Grid: Categories on Left + In-Depth Item Inspector on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Categories Stack (Left 2 Columns) */}
        <div className="lg:col-span-2 space-y-4">
          {renderSlotRow(frontendItems, "Frontend", "🌐")}
          {renderSlotRow(backendItems, "Backend", "⚙️")}
          {renderSlotRow(toolItems, "Tools & Others", "🛠️")}
        </div>

        {/* Item Inspector (Right 1 Column - Minecraft Lore Tooltip Aesthetic) */}
        <div className="mc-panel-wood p-5 bg-[#1c1b19] lg:sticky lg:top-20 space-y-4">
          <h3 className="font-pixel text-xs text-[#F5C66B] font-bold uppercase tracking-wider pb-2 border-b border-[#38342e]">
            Item Inspection Lore
          </h3>

          {inspectedItem ? (
            <div className="mc-tooltip space-y-3 p-4">
              {/* Item Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded mc-inventory-slot flex-shrink-0 bg-[#0b0a09] flex items-center justify-center p-2">
                  <BrandIcon
                    id={inspectedItem.id}
                    size={28}
                    className="filter drop-shadow"
                  />
                </div>
                <div>
                  <h4 className="font-pixel text-base text-[#F5C66B] font-bold">
                    {inspectedItem.name}
                  </h4>
                  <p className="text-xs text-[#FFFFFF]">
                    {inspectedItem.category} Module
                  </p>
                </div>
              </div>

              {/* Lore Stats */}
              <div className="space-y-1.5 pt-2 border-t border-[#4d0080]/60 text-xs font-mono">
                <p className="text-[#55FFFF]">
                  • Proficiency: <span className="text-white">{inspectedItem.proficiency}</span>
                </p>
                <p className="text-[#AAAAAA]">
                  • Experience: <span className="text-white">{inspectedItem.experience}</span>
                </p>
                <div className="text-[#FF55FF] pt-1">
                  • Shipped Builds:
                  <div className="flex flex-wrap gap-1 mt-1">
                    {inspectedItem.shippedBuilds.map((build) => (
                      <span key={build} className="text-xs text-white bg-[#28004b] px-1.5 py-0.5 rounded border border-[#4d0080]">
                        {build}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#4d0080]/60">
                <Link
                  href="/projects"
                  onClick={() => sound.playWoodClick()}
                  className="mc-btn-primary w-full text-center justify-center text-xs py-1.5"
                >
                  <span>Explore Projects Using {inspectedItem.name} &rarr;</span>
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-xs text-[#8E8A82] text-center italic py-8">
              Click any inventory slot to inspect its lore and shipped builds.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
