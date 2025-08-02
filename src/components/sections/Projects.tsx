'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { mlDataScienceProjects, nlpRagProjects, computerVisionProjects, webDevProjects, browserExtensionProjects, businessProjects } from '@/data/projects'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  


  const projectCategories = [
    {
      id: 'web',
      title: 'Web Development',
      description: 'Complete web applications with frontend and backend development',
      projects: webDevProjects,
      color: 'from-purple-500/20 to-purple-600/20',
      hoverColor: 'from-purple-400/30 to-purple-500/30',
      icon: '🌐',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    },
    {
      id: 'extension',
      title: 'Browser Extension Development',
      description: 'Browser extensions and productivity tools',
      projects: browserExtensionProjects,
      color: 'from-purple-600/20 to-purple-700/20',
      hoverColor: 'from-purple-500/30 to-purple-600/30',
      icon: '🔧',
      gradient: 'linear-gradient(135deg, #7c3aed, #6d28d9)'
    },
    {
      id: 'ml',
      title: 'Machine Learning & Data Science',
      description: 'Statistical modeling, predictive analytics, and data-driven insights',
      projects: mlDataScienceProjects,
      color: 'from-purple-700/20 to-purple-800/20',
      hoverColor: 'from-purple-600/30 to-purple-700/30',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #6d28d9, #5b21b6)'
    },
    {
      id: 'nlp',
      title: 'Natural Language Processing and Retrieval Augmented Generation',
      description: 'Combining NLP and RAG to verify, summarize, and reason real‑world text data.',
      projects: nlpRagProjects,
      color: 'from-purple-800/20 to-purple-900/20',
      hoverColor: 'from-purple-700/30 to-purple-800/30',
      icon: '📝',
      gradient: 'linear-gradient(135deg, #5b21b6, #4c1d95)'
    },
    {
      id: 'vision',
      title: 'Computer Vision',
      description: 'Object detection, image processing, and computer vision applications',
      projects: computerVisionProjects,
      color: 'from-purple-900/20 to-purple-950/20',
      hoverColor: 'from-purple-800/30 to-purple-900/30',
      icon: '👁️',
      gradient: 'linear-gradient(135deg, #4c1d95, #2e1065)'
    },
    {
      id: 'business',
      title: 'Business & Strategy',
      description: 'Market analysis, business strategy, and case studies',
      projects: businessProjects,
      color: 'from-purple-950/20 to-purple-900/20',
      hoverColor: 'from-purple-900/30 to-purple-800/30',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #2e1065, #4c1d95)'
    }
  ]

  return (
    <section id="projects" className="flex items-center justify-center min-h-[60vh] py-12 sm:py-16 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto rounded-3xl shadow-2xl border border-white/20 p-10 bg-[rgba(30,27,52,0.92)] lux-card text-center animate-lux-fade-in"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold leading-7 text-purple-300 mb-2 tracking-widest uppercase">Projects</h2>
          <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">
            Some of my recent work
          </h3>
          <p className="mb-12 text-lg leading-8 text-white/80 font-light max-w-3xl mx-auto">
            Here are my projects organized by domain expertise. Each category represents a different aspect of my technical and analytical skills.
          </p>
        </motion.div>


        
        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="text-left"
            >
              <motion.div 
                className={`mb-8 p-6 rounded-2xl bg-gradient-to-r ${category.color} border border-white/10 backdrop-blur-sm hover-3d relative overflow-hidden group`}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}

                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: category.gradient,
                    filter: 'blur(40px)'
                  }}
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative z-10 flex items-center gap-4">
                  <motion.span 
                    className="text-3xl"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {category.icon}
                  </motion.span>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">{category.title}</h4>
                    <p className="text-white/80 font-light">{category.description}</p>
                  </div>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateX: 5,
                      rotateY: 5
                    }}
                    className="group flex flex-col bg-white/5 rounded-2xl p-6 shadow-lux-tag border border-purple-200/10 text-left hover:bg-white/10 transition-all duration-500 hover-3d backdrop-blur-sm relative overflow-hidden"
                  >
                    {/* Floating particles effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 20% 80%, ${category.gradient.split(',')[0]}, transparent 50%)`
                      }}
                    />
                    
                    <div className="relative z-10">
                      <dt className="text-lg font-bold leading-7 text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                        <span className="block text-xs font-normal text-purple-200 mt-1 opacity-80">
                          {project.organization} &middot; {project.date}
                        </span>
                      </dt>
                      <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-white/80">
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                              transition={{ duration: 0.3, delay: (categoryIndex * 0.2) + (index * 0.1) + (tagIndex * 0.05) }}
                              whileHover={{ 
                                scale: 1.1,
                                y: -2,
                                transition: { duration: 0.2 }
                              }}
                              className="inline-flex items-center rounded-full bg-white/10 border border-purple-200/20 px-3 py-1 text-xs font-semibold text-white shadow-lux-tag hover:bg-purple-500/20 transition-all duration-300 cursor-pointer"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        <motion.p 
                          className="mt-6"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <a
                            href={`/projects/${project.slug}`}
                            className="text-sm font-semibold leading-6 text-purple-300 hover:text-white transition-all duration-300 group/link"
                          >
                            Learn more 
                            <motion.span 
                              className="ml-1 inline-block"
                              animate={{
                                x: [0, 5, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              →
                            </motion.span>
                          </a>
                        </motion.p>
                      </dd>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 