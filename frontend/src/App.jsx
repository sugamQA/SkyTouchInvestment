import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Investment = lazy(() => import('./pages/Investment'))
const Blogs = lazy(() => import('./pages/Blogs'))
const BlogDetail = lazy(() => import('./pages/BlogDetail'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const Notices = lazy(() => import('./pages/Notices'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Terms = lazy(() => import('./pages/Terms'))
const Boards = lazy(() => import('./pages/Boards'))

const PAGE_LOADING = (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      {isHome && <ParticleBackground />}
      <Navbar />
      <main className="relative z-10">
        <Suspense fallback={PAGE_LOADING}>
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
        </Suspense>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  )
}
