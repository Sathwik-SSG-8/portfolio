"use client"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/LoadingScreen"
import StarField from "@/components/StarField"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import WhatIDo from "@/components/sections/WhatIDo"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import LearningJourney from "@/components/sections/LearningJourney"
import Contact from "@/components/sections/Contact"

export default function Home() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <main className="relative">
          <StarField />
          <Hero />
          <About />
          <WhatIDo />
          <Skills />
          <Projects />
          <LearningJourney />
          <Contact />
        </main>
      )}
    </>
  )
}
