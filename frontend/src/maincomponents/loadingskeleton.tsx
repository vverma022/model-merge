import React from 'react'
import { Skeleton } from '../components/ui/skeleton'

const LoadingSkeleton = () => {
  return (
    <div>
     <div className="space-y-2 p-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-80" />
        <Skeleton className="h-4 w-60" />
      </div>
    </div>
  )
}

export default LoadingSkeleton