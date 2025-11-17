import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import { profile } from '../data/profile'
import { getHighlightedPapers, papers } from '../data/papers'
import { projects } from '../data/projects'

const featuredPapers = getHighlightedPapers().slice(0, 3)
const playgroundPreview = projects.slice(0, 3)

const quickLinks = [
  {
    title: 'Research',
    description: 'Papers, experiments, and collaborators.',
    path: '/research',
    items: featuredPapers.map((paper) => paper.title),
  },
  {
    title: 'Blog',
    description: 'Long-form notes, annotated links, and idea dumps.',
    path: '/blog',
    items: ['MDX pipeline being wired', 'Tag-aware filters', 'Link posts with external URLs'],
  },
  {
    title: 'Playground',
    description: 'Small web experiments, anime/game picks, tooling.',
    path: '/playground',
    items: playgroundPreview.map((project) => project.name),
  },
]

type Activity = {
  date: string
  type: 'Paper' | 'Project'
  title: string
  status: string
}

const latestPaper = [...papers].sort((a, b) => b.year - a.year)[0]
const latestProject = playgroundPreview[0]

const recentActivity: Activity[] = [
  latestPaper && {
    date: String(latestPaper.year),
    type: 'Paper' as const,
    title: latestPaper.title,
    status: latestPaper.venue,
  },
  latestProject && {
    date: latestProject.period ?? '—',
    type: 'Project' as const,
    title: latestProject.name,
    status: latestProject.description,
  },
].filter(Boolean) as Activity[]

function Home() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 rounded-[32px] border border-border/40 bg-gradient-to-br from-bg via-bg-alt to-bg p-10 shadow-soft lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.5em] text-accent">home base</p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-text-main">
              {profile.name} — {profile.tagline}
            </h1>
            <p className="text-text-muted">{profile.bio}</p>
            <p className="text-text-muted">
              Research areas: {profile.researchAreas.join(' · ')}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/research"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-bg transition hover:bg-primary-soft"
            >
              View Research
            </Link>
            <Link
              to="/blog"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-text-main hover:border-accent hover:text-accent"
            >
              Visit Blog
            </Link>
          </div>
        </div>
        <div className="rounded-[24px] border border-border/30 bg-gradient-to-br from-primary/30 via-bg-alt to-accent/20 p-6">
          <div className="h-full rounded-2xl border border-white/10 bg-grid-glow bg-[length:120px_120px] p-6">
            <div className="h-full rounded-[20px] border border-white/20 bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center text-center text-text-muted">
              Future anime-style illustration slot
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="navigation"
        title="Quick links"
        description="Jump to the sections that will soon gain full content. Each card previews the modules slated for build-out."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group rounded-2xl border border-border/30 bg-bg-alt/60 p-6 transition hover:border-accent/60"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-text-main">{item.title}</h3>
                <span className="text-xs uppercase tracking-[0.4em] text-accent/70">soon</span>
              </div>
              <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-text-muted">
                {item.items.map((entry) => (
                  <li key={entry} className="flex items-center gap-2">
                    <span className="text-accent">•</span>
                    {entry}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="updates"
        title="Recent activity"
        description="Auto-generated snippets sourced from the shared papers/projects data layer."
      >
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div
              key={`${activity.date}-${activity.title}`}
              className="flex flex-col gap-2 rounded-2xl border border-border/30 bg-bg/60 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-sm text-text-muted">{activity.date}</p>
                <p className="text-lg font-semibold text-text-main">{activity.title}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span className="rounded-full border border-border px-3 py-1 text-text-main">
                  {activity.type}
                </span>
                <span>{activity.status}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Home
