import React from 'react'
import { motion } from 'framer-motion'

const NeonWord = ({ children, color = 'cyan' }) => (
  <span style={{
    textShadow: color === 'cyan' ? '0 0 20px rgba(0,191,255,0.8)' : '0 0 20px rgba(255,60,143,0.8)'
  }}>
    {children}
  </span>
)

export default function Home() {
  return (
    <section className="relative min-h-screen grid place-items-center px-6">
      <div className="container text-center">
        <motion.h1
          className="hero-title font-extrabold leading-tight tracking-tight text-white"
          style={{ fontSize: 64 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-glow">M Reza Febrian</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <NeonWord color="cyan">Programmer</NeonWord> & <NeonWord color="pink">Web Developer</NeonWord> — focused on backend and AI.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <a href="/about" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors glow-cyan">About</a>
          <a href="/projects" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors glow-pink">Projects</a>
          <a href="/contact" className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors">Contact</a>
        </motion.div>
      </div>
    </section>
  )
}
