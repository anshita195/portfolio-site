'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="flex items-center justify-center min-h-[60vh] py-12 sm:py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl mx-auto rounded-3xl shadow-2xl border border-white/20 p-10 bg-[rgba(30,27,52,0.92)] lux-card text-center animate-lux-fade-in"
      >
        <h2 className="text-lg font-semibold leading-7 text-indigo-300 mb-2 tracking-widest uppercase">About Me</h2>
        <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">A little bit about myself</h3>
        <p className="mb-10 text-xl leading-8 text-white/90 font-light">
          I’m a Final year Engineering Physics student at IIT Roorkee. <br></br>
          I make web applications and enrich them with AI techniques like LLM prompt engineering.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center text-left">
          <div className="flex-1 bg-white/5 rounded-2xl p-6 shadow-lux-tag border border-indigo-200/10">
            <h4 className="text-lg font-bold text-indigo-200 mb-2">Education</h4>
            <p className="text-white/90 font-light">
              B.Tech in Engineering Physics, IIT Roorkee (2022–2026)
              <br />
              <span className="text-indigo-200">Relevant coursework:</span>
              <ul className="list-disc list-inside mt-1 text-indigo-100/90">
                <li>Machine Learning&Deep Learning</li>
                <li>Data Structures & Algorithms</li>
                <li>Computer Programming</li>
              </ul>
            </p>
          </div>
          <div className="flex-1 bg-white/5 rounded-2xl p-6 shadow-lux-tag border border-indigo-200/10">
            <h4 className="text-lg font-bold text-indigo-200 mb-2">Experience</h4>
            <p className="text-white/90 font-light">
              I’ve built projects in Python for ML pipelines and created React/Next.js front-ends with Node.js/Express.js and MongoDB. I’ve also implemented NLP and RAG workflows using Hugging Face Transformers, FAISS, LangChain, integrated prompt‑engineered LLMs and OpenCV.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 