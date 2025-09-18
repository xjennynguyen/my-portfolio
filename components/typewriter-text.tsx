"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export function TypewriterText({ text, speed = 100, className = "", onComplete }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsTyping(false)
      onComplete?.()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <div className={`inline-flex ${className}`}>
      <span>{displayText}</span>
      {isTyping && <span className="ml-1 animate-pulse">|</span>}
    </div>
  )
}
