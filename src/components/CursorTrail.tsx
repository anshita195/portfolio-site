'use client'

import { useEffect, useState } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export default function CursorTrail() {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="cursor-trail"
        style={{
          left: cursorPos.x - 10,
          top: cursorPos.y - 10,
          transform: 'scale(1)',
        }}
      />
      
      {/* Trailing particles */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="cursor-trail"
          style={{
            left: cursorPos.x - 10 - (i + 1) * 15,
            top: cursorPos.y - 10 - (i + 1) * 5,
            transform: `scale(${0.5 - i * 0.15})`,
            opacity: 0.3 - i * 0.1,
            transition: `all ${0.1 + i * 0.05}s ease`,
          }}
        />
      ))}
    </>
  )
} 