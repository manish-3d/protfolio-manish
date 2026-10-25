"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full max-w-xl mx-auto my-16 text-center space-y-6">
      <div className="mc-panel-wood p-8 sm:p-12 bg-[#1c1b19] space-y-5">
        <div className="w-20 h-20 rounded-full mc-card-inset bg-[#141312] border-2 border-[#f5c66b] text-[#f5c66b] flex items-center justify-center mx-auto shadow-2xl animate-pulse">
          <Compass size={40} />
        </div>

        <h1 className="font-pixel text-4xl sm:text-5xl text-[#ef4444] font-bold">
          404
        </h1>

        <h2 className="font-pixel text-lg text-[#F4F0E8] font-bold">
          You Dug Into The Void!
        </h2>

        <p className="text-xs sm:text-sm text-[#8E8A82] max-w-md mx-auto leading-relaxed">
          The chunk you are attempting to explore hasn&apos;t generated yet or fell into lava. Let&apos;s respawn back at safety.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            onClick={() => sound.playWoodClick()}
            className="mc-btn-primary text-xs sm:text-sm py-2 px-6 inline-flex items-center gap-2"
          >
            <span>🧭</span>
            <span>Return to Spawn Point &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
