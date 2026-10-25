export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: 'Web' | 'IoT' | 'AI' | '3D' | 'Other';
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
  category: 'Web Dev' | 'AI' | 'IoT' | 'DSA' | '3D' | 'Other';
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
  title: "B.Tech CSE (IoT) @ NIET",
  subtitle: "Building real projects, learning in public, and creating cool stuff.",
  bio: "I'm Manish, a CSE (IoT) student who loves building projects, learning new tech and sharing the journey. I enjoy working on Web, IoT, AI and creative tech. This site is my digital world, inspired by Minecraft.",
  location: "Greater Noida, India",
  college: "NIET",
  degree: "B.Tech CSE (IoT)",
  age: "22",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:manish@example.com",
  },
  stats: [
    { label: "22 Years", icon: "box", sub: "Builder" },
    { label: "CSE (IoT)", icon: "tower", sub: "NIET" },
    { label: "India", icon: "pin", sub: "Home" },
    { label: "Builder", icon: "shield", sub: "Always" },
  ],
  journey: [
    { year: "2022", title: "Started B.Tech", desc: "Joined NIET, CSE (IoT) specialization" },
    { year: "2023", title: "Explored Web Dev", desc: "HTML, CSS, JavaScript, React & modern tooling" },
    { year: "2024", title: "IoT & Embedded", desc: "Sensors, Microcontrollers, ESP8266 & WebSockets" },
    { year: "2025", title: "AI & Generative AI", desc: "Building small AI projects, LLMs & agents" },
    { year: "Now", title: "Building in Public", desc: "Sharing projects, writing blogs and continuous learning" },
  ],
  education: [
    { institution: "Noida Institute of Engineering and Technology (NIET)", degree: "B.Tech in Computer Science and Engineering (IoT)", period: "2022 - 2026", details: "Specializing in Internet of Things, Embedded Systems, Distributed Computing, and Full Stack Architecture." }
  ],
  interests: [
    "Voxel Game Aesthetics & 2D Art Direction",
    "Hardware-Software Bridges & Embedded Automation",
    "Autonomous AI Agents & Real-Time Voice Interfaces",
    "Open Source Systems & High-Fidelity Web Design"
  ]
};

export const PROJECTS: Project[] = [
  {
    slug: "locus",
    title: "Locus",
    tagline: "AI Powered Real Estate Platform",
    category: "AI",
    featured: true,
    coverImage: "/images/projects/locus.webp",
    tags: ["Next.js 14", "Prisma", "PostgreSQL", "AI", "Tailwind"],
    githubUrl: "https://github.com/manish/locus-real-estate",
    liveUrl: "https://locus-estate.vercel.app",
    duration: "3 months",
    description: "A modern real estate platform with an AI voice agent for each property, virtual tours and interactive listings.",
    overview: "Locus is a real estate platform that allows buyers to explore properties with AI powered voice agents and immersive virtual tours. Instead of scrolling through static descriptions, buyers can ask live questions regarding property taxes, HOA rules, neighborhood safety, and renovation history.",
    features: [
      "AI Voice Agent for real-time natural language property tours",
      "Interactive 3D floor plan explorer & neighborhood amenities radar",
      "Dynamic price estimator & mortgage breakdown calculator",
      "Automated appointment scheduling directly with property managers",
      "Serverless Neon PostgreSQL connection pooling for high concurrency"
    ],
    techStackDetails: [
      { name: "Next.js 14 App Router", role: "SSR, React Server Components, Streaming SSR" },
      { name: "Prisma ORM", role: "Type-safe database querying & automated schema migrations" },
      { name: "PostgreSQL (Neon)", role: "Serverless relational storage with branch databases" },
      { name: "OpenAI GPT-4o Audio", role: "Low-latency voice agent reasoning & speech synthesis" },
      { name: "Tailwind CSS", role: "Responsive UI styling & design token system" }
    ],
    screenshots: [
      "/images/projects/locus.webp",
      "/images/projects/locus-pool.webp",
      "/images/projects/locus-interior.webp"
    ],
    learnings: [
      "Optimizing streaming voice WebSocket connections to reduce speech turnaround latency to under 350ms.",
      "Structuring Prisma queries with selective field projections to avoid over-fetching large property polygons.",
      "Designing responsive high-fidelity cards that retain performance across mobile web."
    ]
  },
  {
    slug: "cohortx",
    title: "CohortX",
    tagline: "Social Platform for Projects",
    category: "Web",
    featured: true,
    coverImage: "/images/projects/cohortx.webp",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/manish/cohortx-platform",
    liveUrl: "https://cohortx.dev",
    duration: "2 months",
    description: "A developer collaboration hub where creators showcase WIP projects, find co-builders, and exchange real-time peer feedback.",
    overview: "CohortX solves the isolation of solo building. It enables engineers and designers to launch project milestones, gather verified peer reviews, form cross-discipline teams, and track shipping velocity in a gamified community.",
    features: [
      "Milestone-based project progress boards with live Git commit feeds",
      "Smart matchmaking algorithm pairing frontend, backend, and designers",
      "Peer review bounties and verified karma reputation system",
      "Real-time team chat powered by Socket.io"
    ],
    techStackDetails: [
      { name: "React 18", role: "Component state, rich interactive dashboard" },
      { name: "Node.js & Express", role: "RESTful API microservices & JWT auth" },
      { name: "PostgreSQL", role: "Normalized relational schema for users, cohorts, and reviews" }
    ],
    screenshots: ["/images/projects/cohortx.webp"],
    learnings: [
      "Handling real-time presence indicators efficiently without overloading the Node.js event loop.",
      "Implementing database row-level security for private draft project workspaces."
    ]
  },
  {
    slug: "smart-fan",
    title: "Smart Fan (IoT)",
    tagline: "IoT based Automated Fan System",
    category: "IoT",
    featured: true,
    coverImage: "/images/projects/smart-fan.webp",
    tags: ["ESP8266", "DHT11", "IoT", "C++", "WebSockets"],
    githubUrl: "https://github.com/manish/esp8266-smart-fan",
    liveUrl: "https://github.com/manish/esp8266-smart-fan",
    duration: "1 month",
    description: "Hardware-software integrated fan system that dynamically adjusts speed based on ambient temperature and room occupancy.",
    overview: "Built using an ESP8266 NodeMCU microcontroller connected to a DHT11 temperature/humidity sensor and PIR motion detector. The fan continuously computes thermal heat indices, adjusts PWM duty cycles to regulate fan speed silently, and broadcasts telemetry to a local web dashboard via WebSockets.",
    features: [
      "Adaptive PWM motor control preventing sudden power spikes",
      "PIR motion auto-sleep mode saving up to 40% idle power consumption",
      "Embedded lightweight HTTP/WebSocket server running directly on ESP8266",
      "Real-time sensor telemetry graph with temperature and humidity alerts"
    ],
    techStackDetails: [
      { name: "ESP8266 NodeMCU", role: "Main microcontroller handling hardware interrupts" },
      { name: "DHT11 Sensor", role: "High-precision temperature and humidity sensing" },
      { name: "Embedded C++ (Arduino)", role: "Firmware code with watchdog timers" },
      { name: "WebSockets", role: "Sub-50ms telemetry streaming to browser dashboard" }
    ],
    screenshots: ["/images/projects/smart-fan.webp"],
    learnings: [
      "Managing ADC noise and debounce on PIR sensors through software moving-average filters.",
      "Ensuring non-blocking loop execution on the ESP8266 to prevent Wi-Fi watchdog timeout resets."
    ]
  },
  {
    slug: "portfolio-3d",
    title: "3D Portfolio (WIP)",
    tagline: "Interactive 3D Portfolio (WebGL)",
    category: "3D",
    featured: true,
    coverImage: "/images/projects/portfolio-3d.webp",
    tags: ["Three.js", "Next.js", "3D", "WebGL", "R3F"],
    githubUrl: "https://github.com/manish/3d-portfolio-wip",
    liveUrl: "https://github.com/manish/3d-portfolio-wip",
    duration: "In Progress",
    description: "An experimental 3D voxel sandbox portfolio allowing visitors to explore an interactive floating island via browser WebGL.",
    overview: "Built to explore the capabilities of WebGL, React Three Fiber, and custom GLSL vertex shaders. Visitors can control a character in a low-poly voxel landscape, inspect trophy items that open project case studies, and trigger dynamic day/night lighting cycles.",
    features: [
      "Custom voxel chunk renderer with instanced mesh optimization",
      "Dynamic directional sunlight with soft PCF shadow mapping",
      "Interactive collision detection and jump mechanics",
      "Audio-reactive particle effects around portal gateways"
    ],
    techStackDetails: [
      { name: "Three.js", role: "Core WebGL rendering engine and scene graph" },
      { name: "React Three Fiber", role: "Declarative component composition for 3D objects" },
      { name: "Drei", role: "Camera controls, skybox, and particle helpers" }
    ],
    screenshots: ["/images/projects/portfolio-3d.webp"],
    learnings: [
      "Drastically reducing draw calls through InstancedMesh batching from 400+ calls down to 12.",
      "Managing memory leaks by explicitly disposing geometries, textures, and render targets upon unmount."
    ]
  },
  {
    slug: "webpilot",
    title: "WebPilot",
    tagline: "AI Web Automation",
    category: "AI",
    featured: false,
    coverImage: "/images/projects/webpilot.webp",
    tags: ["Python", "Next.js", "AI", "Playwright"],
    githubUrl: "https://github.com/manish/webpilot-agent",
    duration: "1.5 months",
    description: "Autonomous browser assistant that translates plain English instructions into resilient web scraping and multi-step form execution.",
    overview: "WebPilot utilizes vision models and Playwright DOM extraction to reason about web pages. Users describe a goal (e.g. 'Extract all apartment listings under $2000 in Brooklyn with in-unit laundry') and WebPilot clicks, scrolls, navigates pagination, and compiles a structured CSV.",
    features: [
      "Natural language goal interpreter using multimodal vision",
      "DOM simplification pipeline reducing token costs by 75%",
      "Automatic retry with self-healing selector logic when layouts change"
    ],
    techStackDetails: [
      { name: "Python & FastAPI", role: "Async worker queue and Playwright orchestrator" },
      { name: "Next.js & Tailwind", role: "Real-time task monitor and streaming execution logs" }
    ],
    screenshots: ["/images/projects/webpilot.webp"],
    learnings: [
      "Handling dynamic single-page application hydration issues by waiting for network idle events.",
      "Preventing bot detection through human-like typing delays and realistic mouse curves."
    ]
  },
  {
    slug: "hermes-agent",
    title: "Hermes Agent",
    tagline: "AI Agent Platform",
    category: "AI",
    featured: false,
    coverImage: "/images/projects/hermes.webp",
    tags: ["Next.js", "AI", "LangChain", "TypeScript"],
    githubUrl: "https://github.com/manish/hermes-agent",
    duration: "2 months",
    description: "Multi-agent orchestration platform that executes complex research, synthesis, and code generation pipelines.",
    overview: "Hermes decomposes high-level engineering tasks into a DAG of sub-tasks assigned to specialized agent personas (Researcher, Architect, Coder, Critic). Agents critique and refine each other's outputs until rigorous acceptance criteria are satisfied.",
    features: [
      "Graph-based agent state machine with human-in-the-loop checkpoints",
      "Integrated Python code sandbox for safe execution testing",
      "Exportable markdown whitepapers with cited sources"
    ],
    techStackDetails: [
      { name: "Next.js 14", role: "Interactive node graph editor & real-time trace visualizer" },
      { name: "LangChain & Claude API", role: "Agent reasoning engines with tool calling" }
    ],
    screenshots: ["/images/projects/hermes.webp"],
    learnings: [
      "Preventing infinite reasoning loops by bounding recursive depth and implementing strict timeout circuits.",
      "Preserving state across long-running agent threads with Redis cache persistence."
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-i-built-locus",
    title: "How I Built Locus From Idea to MVP",
    summary: "Complete journey from idea to a working real estate platform with AI-powered tours.",
    publishedAt: "Oct 20, 2026",
    readingTime: "8 min read",
    thumbnail: "/images/blog/blog-locus.webp",
    category: "Web Dev",
    tags: ["Next.js", "Prisma", "AI", "PostgreSQL"],
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
I wanted to create a platform where each property has an AI agent that can answer questions and give a virtual tour. Traditional real estate sites force buyers to read generic bullet points and email unresponsive agents. With Locus, visitors converse directly with an AI trained on specific HOA documents, school districts, and property specs.

\`\`\`typescript
// Example Prisma query for property retrieval
const properties = await prisma.property.findMany({
  where: {
    location: "Greater Noida",
    verified: true,
  },
  include: {
    amenities: true,
    virtualTour: true,
  },
});
\`\`\`

### 2. Planning
The architecture required three decoupled components:
1. **Catalog Engine:** High-performance SSR pages in Next.js 14.
2. **Audio Broker:** WebSocket server connecting browser WebRTC audio directly to OpenAI's real-time API.
3. **Storage & Database:** Serverless Postgres hosted on Neon with connection pooling.

### 3. Tech Stack Decisions
Why Prisma + Neon Postgres? With serverless Next.js, traditional database connections can easily exhaust connection limits. Neon's HTTP proxy driver and Prisma's lightweight client ensure zero connection spikes even during traffic surges.

### 4. Development & Iterations
Building the voice tour required streaming audio in 24kHz chunks. Instead of waiting for full sentences to generate, the client receives PCM audio packets and immediately buffers them into an HTML5 Web Audio AudioContext node graph.

### 5. Challenges Overcome
The primary bottleneck was echo cancellation—when the AI spoke through the user's speakers, the microphone picked it up and interrupted the AI. We solved this using browser WebRTC native Acoustic Echo Cancellation (AEC) constraints.

### 6. Key Learnings
Always decouple heavy AI inference from the primary UI render loop. Keep fallback text chat available for low-bandwidth mobile connections.

### 7. Next Steps
Integrating 360-degree Gaussian splats so buyers can walk through rooms in photorealistic 3D directly inside their web browser.
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
`
  },
  {
    slug: "my-iot-journey",
    title: "My IoT Learning Journey",
    summary: "From simple breadboard sensors to automated smart embedded systems.",
    publishedAt: "Oct 05, 2026",
    readingTime: "6 min read",
    thumbnail: "/images/blog/blog-iot.webp",
    category: "IoT",
    tags: ["IoT", "ESP8266", "Hardware", "Sensors"],
    toc: [
      { id: "getting-started", title: "1. Getting Started" },
      { id: "microcontrollers", title: "2. Picking the ESP8266" },
      { id: "web-bridge", title: "3. Bridging Hardware to the Web" }
    ],
    content: `
My journey into IoT began during my second year of B.Tech CSE (IoT) at NIET. Moving from pure software into physical microcontrollers taught me the importance of memory constraints, interrupt routines, and hardware debounce.
`
  },
  {
    slug: "exploring-generative-ai-tools",
    title: "Exploring Generative AI Tools",
    summary: "How I use AI tools in my daily software engineering workflow.",
    publishedAt: "Sep 28, 2026",
    readingTime: "4 min read",
    thumbnail: "/images/blog/blog-ai.webp",
    category: "AI",
    tags: ["AI", "LLM", "Productivity"],
    toc: [
      { id: "daily-tools", title: "1. My Daily Toolchain" },
      { id: "prompt-patterns", title: "2. Effective Prompt Patterns" }
    ],
    content: `
How modern AI pair-programming assistants streamline boilerplate generation while keeping software design decisions in human hands.
`
  },
  {
    slug: "threejs-for-3d-portfolio",
    title: "Three.js for 3D Portfolio",
    summary: "Creating interactive 3D web experiences without crushing frame rates.",
    publishedAt: "Sep 20, 2026",
    readingTime: "6 min read",
    thumbnail: "/images/blog/blog-three.webp",
    category: "3D",
    tags: ["Three.js", "WebGL", "3D", "Performance"],
    toc: [
      { id: "canvas-basics", title: "1. WebGL & Three.js" },
      { id: "optimizations", title: "2. Draw Call Optimizations" }
    ],
    content: `
Deep dive into voxel rendering, InstancedMesh usage, and keeping 60 FPS across mobile and low-end laptop GPUs.
`
  }
];

export const TWEETS: Tweet[] = [
  {
    id: "tweet-1",
    content: "Pushed a new feature to Locus 🚀 The AI property tour is now working smoothly!",
    relativeTime: "2h ago",
    category: "Updates",
    likesCount: 12,
    commentsCount: 3
  },
  {
    id: "tweet-2",
    content: "Exploring Three.js for my 3D portfolio. This is going to be super fun 🎮",
    relativeTime: "1d ago",
    category: "Projects",
    likesCount: 24,
    commentsCount: 5
  },
  {
    id: "tweet-3",
    content: "Sometimes you just have to keep building. Little daily progress still counts.",
    relativeTime: "3d ago",
    category: "Learning",
    likesCount: 18,
    commentsCount: 2
  },
  {
    id: "tweet-4",
    content: "Working on an IoT project today. Sensors + automation is so fascinating! 💡",
    relativeTime: "4d ago",
    category: "Projects",
    likesCount: 20,
    commentsCount: 4
  }
];

export const FILMS: Film[] = [
  {
    slug: "locus-full-demo",
    title: "Locus — Full Demo",
    subtitle: "AI Powered Real Estate Platform",
    duration: "12 min",
    thumbnail: "/images/films/film-locus.webp",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Project Demos",
    featured: true
  },
  {
    slug: "cohortx-walkthrough",
    title: "CohortX — Project Walkthrough",
    subtitle: "Social Platform for Projects",
    duration: "15 min",
    thumbnail: "/images/films/film-cohortx.webp",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Project Demos",
    featured: false
  },
  {
    slug: "smart-fan-iot-demo",
    title: "Smart Fan — IoT Project",
    subtitle: "Complete Working & Hardware Explanation",
    duration: "8 min",
    thumbnail: "/images/films/film-smartfan.webp",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Tutorials",
    featured: false
  }
];

export const STACK_ITEMS: StackItem[] = [
  // Frontend
  { id: "nextjs", name: "Next.js", symbol: "NX", category: "Frontend", proficiency: "Expert", experience: "2+ Years", color: "#ffffff", shippedBuilds: ["Locus", "3D Portfolio", "Hermes Agent"] },
  { id: "react", name: "React", symbol: "⚛", category: "Frontend", proficiency: "Expert", experience: "3+ Years", color: "#61dafb", shippedBuilds: ["CohortX", "Locus", "WebPilot"] },
  { id: "typescript", name: "TypeScript", symbol: "TS", category: "Frontend", proficiency: "Expert", experience: "2+ Years", color: "#3178c6", shippedBuilds: ["All Projects"] },
  { id: "tailwind", name: "Tailwind CSS", symbol: "≋", category: "Frontend", proficiency: "Expert", experience: "2+ Years", color: "#38bdf8", shippedBuilds: ["Locus", "CohortX", "Portfolio"] },
  
  // Backend
  { id: "nodejs", name: "Node.js", symbol: "⬡", category: "Backend", proficiency: "Expert", experience: "2+ Years", color: "#68a063", shippedBuilds: ["CohortX", "Smart Fan Server"] },
  { id: "express", name: "Express.js", symbol: "ex", category: "Backend", proficiency: "Advanced", experience: "2 Years", color: "#ffffff", shippedBuilds: ["CohortX APIs"] },
  { id: "prisma", name: "Prisma", symbol: "▲", category: "Backend", proficiency: "Expert", experience: "2 Years", color: "#5a67d8", shippedBuilds: ["Locus", "CohortX"] },
  { id: "postgresql", name: "PostgreSQL", symbol: "🐘", category: "Backend", proficiency: "Expert", experience: "2 Years", color: "#336791", shippedBuilds: ["Locus", "CohortX"] },
  
  // Tools & Others
  { id: "git", name: "Git", symbol: "⎇", category: "Tools & Others", proficiency: "Expert", experience: "3+ Years", color: "#f05032", shippedBuilds: ["All Repositories"] },
  { id: "docker", name: "Docker", symbol: "🐳", category: "Tools & Others", proficiency: "Proficient", experience: "1.5 Years", color: "#2496ed", shippedBuilds: ["Local Microservices"] },
  { id: "linux", name: "Linux", symbol: "🐧", category: "Tools & Others", proficiency: "Advanced", experience: "2 Years", color: "#fcc624", shippedBuilds: ["Raspberry Pi & Servers"] },
  { id: "vscode", name: "VS Code", symbol: "⌨", category: "Tools & Others", proficiency: "Expert", experience: "3+ Years", color: "#007acc", shippedBuilds: ["Primary IDE"] }
];
