'use client'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

interface SpinnerProps {
  className?: string
  size?: number
}

const Spinner = ({ className, size = 24 }: SpinnerProps) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Loader2 className="text-primary animate-spin" size={size} />
    </div>
  )
}

export default Spinner
