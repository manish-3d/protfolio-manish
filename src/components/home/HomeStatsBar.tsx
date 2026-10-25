"use client";

import React from "react";
import { sound } from "@/lib/soundService";
import { PROFILE_DATA } from "@/data/portfolioData";
import { Box, GraduationCap, MapPin, Shield } from "lucide-react";

export default function HomeStatsBar() {
  const getIcon = (type: string) => {
    switch (type) {
      case "box":
        return <Box size={20} className="text-[#F5C66B]" />;
      case "tower":
        return <GraduationCap size={20} className="text-[#36C653]" />;
      case "pin":
        return <MapPin size={20} className="text-[#ef4444]" />;
      case "shield":
        return <Shield size={20} className="text-[#38bdf8]" />;
      default:
        return <Box size={20} className="text-[#F5C66B]" />;
    }
  };

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
      {PROFILE_DATA.stats.map((stat) => (
        <div
          key={stat.label}
          onMouseEnter={() => sound.playItemPop()}
          className="mc-panel-wood p-3.5 bg-[#1c1b19] flex items-center gap-3 hover:border-[#f5c66b] transition-all duration-150 cursor-pointer group"
        >
          <div className="p-2 mc-card-inset bg-[#141312] group-hover:scale-105 transition-transform flex-shrink-0">
            {getIcon(stat.icon)}
          </div>
          <div>
            <p className="font-pixel text-xs text-[#F4F0E8] font-bold group-hover:text-[#8DE6A0] transition-colors">
              {stat.label}
            </p>
            <p className="text-[11px] text-[#8E8A82]">
              {stat.sub}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
