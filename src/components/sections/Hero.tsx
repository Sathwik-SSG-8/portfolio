"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { content } from "@/data/content"

function Typewriter({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]
    const delay = deleting ? 40 : 90
    const timeout = setTimeout(() => {
      if (!deleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1))
      } else if (!deleting && displayed.length === current.length) {
        setTimeout(() => setDeleting(true), 1800)
      } else if (deleting && displayed.length > 0) {
        setDisplayed(displayed.slice(0, -1))
      } else {
        setDeleting(false)
        setIndex((index + 1) % roles.length)
      }
    }, delay)
    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, roles])

  return (
    <span className="text-[#06b6d4] font-mono">
      {displayed}<span className="animate-pulse">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center z-10">
      <div className="section text-center">
        <motion.p
          className="text-slate-400 font-mono text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content.hero.greeting}
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content.hero.name}
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl h-9 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Typewriter roles={content.hero.roles} />
        </motion.div>

        <motion.p
          className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {content.hero.bio}
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-[#06b6d4] text-[#0a0a0f] font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-[#06b6d4] text-[#06b6d4] rounded-lg hover:bg-[#06b6d4] hover:text-[#0a0a0f] transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
