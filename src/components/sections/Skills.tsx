'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Django', level: 85 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'Flask', level: 75 },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    category: 'AI/ML & Data',
    items: [
      { name: 'Python', level: 90 },
      { name: 'TensorFlow / Keras', level: 80 },
      { name: 'Hugging Face Transformers', level: 75 },
      { name: 'LangChain / FAISS', level: 70 },
      { name: 'OpenCV', level: 65 },
    ],
  },
  {
    category: 'Tools & Deployment',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Google Cloud Platform', level: 65 },
      { name: 'FastAPI', level: 75 },
      { name: 'Streamlit', level: 70 },
    ],
  },
];


// const skills = [
//   {
//     category: 'Frontend',
//     items: [
//       { name: 'React', level: 90 },
//       { name: 'Next.js', level: 85 },
//       { name: 'TypeScript', level: 80 },
//       { name: 'Tailwind CSS', level: 85 },
//     ],
//   },
//   {
//     category: 'Backend',
//     items: [
//       { name: 'Node.js', level: 85 },
//       { name: 'Express', level: 80 },
//       { name: 'MongoDB', level: 75 },
//       { name: 'PostgreSQL', level: 70 },
//     ],
//   },
//   {
//     category: 'Tools & Others',
//     items: [
//       { name: 'Git', level: 85 },
//       { name: 'Docker', level: 70 },
//       { name: 'AWS', level: 65 },
//       { name: 'CI/CD', level: 75 },
//     ],
//   },
// ]

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
        <h2 className="text-lg font-semibold leading-7 text-purple-300 mb-2 tracking-widest uppercase">Skills</h2>
        <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-8 tracking-tight text-white">What I bring to the table</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-indigo-200/15 shadow-xl p-7 flex flex-col items-center hover:scale-[1.025] transition-transform"
            >
              <div className="flex flex-col items-center w-full mb-4">
                <h4 className="text-purple-200 text-xl font-bold mb-1 tracking-wide relative">
                  {group.category}
                                      <span className="block w-10 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-1 mx-auto"></span>
                </h4>
              </div>
              <div className="flex flex-wrap gap-3 justify-center w-full">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500/30 to-indigo-400/20 border border-indigo-200/20 px-4 py-2 text-base font-semibold text-white shadow-md backdrop-blur-sm hover:from-indigo-600/40 hover:to-indigo-500/30 hover:shadow-lg transition-all duration-200"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 