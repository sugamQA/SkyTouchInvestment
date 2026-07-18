import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Info, Users, BriefcaseBusiness, Newspaper, Mail } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'HOME', icon: Home },
  { path: '/about', label: 'ABOUT', icon: Info },
  { path: '/boards', label: 'BOARDS', icon: Users },
  { path: '/investment', label: 'INVESTMENT', icon: BriefcaseBusiness },
  { path: '/blogs', label: 'BLOGS', icon: Newspaper },
  { path: '/careers', label: 'CAREERS', icon: BriefcaseBusiness },
  { path: '/contact', label: 'CONTACT', icon: Mail },
]

function NepalTime() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const nepal = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' }))
      setTime(nepal.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }))
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return (
    <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] font-semibold leading-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-emerald-400/90">{time}</span>
      <span className="text-white/40 hidden sm:inline">NPT</span>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const [navIn, setNavIn] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setNavIn(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'px-3 sm:px-4 md:px-6 pt-3' : 'px-0 pt-0'
        }`}
      >
        <div
          className={`overflow-hidden relative transition-all duration-500 ease-out ${
            isHomePage
              ? (scrolled
                ? 'max-w-[1320px] mx-auto rounded-[2rem] border border-white/20 bg-white/5 backdrop-blur-3xl backdrop-saturate-150 shadow-2xl shadow-black/20'
                : 'w-full rounded-none border-b border-white/10 bg-transparent')
              : (scrolled
                ? 'max-w-[1320px] mx-auto rounded-[2rem] border border-primary/25 bg-gradient-to-r from-primary/10 via-white/85 to-tertiary/10 backdrop-blur-3xl backdrop-saturate-150 shadow-2xl shadow-black/20'
                : 'w-full rounded-none border-b border-primary/20 bg-gradient-to-r from-primary/90 via-slate-950 to-tertiary/90')
          } ${scrolled ? 'navbar-gradient-bg' : ''}`}
        >
          {scrolled && (
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.55)_18%,rgba(255,255,255,0.12)_42%,rgba(255,255,255,0.2)_68%,rgba(255,255,255,0.75)_100%)] opacity-85 mix-blend-screen" />
          )}
          <div className={`relative z-10 h-0.5 ${isHomePage ? (scrolled ? 'bg-gradient-to-r from-primary via-white to-tertiary' : 'bg-gradient-to-r from-primary via-tertiary to-primary') : (scrolled ? 'bg-gradient-to-r from-primary via-white to-tertiary' : 'bg-gradient-to-r from-primary via-tertiary to-primary')}`} />

          <div className="relative z-10 max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-16 transition-all duration-500 ease-out h-20">
          {/* Logo */}
          <div
            className={`flex items-center gap-3 relative group transition-all duration-600 ${
              navIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
          >
            <Link to="/" className="flex items-center gap-2 relative">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo-sm.jpg"
                  alt="SkyTouch"
                  className={`w-auto max-w-full brightness-125 contrast-125 drop-shadow-xl transition-all duration-500 ease-out ${
                    scrolled ? 'h-12 md:h-16' : 'h-16 md:h-24'
                  }`}
                />
              </picture>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.path}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`relative text-xs tracking-[0.15em] font-semibold transition-all duration-300 nav-link-underline group ${
                    location.pathname === link.path
                      ? 'text-white bg-tertiary/20 border border-tertiary/30 rounded-full px-3 py-1.5 shadow-[0_0_18px_rgba(249,115,22,0.18)]'
                      : (isHomePage ? (scrolled ? 'text-white/90 hover:text-white' : 'text-white/80 hover:text-white') : (scrolled ? 'text-slate-700 hover:text-slate-950' : 'text-white/80 hover:text-white'))
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <link.icon size={14} strokeWidth={2.25} className={location.pathname === link.path ? 'text-tertiary' : 'text-current'} />
                    <span>{link.label}</span>
                  </span>
                  
                  {/* Hover glow indicator */}
                  {hoveredLink === link.path && (
                    <div
                      className={`absolute -inset-1 blur-md rounded -z-10 transition-all duration-300 ${
                        isHomePage ? (scrolled ? 'bg-white/35' : 'bg-primary/15') : (scrolled ? 'bg-primary/20' : 'bg-primary/10')
                      }`}
                    />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div
            className={`hidden lg:block transition-all duration-600 ${
              navIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
          >
            <Link
              to="/contact#contact-form"
              className={`glow-button relative group px-8 py-3 text-xs tracking-[0.1em] font-bold rounded-full transition-all duration-300 border ${isHomePage ? (scrolled ? 'bg-white/10 text-white hover:shadow-2xl hover:shadow-white/10 border-white/25 hover:border-white/35 backdrop-blur-2xl backdrop-saturate-150' : 'bg-gradient-to-r from-primary via-white to-tertiary text-slate-900 hover:shadow-2xl hover:shadow-black/30 border-white/20 hover:border-white/40') : (scrolled ? 'bg-gradient-to-r from-primary via-white to-tertiary text-slate-900 hover:shadow-2xl hover:shadow-primary/25 border-primary/70 hover:border-tertiary/70' : 'bg-gradient-to-r from-primary via-white to-tertiary text-slate-900 hover:shadow-2xl hover:shadow-black/30 border-white/20 hover:border-white/40')}`}
            >
              <span>GET IN TOUCH</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className={`absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHomePage ? (scrolled ? 'bg-primary/20' : 'bg-primary/15') : (scrolled ? 'bg-primary/20' : 'bg-primary/15')}`} />
            <span
              className={`block w-6 h-0.5 rounded-full relative transition-all duration-300 ${
                isHomePage ? (scrolled ? 'bg-white' : 'bg-white') : (scrolled ? 'bg-slate-900' : 'bg-white')
              } ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isHomePage ? (scrolled ? 'bg-white' : 'bg-white') : (scrolled ? 'bg-slate-900' : 'bg-white')
              } ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                isHomePage ? (scrolled ? 'bg-white' : 'bg-white') : (scrolled ? 'bg-slate-900' : 'bg-white')
              } ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          } ${
            isHomePage ? (scrolled ? 'bg-white/10 border-white/20 backdrop-blur-xl' : 'bg-transparent border-white/10 backdrop-blur-xl') : (scrolled ? 'bg-gradient-to-b from-primary/10 via-white to-tertiary/10 border-primary/20' : 'bg-gradient-to-b from-primary/90 via-slate-950 to-tertiary/90 border-primary/20')
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm tracking-wider font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-white bg-tertiary/20 border border-tertiary/30 shadow-[0_0_18px_rgba(249,115,22,0.18)]'
                    : (isHomePage ? (scrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10') : (scrolled ? 'text-slate-700 hover:text-slate-950 hover:bg-white/50' : 'text-white/80 hover:text-white hover:bg-white/10'))
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <link.icon size={16} strokeWidth={2.2} className={location.pathname === link.path ? 'text-tertiary' : 'text-current'} />
                  <span>{link.label}</span>
                </span>
              </Link>
            ))}
            <div className={`pt-4 ${isHomePage ? (scrolled ? 'border-t border-white/20' : 'border-t border-white/10') : (scrolled ? 'border-t border-primary/20' : 'border-t border-white/10')}`}>
              <Link
                to="/contact#contact-form"
                className={`block mt-4 px-6 py-3 rounded-full text-sm tracking-wider font-bold text-center transition-all duration-300 ${isHomePage ? (scrolled ? 'bg-white/15 text-white hover:shadow-lg hover:shadow-white/10 backdrop-blur-md' : 'bg-gradient-to-r from-primary via-white to-tertiary text-slate-900 hover:shadow-lg hover:shadow-black/30') : (scrolled ? 'bg-gradient-to-r from-primary via-white to-tertiary text-slate-900 hover:shadow-lg hover:shadow-primary/25' : 'bg-gradient-to-r from-primary via-white to-tertiary text-slate-900 hover:shadow-lg hover:shadow-black/30')}`}
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  )
}
