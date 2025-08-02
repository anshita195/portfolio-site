'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDark(savedTheme === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    
    // Apply theme to document
    if (newTheme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-premium"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0"
        style={{ opacity: isDark ? 0 : 1 }}
      />
      
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 180
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <MoonIcon className="w-6 h-6 text-indigo-300" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{ 
          scale: isDark ? 0 : 1,
          rotate: isDark ? -180 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <SunIcon className="w-6 h-6 text-yellow-400" />
      </motion.div>
    </motion.button>
  )
} 