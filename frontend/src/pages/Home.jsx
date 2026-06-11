import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import ParticleHero from '../components/ui/particle-effect-hero'
import { lazy, Suspense, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const InvestmentSectorCard = lazy(() => import('../components/ui/investment-sector-card').then(m => ({ default: m.InvestmentSectorCard || m.default })))

const testimonials = [
  { name: 'Dr. Ramesh Sharma', role: 'Healthcare', text: 'Patient capital that allowed us to build quality infrastructure without short-term pressure.' },
  { name: 'Bikash Thapa', role: 'Energy', text: 'Essential partners during challenging times. Their construction sector expertise made the difference.' },
  { name: 'Rajiv Shrestha', role: 'Real Estate', text: 'Most professional partnership in my 25-year career. They brought governance best practices and strategic discipline.' },
]

export default function Home() {
  const meshRef = useRef(null)
  const timelineRef = useRef(null)
  const scrollLineRef = useRef(null)
  const timelineLineBgRef = useRef(null)
  const stepRefs = useRef([])

  const protocolSteps = [
    { icon: 'chat', title: 'Consultation', desc: 'In-depth alignment of objectives, risk appetite, and liquidity horizons through bespoke private briefings.' },
    { icon: 'analytics', title: 'Research & Analysis', desc: 'Quantitative stress-testing and deep-domain due diligence conducted by our in-house forensic analysts.' },
    { icon: 'map', title: 'Strategic Planning', desc: 'Custom portfolio architecture aligned to your financial objectives and Nepal\'s macro growth trajectory.' },
    { icon: 'gavel', title: 'Execution', desc: 'Seamless capital deployment and structured asset acquisition leveraging our regulatory framework.' },
    { icon: 'auto_graph', title: 'Growth Optimization', desc: 'Continuous monitoring, active governance, and strategic rebalancing for performance enhancement.' },
    { icon: 'trending_up', title: 'Long-Term Returns', desc: 'Sustained compounding growth with transparent quarterly reporting and exit positioning for maximized liquidity.' },
  ]

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
    const colors = ['#ffffff', '#0ea5e9', '#f97316', '#7bd0ff']
    const particles = []
    for (let i = 0; i < 50; i++) {
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
          scrollLineRef.current.style.height = lineProgress + '%'

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
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-20 -mt-20 mb-24">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { target: 15, suffix: '+', label: 'Years of Experience', color: 'text-primary' },
              { target: 500, suffix: '+', label: 'Projects Completed', color: 'text-secondary' },
              { target: 98, suffix: '%', label: 'Client Satisfaction', color: 'text-tertiary' },
              { target: 200, suffix: '+', label: 'Trusted Partners', color: 'text-primary' },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1} className="text-center">
                <p className={`text-4xl md:text-5xl font-bold font-display ${stat.color}`}>
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-xs tracking-wider text-outline mt-3 uppercase">{stat.label}</p>
                <div className={`w-10 h-0.5 mx-auto mt-4 rounded-full ${stat.color.replace('text', 'bg')}/40`} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-24">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
          <ScrollReveal className="xl:col-span-4 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-white/5">
            <div>
              <span className="section-label">Our Vision</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">Trusted partnership for long-term growth</h2>
              <p className="text-sm md:text-base text-on-surface-variant/70 leading-relaxed">
                To become a trusted investment and consulting partner that contributes to the growth of businesses, entrepreneurs, and investors across Nepal.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-outline/10 bg-white/5 p-4">
                <p className="text-3xl font-bold font-display text-primary">15+</p>
                <p className="text-xs tracking-[0.2em] text-outline mt-1 uppercase">Years in Business</p>
              </div>
              <div className="rounded-2xl border border-outline/10 bg-white/5 p-4">
                <p className="text-3xl font-bold font-display text-tertiary">2009</p>
                <p className="text-xs tracking-[0.2em] text-outline mt-1 uppercase">Founded</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="xl:col-span-5 relative overflow-hidden rounded-3xl min-h-[420px] shadow-2xl" delay={0.08}>
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&q=80&fit=crop"
              alt="Professional investment meeting"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/95 via-[#07111f]/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
              <span className="text-xs tracking-[0.25em] text-white/55 uppercase mb-3">Investment & Business Consulting</span>
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3 max-w-lg">
                Empowering businesses and investors with clarity, strategy, and confidence.
              </h3>
              <p className="text-sm md:text-base text-white/72 max-w-xl leading-relaxed">
                Expert consulting, strategic planning, and professional advisory services designed to support informed decisions and sustainable growth.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="xl:col-span-3 flex flex-col gap-6" delay={0.12}>
            <div className="glass-card rounded-3xl p-8 border border-white/5 flex-1">
              <h3 className="text-2xl font-display font-semibold mb-3">Our Core Values</h3>
              <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-6">
                Built on a foundation of professional integrity, transparency and a relentless commitment to client success.
              </p>
              <div className="space-y-5">
                <div>
                  <p className="text-base font-semibold text-secondary">Integrity</p>
                  <p className="text-[10px] tracking-[0.2em] text-outline uppercase">First principle</p>
                </div>
                <div className="pt-4 border-t border-outline/10">
                  <p className="text-base font-semibold text-tertiary">Innovation</p>
                  <p className="text-[10px] tracking-[0.2em] text-outline uppercase">Driven approach</p>
                </div>
                <div className="pt-4 border-t border-outline/10">
                  <p className="text-base font-semibold text-primary">Excellence</p>
                  <p className="text-[10px] tracking-[0.2em] text-outline uppercase">Our standard</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-outline/10 bg-gradient-to-br from-primary/10 via-white/5 to-tertiary/10 p-8 text-center">
              <p className="text-xs tracking-[0.25em] text-outline uppercase mb-2">Our Mission</p>
              <p className="text-sm text-on-surface-variant/75 leading-relaxed mb-6">
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

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative py-24">
          <ScrollReveal className="mb-12 text-center md:text-left">
            <span className="section-label">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Our <span className="gold-accent">Investment Sectors</span>
            </h2>
            <p className="text-on-surface-variant/70 max-w-2xl">
              We deploy disciplined capital across diversified sectors driving Nepal's economic transformation.
            </p>
          </ScrollReveal>
        </div>

        <LazyInvestmentCard />
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-12">
            <span className="section-label text-center">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              What Our <span className="gold-accent">Clients Say</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl p-8 h-full"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-tertiary text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-on-surface-variant/70 leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="border-t border-outline/10 pt-4">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-outline">| {t.role}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK — THE SKYTOUCH PROTOCOL */}
      <section className="py-24 relative overflow-hidden" id="process">
        <div className="absolute inset-0 bg-[#0c1929]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,transparent_60%)]" />

        <div
          className="absolute inset-0 pointer-events-none z-0"
          ref={meshRef}
          style={{ background: 'radial-gradient(circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(14,165,233,0.12) 0%, rgba(12,25,41,1) 70%)' }}
        />

        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-[10%] w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[100px]" />

        <div id="particle-container" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }} />

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="section-label">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              The <span className="gold-accent">SkyTouch</span> Protocol
            </h2>
            <p className="text-on-surface-variant/70 max-w-xl mx-auto">
              A six-stage lifecycle designed for institutional-grade execution and long-term wealth compounding.
            </p>
          </ScrollReveal>

          <div className="relative max-w-[800px] mx-auto" ref={timelineRef}>
            <div className="absolute left-1/2 -translate-x-1/2 w-[1px] hidden md:block overflow-hidden" ref={timelineLineBgRef}>
              <div className="absolute inset-0 bg-white/[0.05]" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-tertiary transition-all duration-500 ease-out" style={{ height: '0%' }} ref={scrollLineRef} />
            </div>

            {protocolSteps.map((step, i) => {
              const isLeft = i === 0 || i === 2 || i === 4
              const c = stepColors[i]

              return (
                <div key={step.title} className="timeline-step flex flex-col md:flex-row items-start mb-12 md:mb-16 last:mb-0 will-change-transform duration-75" style={{ transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
                  <div className={`w-full md:flex-1 text-center ${isLeft ? 'md:text-right md:pr-4' : 'md:order-3 md:text-left md:pl-4'} mb-4 md:mb-0`}>
                    <div className={`glass-card dark rounded-2xl p-6 md:p-8 border border-white/5 ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <span className="text-xs tracking-[0.2em] font-semibold text-slate-400 mb-2 block">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="font-display text-xl md:text-[28px] font-semibold text-white mb-3">{step.title}</h3>
                      <p className="font-body text-sm md:text-base text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                   <div className={`flex justify-center self-center w-full md:w-auto mb-4 md:mb-0 md:mx-12 ${isLeft ? '' : 'md:order-2'}`}>
                    <div className={`step-node relative flex-shrink-0 z-10 w-20 h-20 rounded-full bg-[#0f1f2f] border-2 ${c.border} flex items-center justify-center transition-all duration-500 ease-out`}
                      style={{ boxShadow: `0 0 20px ${c.border === 'border-tertiary' ? 'rgba(249,115,22,0.4)' : 'rgba(14,165,233,0.4)'}` }}>
                      <span className={`material-symbols-outlined text-[40px] ${c.icon}`} style={{ fontVariationSettings: "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48" }}>{step.icon}</span>
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
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop"
                alt="About"
                className="rounded-2xl w-full object-cover h-64 md:h-auto"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <span className="section-label">Why SkyTouch</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                About our <span className="gold-accent">company</span>
              </h2>
              <p className="text-on-surface-variant/70 leading-relaxed mb-8">
                We are a privately-held investment and consulting company built on principles of strategic capital allocation, rigorous analysis, and long-term value creation. Operating with our own capital and expertise, we have the freedom to invest and advise with patience, conviction, and a multi-generational perspective.
              </p>
              <Link to="/about" className="btn-primary inline-flex">
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
