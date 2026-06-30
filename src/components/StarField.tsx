"use client"
import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const stars: Star[] = Array.from({ length: 180 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.4 + 0.1,
    }))

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = (mouseRef.current.x / canvas.width - 0.5) * 18
      const my = (mouseRef.current.y / canvas.height - 0.5) * 18
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x + mx * star.speed, star.y + my * star.speed, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6,182,212,${star.opacity})`
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
