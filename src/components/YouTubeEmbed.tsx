'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export default function YouTubeEmbed({ videoId, title, className = "" }: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative w-full ${className}`}
    >
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="loading-spinner"></div>
          </div>
        )}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || "Project Demo"}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </motion.div>
  )
} 