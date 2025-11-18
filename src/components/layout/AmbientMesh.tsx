import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

const POLYGON_COUNT = 14

type Point = { x: number; y: number }

type Polygon = {
  center: Point
  vertices: Point[]
  velocity: Point
  parallax: number
  color: string
  radius: number
  rotation: number
  rotationSpeed: number
}

const palettes: Record<'light' | 'dark', string[]> = {
  light: ['rgba(79, 70, 229, 0.08)', 'rgba(14, 165, 233, 0.08)', 'rgba(16, 185, 129, 0.12)'],
  dark: ['rgba(124, 123, 255, 0.12)', 'rgba(93, 228, 199, 0.14)', 'rgba(139, 92, 246, 0.08)'],
}

function AmbientMesh() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const doc = document.documentElement
    let width = window.innerWidth
    let height = Math.max(window.innerHeight, doc.scrollHeight)
    let animationFrameId: number
    const pointer: Point = { x: width / 2, y: height / 2 }

    const setCanvasSize = () => {
      width = Math.max(window.innerWidth, doc.scrollWidth)
      height = Math.max(window.innerHeight, doc.scrollHeight)
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(1, 0, 0, 1, 0, 0)
      context.scale(dpr, dpr)
    }

    const createPolygon = (): Polygon => {
      const radius = randomBetween(60, 140)
      const sides = Math.floor(randomBetween(3, 7))
      const vertices = Array.from({ length: sides }).map((_, index) => {
        const angle = (index / sides) * Math.PI * 2
        const distance = radius * randomBetween(0.6, 1)
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        }
      })

      return {
        center: { x: Math.random() * width, y: Math.random() * height },
        vertices,
        velocity: { x: randomBetween(-0.25, 0.25), y: randomBetween(-0.15, 0.15) },
        parallax: randomBetween(0.03, 0.09),
        color: sample(palettes[theme]),
        radius,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: randomBetween(-0.0015, 0.0015),
      }
    }

    const regeneratePolygons = () => {
      polygons = Array.from({ length: POLYGON_COUNT }, () => createPolygon())
    }

    let polygons = Array.from({ length: POLYGON_COUNT }, () => createPolygon())

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    const handleResize = () => {
      setCanvasSize()
      regeneratePolygons()
    }

    const bodyObserver = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => {
          setCanvasSize()
          regeneratePolygons()
        })
      : null
    bodyObserver?.observe(document.body)

    const render = () => {
      context.clearRect(0, 0, width, height)
      polygons.forEach((polygon) => {
        polygon.center.x += polygon.velocity.x
        polygon.center.y += polygon.velocity.y
        polygon.rotation += polygon.rotationSpeed

        wrapPolygon(polygon, width, height)

        const parallaxOffsetX = (pointer.x - width / 2) * polygon.parallax
        const parallaxOffsetY = (pointer.y - height / 2) * polygon.parallax

        context.beginPath()
        polygon.vertices.forEach((vertex, index) => {
          const cos = Math.cos(polygon.rotation)
          const sin = Math.sin(polygon.rotation)
          const rotatedX = vertex.x * cos - vertex.y * sin
          const rotatedY = vertex.x * sin + vertex.y * cos
          const x = polygon.center.x + rotatedX + parallaxOffsetX
          const y = polygon.center.y + rotatedY + parallaxOffsetY
          if (index === 0) {
            context.moveTo(x, y)
          } else {
            context.lineTo(x, y)
          }
        })
        context.closePath()
        context.fillStyle = polygon.color
        context.strokeStyle = polygon.color
        context.lineWidth = 1
        context.fill()
        context.stroke()
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    setCanvasSize()
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('resize', handleResize)
    animationFrameId = window.requestAnimationFrame(render)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('resize', handleResize)
      bodyObserver?.disconnect()
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-80" aria-hidden />
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function sample<T>(values: T[]): T {
  return values[Math.floor(Math.random() * values.length)]
}

function wrapPolygon(polygon: Polygon, width: number, height: number) {
  if (polygon.center.x - polygon.radius > width) {
    polygon.center.x = -polygon.radius
  }
  if (polygon.center.x + polygon.radius < 0) {
    polygon.center.x = width + polygon.radius
  }
  if (polygon.center.y - polygon.radius > height) {
    polygon.center.y = -polygon.radius
  }
  if (polygon.center.y + polygon.radius < 0) {
    polygon.center.y = height + polygon.radius
  }
}

export default AmbientMesh
