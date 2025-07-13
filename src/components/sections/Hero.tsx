'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center min-h-[60vh] pt-32 pb-12 sm:pt-40 sm:pb-16 bg-transparent">
      <div className="w-full max-w-2xl mx-auto rounded-3xl shadow-xl border border-white/20 p-10 bg-[rgba(30,27,52,0.92)] lux-card text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl sm:text-6xl font-serif font-extrabold mb-4 tracking-tight text-white">
            Hi, I&apos;m Anshita Jain
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/90 font-light">
            An aspiring developer and ML enthusiast. <br/>
            I love turning ideas into applications that solve real world problems.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lux-tag hover:bg-indigo-500 transition border border-indigo-300/40"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="rounded-full border border-indigo-300/40 px-6 py-3 text-base font-semibold text-indigo-200 hover:text-white hover:border-white transition bg-white/5 hover:bg-indigo-400/10"
            >
              View my work <span aria-hidden="true">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 