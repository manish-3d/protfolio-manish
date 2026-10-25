"use client";

import React, { useState } from "react";
import { sound } from "@/lib/soundService";
import { TWEETS } from "@/data/portfolioData";
import { Heart, MessageSquare, Share2 } from "lucide-react";

type TweetFilter = "All" | "Updates" | "Learning" | "Projects";

export default function TweetsPage() {
  const [selectedFilter, setSelectedFilter] = useState<TweetFilter>("All");
  const [likesMap, setLikesMap] = useState<Record<string, { count: number; active: boolean }>>(() => {
    const initial: Record<string, { count: number; active: boolean }> = {};
    TWEETS.forEach((t) => {
      initial[t.id] = { count: t.likesCount, active: false };
    });
    return initial;
  });

  const filteredTweets = TWEETS.filter((t) => {
    return selectedFilter === "All" || t.category === selectedFilter;
  });

  const handleFilterSelect = (cat: TweetFilter) => {
    sound.playWoodClick();
    setSelectedFilter(cat);
  };

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    sound.playItemPop();
    setLikesMap((prev) => {
      const current = prev[id] || { count: 0, active: false };
      return {
        ...prev,
        [id]: {
          count: current.active ? current.count - 1 : current.count + 1,
          active: !current.active,
        },
      };
    });
  };

  const handleShare = (text: string) => {
    sound.playWoodClick();
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      alert("Thought copied to clipboard!");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="mc-panel-wood p-5 md:p-6 bg-[#1c1b19]">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🪶</span>
          <h1 className="font-pixel text-2xl sm:text-3xl text-[#F4F0E8] font-bold">
            Tweets
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#8E8A82] mt-1">
          My thoughts, updates and quick notes.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#38342e]">
          {(["All", "Updates", "Learning", "Projects"] as TweetFilter[]).map((cat) => {
            const isActive = selectedFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => handleFilterSelect(cat)}
                className={`px-3.5 py-1 font-pixel text-xs rounded transition-all ${
                  isActive
                    ? "mc-btn-primary py-1 px-3"
                    : "mc-card-inset text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tweet Feed Cards */}
      <div className="space-y-3.5">
        {filteredTweets.map((tweet) => {
          const likeState = likesMap[tweet.id] || { count: tweet.likesCount, active: false };
          return (
            <div
              key={tweet.id}
              className="mc-panel-wood p-4 sm:p-5 bg-[#1c1b19] hover:border-[#60a5fa] transition-all rounded"
            >
              <div className="flex items-start gap-3.5">
                {/* Pixel Bird Icon Avatar */}
                <div className="p-2 mc-card-inset bg-[#1d9bf0]/10 border-[#1d9bf0]/40 rounded text-xl flex-shrink-0">
                  <span>🐦</span>
                </div>

                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="mc-tag text-[10px] text-[#38bdf8] border-[#38bdf8]/30">
                      #{tweet.category}
                    </span>
                    <span className="text-[11px] text-[#8E8A82] font-mono">
                      {tweet.relativeTime}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F4F0E8] leading-relaxed">
                    {tweet.content}
                  </p>

                  {/* Actions & Counters */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#38342e]/60 text-xs text-[#8E8A82]">
                    <div className="flex items-center gap-4">
                      {/* Heart Button */}
                      <button
                        onClick={(e) => handleLike(tweet.id, e)}
                        className={`flex items-center gap-1.5 transition-colors ${
                          likeState.active ? "text-[#f43f5e]" : "hover:text-[#f43f5e]"
                        }`}
                        title="Like this update"
                      >
                        <Heart
                          size={14}
                          className={likeState.active ? "fill-[#f43f5e]" : ""}
                        />
                        <span>{likeState.count}</span>
                      </button>

                      {/* Comment Counter */}
                      <div className="flex items-center gap-1.5 text-[#8E8A82]">
                        <MessageSquare size={14} />
                        <span>{tweet.commentsCount}</span>
                      </div>
                    </div>

                    {/* Share Button */}
                    <button
                      onClick={() => handleShare(tweet.content)}
                      className="p-1 hover:text-[#38bdf8] transition-colors"
                      title="Copy text"
                    >
                      <Share2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
