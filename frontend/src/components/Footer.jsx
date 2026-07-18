import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

const quickLinks = [
  { path: '/', label: 'Home Page' },
  { path: '/about', label: 'About Us' },
  { path: '/investment', label: 'Investment' },
  { path: '/testimonials', label: 'Testimonials' },
]

const companyLinks = [
  { path: '/about', label: 'Leadership' },
  { path: '/boards', label: 'Board of Directors' },
  { path: '/careers', label: 'Jobs & Career' },
  { path: '/blogs', label: 'Article & News' },
  { path: '/notices', label: 'Legal Notice' },
  { path: '/terms', label: 'Privacy & Policy' },
]

const socialLinks = [
  {
    href: 'https://www.facebook.com/paudelap',
    label: 'Facebook',
    color: 'hover:text-[#1877F2] hover:bg-[#1877F2]/10',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: 'https://www.instagram.com/ambikappaudel',
    label: 'Instagram',
    color: 'hover:text-[#E4405F] hover:bg-[#E4405F]/10',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    href: 'https://www.linkedin.com/company/skytouch',
    label: 'LinkedIn',
    color: 'hover:text-[#0A66C2] hover:bg-[#0A66C2]/10',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-gradient-to-br from-[#0f1a2e] via-[#162240] to-[#1a2a4a] text-white/80">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-sky-400/12 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-amber-400/8 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-[140px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sky-500/5 via-transparent to-transparent" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curve1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
              <stop offset="30%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#f97316" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="curve2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="curve3" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
              <stop offset="40%" stopColor="#fbbf24" stopOpacity="0.15" />
              <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
            </linearGradient>
            <pattern id="footer-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="0.6" fill="white" opacity="0.25" />
            </pattern>
            <pattern id="footer-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.3" opacity="0.4" />
            </pattern>
          </defs>
          <path d="M -100 200 Q 300 50 600 180 T 1400 120" stroke="url(#curve1)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M -100 250 Q 350 100 650 230 T 1400 170" stroke="url(#curve1)" strokeWidth="0.8" fill="none" opacity="0.4" />
          <path d="M -100 400 Q 400 250 700 380 T 1500 320" stroke="url(#curve2)" strokeWidth="1.2" fill="none" opacity="0.5" />
          <path d="M -100 450 Q 450 300 750 430 T 1500 370" stroke="url(#curve2)" strokeWidth="0.6" fill="none" opacity="0.3" />
          <path d="M -100 600 Q 500 450 800 580 T 1500 520" stroke="url(#curve3)" strokeWidth="1" fill="none" opacity="0.4" />
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
          <rect width="100%" height="100%" fill="url(#footer-dots)" />
        </svg>

        <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-[0.04]" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(249,115,22,0.8) 0%, transparent 70%)', transform: 'translateX(30%) translateY(-20%)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-[0.04]" style={{ background: 'radial-gradient(circle at 70% 70%, rgba(56,189,248,0.8) 0%, transparent 70%)', transform: 'translateX(-30%) translateY(20%)' }} />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-24 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <picture>
              <source srcSet="/logo.webp" type="image/webp" />
              <img src="/logo-sm.jpg" alt="SkyTouch" className="h-14 w-auto mb-5 brightness-0 invert opacity-85" loading="lazy" />
            </picture>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Strategic Investment & Professional Consulting, empowering businesses and investors across Nepal since 2009.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 text-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                Mon – Fri: 9:00 AM – 6:00 PM
              </span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.25em] font-bold text-white/70 mb-6 uppercase bg-gradient-to-r from-orange-400/20 to-transparent pl-4 py-2 rounded-r-lg border-l-2 border-orange-400/50">Quick Links</h4>
            <ul className="space-y-3 pl-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-orange-300 transition-colors">
                    <ChevronRight size={10} className="text-orange-400/0 group-hover:text-orange-400 transition-all -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.25em] font-bold text-white/70 mb-6 uppercase bg-gradient-to-r from-sky-400/20 to-transparent pl-4 py-2 rounded-r-lg border-l-2 border-sky-400/50">Company</h4>
            <ul className="space-y-3 pl-4">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-sky-300 transition-colors">
                    <ChevronRight size={10} className="text-sky-400/0 group-hover:text-sky-400 transition-all -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] tracking-[0.25em] font-bold text-white/70 mb-6 uppercase bg-gradient-to-r from-amber-400/20 to-transparent pl-4 py-2 rounded-r-lg border-l-2 border-amber-400/50">Get In Touch</h4>
            <ul className="space-y-4 pl-4">
              <li className="group">
                <a href="mailto:info@skytouchinvestment.com.np" className="flex items-start gap-3.5 text-sm text-white/45 hover:text-orange-300 transition-colors">
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:text-orange-400 group-hover:border-orange-500/40 transition-all shadow-[0_0_12px_rgba(249,115,22,0.08)]">
                    <Mail size={14} />
                  </span>
                  <span>
                    <span className="block text-[10px] tracking-wider text-white/30 uppercase mb-0.5">Email</span>
                    <span className="text-white/60 group-hover:text-orange-300 transition-colors">info@skytouchinvestment.com.np</span>
                  </span>
                </a>
              </li>
              <li className="group">
                <a href="tel:+977-1-4XXXXXX" className="flex items-start gap-3.5 text-sm text-white/45 hover:text-sky-300 transition-colors">
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500/10 to-sky-500/5 border border-sky-500/20 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:text-sky-400 group-hover:border-sky-500/40 transition-all shadow-[0_0_12px_rgba(56,189,248,0.08)]">
                    <Phone size={14} />
                  </span>
                  <span>
                    <span className="block text-[10px] tracking-wider text-white/30 uppercase mb-0.5">Phone</span>
                    <span className="text-white/60 group-hover:text-sky-300 transition-colors">+977-1-4XXXXXX</span>
                  </span>
                </a>
              </li>
              <li className="group">
                <span className="flex items-start gap-3.5 text-sm text-white/45">
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-all shadow-[0_0_12px_rgba(251,191,36,0.08)]">
                    <MapPin size={14} />
                  </span>
                  <span>
                    <span className="block text-[10px] tracking-wider text-white/30 uppercase mb-0.5">Address</span>
                    <span className="text-white/60">Panipokhari, Kathmandu, Nepal</span>
                  </span>
                </span>
              </li>
            </ul>
            <div className="flex gap-3 mt-8 pl-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/30 ${s.color} transition-all duration-300 hover:scale-110 border border-white/10 hover:border-white/20`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/25 to-transparent" />
          <div className="absolute inset-x-[20%] top-0 h-[1px] bg-gradient-to-r from-orange-400/0 via-orange-400/15 to-orange-400/0 blur-sm" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/25">
              &copy; {new Date().getFullYear()} Sky Touch Investment & Consultant Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[11px]">
              <Link to="/terms" className="text-white/25 hover:text-orange-300 transition-colors">Privacy Policy</Link>
              <span className="w-px h-3 bg-white/10" />
              <Link to="/terms" className="text-white/25 hover:text-orange-300 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
