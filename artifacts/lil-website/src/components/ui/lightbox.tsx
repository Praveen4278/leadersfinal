import * as React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { ZoomIn } from "lucide-react"

interface LightboxProps {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}

export function Lightbox({ src, alt, className, imgClassName }: LightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("relative cursor-zoom-in group", className)}>
          <img
            src={src}
            alt={alt}
            className={cn("w-full h-full object-cover transition-transform duration-300 group-hover:scale-105", imgClassName)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <ZoomIn className="h-6 w-6 text-white" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-2 bg-transparent border-0 shadow-none" aria-describedby={undefined}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
        />
      </DialogContent>
    </Dialog>
  )
}