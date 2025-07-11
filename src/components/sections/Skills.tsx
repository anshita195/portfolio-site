'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'React', 'Next.js', 'Django'],
  },
  {
    category: 'Databases & Tools',
    items: ['MongoDB Atlas', 'PostgreSQL', 'Git', 'Docker Compose', 'AWS', 'CI/CD'],
  },
  {
    category: 'AI/ML & Data',
    items: ['Deep Learning', 'TensorFlow', 'PyTorch', 'Computer Vision', 'Natural Language Processing', 'Scikit-learn', 'Pandas'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              Skills
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Technical Expertise
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Here&apos;s an overview of my technical skills and areas of expertise.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className={`flex flex-col ${
                  skillGroup.category === 'AI/ML & Data' ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <div className="mt-4 space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill}>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 