import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ChevronUp } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 400)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3">
      <ThemeToggle />
      <div
        className={`transition-all duration-300 ease-out ${
          visible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'
        }`}
      >
        <button
          onClick={scrollToTop}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-tertiary text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow duration-300"
        >
          <ChevronUp size={22} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}
