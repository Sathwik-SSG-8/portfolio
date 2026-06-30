"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { content } from "@/data/content"

export default function About() {
  const photoRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(photoRef, { once: true, margin: "-80px" })

  return (
    <section id="about" className="relative z-10">
      <div className="section">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-[#06b6d4]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            {content.about.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-slate-300 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div ref={photoRef} className="flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 0 40px rgba(6,182,212,0.15)" }}
              initial={{ opacity: 0, filter: "brightness(0) blur(10px)" }}
              animate={isInView ? { opacity: 1, filter: "brightness(1) blur(0px)" } : {}}
              transition={{ duration: 1.6, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-2xl border border-[#06b6d4]/30 z-10 pointer-events-none" />
              <Image
                src="/profile.jpg"
                alt="Sathwik Gangapatnam"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
