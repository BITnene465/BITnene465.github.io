import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '../components/ui/Section'
import { profile } from '../data/profile'
import { getHighlightedPapers, papers } from '../data/papers'
import { projects } from '../data/projects'
import { cardHover, cardTransition } from '../lib/motion'
import { buttonVariants } from '../components/ui/Button'
import { cardBaseClass } from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import { cn } from '../lib/utils'

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

const MotionLink = motion(Link)

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
      <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-soft/60 backdrop-blur-2xl">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-primary/25 opacity-80"
          aria-hidden
        />
        <div className="relative grid gap-8 p-10 lg:grid-cols-2">
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
            <Link to="/research" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
              View Research
            </Link>
            <Link
              to="/blog"
              className={buttonVariants({ variant: 'ghost', size: 'lg' })}
            >
              Visit Blog
            </Link>
          </div>
          </div>
          <div className="rounded-[24px] border border-white/20 bg-white/5 p-6 shadow-inner">
            <div className="h-full rounded-2xl border border-white/10 bg-grid-glow bg-[length:120px_120px] p-6 backdrop-blur">
              <div className="h-full rounded-[20px] border border-white/30 bg-gradient-to-b from-white/20 to-transparent flex items-center justify-center text-center text-text-muted">
                Future anime-style illustration slot
              </div>
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
            <MotionLink
              key={item.title}
              to={item.path}
              className={cn(
                cardBaseClass({ variant: 'glass', padding: 'lg' }),
                'group hover:border-accent/60'
              )}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              whileTap="hover"
              transition={cardTransition}
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
            </MotionLink>
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
            <motion.div
              key={`${activity.date}-${activity.title}`}
              className={cn(
                cardBaseClass({ variant: 'default', padding: 'md' }),
                'flex flex-col gap-2 md:flex-row md:items-center md:justify-between'
              )}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              transition={cardTransition}
            >
              <div>
                <p className="text-sm text-text-muted">{activity.date}</p>
                <p className="text-lg font-semibold text-text-main">{activity.title}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <Tag tone="outline" size="sm">
                  {activity.type}
                </Tag>
                <span>{activity.status}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Home
