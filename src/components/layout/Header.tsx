'use client'

import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { SVGProps } from 'react'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/anshita195',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anshita-jain-54157a250/',
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export default function Header({ setMobileMenuOpen }: { setMobileMenuOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 bg-[#2a2540]/80 backdrop-blur-md shadow-premium border-b border-white/10"
    >
      <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <motion.div 
          className="flex items-center gap-x-4 lg:flex-1"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/" className="-m-1.5 p-1.5 group">
            <motion.span 
              className="text-2xl font-extrabold tracking-wide text-white group-hover:text-purple-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              AJ
            </motion.span>
          </Link>
          <div className="flex gap-x-3">
            {socialLinks.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-all duration-300 ml-2 hover:scale-110"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="hidden lg:flex lg:gap-x-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-lg font-semibold leading-6 text-white hover:text-purple-300 transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile Menu Button */}
        <motion.div 
          className="flex lg:hidden"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
            aria-label="Open main menu"
            onClick={() => setMobileMenuOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </nav>
    </motion.header>
  )
} 