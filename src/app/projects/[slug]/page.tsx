import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, PlayIcon } from '@heroicons/react/24/outline'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

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
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center text-purple-300 hover:text-white transition-colors duration-300"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 mb-6">
              <span className="font-semibold">{project.organization}</span>
              <span>•</span>
              <span>{project.date}</span>
              <span>•</span>
              <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                {project.category}
              </span>
            </div>
            
            {/* Project Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  View Code
                </a>
              )}
              {project.githubFrontend && (
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  Frontend Code
                </a>
              )}
              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  Backend Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                >
                  <PlayIcon className="w-4 h-4 mr-2" />
                  Watch Demo
                </a>
              )}
              {project.deck && (
                <a
                  href={project.deck}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300"
                >
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
                  View Presentation
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Demo Video */}
        {videoId && (
          <div className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Project Demo</h2>
              <YouTubeEmbed 
                videoId={videoId} 
                title={`${project.title} Demo`}
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
          <div className="space-y-4">
            {project.details.map((detail: string, index: number) => (
              <p
                key={index}
                className="text-white/90 leading-relaxed"
              >
                {detail}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 