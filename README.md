# BITnene465 — Personal Research Hub

This repository powers a personal academic website that combines a research portfolio, MDX-powered blog, and playful playground experiments. The stack is Vite + React + TypeScript with HashRouter, Tailwind CSS, and Framer Motion for subtle motion cues.

> ✅ Step 1 complete: Tailwind CSS is wired up with custom tokens that establish the base visual language for the site.

## Tech stack

- Vite + React 19 + TypeScript for the UI runtime
- React Router v6 (HashRouter) for GitHub Pages friendly routing
- Tailwind CSS with bespoke color tokens and Glassmorphism-friendly utilities
- Framer Motion (added in a later step) for page and card transitions
- MDX (coming soon) for authoring blog posts with frontmatter metadata

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`. Tailwind classes are available immediately; edit files under `src/` and HMR will refresh the browser.

## Styling system

- Color tokens: `primary`, `primary-soft`, `accent`, `accent-soft`, `bg`, `bg-alt`, `text-main`, `text-muted`, and `border` are defined in `tailwind.config.ts` for consistent usage.
- Typography: Space Grotesk (sans) and JetBrains Mono (mono) are loaded globally in `src/styles/globals.css`.
- Utility helpers: `.app-shell`, `.page-wrapper`, `.glass-panel`, and `.text-gradient` provide quick layout primitives while keeping markup lean.

## Directory map (initial draft)

```

  App.tsx              # temporary placeholder UI to prove Tailwind wiring
  main.tsx             # React entry point importing Tailwind globals
  styles/
    globals.css        # Tailwind directives + global tokens and helpers
```

This structure will expand with `/router`, `/pages`, `/components`, `/data`, `/lib`, and `/posts` as we progress through the implementation checklist.

## Authoring blog posts (preview)

The blog system lands in Step 5. The workflow is:

1. Create an MDX file under `src/posts/YYYY-MM-DD-slug.mdx`.
2. Fill out the frontmatter:

   ```mdx
   ---
   title: "Graph Games for Model Editing"
   date: "2025-11-17"
   tags: ["research", "note"]
   type: "article" # article / note / link
   summary: "How graph-guided interventions help models stay grounded."
   externalUrl: "" # required only for `link`
   ---
   ```

3. Write MDX content using React components as needed.
4. Commit + push; GitHub Actions will redeploy `main` to `<username>.github.io` automatically.

## Roadmap / implementation steps

1. ✅ Tailwind + global styles
2. ⏳ Router + layout skeleton
3. Home/Research/Blog/About/Playground scaffolding
4. Data layer (papers, projects, profile)
5. MDX pipeline + blog
6. Framer Motion transitions
7. UI polish (buttons, cards, typography)
8. Playground & blog content enrichments

Each step updates this README with fresh instructions and architecture notes so the codebase stays self-explanatory.
