"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sound } from "@/lib/soundService";
import { BlogPost } from "@/data/portfolioData";
import { Calendar, Clock, Tag, ArrowLeft, Copy, Check } from "lucide-react";

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    sound.playWoodClick();
    const codeSnippet = `const property = await prisma.property.findMany({
  where: {
    location: "Greater Noida"
  }
});`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Back Link */}
      <div>
        <Link
          href="/blog"
          onClick={() => sound.playWoodClick()}
          className="inline-flex items-center gap-1.5 text-xs font-pixel text-[#C8C0B3] hover:text-[#8DE6A0] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Library</span>
        </Link>
      </div>

      {/* Header Banner */}
      <div className="mc-panel-wood p-6 md:p-8 bg-[#1c1b19] space-y-3">
        <h1 className="font-pixel text-2xl sm:text-3xl md:text-4xl text-[#F4F0E8] font-bold leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#8E8A82] pt-1">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-[#F5C66B]" />
            {post.publishedAt}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#38bdf8]" />
            {post.readingTime}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Tag size={13} className="text-[#36C653]" />
            {post.category}
          </span>
        </div>
      </div>

      {/* Two Column Layout: TOC Sidebar (Left) + Article Body (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Table of Contents (Left 1/4) */}
        <aside className="mc-panel-wood p-4 bg-[#1c1b19] lg:sticky lg:top-20 space-y-3">
          <h3 className="font-pixel text-xs text-[#F5C66B] font-bold tracking-wider uppercase pb-2 border-b border-[#38342e]">
            Table of Contents
          </h3>
          <nav className="space-y-1.5">
            {post.toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => sound.playWoodClick()}
                className="block text-xs text-[#C8C0B3] hover:text-[#8DE6A0] hover:translate-x-1 transition-all"
              >
                {item.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Article Reader Body (Right 3/4) */}
        <article className="lg:col-span-3 mc-panel-wood p-6 md:p-8 bg-[#1c1b19] space-y-6">
          {/* Cover image if available */}
          <div className="relative w-full h-64 sm:h-72 rounded overflow-hidden mc-card-inset border border-[#38342e] bg-[#141312]">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover object-center pixelated"
            />
          </div>

          {/* Section 1: The Idea */}
          <section id="the-idea" className="space-y-3">
            <h2 className="font-pixel text-xl text-[#F4F0E8] font-bold">
              1. The Idea
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
              I wanted to create a platform where each property has an AI agent that can answer questions and give a virtual tour. Rather than reading through walls of text, prospective buyers converse naturally with a specialized model with live context.
            </p>

            {/* Code Listing with Copy Button */}
            <div className="mc-card-inset rounded overflow-hidden border border-[#38342e] bg-[#121110] my-4">
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#1a1917] border-b border-[#38342e] text-[11px] font-mono text-[#8E8A82]">
                <span>// Example Prisma query</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-[#C8C0B3] hover:text-[#36C653] transition-colors"
                  aria-label="Copy code"
                >
                  {copiedCode ? <Check size={13} className="text-[#36C653]" /> : <Copy size={13} />}
                  <span>{copiedCode ? "Copied!" : "Copy"}</span>
                </button>
              </div>
              <pre className="p-4 text-xs font-mono text-[#e2e8f0] overflow-x-auto leading-relaxed">
                <code>{`const property = await prisma.property.findMany({
  where: {
    location: "Greater Noida"
  }
});`}</code>
              </pre>
            </div>
          </section>

          {/* Section 2: Planning & Architecture */}
          <section id="planning" className="space-y-3 pt-3 border-t border-[#38342e]/60">
            <h2 className="font-pixel text-xl text-[#F4F0E8] font-bold">
              2. Planning & Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
              We selected Next.js 14 App Router for server-rendered listing pages, ensuring that property metadata is instantly discoverable by search engines. The database layer uses Neon serverless PostgreSQL, pooled with Prisma to prevent client connection limits.
            </p>
          </section>

          {/* Section 3: Tech Stack */}
          <section id="tech-stack" className="space-y-3 pt-3 border-t border-[#38342e]/60">
            <h2 className="font-pixel text-xl text-[#F4F0E8] font-bold">
              3. Tech Stack Decisions
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
              TypeScript across both frontend and backend provides bulletproof schema synchronization. Audio packet streams are processed with low-latency WebSockets connecting directly to the OpenAI speech models.
            </p>
          </section>

          {/* Section 4: Development */}
          <section id="development" className="space-y-3 pt-3 border-t border-[#38342e]/60">
            <h2 className="font-pixel text-xl text-[#F4F0E8] font-bold">
              4. Development & Iterations
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
              Streaming responses to the user chunk by chunk reduced Time-to-First-Audio (TTFA) from 2.4 seconds to under 400ms. We buffered audio directly in the browser using the Web Audio API AudioContext.
            </p>
          </section>

          {/* Section 5: Challenges */}
          <section id="challenges" className="space-y-3 pt-3 border-t border-[#38342e]/60">
            <h2 className="font-pixel text-xl text-[#F4F0E8] font-bold">
              5. Engineering Challenges
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
              Acoustic echo cancellation was crucial so the AI does not pick up its own voice and talk over itself. Browser WebRTC constraints resolved this cleanly.
            </p>
          </section>

          {/* Section 6: Learnings */}
          <section id="learnings" className="space-y-3 pt-3 border-t border-[#38342e]/60">
            <h2 className="font-pixel text-xl text-[#F4F0E8] font-bold">
              6. Key Learnings
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
              Decouple complex voice pipelines from the main thread. Always design fallback modes for users on slower cellular networks.
            </p>
          </section>

          {/* Section 7: Next Steps */}
          <section id="next-steps" className="space-y-3 pt-3 border-t border-[#38342e]/60">
            <h2 className="font-pixel text-xl text-[#F4F0E8] font-bold">
              7. Next Steps
            </h2>
            <p className="text-xs sm:text-sm text-[#D2CBBF] leading-relaxed">
              Adding Gaussian splatting to allow photorealistic walking tours in the browser with 60 FPS performance.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
