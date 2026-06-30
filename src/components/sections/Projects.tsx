"use client"
import { motion } from "framer-motion"
import { Lock } from "lucide-react"
import { content, type Project } from "@/data/content"

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="glass-card p-6 hover:border-[#06b6d4]/40 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-lg leading-snug">{project.title}</h3>
        <span className="flex items-center gap-1 text-xs text-slate-500 border border-slate-700 rounded-full px-2 py-0.5 ml-3 shrink-0">
          <Lock className="w-3 h-3" /> Confidential
        </span>
      </div>
      <p className="text-[#06b6d4] text-xs font-mono mb-3">{project.role}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs px-2 py-1 bg-[#a855f7]/10 text-[#a855f7] border border-[#a855f7]/20 rounded"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10">
      <div className="section">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-[#06b6d4]">Projects</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-12 max-w-lg mx-auto text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Client work is kept confidential — project names withheld.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
