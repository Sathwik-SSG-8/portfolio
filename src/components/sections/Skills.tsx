"use client"
import { motion } from "framer-motion"
import { content } from "@/data/content"

export default function Skills() {
  return (
    <section id="skills" className="relative z-10">
      <div className="section">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#06b6d4]">Skills</span> & Tools
        </motion.h2>
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {content.skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="px-4 py-2 glass-card text-slate-300 text-sm font-mono cursor-default
                         hover:border-[#06b6d4]/60 hover:text-[#06b6d4]
                         hover:shadow-[0_0_14px_rgba(6,182,212,0.25)]
                         transition-all duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
