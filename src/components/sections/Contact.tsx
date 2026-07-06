"use client"
import { motion } from "framer-motion"
import { Mail, ExternalLink } from "lucide-react"
import { content } from "@/data/content"

const links = [
  {
    label: "Email",
    href: `mailto:${content.meta.email}`,
    icon: Mail,
    value: content.meta.email,
  },
  {
    label: "LinkedIn",
    href: content.meta.linkedin,
    icon: ExternalLink,
    value: "sai-sathwik-gangapatnam",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative z-10">
      <div className="section text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s <span className="text-[#06b6d4]">Connect</span>
        </motion.h2>

        <motion.p
          className="text-slate-400 mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {content.contact.subheading}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {links.map(({ label, href, icon: Icon, value }, i) => (
            <motion.a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-card flex items-center gap-3 px-6 py-4 hover:border-[#06b6d4]/50 transition-all duration-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <Icon className="w-5 h-5 text-[#06b6d4]" />
              <div className="text-left">
                <p className="text-xs text-slate-500">{label}</p>
                <p className="text-sm text-slate-300 group-hover:text-[#06b6d4] transition-colors">
                  {value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="border-t border-slate-800 pt-8 text-slate-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Built by Sathwik Gangapatnam · 2026</p>
        </motion.div>
      </div>
    </section>
  )
}
