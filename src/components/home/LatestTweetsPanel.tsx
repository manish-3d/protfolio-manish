"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { TWEETS } from "@/data/portfolioData";
import { Heart, MessageSquare } from "lucide-react";

export default function LatestTweetsPanel() {
  const latest = TWEETS.slice(0, 3);

  return (
    <div className="mc-panel-wood p-4 bg-[#1c1b19] flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-[#38342e]">
          <div className="flex items-center gap-2">
            <span className="text-base">🪶</span>
            <h3 className="font-pixel text-xs md:text-sm text-[#F4F0E8] font-bold tracking-wide">
              Latest Tweets
            </h3>
          </div>
          <Link
            href="/tweets"
            onClick={() => sound.playWoodClick()}
            className="text-[11px] text-[#C8C0B3] hover:text-[#8DE6A0] font-pixel transition-colors"
          >
            View All &rarr;
          </Link>
        </div>

        {/* 3 Tweet Cards */}
        <div className="space-y-2.5">
          {latest.map((tweet) => (
            <Link
              key={tweet.id}
              href="/tweets"
              onClick={() => sound.playWoodClick()}
              onMouseEnter={() => sound.playItemPop()}
              className="block p-2.5 mc-card-inset hover:bg-[#2c2823] hover:border-[#60a5fa] transition-all rounded group"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 mc-card-inset bg-[#1d9bf0]/10 border-[#1d9bf0]/40 rounded text-[#1d9bf0] flex-shrink-0">
                  <span className="text-xs">🐦</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[#D2CBBF] leading-snug group-hover:text-[#F4F0E8] transition-colors">
                    {tweet.content}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#38342e]/50 text-[10px] text-[#8E8A82]">
                    <span>{tweet.relativeTime}</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 hover:text-[#f43f5e] transition-colors">
                        <Heart size={11} />
                        {tweet.likesCount}
                      </span>
                      <span className="flex items-center gap-1 hover:text-[#38bdf8] transition-colors">
                        <MessageSquare size={11} />
                        {tweet.commentsCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
