import React from 'react'
import { cn } from '@/lib/utils'

interface LoadingScreenProps {
  className?: string
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ className }) => {
  return (
    <div
      className={cn('fixed inset-0 z-50 flex items-center justify-center bg-background', className)}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          {/* Inner spinning ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primary" />
        </div>
        {/* Optional loading text */}
        <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingScreen
