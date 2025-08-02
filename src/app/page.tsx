'use client'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ParticleBackground from '@/components/ParticleBackground'
import CursorTrail from '@/components/CursorTrail'
import ScrollProgress from '@/components/ScrollProgress'

import ProjectCarousel from '@/components/ProjectCarousel'
import InteractiveBackground from '@/components/InteractiveBackground'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

// Sample featured projects for carousel - using your actual projects
const featuredProjects = [
  {
    id: 1,
    title: "Reading and Watch-List Dashboard Web App",
    description: "Built a Chrome extension and React web app that tracks browsing history for articles/videos and exports data as JSON for import into a Flask backend with SQLAlchemy database",
    image: "/watchlist.png",
    tags: ["Chrome Extension", "Flask Backend", "Local LLM Inference", "React Visualization"],
    link: "/projects/reading-watchlist-dashboard"
  },
  {
    id: 2,
    title: "Fake News Detector with RAG",
    description: "End-to-end RAG prototype with FastAPI backend and React/TypeScript frontend for claim verification using vector search and GPT-3.5 analysis",
    image: "/RAG.png",
    tags: ["RAG", "FastAPI", "React/TypeScript", "OpenAI GPT-3.5"],
    link: "/projects/fake-news-detector"
  },
  {
    id: 3,
    title: "Contextual Bandits for E-commerce Markdown Pricing",
    description: "Developed contextual bandit system using LinUCB algorithm with linear models, processing 648K+ transactions across two datasets, achieving 19.4% (UCI) and 21.7% (Olist) profit improvements with proper statistical evaluation",
    image: "/bandit.png",
    tags: ["Contextual Bandits", "LinUCB Algorithm", "Linear Models", "Business Value Optimization"],
    link: "/projects/contextual-bandits-ecommerce"
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#18122B] via-[#393053] to-[#635985] flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Anshita Jain</h2>
          <p className="text-white/60">Loading amazing things...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#18122B] via-[#393053] to-[#635985] relative overflow-hidden">
      {/* Premium Background Effects - keeping original constellation */}
      <ParticleBackground />
      <InteractiveBackground />
      
      {/* Interactive Elements */}
      <CursorTrail />
      <ScrollProgress />
      
      <Header setMobileMenuOpen={setMobileMenuOpen} />
      
      {/* True fullscreen solid menu overlay, sibling to Header */}
      <aside
        className={`fixed inset-0 w-full h-full z-[99999] bg-[#18122B] flex flex-col transition-transform duration-300 backdrop-blur-md ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Mobile menu"
        tabIndex={mobileMenuOpen ? 0 : -1}
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#393053]">
          <span className="text-2xl font-extrabold tracking-wide text-white">Menu</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
            aria-label="Close main menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col gap-y-6 p-6 flex-1">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-semibold text-white hover:text-purple-300 transition-all duration-300 text-left hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      
      <div className="flex flex-col relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Featured Projects Carousel */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-lg font-semibold leading-7 text-purple-300 mb-2 tracking-widest uppercase">
                Recent Work
              </h2>
              <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">
                Top Projects
              </h3>
              <p className="text-lg leading-8 text-white/80 font-light max-w-3xl mx-auto">
                Explore some of my most impactful projects
              </p>
            </motion.div>
            
            <ProjectCarousel projects={featuredProjects} />
          </div>
        </section>
        
        {/* Projects Section */}
        <Projects />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Contact Section */}
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
