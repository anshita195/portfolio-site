'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const texts = [
    'Software Developer',
    'ML Enthusiast',
    'Problem Solver',
  ]

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
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-2xl sm:text-3xl font-light text-white/80">
              Hello, I'm
            </span>
          </motion.div>

          {/* Main name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl sm:text-8xl font-bold mb-6 tracking-tight text-white"
          >
            Anshita Jain
          </motion.h1>

          {/* Typing animation for roles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <span className="text-2xl sm:text-3xl font-medium text-purple-300">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl sm:text-2xl leading-8 text-white/90 font-light mb-12 max-w-3xl mx-auto"
          >
            An aspiring developer and ML enthusiast.
            <br className="hidden sm:block" />
            
I love turning ideas into applications that solve real world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 text-lg font-semibold text-white shadow-premium hover:shadow-2xl transition-all duration-300 border border-purple-300/40"
            >
              <span className="relative z-10">Get in touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-full border-2 border-purple-300/40 px-8 py-4 text-lg font-semibold text-purple-200 hover:text-white transition-all duration-300 bg-purple-500/5 hover:bg-purple-400/10 backdrop-blur-sm"
            >
              <span className="relative z-10">
                View my work 
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </motion.a>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex items-center justify-center gap-6 flex-wrap"
          >
            {['MERN', 'AI/ML', 'GenAI', 'Django/Flask', 'C/C++'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-300/30 text-purple-200 text-sm font-medium hover:bg-purple-500/30 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 