'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollTriggeredAnimationProps {
  children: React.ReactNode
  className?: string
  animationType?: 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'fade'
  delay?: number
  duration?: number
}

export default function ScrollTriggeredAnimation({ 
  children, 
  className = "", 
  animationType = 'slideUp',
  delay = 0,
  duration = 0.8
}: ScrollTriggeredAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 }
        }
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 }
        }
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 }
        }
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 }
        }
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -180, scale: 0.5 },
          visible: { opacity: 1, rotate: 0, scale: 1 }
        }
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }
      default:
        return {
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 }
        }
    }
  }

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={getAnimationVariants()}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      style={{
        opacity,
        scale
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 