export interface CohortxDocSection {
  id: string;
  number: string;
  title: string;
  badge: "Verified" | "Architecture" | "Data Model" | "Proposal" | "Security" | "Setup";
  badgeColor: string;
  summary: string;
  content: string[];
  codeBlock?: {
    language: string;
    filename: string;
    code: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    type: "info" | "tip" | "warning";
    title: string;
    text: string;
  };
}

export const COHORTX_META = {
  title: "CohortX — Developer Proof-of-Work Network",
  tagline: "Antigravity Handoff for Code-Verified Project Documentation",
  version: "v1.0 Production Specification",
  preparedDate: "27 October 2026",
  liveUrl: "https://cohort-x-five.vercel.app/feed",
  githubUrl: "https://github.com/manish-3d",
  projectUrl: "/projects/cohortx",
  author: "Manish Kumar (B.Tech CSE - IoT, NIET)",
  overview: "CohortX is envisioned as a developer proof-of-work network designed to make real engineering work legible, support deliberate practice, and connect credible evidence to collaborators and career opportunities. Built with React, Node.js, Express, and PostgreSQL."
};

export const COHORTX_SECTIONS: CohortxDocSection[] = [
  {
    id: "product-intent",
    number: "01",
    title: "Product Intent & Target Users",
    badge: "Architecture",
    badgeColor: "#36C653",
    summary: "A focused product thesis to guide documentation and future discovery.",
    content: [
      "CohortX is envisioned as a developer proof-of-work network. It should help developers make real work legible, improve through deliberate practice, and connect credible evidence to collaborators or opportunities.",
      "The direction arose from concern that a generic social network would be difficult to distinguish from established platforms. The user wants CohortX to solve a real problem for developers and to be compelling as a full-stack portfolio project.",
      "Core goals: Make work discoverable, make claims inspectable, support improvement, make useful connections, and be a credible portfolio architecture."
    ],
    callout: {
      type: "tip",
      title: "Product Thesis",
      text: "Turn a developer's work into credible, explainable evidence of skill, connect that evidence to learning and opportunity, and help the developer keep improving."
    }
  },
  {
    id: "target-users",
    number: "02",
    title: "Target Users and Problems",
    badge: "Architecture",
    badgeColor: "#F5C66B",
    summary: "Product hypotheses from conversation context and user pain points.",
    content: [
      "Developers building skills: Work and practice are scattered across repositories, coding sites, learning tools, and social platforms.",
      "Early-career developers: Resumes claim 'knows React' without showing what was built or how skill developed. CohortX provides an inspectable evidence trail.",
      "Hiring teams: Reviewers open disconnected links and struggle to interpret relevance or quality.",
      "Peers & collaborators: Finding people actively building in a relevant area can be difficult."
    ],
    table: {
      headers: ["User Group", "Problem to Solve", "Useful Outcome / Evidence"],
      rows: [
        ["Developers Building Skills", "Scattered work across repos, social sites, coding tools.", "One profile linking work, activity, projects, and learning evidence with dates."],
        ["Early-Career Developers", "Resumes lack verifiable demonstration of abilities.", "Portfolio makes projects, contributions, and demonstrated skills inspectable."],
        ["Hiring Teams", "Reviewers open disconnected links with no context.", "Concise evidence trail supports review while leaving evaluation to reviewer."],
        ["Peers & Collaborators", "Hard to find people actively building in relevant tech.", "Interest and project discovery leads to active collaboration and feedback."]
      ]
    }
  },
  {
    id: "four-pillars",
    number: "03",
    title: "Four Product Pillars",
    badge: "Architecture",
    badgeColor: "#8DE6A0",
    summary: "The Build / Prove / Improve / Connect target framework.",
    content: [
      "BUILD: Create and share meaningful engineering work (Project records, repositories, demos, posts, collaborative workspaces, build sprints).",
      "PROVE: Make work and skill claims easier to inspect (Linked profiles, contribution history, project evidence, challenge results, provenance and dates).",
      "IMPROVE: Turn practice and feedback into a next action (Interview Lab, practice sessions, assessment reports, learning recommendations).",
      "CONNECT: Bring people, feedback, mentorship, and opportunities together (Profiles, messaging, community, jobs, opportunity matching, hiring workflows)."
    ]
  },
  {
    id: "feature-map",
    number: "04",
    title: "Feature Map & Status Boundaries",
    badge: "Verified",
    badgeColor: "#36C653",
    summary: "Classification of feed, profiles, projects, messaging, jobs, and streaming.",
    content: [
      "Every area is audited under strict status vocabulary: Implemented (traced and runnable), Partial (some paths exist), Planned (intent only), Not found (searched, no implementation), or Unverified."
    ],
    table: {
      headers: ["Platform Area", "Conversation Context", "Evidence to Verify", "Status"],
      rows: [
        ["Feed / Posts", "Platform feed, cross-posting discussed", "Post schema, create/list endpoints, feed query", "Repository-Verified"],
        ["Profiles", "Identity and proof of work", "Profile model/routes, linked accounts, summaries", "Repository-Verified"],
        ["Projects", "Showcase and milestone build activity", "Project CRUD, repo links, uploads, ownership", "Repository-Verified"],
        ["Messaging", "Platform direct & group messaging", "Message models, sockets/polling, read state", "Partial / In-Flight"],
        ["Jobs / Opportunities", "Hiring usefulness and job matching", "Job records, search, applications, recruiter roles", "Planned Direction"],
        ["Live Streaming", "Relay sessions to YouTube/Twitch", "MediaMTX/SRS, publisher/subscriber protocol", "Proposed Proposal"]
      ]
    }
  },
  {
    id: "stack-evidence",
    number: "05",
    title: "Historical Stack Clues & Verification",
    badge: "Setup",
    badgeColor: "#F5C66B",
    summary: "Verifying runtime dependencies across React, Node.js, Express, and PostgreSQL.",
    content: [
      "React: Component framework for responsive dashboard client.",
      "Node.js & Express: REST microservice architecture with JWT authorization middleware.",
      "Prisma ORM & PostgreSQL: Relational database schema with user, post, and project entities.",
      "Neon PostgreSQL: Serverless relational database host."
    ],
    codeBlock: {
      language: "typescript",
      filename: "middleware/auth.ts",
      code: `import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    (req as any).user = user;
    next();
  });
}`
    }
  },
  {
    id: "security-trust",
    number: "06",
    title: "Security, Privacy, and Trust",
    badge: "Security",
    badgeColor: "#36C653",
    summary: "Authentication, secret encryption, webhook validation, and user safety controls.",
    content: [
      "Authentication: Stateless JWT sessions with bcrypt password hashing (salt rounds = 10).",
      "Record Ownership: Strict authorization checks verifying author IDs before allowing update or delete mutations.",
      "Secrets Protection: Database credentials and JWT secrets stored in protected environment variables; never exposed to browser bundles."
    ]
  }
];
