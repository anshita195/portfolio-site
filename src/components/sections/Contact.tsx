'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setSuccess('')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, honeypot: '' })
      })
      const data = await res.json()
      if (res.ok) {
        setSuccess('Message sent successfully!')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError(data.error || 'Failed to send message.')
      }
    } catch {
      setError('Failed to send message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="flex items-center justify-center min-h-[60vh] py-12 sm:py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl border border-white/20 p-10 bg-[rgba(30,27,52,0.92)] lux-card text-center animate-lux-fade-in"
      >
        <h2 className="text-lg font-semibold leading-7 text-purple-300 mb-2 tracking-widest uppercase">Contact</h2>
        <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">Let&apos;s connect</h3>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg bg-white/10 border border-indigo-200/20 px-4 py-3 text-white placeholder-indigo-200 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg bg-white/10 border border-indigo-200/20 px-4 py-3 text-white placeholder-indigo-200 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full rounded-lg bg-white/10 border border-indigo-200/20 px-4 py-3 text-white placeholder-indigo-200 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lux-tag hover:bg-purple-500 transition border border-purple-300/40 mt-4"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {success && <p className="text-green-400 mt-4">{success}</p>}
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </form>
      </motion.div>
    </section>
  )
} 