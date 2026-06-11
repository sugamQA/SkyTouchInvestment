import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline').then(module => ({ default: module.default })))

export function SplineScene({ scene, className = "" }) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/50">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
