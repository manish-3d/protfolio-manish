import { BrandIcon } from "./BrandIcons";

export function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <BrandIcon id="github" size={size} className={className} />;
}

export function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <BrandIcon id="linkedin" size={size} className={className} />;
}

export function TwitterIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <BrandIcon id="x" size={size} className={className} />;
}

export function LeetcodeIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return <BrandIcon id="leetcode" size={size} className={className} />;
}

export function MailIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
