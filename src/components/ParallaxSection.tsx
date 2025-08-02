'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  backgroundImage?: string
  backgroundGradient?: string
}

export default function ParallaxSection({ 
  children, 
  className = "", 
  speed = 0.5,
  backgroundImage,
  backgroundGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Create true 3D parallax effect with different speeds for depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300 * speed])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden parallax-3d ${className}`}
    >
      {/* 3D Parallax Background Layer - moves slower for depth effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full transform-gpu parallax-layer-back"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : backgroundGradient,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />
      
      {/* 3D Content Layer - moves faster, creating depth separation */}
      <motion.div 
        className="relative z-10 w-full transform-gpu parallax-layer-base"
        style={{
          y: contentY,
          opacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
} 