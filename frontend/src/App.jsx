import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ParticleBackground from './components/ParticleBackground'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Investment from './pages/Investment'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Notices from './pages/Notices'
import Testimonials from './pages/Testimonials'
import Terms from './pages/Terms'
import Boards from './pages/Boards'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {isHome && <ParticleBackground />}
            <Navbar />
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/investment" element={<Investment />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogDetail />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/notices" element={<Notices />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/boards" element={<Boards />} />
              </Routes>
            </main>
            <ScrollToTop />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
