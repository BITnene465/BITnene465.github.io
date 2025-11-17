# BITnene465 — Personal Research Hub

This repository powers a personal academic website that combines a research portfolio, MDX-powered blog, and playful playground experiments. The stack is Vite + React + TypeScript with HashRouter, Tailwind CSS, and Framer Motion for subtle motion cues.

> ✅ Step 6 complete: Framer Motion drives page transitions and card hover interactions.

## Tech stack

- Vite + React 19 + TypeScript for the UI runtime
- React Router v6 (HashRouter) for GitHub Pages friendly routing
- Tailwind CSS with bespoke color tokens and Glassmorphism-friendly utilities
- Framer Motion (added in a later step) for page and card transitions
- MDX + import.meta.glob pipeline for authoring blog posts with frontmatter metadata

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

## Directory map (snapshot)

```
src/
  App.tsx              # renders <AppRouter />
  main.tsx             # React entry importing Tailwind globals
  router/
    index.tsx          # HashRouter + route table
  components/
    layout/
      Layout.tsx       # Navbar + Outlet + Footer structure
      Navbar.tsx       # hash-friendly navigation links
      Footer.tsx       # deployment + ownership blurb
    ui/
      Section.tsx      # shared section shell
    content/
      PostCard.tsx     # reusable blog preview card
  pages/
    Home.tsx
    Research.tsx
    Blog.tsx
    PostDetail.tsx
    About.tsx
    Playground.tsx
  data/
    papers.ts         # Paper interface + sample records
    projects.ts       # Project interface + sample records
    profile.ts        # Profile interface + global bio/value data
  lib/
    mdx.ts            # import.meta.glob loader + helpers
    motion.ts         # Framer Motion variants shared across the app
  posts/
    *.mdx             # MDX sources with frontmatter
  styles/
    globals.css        # Tailwind directives + global tokens and helpers
```

Upcoming steps will add `/components/ui` polish, `/components/content` expansions, and motion presets.

## Routing & layout skeleton

- Routing uses `HashRouter` to keep GitHub Pages refreshes from 404ing. Routes are declared in `src/router/index.tsx` and include `/`, `/research`, `/blog`, `/blog/:slug`, `/about`, and `/playground`.
- `Layout.tsx` wraps every route via a parent `<Route element={<Layout />}>`. It renders `Navbar`, a spacious content container (`Outlet`), and `Footer`.
- `Navbar` defines internal links with `NavLink`, highlighting the active route using Tailwind tokens.
- Home, Research, and About now render live data from the shared `data/` directory so content changes stay centralized.
- Blog pulls real MDX content through `lib/mdx.ts`, including tag/type filters and slugged detail views.

## Section scaffolding

- `components/ui/Section.tsx` centralizes section titles, descriptions, eyebrow labels, and action slots. It also renders a glassy container for future cards/tables.
- Pages now follow the expected information architecture:
  - **Home**: hero block, quick links, recent activity timeline placeholders.
  - **Research**: overview copy, highlighted papers, yearly publications, and project tiles.
  - **Blog**: intro copy, dynamic tag/type filters, and MDX-backed post cards.
  - **About**: profile narrative, timeline, values, and external links.
  - **Playground**: anime/game shelf, experiments grid, and tools cloud.
- These stubs are now wired to the data layer, so refreshing the JSON-like files updates the UI without touching layout code.

## Data layer

- `src/data/papers.ts` defines the `Paper` interface, an initial `papers` array, and helpers `getHighlightedPapers()` + `groupPapersByYear()` used across Home/Research.
- `src/data/projects.ts` exposes the `Project` interface and `projects` array. Research and Home cards pull titles, roles, and tags straight from here.
- `src/data/profile.ts` keeps `Profile` metadata (bio, timeline, values, contacts). Home and About import it for hero copy, research areas, and external links.
- `src/lib/mdx.ts` collects every MDX module via `import.meta.glob`, normalizes the slug/date metadata, and exposes helpers (`getAllPosts`, `getPostBySlug`, `getAllTags`).
- `src/lib/motion.ts` centralizes animation variants/transitions like `pageTransition` and `cardHover` so Layout, PostCard, and other components share the same feel.
- When adding new entries, keep IDs unique and prefer ISO strings for dates/periods so later filters can sort reliably.

## Authoring blog posts

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

3. Write MDX content using standard markdown/React components.
4. `lib/mdx.ts` auto-discovers the file, so the Blog list and detail pages update instantly.
5. Commit + push; GitHub Actions will redeploy `main` to `<username>.github.io` automatically.

## Motion system

- `Layout` wraps the routed pages with `AnimatePresence` + `pageTransition` for subtle fade/slide transitions.
- Interactive cards (Home quick links, Research highlights, Blog PostCard, Playground lists, etc.) reuse `cardHover`/`cardTransition` for consistent lift + shadow behavior.
- Extend `lib/motion.ts` with new presets (e.g., `fadeIn`, `staggerChildren`) and consume them via `framer-motion`'s `motion.*` helpers to keep animations declarative.

## Roadmap / implementation steps

1. ✅ Tailwind + global styles
2. ✅ Router + layout skeleton
3. ✅ Home/Research/Blog/About/Playground scaffolding
4. ✅ Data layer (papers, projects, profile)
5. ✅ MDX pipeline + blog
6. ✅ Framer Motion transitions
7. UI polish (buttons, cards, typography)
8. Playground & blog content enrichments

Each step updates this README with fresh instructions and architecture notes so the codebase stays self-explanatory.
