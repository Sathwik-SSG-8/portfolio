# Sathwik's Portfolio

Personal portfolio site for Sathwik Gangapatnam. Next.js 15+ (App Router),
TypeScript, Tailwind CSS 3, Framer Motion, shadcn/ui. Deployed on Vercel.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## `CONTENT.md` — the site's content source

**What it is:** a plain-English fill-in file at the repo root holding every
piece of copy shown on the site — name, tagline, bio, rotating hero roles,
about-section paragraphs, contact subheading, services, skills, projects, and
the learning-journey timeline.

**Why it exists:** so the actual text of the site can be edited without
touching TypeScript. `src/data/content.ts` is the typed data the components
render from, but it's meant to be generated from `CONTENT.md`, not hand-edited.
`CONTENT.md` is the one place to look to see (and change) everything the site
says.

**How to use it:**

1. Edit `CONTENT.md` — change existing values, or add/remove `###` blocks for
   services, projects, and timeline entries (any number of each).
2. Ask an AI assistant (Claude Code, Cursor, Kiro, etc.) to **"sync content
   from CONTENT.md"**.
3. It updates `src/data/content.ts` to match, runs `npm run build` to verify,
   and shows you the diff before committing.

Full sync rules live in `AGENTS.md`.

## Deployment

Pushing to `origin/main` triggers an automatic Vercel deploy. Run
`npm run build` locally first — don't push a broken build.

Live: https://sathwik-ssg-portfolio.vercel.app/
