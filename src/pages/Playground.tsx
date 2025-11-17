import Section from '../components/ui/Section'

const animeAndGames = [
  { title: 'Frieren: Beyond Journey’s End', note: 'Meditative pacing, beautiful palettes.' },
  { title: 'Made in Abyss', note: 'Worldbuilding lessons for research narratives.' },
  { title: 'The Legend of Zelda: TOTK', note: 'Immersive systems design inspiration.' },
]

const experiments = [
  { name: 'CelRenderer', description: 'A GLSL cell-shader playground for poster art.' },
  { name: 'SynthGarden', description: 'Procedural gardens driven by audio-reactive shaders.' },
  { name: 'PromptChoreo', description: 'LLM-powered scene choreography sketches.' },
]

const tools = ['VS Code + Copilot', 'Warp terminal', 'Obsidian vault', 'Procreate', 'After Effects', 'Python + TypeScript stacks']

function Playground() {
  return (
    <div className="space-y-12">
      <Section
        eyebrow="vibes"
        title="Anime & games"
        description="Upcoming recommendation shelf that injects playful energy into the site."
      >
        <ul className="space-y-3 text-sm text-text-muted">
          {animeAndGames.map((item) => (
            <li key={item.title} className="flex flex-col gap-1 rounded-2xl border border-border/30 bg-bg/60 p-4">
              <span className="text-text-main font-semibold">{item.title}</span>
              <span>{item.note}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="experiments"
        title="Web toys & demos"
        description="Mini projects that will eventually link out to live sandboxes."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {experiments.map((experiment) => (
            <div key={experiment.name} className="rounded-2xl border border-border/30 bg-bg-alt/60 p-4">
              <h3 className="text-lg font-semibold text-text-main">{experiment.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{experiment.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="stack"
        title="Tools & setup"
        description="A tag cloud for software and hardware staples used across projects."
      >
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span key={tool} className="rounded-full border border-border/40 px-4 py-2 text-sm text-text-main">
              {tool}
            </span>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Playground
