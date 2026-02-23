"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface ResumeViewerProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link"
}

export function ResumeViewer({ children, className, size = "default", variant = "default" }: ResumeViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={className} size={size} variant={variant}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex justify-between items-center">
            <span>Jenny Nguyen - Resume</span>
            <Button asChild variant="outline" size="sm">
             <a href="/website-resume.pdf" download className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="w-full h-full overflow-hidden rounded-md">
          <iframe
            src="/website-resume.pdf"
            className="w-full h-full"
            title="Jenny Nguyen Resume"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
