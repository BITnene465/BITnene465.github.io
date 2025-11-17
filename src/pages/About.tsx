import Section from '../components/ui/Section'

const values = [
  { title: 'Kind rigor', description: 'Pair technical depth with empathy for collaborators.' },
  { title: 'Playable research', description: 'Prototype ideas quickly so others can “press start”.' },
  { title: 'Document the path', description: 'Treat every project as a chance to leave better notes.' },
]

const timeline = [
  { year: '2025', title: 'Independent researcher', description: 'Exploring graph-based model editing.' },
  { year: '2023', title: 'ML Engineer @ Aurora Lab', description: 'Led creative tooling initiatives.' },
  { year: '2021', title: 'M.S. BIT', description: 'Studied trustworthy optimization.' },
]

const externalLinks = [
  { label: 'CV (PDF)', value: 'Coming soon' },
  { label: 'Google Scholar', value: 'scholar.google.com/DrTan' },
  { label: 'GitHub', value: 'github.com/BITnene465' },
  { label: 'X / Twitter', value: '@drtan_lab' },
  { label: 'Email', value: 'hi@drtan.lab' },
]

function About() {
  return (
    <div className="space-y-12">
      <Section
        eyebrow="profile"
        title="Dr. Tan"
        description="Researcher working across trustworthy ML, creative tooling, and anime/game-inspired storytelling."
      >
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-4 text-text-muted">
            <p>
              Currently exploring how graph reasoning can make model editing more controllable while designing
              playful surfaces for presenting research.
            </p>
            <p>
              Previous roles involved building ML platforms at Aurora Lab and mentoring student teams on
              applied ML for accessibility.
            </p>
          </div>
          <div className="rounded-2xl border border-border/30 bg-bg/60 p-4 text-sm text-text-muted">
            Avatar / illustration placeholder.
          </div>
        </div>
      </Section>

      <Section
        eyebrow="story"
        title="Path so far"
        description="This copy block will eventually pull from data/profile.ts."
      >
        <ol className="space-y-3 text-text-muted">
          {timeline.map((entry) => (
            <li key={entry.year} className="flex gap-4">
              <span className="text-sm text-text-muted w-16">{entry.year}</span>
              <div>
                <p className="text-text-main font-semibold">{entry.title}</p>
                <p className="text-sm">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="values"
        title="Principles"
        description="A quick bullet list for what matters in collaborations."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border border-border/30 bg-bg-alt/60 p-4">
              <h3 className="text-lg font-semibold text-text-main">{value.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="links"
        title="External profiles"
        description="Static placeholders referencing the upcoming profile data shape."
      >
        <dl className="grid gap-4 md:grid-cols-2">
          {externalLinks.map((link) => (
            <div key={link.label} className="rounded-xl border border-border/30 bg-bg/50 p-4">
              <dt className="text-xs uppercase tracking-[0.3em] text-text-muted">{link.label}</dt>
              <dd className="mt-2 text-sm text-text-main">{link.value}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  )
}

export default About
