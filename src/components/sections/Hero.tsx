'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = useMemo(() => [
    'Software Developer',
    'ML Enthusiast',
    'Problem Solver',
  ], [])

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const deleteSpeed = 50
    const pauseTime = 2000

    const typeText = () => {
      const currentFullText = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1))
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      }
    }

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : typeSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentIndex, texts])

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen pt-32 pb-12 sm:pt-40 sm:pb-16 bg-transparent overflow-hidden">
      {/* Simple static background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-2xl sm:text-3xl font-light text-white/80">
              Hello, I&apos;m
            </p>
          </motion.div>

          {/* Main name */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Anshita Jain
            </h1>
          </div>

          {/* Typing animation */}
          <div className="mb-8">
            <span className="text-2xl sm:text-3xl font-medium text-purple-300">
              {currentText}
              <span className="animate-pulse text-purple-400">|</span>
            </span>
          </div>

          {/* Description */}
          <div className="mb-12 max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl leading-8 text-white/90 font-light">
              An aspiring developer and ML enthusiast. I love turning ideas into applications that solve real world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-300/40 hover:scale-105"
            >
              Get in touch
            </a>

            <a
              href="#projects"
              className="rounded-full border-2 border-purple-300/40 px-8 py-4 text-lg font-semibold text-purple-200 hover:text-white transition-all duration-300 bg-purple-500/5 hover:bg-purple-400/10 backdrop-blur-sm hover:scale-105"
            >
              View my work →
            </a>
          </div>

          {/* Tech stack badges */}
          <div className="mt-16 flex items-center justify-center gap-6 flex-wrap">
            {['MERN', 'AI/ML', 'GenAI', 'Django/Flask', 'C/C++'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-300/30 text-purple-200 text-sm font-medium hover:bg-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 