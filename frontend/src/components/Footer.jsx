import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden bg-gradient-to-b from-[#07111f] via-black to-[#0b1526] text-white/80">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/12 rounded-full blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-400/8 rounded-full blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/35 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/logo.png" alt="SkyTouch" className="h-20 w-auto mb-4 brightness-0 invert opacity-85" loading="lazy" />
            <p className="text-sm text-white/50 leading-relaxed">
              Strategic Investment & Professional Consulting, empowering businesses and investors across Nepal since 2009.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs tracking-[0.2em] font-bold text-white/90 mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-sky-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs tracking-[0.2em] font-bold text-white/90 mb-6 uppercase">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-sky-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xs tracking-[0.2em] font-bold text-white/90 mb-6 uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <p className="text-xs tracking-wider text-white/40 mb-1">Send Email</p>
                <a href="mailto:info@skytouch.com.np" className="text-sm text-white/70 hover:text-sky-300 transition-colors">
                  info@skytouch.com.np
                </a>
              </li>
              <li>
                <p className="text-xs tracking-wider text-white/40 mb-1">Call us</p>
                <a href="tel:+977-1-4XXXXXX" className="text-sm text-white/70 hover:text-sky-300 transition-colors">
                  01-4XXXXXX
                </a>
              </li>
              <li>
                <p className="text-xs tracking-wider text-white/40 mb-1">Address</p>
                <p className="text-sm text-white/70">Panipokhari, Kathmandu, Nepal</p>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {['fb', 'ig', 'li'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-sky-400/20 hover:text-sky-300 transition-all text-xs font-bold"
                >
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Sky Touch Investment & Consultant Pvt. Ltd.
          </p>
            <p className="text-xs text-white/20">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
