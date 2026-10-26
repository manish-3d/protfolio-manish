"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { PROFILE_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, TwitterIcon, LeetcodeIcon, MailIcon } from "@/components/ui/SocialIcons";
import { BookOpen, FileText, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playWoodClick();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="mc-panel-wood p-6 md:p-8 bg-[#1c1b19] text-center space-y-3">
        <h1 className="font-pixel text-3xl sm:text-4xl text-[#F4F0E8] font-bold">
          Get In Touch
        </h1>
        <p className="text-xs sm:text-sm text-[#8E8A82] max-w-md mx-auto">
          Let&apos;s connect and build something awesome together.
        </p>

        {/* Social Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href={PROFILE_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playWoodClick()}
            className="mc-btn-secondary text-xs py-2 px-4 flex items-center gap-2"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>
          <a
            href={PROFILE_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playWoodClick()}
            className="mc-btn-secondary text-xs py-2 px-4 flex items-center gap-2"
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href={PROFILE_DATA.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playWoodClick()}
            className="mc-btn-secondary text-xs py-2 px-4 flex items-center gap-2"
          >
            <LeetcodeIcon size={15} />
            <span>LeetCode</span>
          </a>
          <a
            href={PROFILE_DATA.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playWoodClick()}
            className="mc-btn-secondary text-xs py-2 px-4 flex items-center gap-2"
          >
            <TwitterIcon size={15} />
            <span>X / Twitter</span>
          </a>
          <a
            href={PROFILE_DATA.socials.email}
            onClick={() => sound.playWoodClick()}
            className="mc-btn-secondary text-xs py-2 px-4 flex items-center gap-2"
          >
            <MailIcon size={15} />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* 3 Large Portal Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Tile 1: Docs */}
        <Link
          href="/docs"
          onClick={() => sound.playWoodClick()}
          onMouseEnter={() => sound.playItemPop()}
          className="mc-panel-wood p-5 bg-[#1c1b19] hover:border-[#8DE6A0] transition-all duration-150 flex flex-col items-center text-center space-y-2 group rounded"
        >
          <div className="p-3 rounded-full mc-card-inset bg-[#141312] text-[#36C653] group-hover:scale-110 transition-transform">
            <BookOpen size={24} />
          </div>
          <h2 className="font-pixel text-base text-[#F4F0E8] font-bold group-hover:text-[#8DE6A0] transition-colors">
            Docs
          </h2>
          <p className="text-xs text-[#8E8A82]">
            Notes & Resources
          </p>
        </Link>

        {/* Tile 2: Resume */}
        <Link
          href="/resume"
          onClick={() => sound.playWoodClick()}
          onMouseEnter={() => sound.playItemPop()}
          className="mc-panel-wood p-5 bg-[#1c1b19] hover:border-[#F5C66B] transition-all duration-150 flex flex-col items-center text-center space-y-2 group rounded"
        >
          <div className="p-3 rounded-full mc-card-inset bg-[#141312] text-[#F5C66B] group-hover:scale-110 transition-transform">
            <FileText size={24} />
          </div>
          <h2 className="font-pixel text-base text-[#F4F0E8] font-bold group-hover:text-[#F5C66B] transition-colors">
            Resume
          </h2>
          <p className="text-xs text-[#8E8A82]">
            Download PDF
          </p>
        </Link>

        {/* Tile 3: Contact */}
        <div
          onClick={() => sound.playItemPop()}
          className="mc-panel-wood p-5 bg-[#1c1b19] border-[#36C653] shadow-md flex flex-col items-center text-center space-y-2 rounded"
        >
          <div className="p-3 rounded-full mc-card-inset bg-[#141312] text-[#38bdf8]">
            <Send size={24} />
          </div>
          <h2 className="font-pixel text-base text-[#36C653] font-bold">
            Contact
          </h2>
          <p className="text-xs text-[#8E8A82]">
            Send a Message
          </p>
        </div>
      </div>

      {/* Interactive Messaging Terminal */}
      <div className="mc-panel-wood p-6 md:p-8 bg-[#1c1b19] space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-[#38342e]">
          <span className="text-xl">✉️</span>
          <h2 className="font-pixel text-base text-[#F4F0E8] font-bold">
            Courier Dispatcher (Send a Note to Manish)
          </h2>
        </div>

        {submitted ? (
          <div className="mc-card-inset p-8 text-center bg-[#252320] space-y-3 animate-in fade-in">
            <CheckCircle2 size={36} className="text-[#36C653] mx-auto" />
            <h3 className="font-pixel text-base text-[#F4F0E8] font-bold">
              Message Dispatched to Spawn!
            </h3>
            <p className="text-xs text-[#D2CBBF] max-w-md mx-auto">
              Thank you, {formData.name}. Your note has been delivered. I will respond to your email at {formData.email} shortly!
            </p>
            <button
              onClick={() => {
                sound.playWoodClick();
                setSubmitted(false);
                setFormData({ name: "", email: "", message: "" });
              }}
              className="mc-btn-secondary text-xs py-1.5 px-4 mt-2"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-pixel text-xs text-[#C8C0B3]">Your Name / Handle</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Steve"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs text-[#F4F0E8] p-2.5 rounded focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-pixel text-xs text-[#C8C0B3]">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs text-[#F4F0E8] p-2.5 rounded focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-pixel text-xs text-[#C8C0B3]">Your Message</label>
              <textarea
                required
                rows={4}
                placeholder="What cool project or idea would you like to collaborate on?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#141312] border-2 border-[#38342e] focus:border-[#36C653] text-xs text-[#F4F0E8] p-2.5 rounded focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mc-btn-primary w-full sm:w-auto text-xs py-2 px-6"
            >
              <span>Dispatch Note</span>
              <span>&rarr;</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
