import Section from '../components/ui/Section'
import { motion } from 'framer-motion'
import { cardHover, cardTransition } from '../lib/motion'
import { Link } from 'react-router-dom'
import { buttonVariants } from '../components/ui/Button'
import { cn } from '../lib/utils'

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
            <motion.li
              key={item.title}
              className="flex flex-col gap-1 rounded-2xl border border-border/30 bg-bg/60 p-4"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              transition={cardTransition}
            >
              <span className="text-text-main font-semibold">{item.title}</span>
              <span>{item.note}</span>
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="mini arcade"
        title="Snake lab"
        description="A tiny in-browser playground that now lives on its own route."
      >
        <div className="space-y-4 rounded-3xl border border-border/30 bg-bg-alt/60 p-6 shadow-soft/20">
          <p className="text-sm text-text-muted">
            Launch the dedicated Snake Lab page to play in full focus mode. It ships the same playful styling with room
            for future challenges, touch controls, and high-score experiments.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/playground/snake" className={cn(buttonVariants({ size: 'lg' }), 'text-sm')}>
              Launch Snake lab
            </Link>
            <p className="text-xs uppercase tracking-[0.35em] text-text-muted">Arrow keys · WASD · restart anytime</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="experiments"
        title="Web toys & demos"
        description="Mini projects that will eventually link out to live sandboxes."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {experiments.map((experiment) => (
            <motion.div
              key={experiment.name}
              className="rounded-2xl border border-border/30 bg-bg-alt/60 p-4"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              transition={cardTransition}
            >
              <h3 className="text-lg font-semibold text-text-main">{experiment.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{experiment.description}</p>
            </motion.div>
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
            <motion.span
              key={tool}
              className="rounded-full border border-border/40 px-4 py-2 text-sm text-text-main"
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              transition={cardTransition}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Playground
