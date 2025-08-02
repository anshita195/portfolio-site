'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface GradientTextProps {
  text: string
  className?: string
  gradient?: string
  shimmer?: boolean
}

export default function GradientText({ 
  text, 
  className = "", 
  gradient = "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  shimmer = true
}: GradientTextProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.span
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
        style={{
          backgroundImage: gradient,
          backgroundSize: shimmer ? '200% 200%' : '100% 100%',
        }}
        animate={shimmer ? {
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        } : {}}
        transition={{
          duration: shimmer ? 3 : 0,
          repeat: shimmer ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.span>
      
      {shimmer && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      )}
    </motion.div>
  )
} 