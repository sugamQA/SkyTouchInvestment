import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
      return false
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-200 active:scale-90"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="theme-toggle-icon">
        {dark ? (
          <Moon size={18} className="text-amber-300" strokeWidth={2} />
        ) : (
          <Sun size={18} className="text-amber-500" strokeWidth={2} />
        )}
      </div>
    </button>
  )
}
