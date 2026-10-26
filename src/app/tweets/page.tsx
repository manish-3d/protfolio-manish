"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sound } from "@/lib/soundService";
import { TWEETS, PROFILE_DATA } from "@/data/portfolioData";
import { BrandIcon } from "@/components/ui/BrandIcons";
import { Heart, MessageSquare, Share2, ExternalLink, Radio, Sparkles } from "lucide-react";

type TweetFilter = "All" | "Updates" | "Learning" | "Projects";
type FeedViewMode = "live" | "curated";

export default function TweetsPage() {
  const [viewMode, setViewMode] = useState<FeedViewMode>("live");
  const [selectedFilter, setSelectedFilter] = useState<TweetFilter>("All");
  const [likesMap, setLikesMap] = useState<Record<string, { count: number; active: boolean }>>(() => {
    const initial: Record<string, { count: number; active: boolean }> = {};
    TWEETS.forEach((t) => {
      initial[t.id] = { count: t.likesCount, active: false };
    });
    return initial;
  });

  // Dynamically load Twitter widgets script for live tracking
  useEffect(() => {
    if (viewMode === "live") {
      const existingScript = document.getElementById("twitter-wjs");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "twitter-wjs";
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
      } else {
        // @ts-expect-error twttr is loaded globally by Twitter's widget script
        if (window.twttr && window.twttr.widgets) {
          // @ts-expect-error twttr is loaded globally
          window.twttr.widgets.load();
        }
      }
    }
  }, [viewMode]);

  const filteredTweets = TWEETS.filter((t) => {
    return selectedFilter === "All" || t.category === selectedFilter;
  });

  const handleFilterSelect = (cat: TweetFilter) => {
    sound.playWoodClick();
    setSelectedFilter(cat);
  };

  const handleModeChange = (mode: FeedViewMode) => {
    sound.playWoodClick();
    setViewMode(mode);
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
      alert("Tweet copied to clipboard!");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Live Twitter / X Profile Banner */}
      <div className="mc-panel-wood p-5 sm:p-6 bg-[#1c1b19] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {/* Avatar */}
            <div className="relative w-12 h-12 rounded mc-card-inset bg-[#141312] overflow-hidden flex-shrink-0 border border-[#6b4d32]">
              <Image
                src="/images/hero/character.jpg"
                alt="Manish Kumar"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-pixel text-lg sm:text-xl text-[#F4F0E8] font-bold">
                  Manish Kumar
                </h1>
                <BrandIcon id="x" size={14} className="text-[#F4F0E8]" />
              </div>
              <p className="text-xs text-[#38bdf8] font-mono">
                @realDijkstra
              </p>
            </div>
          </div>

          {/* Follow Button linking directly to real Twitter */}
          <a
            href={PROFILE_DATA.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playWoodClick()}
            className="mc-btn-primary text-xs py-2 px-4 inline-flex items-center justify-center gap-2 self-start sm:self-auto"
          >
            <BrandIcon id="x" size={13} />
            <span>Follow on X &rarr;</span>
          </a>
        </div>

        {/* Feed View Switcher */}
        <div className="pt-3 border-t border-[#38342e] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleModeChange("live")}
              className={`px-3 py-1.5 font-pixel text-xs rounded inline-flex items-center gap-1.5 transition-all ${
                viewMode === "live"
                  ? "mc-btn-primary"
                  : "mc-card-inset text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320]"
              }`}
            >
              <Radio size={12} className={viewMode === "live" ? "animate-pulse text-[#ffffff]" : ""} />
              <span>Live X Timeline</span>
            </button>

            <button
              onClick={() => handleModeChange("curated")}
              className={`px-3 py-1.5 font-pixel text-xs rounded inline-flex items-center gap-1.5 transition-all ${
                viewMode === "curated"
                  ? "mc-btn-primary"
                  : "mc-card-inset text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320]"
              }`}
            >
              <Sparkles size={12} />
              <span>Curated Dev Log</span>
            </button>
          </div>

          <a
            href={PROFILE_DATA.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#8E8A82] hover:text-[#38bdf8] flex items-center gap-1 transition-colors"
          >
            <span>x.com</span>
            <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* MODE 1: LIVE TWITTER / X TIMELINE EMBED */}
      {viewMode === "live" && (
        <div className="space-y-4">
          <div className="mc-panel-wood p-4 sm:p-6 bg-[#1c1b19] min-h-[480px]">
            <div className="text-center pb-3 text-xs text-[#8E8A82] flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#36C653] animate-pulse" />
              <span>Syncing live updates directly from @realDijkstra</span>
            </div>

            {/* Official Twitter Embedded Timeline */}
            <div className="w-full flex justify-center">
              <a
                className="twitter-timeline"
                data-theme="dark"
                data-chrome="noheader nofooter noborders transparent"
                data-tweet-limit="5"
                href="https://twitter.com/realDijkstra?ref_src=twsrc%5Etfw"
              >
                Loading latest tweets from @realDijkstra...
              </a>
            </div>

            {/* Direct Fallback Action */}
            <div className="mt-4 pt-4 border-t border-[#38342e] text-center">
              <p className="text-xs text-[#8E8A82] mb-2">
                If ad-blockers or browser privacy settings restrict third-party embeds:
              </p>
              <a
                href={PROFILE_DATA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playWoodClick()}
                className="mc-btn-secondary text-xs py-1.5 px-4 inline-flex items-center gap-2"
              >
                <BrandIcon id="x" size={12} />
                <span>Open @realDijkstra on X Directly &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: CURATED DEV LOG (MINECRAFT DASHBOARD) */}
      {viewMode === "curated" && (
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="mc-panel-wood p-3.5 bg-[#1c1b19] flex flex-wrap gap-2">
            {(["All", "Updates", "Learning", "Projects"] as TweetFilter[]).map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterSelect(cat)}
                  className={`px-3 py-1 font-pixel text-xs rounded transition-all ${
                    isActive
                      ? "mc-btn-primary"
                      : "mc-card-inset text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Cards Feed */}
          <div className="space-y-3.5">
            {filteredTweets.map((tweet) => {
              const likeState = likesMap[tweet.id] || { count: tweet.likesCount, active: false };
              return (
                <div
                  key={tweet.id}
                  className="mc-panel-wood p-4 sm:p-5 bg-[#1c1b19] hover:border-[#60a5fa] transition-all rounded"
                >
                  <div className="flex items-start gap-3.5">
                    {/* Brand X Icon Avatar */}
                    <div className="p-2 mc-card-inset bg-[#141312] border-[#38342e] rounded flex-shrink-0 flex items-center justify-center">
                      <BrandIcon id="x" size={16} className="text-[#F4F0E8]" />
                    </div>

                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-pixel text-xs text-[#F4F0E8] font-bold">
                            Manish Kumar
                          </span>
                          <span className="text-[11px] text-[#38bdf8] font-mono">
                            @realDijkstra
                          </span>
                        </div>
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

                        {/* View on X Link */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleShare(tweet.content)}
                            className="p-1 hover:text-[#38bdf8] transition-colors"
                            title="Copy text"
                          >
                            <Share2 size={13} />
                          </button>
                          <a
                            href={PROFILE_DATA.socials.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-[#38bdf8] hover:underline flex items-center gap-1"
                          >
                            <span>View on X</span>
                            <ExternalLink size={11} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
