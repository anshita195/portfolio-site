'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { mlDataScienceProjects, nlpRagProjects, computerVisionProjects, webDevProjects, browserExtensionProjects, businessProjects, internshipProjects } from '@/data/projects'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projectCategories = [
    {
      title: 'Internships & Professional Experience',
      description: 'Industry experience and professional development opportunities',
      projects: internshipProjects,
      color: 'from-indigo-500/20 to-purple-500/20'
    },
    {
      title: 'Machine Learning & Data Science',
      description: 'Statistical modeling, predictive analytics, and data-driven insights',
      projects: mlDataScienceProjects,
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'Natural Language Processing and Retrieval Augmented Generation systems',
      description: 'Combining NLP and RAG to verify, summarize, and reason real‑world text data.',
      projects: nlpRagProjects,
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Computer Vision',
      description: 'Object detection, image processing, and computer vision applications',
      projects: computerVisionProjects,
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      title: 'Full-Stack Web Development',
      description: 'Complete web applications with frontend and backend development',
      projects: webDevProjects,
      color: 'from-yellow-500/20 to-orange-500/20'
    },
    {
      title: 'Browser Extension Development',
      description: 'Browser extensions and productivity tools for developers',
      projects: browserExtensionProjects,
      color: 'from-red-500/20 to-pink-500/20'
    },
    {
      title: 'Business & Strategy',
      description: 'Market analysis, business strategy, and case studies',
      projects: businessProjects,
      color: 'from-gray-500/20 to-slate-500/20'
    }
  ]

  return (
    <section id="projects" className="flex items-center justify-center min-h-[60vh] py-12 sm:py-16">
          <motion.div
            ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl mx-auto rounded-3xl shadow-2xl border border-white/20 p-10 bg-[rgba(30,27,52,0.92)] lux-card text-center animate-lux-fade-in"
          >
        <h2 className="text-lg font-semibold leading-7 text-indigo-300 mb-2 tracking-widest uppercase">Projects</h2>
        <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">Some of my recent work</h3>
        <p className="mb-12 text-lg leading-8 text-white/80 font-light">
          Here are my projects organized by domain expertise. Each category represents a different aspect of my technical and analytical skills.
        </p>
        
        <div className="space-y-16">
          {projectCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="text-left"
            >
              <div className={`mb-8 p-6 rounded-2xl bg-gradient-to-r ${category.color} border border-white/10`}>
                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">{category.title}</h4>
                <p className="text-white/80 font-light">{category.description}</p>
        </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="flex flex-col bg-white/5 rounded-2xl p-6 shadow-lux-tag border border-indigo-200/10 text-left hover:bg-white/10 transition-all duration-300"
              >
                    <dt className="text-lg font-bold leading-7 text-white mb-1">
                      {project.title}
                      <span className="block text-xs font-normal text-indigo-200 mt-1">{project.organization} &middot; {project.date}</span>
                </dt>
                    <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-white/80">
                      <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                            className="inline-flex items-center rounded-full bg-white/10 border border-indigo-200/20 px-3 py-1 text-xs font-semibold text-white shadow-lux-tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6">
                    <a
                          href={`/projects/${project.slug}`}
                          className="text-sm font-semibold leading-6 text-indigo-300 hover:text-white transition"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
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