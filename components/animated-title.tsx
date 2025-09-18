"use client"

import { useState } from "react"
import { TypewriterText } from "./typewriter-text"

interface AnimatedTitleProps {
  name: string
  title: string
  className?: string
}

export function AnimatedTitle({ name, title, className = "" }: AnimatedTitleProps) {
  const [showTitle, setShowTitle] = useState(false)

  return (
    <div className={className}>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
        <TypewriterText text={name} speed={150} onComplete={() => setShowTitle(true)} />
      </h1>

      {showTitle && (
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6 opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
          {title}
        </h2>
      )}
    </div>
  )
}
