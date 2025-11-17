import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import SnakeGame from '../components/playground/SnakeGame'
import { buttonVariants } from '../components/ui/Button'
import { cn } from '../lib/utils'

function SnakeLab() {
  return (
    <div className="space-y-12">
      <Section
        eyebrow="mini arcade"
        title="Snake lab"
        description="A focused space for the evolving mini arcade experiments."
      >
        <div className="rounded-3xl border border-border/30 bg-bg/50 p-6 text-sm text-text-muted shadow-soft/30">
          <p>
            This prototype keeps the playful vibe of the playground while giving the game room to breathe. Expect tuning
            around speed modes, touch controls, and maybe even multiplayer ghosts as the lab evolves.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-text-muted/70">
            <span>arrow keys</span>
            <span>wasd</span>
            <span>restart for rng</span>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-text-muted">
          <Link to="/playground" className={cn(buttonVariants({ variant: 'ghost' }), 'text-sm')}>
            ← Back to playground
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="prototype"
        title="Play the latest build"
        description="No distractions—just the glassy snake lab in its own route."
      >
        <SnakeGame />
      </Section>
    </div>
  )
}

export default SnakeLab
