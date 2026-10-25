# 🎮 Manish.dev — The Builder's World
> **A 2D Minecraft-Inspired Developer Portfolio & Engineering Platform**  
> Engineered by **Manish Kumar** (B.Tech CSE IoT @ NIET)  

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Web Audio API](https://img.shields.io/badge/Audio-Web_Audio_API-36c653?style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🧭 Overview

**Manish.dev** is a high-performance personal developer portfolio built with the visual atmosphere of a handcrafted 2D Minecraft world, paired with senior software engineering rigor.

- **Zero 3D Overhead:** Pure 2D HTML/CSS and WebP textures — instant sub-second page loads without WebGL battery drain.
- **Tactile Sound Engine:** Zero-dependency synthetic Web Audio API click effects (`click-wood`) and inventory pop effects (`pop-item`) with mute persistence.
- **Dual Typography:** Retro pixel display font (`Pixelify Sans`) strictly for gaming headers and badges, paired with clean, readable `Inter` for long-form case studies and articles.
- **Full Relational Graph:** Shipped builds are interconnected with technical articles, video demos, and documentation.

---

## 🗺️ Complete 10-Page Route Topology

| Route | Minecraft Zone | Features & Scope |
| :--- | :--- | :--- |
| **`/`** | **Spawn / Home** | Twilight forest panorama, seated character, hanging signs with chain physics, quick stats shelf, 3/4 featured projects, 1/4 about sidebar, 4 lower panels. |
| **`/about`** | **Player Profile** | Interactive 5-stage timeline (`2022` ➔ `Now`) with glowing year badges, plus `Skills`, `Education`, and `Interests` tabs. |
| **`/projects`** | **The Build Room** | 6-build gallery (Locus AI, CohortX, Smart Fan IoT, 3D Portfolio, WebPilot, Hermes Agent) with category filter pills and live search. |
| **`/projects/[slug]`** | **Deep Case Study** | Full-width showcase hero, live demo and GitHub buttons, tabbed breakdown (Overview, Features, Tech Stack, Screenshots carousel, Learnings). |
| **`/blog`** | **The Library** | 5 comprehensive engineering articles with reading times, tags, and category filters (`Web Dev`, `AI`, `IoT`, `DSA`). |
| **`/blog/[slug]`** | **Enchanted Reader** | Two-column reader layout with sticky Table of Contents sidebar, syntax-highlighted code blocks, and one-click copy buttons. |
| **`/tweets`** | **Town Square** | Personal micro-thought stream with relative timestamps, category tags, and interactive like counters with sound feedback. |
| **`/films`** | **The Cinema Room** | Featured video showcase card, secondary video grid, duration badges, and accessible modal player with `Escape` key dismissal. |
| **`/stack`** | **Crafting Inventory** | Categorized shelves (`Frontend`, `Backend`, `Tools & Others`) with interactive Minecraft purple lore tooltips displaying experience and shipped builds. |
| **`/contact`** | **Spawn Outpost** | Quick social channels (GitHub, LinkedIn, Twitter, Email), portal navigation tiles, and interactive Courier Dispatcher note sender. |
| **`/resume`** | **Verified Resume** | Complete developer resume with one-click print / verified PDF download action. |
| **`/docs`** | **Technical Archives** | Engineering setup guides, serverless connection pooling patterns, and ESP8266 + DHT11 hardware schematics. |

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router with Turbopack)
- **Language:** TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v4 + Custom Minecraft Bevel Classes (`globals.css`)
- **Fonts:** Google Fonts (`Pixelify Sans`, `Inter`, `Geist Mono`)
- **Audio:** Web Audio API (Synthetic triangle & sine wave oscillator nodes)
- **Icons:** Custom SVG Vector Icons + Lucide React
- **Data Engine:** Typed Static Data Modules (`portfolioData.ts`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.17+` or `v20+`
- npm `v9+` or `v10+`

### Installation
```bash
# Clone the repository
git clone https://github.com/manish-3d/protfolio-manish.git

# Enter the project directory
cd protfolio-manish

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the world.

### Production Build
```bash
# Verify type safety and static site generation
npm run build

# Start the production server
npm run start
```

---

## 📜 Architectural Blueprints

For in-depth architectural specifications, consult the master blueprints:
- **[AGENTS.md](AGENTS.md)** — Master execution playbook and non-negotiable directives
- **[docs/agent_phases/](docs/agent_phases/)** — Modular 9-phase planning specifications

---

## 👤 Author

**Manish Kumar**  
- B.Tech CSE (IoT) @ Noida Institute of Engineering and Technology (NIET)  
- GitHub: [@manish-3d](https://github.com/manish-3d)  
- Portfolio: [Manish.dev](https://github.com/manish-3d/protfolio-manish)  

---

*Crafted with passion for Web, IoT & Systems. Inspired by Minecraft.*
