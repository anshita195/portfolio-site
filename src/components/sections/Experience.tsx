"use client"

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { internshipProjects } from "@/data/projects";
import Link from "next/link";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="flex items-center justify-center min-h-[40vh] py-12 sm:py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl border border-white/20 p-10 bg-[rgba(30,27,52,0.92)] lux-card text-center animate-lux-fade-in"
      >
        <h2 className="text-lg font-semibold leading-7 text-indigo-300 mb-2 tracking-widest uppercase">Experience</h2>
        <h3 className="text-4xl sm:text-5xl font-serif font-extrabold mb-6 tracking-tight text-white">Internships</h3>
        <p className="mb-12 text-lg leading-8 text-white/80 font-light">
          Here are some of my recent internships and professional experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internshipProjects.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col bg-white/5 rounded-2xl p-6 shadow-lux-tag border border-indigo-200/10 text-left hover:bg-white/10 transition-all duration-300"
            >
              <dt className="text-lg font-bold leading-7 text-white mb-1">
                {exp.title}
                <span className="block text-xs font-normal text-indigo-200 mt-1">{exp.organization} &middot; {exp.date}</span>
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-white/80">
                <div className="mt-2 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-white/10 border border-indigo-200/20 px-3 py-1 text-xs font-semibold text-white shadow-lux-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-6">
                  <Link
                    href={`/experience/${exp.slug}`}
                    className="text-sm font-semibold leading-6 text-indigo-300 hover:text-white transition"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 