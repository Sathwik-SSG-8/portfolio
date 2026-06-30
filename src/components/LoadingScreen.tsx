"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"

interface Props {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: Props) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0f]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.p
          className="text-[#06b6d4] font-mono text-sm tracking-[0.3em] uppercase mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome
        </motion.p>

        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Sathwik<span className="text-[#06b6d4]">.</span>
        </motion.h1>

        <motion.div
          className="mt-6 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </motion.div>
  )
}
