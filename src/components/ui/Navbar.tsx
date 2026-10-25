"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sound } from "@/lib/soundService";
import { Volume2, VolumeX, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "About", href: "/about", icon: "🧑" },
  { label: "Projects", href: "/projects", icon: "⛏️" },
  { label: "Blog", href: "/blog", icon: "📜" },
  { label: "Tweets", href: "/tweets", icon: "🪶" },
  { label: "Films", href: "/films", icon: "📽️" },
  { label: "Stack", href: "/stack", icon: "🧰" },
  { label: "Docs", href: "/docs", icon: "📖" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setSoundEnabled(sound.isEnabled());
  }, []);

  const handleSoundToggle = () => {
    const newState = sound.toggleSound();
    setSoundEnabled(newState);
  };

  const handleLinkClick = () => {
    sound.playWoodClick();
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 py-2 md:px-6">
      <div className="mc-panel-wood max-w-7xl mx-auto flex items-center justify-between px-3 md:px-5 py-2.5 bg-[#1c1b19]/95 backdrop-blur-md">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex items-center gap-1.5 font-pixel text-lg md:text-xl text-[#F4F0E8] hover:text-[#8DE6A0] transition-colors"
        >
          <span className="text-[#F5C66B]">&lt;</span>
          <span className="font-bold tracking-wider">Manish.dev</span>
          <span className="text-[#F5C66B]">&gt;</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-pixel tracking-wide transition-all ${
                  isActive
                    ? "bg-[#252320] text-[#8DE6A0] border-b-2 border-[#36C653] shadow-inner"
                    : "text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320]/60"
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Sound Toggle + Connect CTA */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            title={soundEnabled ? "Mute Minecraft Click Sounds" : "Unmute Minecraft Click Sounds"}
            className="p-1.5 text-[#C8C0B3] hover:text-[#F5C66B] hover:bg-[#252320] rounded border border-[#38342e] transition-colors"
            aria-label="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 size={16} className="text-[#36C653]" /> : <VolumeX size={16} className="text-[#8E8A82]" />}
          </button>

          {/* Connect CTA Button */}
          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="mc-btn-primary hidden sm:inline-flex text-xs py-1.5 px-3.5"
          >
            <span>💎</span>
            <span>Let&apos;s Connect &rarr;</span>
          </Link>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#C8C0B3] hover:text-[#F4F0E8] hover:bg-[#252320] rounded border border-[#38342e]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mc-panel-wood max-w-7xl mx-auto p-4 bg-[#1c1b19] border-t-2 border-[#493421] animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-2 p-2 rounded text-xs font-pixel ${
                    isActive ? "bg-[#252320] text-[#8DE6A0] border border-[#36C653]" : "text-[#C8C0B3] hover:bg-[#252320]"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-[#38342e]">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="mc-btn-primary w-full text-center justify-center text-xs py-2"
            >
              <span>💎</span>
              <span>Let&apos;s Connect &rarr;</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
