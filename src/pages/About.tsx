import Section from '../components/ui/Section'
import { profile } from '../data/profile'

function About() {
  const contactLabelMap: Record<string, string> = {
    email: 'Email',
    github: 'GitHub',
    scholar: 'Google Scholar',
    twitter: 'X / Twitter',
  }

  const contactEntries = Object.entries(profile.contacts).filter(([, value]) => Boolean(value))

  return (
    <div className="space-y-12">
      <Section
        eyebrow="profile"
        title={profile.name}
        description={profile.tagline}
      >
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-4 text-text-muted">
            <p>{profile.bio}</p>
            <p>
              {profile.currentPosition} · {profile.location}
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
        description="Pulled directly from data/profile.ts to stay single-source."
      >
        <ol className="space-y-3 text-text-muted">
          {profile.timeline.map((entry) => (
            <li key={entry.year} className="flex gap-4">
              <span className="text-sm text-text-muted w-16">{entry.year}</span>
              <div>
                <p className="text-text-main font-semibold">{entry.title}</p>
                {entry.description && <p className="text-sm">{entry.description}</p>}
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
          {profile.values.map((value) => (
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
        description="Editable contacts map so links stay centralized."
      >
        <dl className="grid gap-4 md:grid-cols-2">
          {contactEntries.map(([key, value]) => (
            <div key={key} className="rounded-xl border border-border/30 bg-bg/50 p-4">
              <dt className="text-xs uppercase tracking-[0.3em] text-text-muted">
                {contactLabelMap[key] ?? key}
              </dt>
              <dd className="mt-2 text-sm text-text-main">{value}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  )
}

export default About
