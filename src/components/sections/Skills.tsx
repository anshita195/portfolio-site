'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="flex items-center justify-center min-h-[60vh] py-12 sm:py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl border border-white/20 p-10 bg-[rgba(30,27,52,0.92)] lux-card text-center animate-lux-fade-in"
      >
        <h2 className="text-lg font-semibold leading-7 text-indigo-300 mb-2 tracking-widest uppercase">Skills</h2>
        <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">What I bring to the table</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {skills.map((group) => (
            <div key={group.category} className="flex flex-col items-center mb-6">
              <h4 className="text-indigo-200 text-lg font-bold mb-2">{group.category}</h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center rounded-full bg-white/10 border border-indigo-200/20 px-3 py-1 text-xs font-semibold text-white shadow-lux-tag"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 