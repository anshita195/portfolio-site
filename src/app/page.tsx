'use client'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#18122B] via-[#393053] to-[#635985]">
      <Header setMobileMenuOpen={setMobileMenuOpen} />
      {/* True fullscreen solid menu overlay, sibling to Header */}
      <aside
        className={`fixed inset-0 w-full h-full z-[99999] bg-[#18122B] flex flex-col transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Mobile menu"
        tabIndex={mobileMenuOpen ? 0 : -1}
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#393053]">
          <span className="text-2xl font-extrabold tracking-wide text-white">Menu</span>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Close main menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col gap-y-6 p-6 flex-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl font-semibold text-white hover:text-indigo-300 transition text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-col py-8">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
