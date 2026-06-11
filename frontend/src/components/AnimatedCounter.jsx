import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.max(1, Math.floor(target / 60))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, duration / 60)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}
