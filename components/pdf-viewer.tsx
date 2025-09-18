"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface PdfViewerProps {
  children: React.ReactNode
  pdfUrl: string
  title: string
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link"
}

export function PdfViewer({
  children,
  pdfUrl,
  title,
  className,
  size = "default",
  variant = "default",
}: PdfViewerProps) {
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
            <span>{title}</span>
            <Button asChild variant="outline" size="sm">
              <a href={pdfUrl} download className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div className="w-full h-full overflow-hidden rounded-md">
          <iframe src={pdfUrl} className="w-full h-full" title={title}></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
