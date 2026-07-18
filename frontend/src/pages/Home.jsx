import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import ParticleHero from '../components/ui/particle-effect-hero'

import { lazy, Suspense, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from '../components/ui/typewriter-text'
import { AnimatedTestimonials } from '../components/ui/testimonial'
import { Briefcase, Landmark, Users, Award, MessageCircle, BarChart3, Map, Scale, TrendingUp, LineChart } from 'lucide-react'

const InvestmentSectorCard = lazy(() => import('../components/ui/investment-sector-card').then(m => ({ default: m.InvestmentSectorCard || m.default })))

const testimonials = [
  { quote: 'SkyTouch has been more than an investor; they have been true partners in our growth journey. When we needed capital to expand our multi-specialty hospital, they not only provided funding but brought governance expertise and strategic guidance.', name: 'Dr. James Mitchell', designation: 'Healthcare', src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face' },
  { quote: 'SkyTouch demonstrated deep understanding of our sector from day one. Their patient capital and strategic guidance helped us navigate regulatory complexities and scale our hydropower operations across multiple provinces.', name: 'Michael Torres', designation: 'Energy', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face' },
  { quote: 'In my 25 years in business, I have worked with various financial partners, but SkyTouch stands apart in their professionalism and long-term orientation. They brought governance best practices and strategic discipline that transformed our portfolio.', name: 'Robert Williams', designation: 'Real Estate', src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face' },
]

export default function Home() {
  const meshRef = useRef(null)
  const timelineRef = useRef(null)
  const scrollLineRef = useRef(null)
  const timelineLineBgRef = useRef(null)
  const stepRefs = useRef([])

  const stats = [
    { icon: Briefcase, label: 'Sectors Invested', desc: 'Across diverse industries', color: 'text-primary' },
    { icon: Landmark, label: 'NPR 5B+ AUM', desc: 'Assets under management', color: 'text-secondary' },
    { icon: Users, label: '50+ Team', desc: 'Expert professionals', color: 'text-tertiary' },
    { icon: Award, label: 'CARE Rated', desc: 'Bank facilities rated', color: 'text-primary' },
  ]

  const protocolSteps = [
    { icon: 'chat', title: 'Consultation', desc: 'In-depth alignment of objectives, risk appetite, and liquidity horizons through bespoke private briefings.' },
    { icon: 'analytics', title: 'Research & Analysis', desc: 'Quantitative stress-testing and deep-domain due diligence conducted by our in-house forensic analysts.' },
    { icon: 'map', title: 'Strategic Planning', desc: 'Custom portfolio architecture aligned to your financial objectives and Nepal\'s macro growth trajectory.' },
    { icon: 'gavel', title: 'Execution', desc: 'Seamless capital deployment and structured asset acquisition leveraging our regulatory framework.' },
    { icon: 'auto_graph', title: 'Growth Optimization', desc: 'Continuous monitoring, active governance, and strategic rebalancing for performance enhancement.' },
    { icon: 'trending_up', title: 'Long-Term Returns', desc: 'Sustained compounding growth with transparent quarterly reporting and exit positioning for maximized liquidity.' },
  ]

  const iconMap = {
    chat: MessageCircle,
    analytics: BarChart3,
    map: Map,
    gavel: Scale,
    auto_graph: TrendingUp,
    trending_up: LineChart,
  }

  const stepColors = [
    { border: 'border-primary', shadow: 'shadow-[0_0_30px_rgba(14,165,233,0.6)]', icon: 'text-primary' },
    { border: 'border-secondary', shadow: 'shadow-[0_0_30px_rgba(14,165,233,0.6)]', icon: 'text-secondary' },
    { border: 'border-primary', shadow: 'shadow-[0_0_30px_rgba(14,165,233,0.6)]', icon: 'text-primary' },
    { border: 'border-secondary', shadow: 'shadow-[0_0_30px_rgba(14,165,233,0.6)]', icon: 'text-secondary' },
    { border: 'border-primary', shadow: 'shadow-[0_0_30px_rgba(14,165,233,0.6)]', icon: 'text-primary' },
    { border: 'border-tertiary', shadow: 'shadow-[0_0_30px_rgba(249,115,22,0.6)]', icon: 'text-tertiary' },
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (meshRef.current) {
        const x = (e.clientX / window.innerWidth) * 100
        const y = (e.clientY / window.innerHeight) * 100
        meshRef.current.style.setProperty('--mouse-x', x + '%')
        meshRef.current.style.setProperty('--mouse-y', y + '%')
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const container = document.getElementById('particle-container')
    if (!container) return
    const isMobile = window.innerWidth < 768
    const colors = ['#ffffff', '#0ea5e9', '#f97316', '#7bd0ff']
    const particles = []
    const count = isMobile ? 15 : 50
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      const size = Math.random() * 3 + 1
      const duration = 15 + Math.random() * 20
      const driftX = (Math.random() - 0.5) * 10
      p.style.cssText = `position:absolute;border-radius:50%;pointer-events:none;will-change:transform,opacity;width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};opacity:0;`
      container.appendChild(p)
      particles.push(p)
      p.animate([
        { transform: 'translateY(0) translateX(0)', opacity: 0 },
        { opacity: Math.random() * 0.5 + 0.1, offset: 0.5 },
        { transform: `translateY(-100vh) translateX(${driftX}vw)`, opacity: 0 }
      ], { duration: duration * 1000, iterations: Infinity, delay: Math.random() * -duration * 1000 })
    }
    return () => particles.forEach(p => p.remove())
  }, [])

  useEffect(() => {
    const positionLine = () => {
      if (!timelineRef.current || !timelineLineBgRef.current) return
      const steps = timelineRef.current.querySelectorAll('.timeline-step')
      if (steps.length < 2) return
      const firstCircle = steps[0].querySelector('.step-node')
      const lastCircle = steps[steps.length - 1].querySelector('.step-node')
      if (!firstCircle || !lastCircle) return

      const tlRect = timelineRef.current.getBoundingClientRect()
      const fRect = firstCircle.getBoundingClientRect()
      const lRect = lastCircle.getBoundingClientRect()

      const top = fRect.top + fRect.height / 2 - tlRect.top
      const bottom = tlRect.bottom - (lRect.top + lRect.height / 2)

      timelineLineBgRef.current.style.top = top + 'px'
      timelineLineBgRef.current.style.bottom = bottom + 'px'
    }

    positionLine()
    window.addEventListener('resize', positionLine)
    return () => window.removeEventListener('resize', positionLine)
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!timelineRef.current || !scrollLineRef.current) return
          const wh = window.innerHeight

          const steps = timelineRef.current.querySelectorAll('.timeline-step')
          let closestIdx = 0
          let minDist = Infinity
          steps.forEach((step, i) => {
            const sc = step.getBoundingClientRect().top + step.getBoundingClientRect().height / 2
            const dist = Math.abs(sc - wh / 2)
            if (dist < minDist) { minDist = dist; closestIdx = i }
          })
          const lineProgress = ((closestIdx + 1) / steps.length) * 100
          const path = scrollLineRef.current
          const length = path.getTotalLength ? path.getTotalLength() : 1400
          path.style.strokeDasharray = length
          path.style.strokeDashoffset = length * (1 - lineProgress / 100)

          steps.forEach((step, i) => {
            const sc = step.getBoundingClientRect().top + step.getBoundingClientRect().height / 2
            const dist = Math.abs(sc - wh / 2) / (wh / 2)
            const opacity = Math.max(0.3, 1 - dist * 0.7)
            const scale = Math.max(0.92, 1 - dist * 0.08)
            step.style.opacity = opacity
            step.style.transform = `scale(${scale})`

            const node = step.querySelector('.step-node')
            if (node) {
              const glowIntensity = Math.max(0, 1 - dist * 0.8)
              const colors = [
                'rgba(14,165,233,0.6)',
                'rgba(14,165,233,0.6)',
                'rgba(14,165,233,0.6)',
                'rgba(14,165,233,0.6)',
                'rgba(14,165,233,0.6)',
                'rgba(249,115,22,0.6)',
              ]
              const glowRgba = i === 5 ? '249,115,22' : '14,165,233'
              node.style.boxShadow = `0 0 ${15 + glowIntensity * 30}px rgba(${glowRgba},${0.3 + glowIntensity * 0.4})`
              node.style.borderColor = `rgba(${i === 5 ? '249,115,22' : '14,165,233'}, ${0.4 + glowIntensity * 0.6})`
            }
          })

          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {/* PARTICLE HERO */}
      <ParticleHero />

      {/* STATS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 relative z-20 -mt-16 sm:-mt-20 mb-16 sm:mb-24">
        <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-12">
          <div className="overflow-hidden">
            <div
              className="flex w-max gap-3 sm:gap-4 md:gap-8"
              style={{ animation: 'partnerMarquee 24s linear infinite' }}
            >
              {[...stats, ...stats].map((stat, i) => (
                <ScrollReveal key={`${stat.label}-${i}`} delay={(i % stats.length) * 0.08} className="text-center shrink-0 min-w-[130px] sm:min-w-[170px] md:min-w-[260px] px-2 sm:px-3 md:px-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center ${stat.color}`}>
                    <stat.icon size={24} strokeWidth={1.5} className="sm:w-8 sm:h-8 md:w-12 md:h-12" />
                  </div>
                  <p className="text-sm sm:text-base md:text-2xl font-bold text-slate-900">{stat.label}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 mt-0.5 sm:mt-1">{stat.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-16 sm:py-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          <ScrollReveal className="xl:col-span-4 glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between border border-white/5">
            <div>
              <span className="section-label">Our Vision</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-5">Trusted partnership for long-term growth</h2>
              <p className="text-xs sm:text-sm md:text-base text-on-surface-variant/70 leading-relaxed">
                To become a trusted investment and consulting partner that contributes to the growth of businesses, entrepreneurs, and investors across Nepal.
              </p>
            </div>
            <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl sm:rounded-2xl border border-outline/10 bg-white/5 p-3 sm:p-4">
                <p className="text-2xl sm:text-3xl font-bold font-display text-primary">15+</p>
                <p className="text-[9px] sm:text-xs tracking-[0.2em] text-outline mt-1 uppercase">Years in Business</p>
              </div>
              <div className="rounded-xl sm:rounded-2xl border border-outline/10 bg-white/5 p-3 sm:p-4">
                <p className="text-2xl sm:text-3xl font-bold font-display text-tertiary">2009</p>
                <p className="text-[9px] sm:text-xs tracking-[0.2em] text-outline mt-1 uppercase">Founded</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="xl:col-span-5 relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[260px] sm:min-h-[340px] md:min-h-[420px] shadow-2xl" delay={0.08}>
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&fit=crop"
              alt="Professional investment meeting"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/95 via-[#07111f]/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 md:p-10">
              <span className="text-[10px] sm:text-xs tracking-[0.25em] text-white/55 uppercase mb-2 sm:mb-3">Investment & Business Consulting</span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-display font-semibold text-white mb-2 sm:mb-3 max-w-lg">
                Empowering businesses and investors with clarity, strategy, and confidence.
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/72 max-w-xl leading-relaxed">
                Expert consulting, strategic planning, and professional advisory services designed to support informed decisions and sustainable growth.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="xl:col-span-3 flex flex-col gap-4 sm:gap-6" delay={0.12}>
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/5 flex-1">
              <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3">Our Core Values</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant/70 leading-relaxed mb-4 sm:mb-6">
                Built on a foundation of professional integrity, transparency and a relentless commitment to client success.
              </p>
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-secondary">Integrity</p>
                  <p className="text-[10px] tracking-[0.2em] text-outline uppercase">First principle</p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-outline/10">
                  <p className="text-sm sm:text-base font-semibold text-tertiary">Innovation</p>
                  <p className="text-[10px] tracking-[0.2em] text-outline uppercase">Driven approach</p>
                </div>
                <div className="pt-3 sm:pt-4 border-t border-outline/10">
                  <p className="text-sm sm:text-base font-semibold text-primary">Excellence</p>
                  <p className="text-[10px] tracking-[0.2em] text-outline uppercase">Our standard</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl sm:rounded-3xl border border-outline/10 bg-gradient-to-br from-primary/10 via-white/5 to-tertiary/10 p-5 sm:p-8 text-center">
              <p className="text-[10px] sm:text-xs tracking-[0.25em] text-outline uppercase mb-2">Our Mission</p>
              <p className="text-xs sm:text-sm text-on-surface-variant/75 leading-relaxed mb-4 sm:mb-6">
                Provide reliable consulting, support sustainable business growth, and create value through strategic planning and professional guidance.
              </p>
              <Link to="/contact" className="btn-primary inline-flex justify-center w-full">
                Talk to Our Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* INVESTMENT SECTORS */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.04)_0%,transparent_60%)]" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 relative py-16 sm:py-24">
          <ScrollReveal className="mb-8 sm:mb-12 text-center md:text-left">
            <span className="section-label">What We Do</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
              Our <span className="gold-accent">Investment Sectors</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-on-surface-variant/70 max-w-2xl">
              We deploy disciplined capital across diversified sectors driving Nepal's economic transformation.
            </p>
          </ScrollReveal>
        </div>

        <LazyInvestmentCard />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <ScrollReveal className="text-center mb-8 sm:mb-12">
            <span className="section-label text-center">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold">
              What Our <span className="gold-accent">Clients Say</span>
            </h2>
          </ScrollReveal>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* HOW WE WORK - THE SKYTOUCH PROTOCOL */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-black" id="process">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.02]" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.04) 0%, transparent 60%)' }} />

        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="absolute top-32 left-16 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-orange-500/5 blur-[60px] sm:blur-[100px]" />
        <div className="absolute bottom-32 right-16 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-blue-500/5 blur-[60px] sm:blur-[120px]" />

        <div className="hidden sm:block absolute top-0 left-[15%] w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="hidden sm:block absolute top-0 right-[20%] w-[1px] h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <div className="hidden sm:block absolute bottom-0 left-[25%] w-[1px] h-28 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="hidden sm:block absolute bottom-0 right-[15%] w-[1px] h-24 bg-gradient-to-b from-transparent via-white/15 to-transparent" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
          <svg className="w-full h-full opacity-[0.12]" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.8" fill="white" opacity="0.3" />
              </pattern>
              <linearGradient id="fadeTop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="30%" stopColor="white" stopOpacity="0.15" />
                <stop offset="70%" stopColor="white" stopOpacity="0.15" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="url(#fadeTop)" strokeWidth="0.6" fill="none">
              <line x1="400" y1="0" x2="0" y2="600" />
              <line x1="400" y1="0" x2="80" y2="600" />
              <line x1="400" y1="0" x2="160" y2="600" />
              <line x1="400" y1="0" x2="240" y2="600" />
              <line x1="400" y1="0" x2="320" y2="600" />
              <line x1="400" y1="0" x2="400" y2="600" />
              <line x1="400" y1="0" x2="480" y2="600" />
              <line x1="400" y1="0" x2="560" y2="600" />
              <line x1="400" y1="0" x2="640" y2="600" />
              <line x1="400" y1="0" x2="720" y2="600" />
              <line x1="400" y1="0" x2="800" y2="600" />
            </g>
            <g stroke="url(#fadeTop)" strokeWidth="0.4" fill="none" opacity="0.5">
              <line x1="400" y1="0" x2="40" y2="600" />
              <line x1="400" y1="0" x2="120" y2="600" />
              <line x1="400" y1="0" x2="200" y2="600" />
              <line x1="400" y1="0" x2="280" y2="600" />
              <line x1="400" y1="0" x2="360" y2="600" />
              <line x1="400" y1="0" x2="440" y2="600" />
              <line x1="400" y1="0" x2="520" y2="600" />
              <line x1="400" y1="0" x2="600" y2="600" />
              <line x1="400" y1="0" x2="680" y2="600" />
              <line x1="400" y1="0" x2="760" y2="600" />
            </g>
            <rect x="0" y="0" width="800" height="600" fill="url(#dots)" opacity="0.4" />
          </svg>
        </div>

        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06]" style={{ transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)', backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.04]" style={{ transform: 'translate(-50%, -50%) rotateX(60deg) rotateZ(45deg)', backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '15px 15px' }} />

        <div id="particle-container" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }} />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 relative z-10">
          <ScrollReveal className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block text-[10px] sm:text-xs tracking-[0.3em] font-bold text-white/40 uppercase mb-3 sm:mb-4">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 min-h-[1.2em]">
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                The{' '}
                <Typewriter
                  text={["SkyTouch Protocol", "Investment Protocol", "Wealth Protocol"]}
                  speed={80}
                  cursor="|"
                  loop={true}
                  className="inline-block"
                />
              </span>
            </h2>
            <p className="text-white/30 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
              A six-stage lifecycle designed for institutional-grade execution and long-term wealth compounding.
            </p>
          </ScrollReveal>

          <div className="relative max-w-[800px] mx-auto" ref={timelineRef}>
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:block top-0 bottom-0 w-full overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.7 }}>
                <defs>
                  <linearGradient id="curveGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                    <stop offset="15%" stopColor="#f97316" stopOpacity="0.08" />
                    <stop offset="50%" stopColor="#f97316" stopOpacity="0.2" />
                    <stop offset="85%" stopColor="#f97316" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="curveMain" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                    <stop offset="15%" stopColor="#f97316" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="85%" stopColor="#f97316" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 400,0 C 400,25 470,45 470,80 S 330,145 330,190 S 470,255 470,300 S 330,365 330,410 S 470,475 470,520 S 330,585 330,630 S 400,680 400,730"
                  stroke="url(#curveGlow)" strokeWidth="14" fill="none" strokeLinecap="round" />
                <path d="M 400,0 C 400,25 470,45 470,80 S 330,145 330,190 S 470,255 470,300 S 330,365 330,410 S 470,475 470,520 S 330,585 330,630 S 400,680 400,730"
                  stroke="url(#curveMain)" strokeWidth="3" fill="none" strokeLinecap="round"
                  strokeDasharray="1400" strokeDashoffset="1400" ref={scrollLineRef} />
              </svg>
            </div>

            {protocolSteps.map((step, i) => {
              const isLeft = i === 0 || i === 2 || i === 4
              const c = stepColors[i]

              return (
                <div key={step.title} className="timeline-step flex flex-col md:flex-row items-start mb-10 sm:mb-14 md:mb-20 last:mb-0 will-change-transform duration-75 group">
                  <div className={`w-full md:flex-1 text-center ${isLeft ? 'md:text-right md:pr-8' : 'md:order-3 md:text-left md:pl-8'} mb-4 sm:mb-6 md:mb-0`}>
                    <div className={`relative ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <div className="relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200 hover:border-orange-400/30 transition-all duration-500 overflow-hidden bg-white text-center shadow-sm">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center ${c.icon}`}>
                          {iconMap[step.icon] && (
                            <span className={c.icon}>
                              {(() => { const Icon = iconMap[step.icon]; return <Icon size={22} strokeWidth={1.5} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />; })()}
                            </span>
                          )}
                        </div>
                        <div className="inline-flex items-center justify-center gap-2 mb-3 sm:mb-4 w-full">
                          <span className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] tracking-[0.15em] font-bold text-orange-500 bg-orange-50 rounded-full border border-orange-200">
                            STEP {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="h-[1px] w-4 sm:w-6 bg-gradient-to-r from-orange-400/60 to-transparent" />
                        </div>
                        <h3 className="text-base sm:text-lg md:text-[26px] font-semibold text-slate-900 mb-2 sm:mb-3">{step.title}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                  <div className={`flex justify-center self-center w-auto mb-4 sm:mb-6 md:mb-0 md:mx-10 ${isLeft ? '' : 'md:order-2'}`}>
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 ${c.icon.replace('text', 'bg')}/30`} />
                      <div className={`step-node relative flex-shrink-0 z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white border-2 ${c.border} flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 shadow-lg ${c.shadow}`}>
                        {iconMap[step.icon] && (
                          <span className={`${c.icon} group-hover:scale-110 transition-transform duration-300`}>
                            {(() => { const Icon = iconMap[step.icon]; return <Icon size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />; })()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={`hidden md:block md:flex-1 ${isLeft ? '' : 'md:order-1'}`} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <ScrollReveal>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop"
                alt="About"
                className="rounded-xl sm:rounded-2xl w-full object-cover h-48 sm:h-64 md:h-auto"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="text-center lg:text-left">
              <span className="section-label inline-block">Why SkyTouch</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
                About our <span className="gold-accent">company</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-on-surface-variant/70 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 text-left sm:text-justify">
                Sky Touch Investment & Consultant Pvt. Ltd. is a Nepal-based private company established on 2066-03-14 B.S. and registered under Reg. No. 63835. Located in Kathmandu, Bagmati Province, the company focuses on investment and consultancy services, providing professional guidance and strategic solutions for business growth and financial development in Nepal. With years of industry presence, the company aims to deliver reliable consulting services while supporting clients in achieving long-term business success.
              </p>
              <Link to="/about" className="btn-primary inline-flex mx-auto lg:mx-0">
                ABOUT US
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

function LazyInvestmentCard() {
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '200px' })

  return (
    <div ref={ref} className="w-full px-0 md:px-0 relative">
      {inView ? (
        <Suspense fallback={<div className="w-full h-64 flex items-center justify-center">Loading...</div>}>
          <InvestmentSectorCard />
        </Suspense>
      ) : (
        <div className="w-full h-64" />
      )}
    </div>
  )
}
