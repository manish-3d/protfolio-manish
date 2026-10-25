"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { PROFILE_DATA } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const [year, setYear] = React.useState<number>(2026);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    sound.playWoodClick();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full px-3 py-6 md:px-6 mt-12 mb-4">
      <div className="mc-panel-wood max-w-7xl mx-auto p-6 bg-[#1c1b19]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#38342e]">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              onClick={() => sound.playWoodClick()}
              className="font-pixel text-xl text-[#F4F0E8] hover:text-[#8DE6A0] transition-colors inline-flex items-center gap-1.5"
            >
              <span className="text-[#F5C66B]">&lt;</span>
              <span className="font-bold">Manish.dev</span>
              <span className="text-[#F5C66B]">&gt;</span>
            </Link>
            <p className="text-xs text-[#8E8A82] mt-1 max-w-md">
              A 2D Minecraft-inspired developer world engineered with Next.js, TypeScript, and clean architecture.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playWoodClick()}
              className="p-2 mc-card-inset text-[#C8C0B3] hover:text-[#36C653] hover:border-[#36C653] transition-all rounded"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PROFILE_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playWoodClick()}
              className="p-2 mc-card-inset text-[#C8C0B3] hover:text-[#38bdf8] hover:border-[#38bdf8] transition-all rounded"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={PROFILE_DATA.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playWoodClick()}
              className="p-2 mc-card-inset text-[#C8C0B3] hover:text-[#60a5fa] hover:border-[#60a5fa] transition-all rounded"
              title="Twitter"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href={PROFILE_DATA.socials.email}
              onClick={() => sound.playWoodClick()}
              className="p-2 mc-card-inset text-[#C8C0B3] hover:text-[#f5c66b] hover:border-[#f5c66b] transition-all rounded"
              title="Email"
            >
              <MailIcon size={18} />
            </a>
          </div>

          {/* Return to Spawn Action */}
          <div>
            <button
              onClick={scrollToTop}
              className="mc-btn-secondary text-xs py-2 px-3.5 flex items-center gap-2"
            >
              <ArrowUp size={14} className="text-[#F5C66B]" />
              <span>Return to Spawn</span>
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8E8A82] gap-2">
          <p>© {year} Manish Kumar — Crafted with passion for Web, IoT & Systems.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-[#36C653] animate-pulse"></span>
              All Systems Operational
            </span>
            <span>Spawn Point: NIET (Greater Noida)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
