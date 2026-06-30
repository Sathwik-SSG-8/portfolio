"use client"
import { motion } from "framer-motion"
import { Zap, CheckCircle, Globe, TrendingUp, BookOpen, type LucideIcon } from "lucide-react"
import { content, type Service } from "@/data/content"

const iconMap: Record<string, LucideIcon> = { Zap, CheckCircle, Globe, TrendingUp, BookOpen }

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon]
  return (
    <motion.div
      className="glass-card p-6 hover:border-[#06b6d4]/40 transition-all duration-300 cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="w-10 h-10 rounded-lg bg-[#06b6d4]/10 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#06b6d4]" />
      </div>
      <h3 className="text-white font-semibold mb-2">{service.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  )
}

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative z-10">
      <div className="section">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I <span className="text-[#06b6d4]">Do</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Areas I work in and care about
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
