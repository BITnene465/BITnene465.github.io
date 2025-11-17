import Section from '../components/ui/Section'
import { profile } from '../data/profile'
import { getHighlightedPapers, groupPapersByYear } from '../data/papers'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { cardHover, cardTransition } from '../lib/motion'
import Tag from '../components/ui/Tag'
import { cardBaseClass } from '../components/ui/Card'
import { cn } from '../lib/utils'

const highlightedPapers = getHighlightedPapers()
const publicationsByYear = groupPapersByYear()
const upcomingProjects = projects

function Research() {
  return (
    <div className="space-y-12">
      <Section
        eyebrow="overview"
        title="Research directions"
        description={`${profile.name} currently splits time across ${profile.researchAreas.length} focus areas.`}
      >
        <ul className="space-y-3 text-text-muted">
          {profile.researchAreas.map((area) => (
            <li key={area} className="flex gap-2">
              <span className="text-accent">•</span>
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="spotlight"
        title="Highlighted papers"
        description="Top picks flagged in data/papers.ts with highlight = true."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {highlightedPapers.map((paper) => (
            <motion.article
              key={paper.id}
              className={cn(cardBaseClass({ variant: 'glass', padding: 'md' }), 'space-y-3')}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              transition={cardTransition}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{paper.venue}</p>
              <div>
                <h3 className="text-lg font-semibold text-text-main">{paper.title}</h3>
                <p className="text-sm text-text-muted">{paper.authors.join(', ')}</p>
              </div>
              {paper.summary && <p className="text-sm text-text-muted">{paper.summary}</p>}
              <div className="flex flex-wrap gap-2 text-xs text-text-muted">
                {paper.tags.map((tag) => (
                  <Tag key={tag} tone="outline" size="sm">
                    {tag}
                  </Tag>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="publications"
        title="All publications"
        description="Grouped by year directly from data/papers.ts."
      >
        <div className="space-y-6">
          {publicationsByYear.map((group) => (
            <div key={group.year} className="space-y-3">
              <h3 className="text-lg font-semibold text-text-main">{group.year}</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {group.entries.map((paper) => (
                  <motion.li
                    key={paper.id}
                    className={cn(
                      cardBaseClass({ variant: 'bordered', padding: 'sm' }),
                      'flex flex-col gap-1 bg-bg/40 md:flex-row md:items-center md:justify-between'
                    )}
                    variants={cardHover}
                    initial="rest"
                    whileHover="hover"
                    transition={cardTransition}
                  >
                    <span className="text-accent">◆</span>
                    <div className="flex-1 md:ml-2">
                      <p className="text-text-main font-semibold">{paper.title}</p>
                      <p className="text-xs text-text-muted">
                        {paper.authors.join(', ')} · {paper.venue}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-text-muted">
                      {paper.tags.slice(0, 2).map((tag) => (
                        <Tag key={`${paper.id}-${tag}`} tone="outline" size="sm">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="projects"
        title="Applied projects"
        description="Projects array from data/projects.ts, ready for richer cards later."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {upcomingProjects.map((project) => (
            <motion.article
              key={project.id}
              className={cn(cardBaseClass({ variant: 'default', padding: 'lg' }), 'space-y-3')}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              transition={cardTransition}
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-text-muted">
                <span>{project.role ?? 'Contributor'}</span>
                <span>{project.period ?? 'ongoing'}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-main">{project.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-text-muted">
                {(project.tags ?? []).map((tag) => (
                  <Tag key={`${project.id}-${tag}`} tone="outline" size="sm">
                    {tag}
                  </Tag>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Research
