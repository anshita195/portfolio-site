'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/data/projects'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              Projects
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Some of my recent work
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Here are a few projects I&apos;ve worked on. Each one represents a unique challenge
              and learning experience in my journey as a developer.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-full overflow-x-auto sm:mt-20 lg:mt-24">
          <div className="flex gap-x-12 pb-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-none flex-col w-80"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  {project.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{project.oneLiner}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 text-xs font-medium text-indigo-700 dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6">
                    <a
                      href={`/projects/${project.slug}`}
                      className="text-sm font-semibold leading-6 text-indigo-600 dark:text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 