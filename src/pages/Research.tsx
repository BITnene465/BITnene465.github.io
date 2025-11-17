import Section from '../components/ui/Section'

const highlightedPapers = [
  'Neuro-Symbolic Voice Atlas (NeurIPS spotlight)',
  'Latency-aware Diffusion Editors (ICLR)',
  'Counterfactual Graph Surgery (Under review)',
]

const publicationsByYear = [
  {
    year: 2025,
    entries: ['Graph-Guided Model Editing — drafting', 'Anime-Inspired Interfaces for LLM copilots — concept note'],
  },
  {
    year: 2024,
    entries: ['Sparse Reward Alignment Toolkit (NeurIPS workshop)', 'Composable Diffusion Controls (Preprint)'],
  },
]

const upcomingProjects = [
  { name: 'HoloBoard', summary: 'A shared whiteboard for agent+human research retros.' },
  { name: 'CelShade', summary: 'Anime-shaded avatars for conference posters.' },
  { name: 'Aurora Lab', summary: 'Physics-informed music visualizers.' },
]

function Research() {
  return (
    <div className="space-y-12">
      <Section
        eyebrow="overview"
        title="Research directions"
        description="Focus areas range from responsible model editing to creative tooling. These placeholders outline the copy & data hooks the real content will use later."
      >
        <ul className="space-y-3 text-text-muted">
          <li>• Model editing + evaluation frameworks grounded in graph reasoning.</li>
          <li>• Creative tooling that brings anime/game sensibilities to productivity software.</li>
          <li>• Human-in-the-loop pipelines for reproducible ML research.</li>
        </ul>
      </Section>

      <Section
        eyebrow="spotlight"
        title="Highlighted papers"
        description="A curated list will render here using PaperCard components in Step 4+."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {highlightedPapers.map((paper) => (
            <div key={paper} className="rounded-2xl border border-border/30 bg-bg-alt/50 p-4 text-sm text-text-muted">
              {paper}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="publications"
        title="All publications"
        description="Grouped by year; later, this will map onto data from data/papers.ts."
      >
        <div className="space-y-6">
          {publicationsByYear.map((group) => (
            <div key={group.year} className="space-y-3">
              <h3 className="text-lg font-semibold text-text-main">{group.year}</h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {group.entries.map((entry) => (
                  <li key={entry} className="flex items-start gap-2">
                    <span className="text-accent">◆</span>
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="projects"
        title="Applied projects"
        description="Placeholder cards describing upcoming sections that will use ProjectCard components."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {upcomingProjects.map((project) => (
            <div key={project.name} className="rounded-2xl border border-border/30 bg-bg/60 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-primary/70">concept</p>
              <h3 className="mt-2 text-xl font-semibold text-text-main">{project.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{project.summary}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Research
