export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Full Stack' | 'Web' | 'Other';
  featured: boolean;
  coverImage: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  duration?: string;
  description: string;
  overview: string;
  features: string[];
  techStackDetails: { name: string; role: string }[];
  screenshots: string[];
  learnings: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  readingTime: string;
  thumbnail: string;
  category: 'Full Stack' | 'Web Dev' | 'Architecture' | 'Other';
  tags: string[];
  toc: { id: string; title: string }[];
  content: string;
}

export interface Tweet {
  id: string;
  content: string;
  relativeTime: string;
  category: 'Updates' | 'Learning' | 'Projects';
  likesCount: number;
  commentsCount: number;
}

export interface Film {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  category: 'Project Demos' | 'Tutorials' | 'Vlogs';
  featured?: boolean;
  isHtmlFilm?: boolean;
  htmlUrl?: string;
}

export interface StackItem {
  id: string;
  name: string;
  symbol: string;
  category: 'Frontend' | 'Backend' | 'Tools & Others';
  proficiency: 'Expert' | 'Advanced' | 'Proficient';
  experience: string;
  color: string;
  shippedBuilds: string[];
}

export const PROFILE_DATA = {
  name: "Manish Kumar",
  title: "B.Tech CSE @ NIET",
  subtitle: "Full-stack developer building real web applications, learning in public, and shipping software.",
  bio: "I'm Manish, a Computer Science & Engineering (CSE) student at NIET. I focus on full-stack web development with Next.js, React, Node.js, and PostgreSQL, building practical products and sharing my work in public.",
  location: "Greater Noida, India",
  college: "NIET",
  degree: "B.Tech CSE",
  age: "22",
  socials: {
    github: "https://github.com/manish-3d",
    linkedin: "https://www.linkedin.com/in/manish-kumar-85904b3a2/",
    twitter: "https://x.com/realDijkstra",
    leetcode: "https://leetcode.com/u/manixshsg/",
    email: "mailto:manish@example.com",
  },
  stats: [
    { label: "22 Years", icon: "box", sub: "Builder" },
    { label: "CSE", icon: "tower", sub: "NIET" },
    { label: "India", icon: "pin", sub: "Home" },
    { label: "Full Stack", icon: "shield", sub: "Web Dev" },
  ],
  journey: [
    { year: "2022", title: "Started B.Tech CSE", desc: "Joined NIET, focusing on Computer Science core fundamentals" },
    { year: "2023", title: "Frontend & TypeScript", desc: "React, Tailwind CSS, TypeScript, and modern component systems" },
    { year: "2024", title: "Full Stack & Databases", desc: "Node.js, Express, PostgreSQL, Prisma ORM, and REST APIs" },
    { year: "2025", title: "Production Platforms", desc: "Shipped Locus and CohortX using Next.js App Router" },
    { year: "Now", title: "Building in Public", desc: "Shipping features, learning architecture, and exploring new tech" },
  ],
  education: [
    {
      institution: "Noida Institute of Engineering and Technology (NIET)",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022 - 2026",
      details: "Core Computer Science, Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Full Stack Web Architecture."
    }
  ],
  interests: [
    "Full-Stack Web Engineering (Next.js, React, Node.js)",
    "Relational Database Architecture & Query Optimization (PostgreSQL, Prisma)",
    "System Design, Clean Code & API Development",
    "Open Source, Community Building & Minecraft Aesthetic"
  ]
};

export const PROJECTS: Project[] = [
  {
    slug: "locus",
    title: "Locus",
    tagline: "Full-Stack Real Estate Platform",
    category: "Full Stack",
    featured: true,
    coverImage: "/images/projects/locus.webp",
    tags: ["Next.js 14", "Prisma", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/manish-3d",
    liveUrl: "https://locuss.vercel.app/",
    duration: "3 months",
    description: "A modern full-stack real estate platform featuring interactive property listings, virtual tours, and database search filters.",
    overview: "Locus is a complete full-stack real estate web application built with Next.js 14 App Router, Prisma ORM, and PostgreSQL. It allows buyers to explore property catalogs with deep search filtering, schedule appointments with managers, calculate real-time mortgage estimates, and view property specs.",
    features: [
      "Dynamic multi-attribute search and filtering across property catalogs",
      "Interactive property tour explorer & neighborhood amenities radar",
      "Real-time mortgage estimate calculator with dynamic amortization",
      "Automated appointment scheduling directly with property managers",
      "Serverless Neon PostgreSQL connection pooling for fast queries"
    ],
    techStackDetails: [
      { name: "Next.js 14 App Router", role: "SSR, React Server Components, Streaming SSR" },
      { name: "Prisma ORM", role: "Type-safe database querying & automated schema migrations" },
      { name: "PostgreSQL (Neon)", role: "Serverless relational storage with branch databases" },
      { name: "Tailwind CSS", role: "Responsive UI styling & design token system" },
      { name: "TypeScript", role: "End-to-end type safety across client and server" }
    ],
    screenshots: [
      "/images/projects/locus.webp",
      "/images/projects/locus-pool.webp",
      "/images/projects/locus-interior.webp"
    ],
    learnings: [
      "Optimizing database queries and indexes in PostgreSQL to keep latency under 40ms.",
      "Structuring Prisma queries with selective field projections to avoid over-fetching large property polygons.",
      "Designing responsive high-fidelity cards that retain performance across mobile web."
    ]
  },
  {
    slug: "cohortx",
    title: "CohortX",
    tagline: "Developer Collaboration & Project Hub",
    category: "Full Stack",
    featured: true,
    coverImage: "/images/projects/cohortx.webp",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/manish-3d",
    liveUrl: "https://cohort-x-five.vercel.app/feed",
    duration: "2 months",
    description: "A full-stack developer collaboration platform where creators showcase projects, find co-builders, and exchange real-time feedback.",
    overview: "CohortX enables engineers and designers to launch project milestones, gather verified peer reviews, form cross-discipline teams, and track shipping velocity in a collaborative community.",
    features: [
      "Milestone-based project progress boards with live Git commit feeds",
      "Smart matchmaking pairing frontend, backend, and full-stack builders",
      "Peer review bounties and verified karma reputation system",
      "Normalized relational PostgreSQL schema with secure JWT authentication"
    ],
    techStackDetails: [
      { name: "React 18", role: "Component state, rich interactive dashboard" },
      { name: "Node.js & Express", role: "RESTful API microservices & JWT auth" },
      { name: "PostgreSQL", role: "Normalized relational schema for users, cohorts, and reviews" },
      { name: "Tailwind CSS", role: "Responsive layout & dark mode design system" }
    ],
    screenshots: ["/images/projects/cohortx.webp"],
    learnings: [
      "Designing efficient REST APIs and structuring database tables with foreign keys and cascade rules.",
      "Implementing JWT-based session security and route-level authorization middleware in Express."
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-i-built-locus",
    title: "How I Built Locus From Idea to MVP",
    summary: "Complete journey from idea to a working full-stack real estate platform.",
    publishedAt: "Oct 20, 2026",
    readingTime: "8 min read",
    thumbnail: "/images/blog/blog-locus.webp",
    category: "Full Stack",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Full Stack"],
    toc: [
      { id: "the-idea", title: "1. The Idea" },
      { id: "planning", title: "2. Planning" },
      { id: "tech-stack", title: "3. Tech Stack" },
      { id: "development", title: "4. Development" },
      { id: "challenges", title: "5. Challenges" },
      { id: "learnings", title: "6. Learnings" },
      { id: "next-steps", title: "7. Next Steps" }
    ],
    content: `
### 1. The Idea
I wanted to create a platform where buyers could seamlessly explore real estate listings with deep filtering, transparent pricing models, and responsive property catalogs. Traditional real estate sites are clunky and slow. With Locus, the goal was sub-second page loads and a clean user experience.

\`\`\`typescript
// Example Prisma query for property retrieval
const properties = await prisma.property.findMany({
  where: {
    location: "Greater Noida",
    verified: true,
  },
  include: {
    amenities: true,
    pricingDetails: true,
  },
});
\`\`\`

### 2. Planning & Architecture
The architecture required three core layers:
1. **Catalog Engine:** High-performance SSR pages in Next.js 14 App Router.
2. **Server Actions & API:** Type-safe data mutations and query handlers.
3. **Storage & Database:** Serverless PostgreSQL hosted on Neon with connection pooling.

### 3. Tech Stack Decisions
Why Prisma + Neon Postgres? With serverless Next.js, traditional database connections can easily exhaust connection limits. Neon's HTTP proxy driver and Prisma's lightweight client ensure zero connection spikes even during traffic surges.

### 4. Development & Iterations
Building the search system required responsive filtering across location, price ranges, and property types with instant URL state synchronization.

### 5. Challenges Overcome
The primary bottleneck was query optimization when joining multiple relations. We resolved this by adding composite database indexes and selecting only required fields.

### 6. Key Learnings
Keep database relations normalized, use server-side caching strategically, and design every UI component mobile-first.
`
  },
  {
    slug: "setting-up-nextjs-prisma",
    title: "Setting Up Next.js + Prisma with Neon Postgres",
    summary: "A step by step guide for modern full stack serverless architecture.",
    publishedAt: "Oct 12, 2026",
    readingTime: "5 min read",
    thumbnail: "/images/blog/blog-prisma.webp",
    category: "Web Dev",
    tags: ["Next.js", "Prisma", "Neon", "Postgres"],
    toc: [
      { id: "setup", title: "1. Neon Project Setup" },
      { id: "prisma-config", title: "2. Prisma Client Configuration" },
      { id: "pooling", title: "3. Connection Pooling" }
    ],
    content: `
Serverless computing has changed how we think about relational databases. Here is how I structure my Next.js and Prisma setups to guarantee instant cold starts and zero connection pool exhaustion.

\`\`\`prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
\`\`\`

By configuring the singleton client correctly in Next.js development mode, you avoid creating dozens of orphan database connections on every hot reload.
`
  },
  {
    slug: "building-cohortx-platform",
    title: "Architecting CohortX: A Developer Hub",
    summary: "Designing normalized schemas and REST APIs for peer collaboration.",
    publishedAt: "Sep 28, 2026",
    readingTime: "6 min read",
    thumbnail: "/images/blog/blog-ai.webp",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    toc: [
      { id: "the-need", title: "1. Why CohortX?" },
      { id: "schema-design", title: "2. Relational Schema Design" },
      { id: "auth-security", title: "3. Authentication & Security" }
    ],
    content: `
Building CohortX required handling multi-user collaboration, project updates, and karma bounties. 

Using PostgreSQL for structured user profiles and milestone progress guaranteed data integrity with foreign key constraints, while Express microservices handled stateless JWT authentication.
`
  }
];

export const TWEETS: Tweet[] = [
  {
    id: "tweet-1",
    content: "Pushed a new update to Locus 🚀 Interactive property catalogs and search filters are now live!",
    relativeTime: "2h ago",
    category: "Updates",
    likesCount: 16,
    commentsCount: 4
  },
  {
    id: "tweet-2",
    content: "Working on CohortX database optimizations today. PostgreSQL indexes make a huge difference in query latency ⚡",
    relativeTime: "1d ago",
    category: "Projects",
    likesCount: 28,
    commentsCount: 6
  },
  {
    id: "tweet-3",
    content: "Consistent daily progress. Shipping code, refining UI, and learning in public.",
    relativeTime: "3d ago",
    category: "Learning",
    likesCount: 22,
    commentsCount: 3
  }
];

export const FILMS: Film[] = [
  {
    slug: "locus-launch-film",
    title: "Locus — Interactive Launch Film",
    subtitle: "Interactive 3D Villa Tours, Search, & AI Real Estate Platform",
    duration: "0:40",
    thumbnail: "/images/films/film-locus.webp",
    videoUrl: "/films/locus-launch.html",
    htmlUrl: "/films/locus-launch.html",
    isHtmlFilm: true,
    category: "Project Demos",
    featured: true
  },
  {
    slug: "cohortx-walkthrough",
    title: "CohortX — Project Walkthrough",
    subtitle: "Developer Collaboration & Progress Tracking",
    duration: "15 min",
    thumbnail: "/images/films/film-cohortx.webp",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Project Demos",
    featured: false
  }
];

export const STACK_ITEMS: StackItem[] = [
  // Frontend
  { id: "nextjs", name: "Next.js", symbol: "NX", category: "Frontend", proficiency: "Expert", experience: "2+ Years", color: "#ffffff", shippedBuilds: ["Locus", "Portfolio"] },
  { id: "react", name: "React", symbol: "⚛", category: "Frontend", proficiency: "Expert", experience: "3+ Years", color: "#61dafb", shippedBuilds: ["CohortX", "Locus"] },
  { id: "typescript", name: "TypeScript", symbol: "TS", category: "Frontend", proficiency: "Expert", experience: "2+ Years", color: "#3178c6", shippedBuilds: ["Locus", "CohortX"] },
  { id: "tailwind", name: "Tailwind CSS", symbol: "≋", category: "Frontend", proficiency: "Expert", experience: "2+ Years", color: "#38bdf8", shippedBuilds: ["Locus", "CohortX"] },

  // Backend
  { id: "nodejs", name: "Node.js", symbol: "⬡", category: "Backend", proficiency: "Expert", experience: "2+ Years", color: "#68a063", shippedBuilds: ["CohortX Backend"] },
  { id: "express", name: "Express.js", symbol: "ex", category: "Backend", proficiency: "Advanced", experience: "2 Years", color: "#ffffff", shippedBuilds: ["CohortX REST APIs"] },
  { id: "prisma", name: "Prisma", symbol: "▲", category: "Backend", proficiency: "Expert", experience: "2 Years", color: "#5a67d8", shippedBuilds: ["Locus"] },
  { id: "postgresql", name: "PostgreSQL", symbol: "🐘", category: "Backend", proficiency: "Expert", experience: "2 Years", color: "#336791", shippedBuilds: ["Locus", "CohortX"] },

  // Tools & Others
  { id: "git", name: "Git", symbol: "⎇", category: "Tools & Others", proficiency: "Expert", experience: "3+ Years", color: "#f05032", shippedBuilds: ["All Repositories"] },
  { id: "docker", name: "Docker", symbol: "🐳", category: "Tools & Others", proficiency: "Proficient", experience: "1.5 Years", color: "#2496ed", shippedBuilds: ["Local Development"] },
  { id: "linux", name: "Linux", symbol: "🐧", category: "Tools & Others", proficiency: "Advanced", experience: "2 Years", color: "#fcc624", shippedBuilds: ["Development & VPS"] },
  { id: "vscode", name: "VS Code", symbol: "⌨", category: "Tools & Others", proficiency: "Expert", experience: "3+ Years", color: "#007acc", shippedBuilds: ["Primary IDE"] }
];
