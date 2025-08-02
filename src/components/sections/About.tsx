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
                 <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.8, delay: 0.2 }}
         >
           <h2 className="text-lg font-semibold leading-7 text-purple-300 mb-2 tracking-widest uppercase">
             ABOUT ME
           </h2>
         </motion.div>
        
                 <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">
           A little bit about myself
         </h3>
        
                 <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="mb-10"
         >
           <p className="text-xl leading-8 text-white/90 font-light">
             I&apos;m a Final Year student at IIT Roorkee. I make web applications and enhance them with AI techniques like LLM prompt engineering.
           </p>
         </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <h4 className="text-xl font-bold text-purple-300 mb-4">Education</h4>
            <p className="text-white/90 mb-2">B.Tech in Engineering Physics, IIT Roorkee (2022-2026)</p>
            <p className="text-purple-200 text-sm font-semibold mb-2">Relevant coursework:</p>
            <ul className="text-white/80 text-sm space-y-1">
              <li>• Machine Learning & Deep Learning</li>
              <li>• Data Structures & Algorithms</li>
              <li>• Computer Programming</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-purple-300 mb-4">Experience</h4>
            <ul className="text-white/90 text-sm space-y-2">
              <li>• ML pipelines with python</li>
              <li>• Created React frontends with Node.js/Express.js and MongoDB</li>
              <li>• Implemented NLP and RAG workflows using Hugging Face Transformers, FAISS, LangChain</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 