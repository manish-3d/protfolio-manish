"use client";

import React, { useState } from "react";
import { useLighting, LightingState } from "@/context/LightingContext";
import { sound } from "@/lib/soundService";

interface ControlItem {
  key: keyof LightingState;
  label: string;
  sublabel: string;
  icon: string;
}

const CONTROL_ITEMS: ControlItem[] = [
  { key: "cabinLights", label: "Cabin Windows", sublabel: "Warm window glow & porch", icon: "🏠" },
  { key: "lanternLight", label: "Cliff Lantern", sublabel: "Character lantern aura", icon: "🏮" },
  { key: "waterfallFlow", label: "Waterfall Stream", sublabel: "Cascading water & mist", icon: "💧" },
  { key: "fireflies", label: "Forest Fireflies", sublabel: "Drifting bioluminescent spores", icon: "✨" },
  { key: "chimneySmoke", label: "Cabin Chimney", sublabel: "Fireplace wood smoke puffs", icon: "💨" },
  { key: "twinklingStars", label: "Twinkling Sky", sublabel: "Night stars & shooting star", icon: "⭐" },
  { key: "signTorches", label: "Signpost Torches", sublabel: "Wall torches on chains", icon: "🔥" },
];

export default function RedstoneLightingControls() {
  const { lights, toggleLight, setAllLights, setPreset, isAllOn } = useLighting();
  const [isOpen, setIsOpen] = useState(false);

  const activeCount = Object.values(lights).filter(Boolean).length;

  return (
    <div className="relative z-30">
      {/* Floating Redstone Switchboard Button (When Collapsed) */}
      {!isOpen && (
        <button
          onClick={() => {
            sound.playWoodClick();
            setIsOpen(true);
          }}
          className="mc-card-inset flex items-center gap-2 px-3 py-1.5 bg-[#1e1b17]/90 hover:bg-[#2e261f] border-2 border-[#5a432d] hover:border-[#ff3b30] text-xs font-pixel text-[#f4f0e8] shadow-lg rounded transition-all duration-150 transform hover:scale-105"
        >
          {/* Pulsing Redstone Torch Icon */}
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                activeCount > 0 ? "bg-red-500" : "bg-neutral-600"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                activeCount > 0 ? "bg-red-600 shadow-[0_0_8px_#ff3b30]" : "bg-neutral-600"
              }`}
            />
          </span>
          <span>⚡ Redstone Lights ({activeCount}/7)</span>
          <span className="text-[#f5c66b] text-[10px]">&#9660;</span>
        </button>
      )}

      {/* Expanded Minecraft Redstone Control Panel */}
      {isOpen && (
        <div className="mc-panel-wood w-72 sm:w-80 p-3.5 bg-[#181512]/95 border-3 border-[#493421] shadow-2xl rounded text-[#f4f0e8] animate-in fade-in zoom-in-95 duration-150">
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#382b20]">
            <div className="flex items-center gap-2">
              <span className="text-base">⚡</span>
              <div>
                <h4 className="font-pixel text-xs text-[#f5c66b] font-bold tracking-wide">
                  Redstone Lighting Controls
                </h4>
                <p className="text-[10px] text-[#a89f91]">
                  Live Wallpaper & Light Switches
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                sound.playWoodClick();
                setIsOpen(false);
              }}
              className="text-xs text-[#8e8a82] hover:text-[#f4f0e8] px-1.5 py-0.5 rounded hover:bg-[#252320] font-pixel"
              title="Close panel"
            >
              ✕
            </button>
          </div>

          {/* Master Presets Quick Buttons */}
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            <button
              onClick={() => setPreset("all-on")}
              className="px-1.5 py-1 text-[10px] font-pixel bg-[#252320] hover:bg-[#322f2b] border border-[#493421] hover:border-[#36c653] text-[#8de6a0] rounded transition-colors text-center"
            >
              🌟 All ON
            </button>
            <button
              onClick={() => setPreset("cozy-cabin")}
              className="px-1.5 py-1 text-[10px] font-pixel bg-[#252320] hover:bg-[#322f2b] border border-[#493421] hover:border-[#f5c66b] text-[#f5c66b] rounded transition-colors text-center"
            >
              🏮 Cozy Cabin
            </button>
            <button
              onClick={() => setPreset("night-stealth")}
              className="px-1.5 py-1 text-[10px] font-pixel bg-[#252320] hover:bg-[#322f2b] border border-[#493421] hover:border-neutral-500 text-neutral-300 rounded transition-colors text-center"
            >
              🌑 Night Mode
            </button>
          </div>

          {/* Master Switch */}
          <div className="mb-2.5 px-2.5 py-1.5 bg-[#14120f] border border-[#382b20] rounded flex items-center justify-between">
            <span className="font-pixel text-xs text-[#f4f0e8] flex items-center gap-1.5">
              <span>{isAllOn ? "💡" : "🔌"}</span>
              <span>Master Redstone Power</span>
            </span>
            <button
              onClick={() => setAllLights(!isAllOn)}
              className={`font-pixel text-[11px] px-2 py-0.5 rounded border transition-all ${
                isAllOn
                  ? "bg-[#1e7a33] border-[#36c653] text-white shadow-[0_0_8px_rgba(54,198,83,0.5)]"
                  : "bg-[#252320] border-[#555] text-neutral-400"
              }`}
            >
              {isAllOn ? "POWERED" : "OFF"}
            </button>
          </div>

          {/* Individual Location Switches */}
          <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
            {CONTROL_ITEMS.map((item) => {
              const isEnabled = lights[item.key];

              return (
                <div
                  key={item.key}
                  onClick={() => toggleLight(item.key)}
                  className="mc-card-inset p-2 flex items-center justify-between bg-[#1f1c18] hover:bg-[#28231e] cursor-pointer transition-colors rounded border border-[#30251d]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{item.icon}</span>
                    <div className="leading-tight">
                      <div className="font-pixel text-xs text-[#f4f0e8] flex items-center gap-1.5">
                        <span>{item.label}</span>
                        {/* Redstone Dust Indicator */}
                        <span
                          className={`inline-block w-2 h-2 rounded-full transition-all ${
                            isEnabled
                              ? "bg-red-500 shadow-[0_0_6px_#ff3322]"
                              : "bg-neutral-700"
                          }`}
                        />
                      </div>
                      <div className="text-[9px] text-[#9c9386]">
                        {item.sublabel}
                      </div>
                    </div>
                  </div>

                  {/* Minecraft Lever Switch Representation */}
                  <div className="flex items-center gap-1.5">
                    <div
                      className={`relative w-10 h-5 rounded-xs border transition-colors flex items-center px-1 ${
                        isEnabled
                          ? "bg-[#2b1616] border-red-800"
                          : "bg-[#181614] border-neutral-700"
                      }`}
                    >
                      {/* Lever stick */}
                      <div
                        className={`w-3.5 h-3.5 rounded-xs transition-all duration-150 transform flex items-center justify-center font-pixel text-[8px] ${
                          isEnabled
                            ? "translate-x-4 bg-red-600 text-white shadow-[0_0_6px_#ff3b30]"
                            : "translate-x-0 bg-neutral-600 text-neutral-400"
                        }`}
                      >
                        {isEnabled ? "I" : "O"}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="pt-2.5 mt-2 border-t border-[#382b20] text-center">
            <span className="text-[10px] text-[#8e8a82]">
              Tip: You can also click directly on the cabin & waterfall!
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
