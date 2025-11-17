import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { cardHover, cardTransition } from '../../lib/motion'
import { cn } from '../../lib/utils'

type Cell = { x: number; y: number }
type Direction = { x: number; y: number }
type Status = 'idle' | 'running' | 'ended'

const BOARD_SIZE = 15
const SPEED_MS = 180
const initialDirection: Direction = { x: 1, y: 0 }

const STATUS_COPY: Record<Status, string> = {
  idle: 'Press start (or hit any arrow/WASD key) to begin.',
  running: 'Use the arrow keys or WASD to steer. Snag the glowing orb to grow.',
  ended: "Snake bonked into something. Restart to chase a higher score.",
}

const directionFromKey: Record<string, Direction> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
}

function SnakeGame() {
  const [snake, setSnake] = useState<Cell[]>(() => createInitialSnake())
  const [food, setFood] = useState<Cell>(() => generateFood(createInitialSnake()))
  const [direction, setDirection] = useState<Direction>(initialDirection)
  const directionRef = useRef(direction)
  const [status, setStatus] = useState<Status>('idle')
  const [score, setScore] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    directionRef.current = direction
  }, [direction])

  const gridTemplate = useMemo(() => ({ gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))` }), [])
  const occupiedCells = useMemo(() => new Set(snake.map((segment) => keyFromCell(segment))), [snake])
  const headKey = snake.length ? keyFromCell(snake[0]) : null

  const handleReset = useCallback(() => {
    const freshSnake = createInitialSnake()
    setSnake(freshSnake)
    setDirection(initialDirection)
    directionRef.current = initialDirection
    setFood(generateFood(freshSnake))
    setScore(0)
    setStatus('running')
    setHasStarted(true)
  }, [])

  const handlePauseToggle = useCallback(() => {
    if (!hasStarted || status === 'ended') return
    setStatus((prev) => (prev === 'running' ? 'idle' : 'running'))
  }, [hasStarted, status])

  const handleDirectionChange = useCallback(
    (next: Direction) => {
      if (status === 'ended') return

      setDirection((current) => {
        if (current.x === -next.x && current.y === -next.y) {
          return current
        }
        return next
      })

      if (!hasStarted) {
        setHasStarted(true)
        setStatus('running')
      } else if (status === 'idle') {
        setStatus('running')
      }
    },
    [hasStarted, status]
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const mapping = directionFromKey[event.key]
      if (!mapping) return
      event.preventDefault()
      handleDirectionChange(mapping)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleDirectionChange])

  const tick = useCallback(() => {
    setSnake((currentSnake) => {
      if (currentSnake.length === 0) return currentSnake

      const currentDirection = directionRef.current
      const newHead = {
        x: currentSnake[0].x + currentDirection.x,
        y: currentSnake[0].y + currentDirection.y,
      }

      const hitWall = newHead.x < 0 || newHead.x >= BOARD_SIZE || newHead.y < 0 || newHead.y >= BOARD_SIZE
      const hitSelf = currentSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)

      if (hitWall || hitSelf) {
        setStatus('ended')
        return currentSnake
      }

      const nextSnake = [newHead, ...currentSnake]
      const ateFood = newHead.x === food.x && newHead.y === food.y

      if (!ateFood) {
        nextSnake.pop()
      } else {
        setScore((value) => value + 1)
        setFood(generateFood(nextSnake))
      }

      return nextSnake
    })
  }, [food])

  useEffect(() => {
    if (status !== 'running') return
    const intervalId = window.setInterval(tick, SPEED_MS)
    return () => window.clearInterval(intervalId)
  }, [status, tick])

  const startButtonLabel = status === 'running' ? 'Restart' : status === 'ended' ? 'Try again' : 'Start game'
  const pauseButtonLabel = status === 'running' ? 'Pause' : 'Resume'

  return (
    <motion.div
      className={cn('space-y-6 rounded-2xl border border-border/40 bg-bg/70 p-6 shadow-soft/30 backdrop-blur')}
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      transition={cardTransition}
    >
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-text-muted">Score</p>
          <p className="text-3xl font-semibold text-text-main">{score}</p>
        </div>
        <p className="flex-1 text-text-muted">{STATUS_COPY[status]}</p>
        <div className="flex flex-wrap gap-2">
          <Button onClick={handleReset}>{startButtonLabel}</Button>
          <Button
            variant="soft"
            className="min-w-[96px]"
            onClick={handlePauseToggle}
            disabled={!hasStarted || status === 'ended'}
          >
            {pauseButtonLabel}
          </Button>
        </div>
      </div>

      <div className="rounded-3xl border border-border/30 bg-bg-alt/60 p-4">
        <div className="grid gap-1" style={gridTemplate}>
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
            const x = index % BOARD_SIZE
            const y = Math.floor(index / BOARD_SIZE)
            const key = `${x}-${y}`
            const isHead = key === headKey
            const isBody = !isHead && occupiedCells.has(key)
            const isFood = food.x === x && food.y === y

            return (
              <div
                key={key}
                className={cn(
                  'aspect-square rounded-md border border-border/10 bg-bg/40 transition',
                  isFood && 'border-accent/80 bg-accent/80 shadow-soft/50',
                  isBody && 'border-primary/40 bg-primary/50 shadow-soft/30',
                  isHead && 'border-primary bg-primary text-bg shadow-soft/60'
                )}
                aria-hidden
              />
            )
          })}
        </div>
      </div>

      <div className="text-xs text-text-muted">
        <p>
          Controls: Arrow keys or WASD. Restart anytime to randomize the board and chase a new personal best.
        </p>
      </div>
    </motion.div>
  )
}

function createInitialSnake(): Cell[] {
  const startY = Math.floor(BOARD_SIZE / 2)
  return [
    { x: 6, y: startY },
    { x: 5, y: startY },
    { x: 4, y: startY },
  ]
}

function generateFood(occupied: Cell[]): Cell {
  let newFood: Cell
  const occupiedKeys = new Set(occupied.map((segment) => keyFromCell(segment)))

  do {
    newFood = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    }
  } while (occupiedKeys.has(keyFromCell(newFood)))

  return newFood
}

function keyFromCell(cell: Cell) {
  return `${cell.x}-${cell.y}`
}

export default SnakeGame
