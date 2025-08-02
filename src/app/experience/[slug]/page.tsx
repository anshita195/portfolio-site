'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, PlayIcon } from '@heroicons/react/24/outline'

interface ExperiencePageProps {
  params: {
    slug: string
  }
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Extract YouTube video ID from demo URL
  const getYouTubeVideoId = (url: string) => {
    if (!url) return null
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  const videoId = project.demo ? getYouTubeVideoId(project.demo) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18122B] via-[#393053] to-[#635985] py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/#experience"
            className="inline-flex items-center text-indigo-300 hover:text-white transition-colors duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Experience
          </Link>
        </motion.div>

        {/* Experience Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 mb-6">
              <span className="font-semibold">{project.organization}</span>
              <span>•</span>
              <span>{project.date}</span>
              <span>•</span>
              <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-sm">
                {project.category}
              </span>
            </div>
            
            {/* Project Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  View Code
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  Live Demo
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                >
                  <PlayIcon className="w-4 h-4 mr-2" />
                  Watch Demo
                </motion.a>
              )}
              {project.deck && (
                <motion.a
                  href={project.deck}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  View Presentation
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project Demo Video */}
        {videoId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Project Demo</h2>
              <YouTubeEmbed 
                videoId={videoId} 
                title={`${project.title} Demo`}
                className="w-full"
              />
            </div>
          </motion.div>
        )}

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Experience Details</h2>
          <div className="space-y-4">
            {project.details.map((detail, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-white/90 leading-relaxed"
              >
                {detail}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 