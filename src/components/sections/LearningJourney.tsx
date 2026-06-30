"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { content, type TimelineItem } from "@/data/content"

function TimelineEntry({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div ref={ref} className="relative flex gap-6 pb-10">
      <div className="flex flex-col items-center">
        <motion.div
          className={`w-3 h-3 rounded-full mt-1 shrink-0 z-10 ${
            item.current
              ? "bg-[#06b6d4] shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              : "bg-slate-600"
          }`}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        />
        <motion.div
          className="w-px flex-1 bg-gradient-to-b from-slate-700 to-transparent mt-1"
          initial={{ scaleY: 0, originY: "top" }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        />
      </div>

      <motion.div
        className="pb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
      >
        <span className="text-xs font-mono text-[#06b6d4]">{item.year}</span>
        <h3 className={`font-semibold mt-0.5 ${item.current ? "text-white" : "text-slate-300"}`}>
          {item.title}
          {item.current && (
            <span className="ml-2 text-xs text-[#06b6d4] border border-[#06b6d4]/40 rounded-full px-2 py-0.5">
              Now
            </span>
          )}
        </h3>
        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.description}</p>
      </motion.div>
    </div>
  )
}

export default function LearningJourney() {
  return (
    <section id="journey" className="relative z-10">
      <div className="section">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Learning <span className="text-[#06b6d4]">Journey</span>
        </motion.h2>
        <motion.p
          className="text-slate-400 text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every skill earned, chapter by chapter.
        </motion.p>
        <div className="max-w-xl mx-auto">
          {content.timeline.map((item, i) => (
            <TimelineEntry key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
