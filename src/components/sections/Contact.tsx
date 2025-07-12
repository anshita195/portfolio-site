'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="flex items-center justify-center min-h-[60vh] py-12 sm:py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl border border-white/20 p-10 bg-[rgba(30,27,52,0.92)] lux-card text-center animate-lux-fade-in"
      >
        <h2 className="text-lg font-semibold leading-7 text-indigo-300 mb-2 tracking-widest uppercase">Contact</h2>
        <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">Let&apos;s connect</h3>
        <form className="mt-8 space-y-6">
          <input type="text" placeholder="Your Name" className="w-full rounded-lg bg-white/10 border border-indigo-200/20 px-4 py-3 text-white placeholder-indigo-200 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="email" placeholder="Your Email" className="w-full rounded-lg bg-white/10 border border-indigo-200/20 px-4 py-3 text-white placeholder-indigo-200 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <textarea placeholder="Your Message" className="w-full rounded-lg bg-white/10 border border-indigo-200/20 px-4 py-3 text-white placeholder-indigo-200 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400" rows={5} />
          <button type="submit" className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow-lux-tag hover:bg-indigo-500 transition border border-indigo-300/40 mt-4">Send Message</button>
        </form>
      </motion.div>
    </section>
  )
} 