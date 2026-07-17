import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import ParticleHero from '../components/ui/particle-effect-hero'
import { lazy, Suspense, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Typewriter } from '../components/ui/typewriter-text'
import { AnimatedTestimonials } from '../components/ui/testimonial'
import { Briefcase, Landmark, Users, Award } from 'lucide-react'

const InvestmentSectorCard = lazy(() => import('../components/ui/investment-sector-card').then(m => ({ default: m.InvestmentSectorCard || m.default })))

const testimonials = [
  { quote: 'Patient capital that allowed us to build quality infrastructure without short-term pressure.', name: 'Dr. Ramesh Sharma', designation: 'Healthcare', src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face' },
  { quote: 'Essential partners during challenging times. Their energy sector expertise made the difference.', name: 'Albert Hurb Solar', designation: 'Energy', src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face' },
  { quote: 'Most professional partnership in my 25-year career. They brought governance best practices and strategic discipline.', name: 'Rajiv Shrestha', designation: 'Real Estate', src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face' },
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
          <div className="overflow-hidden">
            <div
              className="flex w-max gap-4 md:gap-8"
              style={{ animation: 'partnerMarquee 24s linear infinite' }}
            >
              {[...stats, ...stats].map((stat, i) => (
                <ScrollReveal key={`${stat.label}-${i}`} delay={(i % stats.length) * 0.08} className="text-center shrink-0 min-w-[200px] md:min-w-[260px] px-4 md:px-6">
                  <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center ${stat.color} shadow-[0_0_30px_rgba(14,165,233,0.15)]`}>
                    <stat.icon size={40} strokeWidth={1.5} className="md:w-12 md:h-12" />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-slate-900">{stat.label}</p>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">{stat.desc}</p>
                </ScrollReveal>
              ))}
            </div>
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
              <div className="mt-6 grid grid-cols-3 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80&fit=crop"
                  alt="Investment planning"
                  loading="lazy"
                  className="h-24 w-full rounded-2xl object-cover border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80&fit=crop"
                  alt="Business strategy meeting"
                  loading="lazy"
                  className="h-24 w-full rounded-2xl object-cover border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80&fit=crop"
                  alt="Financial growth chart"
                  loading="lazy"
                  className="h-24 w-full rounded-2xl object-cover border border-white/10"
                />
              </div>
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
      <section className="relative overflow-hidden" style={{ contentVisibility: 'auto' }}>
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
      <section className="py-24" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-12">
            <span className="section-label text-center">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              What Our <span className="gold-accent">Clients Say</span>
            </h2>
          </ScrollReveal>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* HOW WE WORK - THE SKYTOUCH PROTOCOL */}
      <section className="py-24 relative overflow-hidden bg-white" id="process" style={{ contentVisibility: 'auto' }}>

        <div id="particle-container" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }} />

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="section-label">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 min-h-[1.2em]">
              The{' '}
              <Typewriter
                text={["SkyTouch Protocol", "Investment Protocol", "Wealth Protocol"]}
                speed={80}
                cursor="|"
                loop={true}
                className="inline-block text-primary"
              />
            </h2>
            <p className="text-on-surface-variant/70 max-w-xl mx-auto">
              A six-stage lifecycle designed for institutional-grade execution and long-term wealth compounding.
            </p>
          </ScrollReveal>

          <div className="relative max-w-[800px] mx-auto" ref={timelineRef}>
            <div className="absolute left-1/2 -translate-x-1/2 w-[1px] hidden md:block overflow-hidden" ref={timelineLineBgRef}>
              <div className="absolute inset-0 bg-slate-200" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-tertiary transition-all duration-500 ease-out" style={{ height: '0%' }} ref={scrollLineRef} />
            </div>

            {protocolSteps.map((step, i) => {
              const isLeft = i === 0 || i === 2 || i === 4
              const c = stepColors[i]

              return (
                <div key={step.title} className="timeline-step flex flex-col md:flex-row items-start mb-14 md:mb-20 last:mb-0 will-change-transform duration-75 group">
                  <div className={`w-full md:flex-1 text-center ${isLeft ? 'md:text-right md:pr-8' : 'md:order-3 md:text-left md:pl-8'} mb-6 md:mb-0`}>
                    <div
                      className={`relative ${isLeft ? 'md:text-right' : 'md:text-left'} text-left`}
                    >
                      <div className="relative rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-primary/30 transition-all duration-500 overflow-hidden bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)] text-center">
                        {/* Step number badge */}
                        <div className="inline-flex items-center justify-center gap-2 mb-4 w-full">
                          <span className="px-3 py-1 text-[10px] tracking-[0.15em] font-bold text-primary bg-primary/10 rounded-full border border-primary/20">
                            STEP {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="h-[1px] w-6 bg-gradient-to-r from-primary/60 to-transparent" />
                        </div>
                        <h3 className="font-display text-xl md:text-[26px] font-semibold text-slate-900 mb-3">{step.title}</h3>
                        <p className="font-body text-sm md:text-base text-slate-600 leading-relaxed relative">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                   <div className={`flex justify-center self-center w-full md:w-auto mb-6 md:mb-0 md:mx-10 ${isLeft ? '' : 'md:order-2'}`}>
                    <div className="relative">
                      {/* Icon container glow */}
                      <div className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-primary/30 to-secondary/20" />
                      {/* Animated ring */}
                      <div className="absolute -inset-3 rounded-full border border-dashed border-slate-200 group-hover:animate-[spin_8s_linear_infinite] transition-all duration-500" />
                      <div className={`step-node relative flex-shrink-0 z-10 w-20 h-20 rounded-full bg-white border-2 ${c.border} flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 shadow-lg`}>
                        <span className={`material-symbols-outlined text-[36px] ${c.icon} group-hover:scale-110 transition-transform duration-300`} style={{ fontVariationSettings: "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48" }}>{step.icon}</span>
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
      <section className="py-24 bg-white" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&fit=crop"
                alt="About"
                className="rounded-2xl w-full object-cover h-64 md:h-auto"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="text-center lg:text-left">
              <span className="section-label inline-block">Why SkyTouch</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                About our <span className="gold-accent">company</span>
              </h2>
              <p className="text-on-surface-variant/70 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 text-justify">
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
