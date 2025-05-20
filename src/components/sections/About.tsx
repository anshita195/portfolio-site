'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              About Me
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A little bit about myself
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              I&apos;m a full-stack developer with a passion for creating elegant solutions to complex problems.
              My journey in software development started with a curiosity about how things work on the web,
              and it has evolved into a professional pursuit of building impactful applications.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                Education
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  I am currently pursuing my degree in Computer Science at IIT Roorkee, where I&apos;ve been
                  developing my skills in software development and problem-solving.
                </p>
              </dd>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                Experience
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                <p className="flex-auto">
                  I&apos;ve worked on various projects ranging from web applications to mobile apps,
                  always focusing on creating user-friendly interfaces and robust backend systems.
                </p>
              </dd>
            </motion.div>
          </dl>
        </div>
      </div>
    </section>
  )
} 