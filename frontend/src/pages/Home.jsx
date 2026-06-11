import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import ParticleHero from '../components/ui/particle-effect-hero'
import { lazy, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'

const InvestmentSectorCard = lazy(() => import('../components/ui/investment-sector-card').then(m => ({ default: m.InvestmentSectorCard || m.default })))

const testimonials = [
  { name: 'Dr. Ramesh Sharma', role: 'Healthcare', text: 'Patient capital that allowed us to build quality infrastructure without short-term pressure.' },
  { name: 'Bikash Thapa', role: 'Energy', text: 'Essential partners during challenging times. Their construction sector expertise made the difference.' },
  { name: 'Rajiv Shrestha', role: 'Real Estate', text: 'Most professional partnership in my 25-year career. They brought governance best practices and strategic discipline.' },
]

export default function Home() {
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

      {/* GROTH / PROVEN & TRUSTED */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0c1929]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08)_0%,transparent_60%)]" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal>
              <span className="text-xs tracking-[0.2em] font-semibold text-tertiary uppercase mb-4 block">Growth</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Proven & Trusted
              </h2>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-white/70 mb-6">
                Strategic Capital, Sustainable Growth, Enduring Value.
              </h3>
              <p className="text-white/50 leading-relaxed mb-8">
                We are strategically investing across high-growth sectors to build diversified portfolios that generate sustainable returns. Through disciplined capital allocation in private equity, real estate, capital markets, and renewable energy, we create long-term value while contributing to economic development.
              </p>
              <div className="flex gap-8 lg:gap-12">
                <div>
                  <p className="text-4xl font-bold font-display text-primary">100+</p>
                  <p className="text-xs text-white/40 tracking-wider mt-1">Portfolio Companies</p>
                </div>
                <div>
                  <p className="text-4xl font-bold font-display text-tertiary">10 Yrs.</p>
                  <p className="text-xs text-white/40 tracking-wider mt-1">Track Record</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&fit=crop"
                  alt="Growth"
                  className="rounded-2xl w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-tertiary/10 rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
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
