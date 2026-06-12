import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import CircularTestimonials from '../components/ui/circular-testimonials'
import { InteractiveGlobe } from '../components/ui/interactive-globe'

const approach = [
  { icon: '📊', title: 'Rigorous Analysis', desc: 'We conduct comprehensive due diligence on every potential investment opportunity.' },
  { icon: '🤝', title: 'Active Partnership', desc: 'We engage as true partners through board participation, governance oversight, and strategic guidance.' },
  { icon: '🎯', title: 'Strategic Diversification', desc: 'Our portfolio maintains balanced exposure across private equity, real estate, capital markets, and hydropower.' },
  { icon: '🏛️', title: 'Multi-generational', desc: 'We invest with a long-term perspective, building value that lasts for generations.' },
]

const approachTestimonials = [
  {
    quote: "Our rigorous analysis framework ensures every investment decision is backed by comprehensive due diligence and market validation. We examine financial metrics, management quality, and strategic fit before committing capital.",
    name: "Rigorous Analysis",
    designation: "Data-Driven Decision Making",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "We don't simply invest capital; we become engaged partners. Through board seats, governance participation, and hands-on strategic guidance, we create value alongside management teams and stakeholders.",
    name: "Active Partnership",
    designation: "Collaborative Value Creation",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "Strategic diversification across sectors and asset classes provides portfolio stability while maximizing return potential. Our balanced approach protects capital while capturing growth opportunities.",
    name: "Strategic Diversification",
    designation: "Risk-Adjusted Returns",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "We invest with a multi-generational perspective, building sustainable value that endures through market cycles. Long-term thinking allows us to make bold strategic decisions that create lasting impact.",
    name: "Multi-generational Vision",
    designation: "Sustainable Value Creation",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=90&fit=crop&crop=face&auto=format",
  },
]

// Board of directors removed per request

export default function About() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-primary/5">
        <div className="absolute inset-0" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="section-label text-center">OUR FOUNDATION & PHILOSOPHY</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About <span className="gold-accent">SkyTouch</span>
            </h1>
            <p className="text-lg text-on-surface-variant/70 max-w-3xl mx-auto leading-relaxed">
              We are a privately-held investment and consulting company built on principles of strategic capital allocation, rigorous analysis, and long-term value creation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-[#0c1929]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { target: 150, suffix: '+', label: 'Projects', color: 'text-primary' },
              { target: 100, suffix: '%', label: 'ISO Certified', color: 'text-tertiary' },
              { target: 30, suffix: '+', label: 'Expert Team', color: 'text-primary' },
              { target: 15, suffix: '+', label: 'Years Experience', color: 'text-tertiary' },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <p className={`text-4xl md:text-5xl font-bold font-display ${s.color}`}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} />
                </p>
                <p className="text-xs tracking-wider text-white/40 mt-2 uppercase">{s.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-24 bg-primary/[0.03]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <ScrollReveal>
              <span className="section-label">Our Global Network</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Worldwide <span className="gold-accent">Presence</span>
              </h2>
              <p className="text-on-surface-variant/70 leading-relaxed mb-6">
                SkyTouch operates through a global network of investment professionals and strategic partners. Our international reach enables us to identify opportunities across regions while maintaining deep local expertise.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mt-8">
                <div>
                  <p className="text-3xl font-bold text-primary">150+</p>
                  <p className="text-xs text-on-surface-variant/60 mt-2">Global Partners</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">&lt;50ms</p>
                  <p className="text-xs text-on-surface-variant/60 mt-2">Response Time</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">99.99%</p>
                  <p className="text-xs text-on-surface-variant/60 mt-2">Network Uptime</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Globe */}
            <ScrollReveal delay={0.1} className="flex justify-center">
              <div className="w-full max-w-sm h-80 lg:h-96">
                <InteractiveGlobe 
                  size={400}
                  autoRotateSpeed={0.0015}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="relative overflow-hidden bg-black text-white rounded-[2rem] mb-12 border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.22),transparent_30%)]" />
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/8 to-transparent" />

            <div className="relative z-10 px-6 md:px-16 pt-10 pb-24">
              <ScrollReveal className="mb-12 text-center">
                <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">How We Invest</span>
                  <span className="h-1 w-1 rounded-full bg-white/30" />
                  <span className="text-[11px] uppercase tracking-[0.24em] text-white/45">The SkyTouch Perspective</span>
                </div>
                <h2 className="mt-6 text-3xl md:text-5xl font-display font-bold leading-tight">
                  Our <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">Investment Approach</span>
                </h2>
                <div className="mx-auto mt-5 h-px w-32 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                <p className="mt-5 text-white/70 max-w-3xl mx-auto leading-relaxed">
                  We combine market intelligence, trusted relationships, and disciplined execution to build a clear, credible approach to investment and consulting.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
                <ScrollReveal className="xl:col-span-7 flex flex-col gap-4">
                  <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-white/5 backdrop-blur-xl">
                      <img
                        src="/investment-image.jpg"
                        alt="Investment strategy"
                        loading="lazy"
                        className="h-56 sm:h-full w-full object-cover rounded-[1.5rem] border border-white/10"
                      />
                      <div className="grid grid-rows-2 gap-3">
                        <div className="rounded-[1.5rem] bg-white/8 border border-white/10 flex items-center justify-center p-5">
                          <img
                            src="/OKBX1L0.jpg"
                            alt="Investment illustration"
                            loading="lazy"
                            className="h-full w-full max-h-24 object-cover rounded-xl"
                          />
                        </div>
                        <div className="rounded-[1.5rem] bg-gradient-to-br from-primary/20 to-tertiary/20 border border-white/10 p-5 flex items-center justify-between gap-4">
                          <img
                            src="/logo.jpeg"
                            alt="SkyTouch mark"
                            loading="lazy"
                            className="h-16 w-16 rounded-2xl object-cover bg-white/10 p-2"
                          />
                          <div className="text-right">
                            <p className="text-sm uppercase tracking-[0.24em] text-white/50">Smart Capital</p>
                            <p className="text-lg font-semibold text-white">Clarity, trust, and growth</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                      <img
                        src="/investment-new-business-launch-plan-concept.jpg"
                        alt="Investment strategy planning"
                        loading="lazy"
                        className="h-56 w-full object-cover"
                      />
                      <div className="p-6 text-left">
                        <p className="text-sm uppercase tracking-[0.22em] text-white/45 mb-2">Built For</p>
                        <p className="text-xl font-semibold">Businesses, founders, and investors seeking clarity with ambition.</p>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                      <img
                        src="/7250345.jpg"
                        alt="Long-term investment growth"
                        loading="lazy"
                        className="h-56 w-full object-cover"
                      />
                      <div className="p-6 text-left">
                        <p className="text-sm uppercase tracking-[0.22em] text-white/45 mb-2">Experience</p>
                        <p className="text-xl font-semibold">A premium, modern, and highly focused advisory presence.</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal className="xl:col-span-5 flex flex-col justify-between gap-6 text-left items-start">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl">
                    <p className="text-xs tracking-[0.28em] uppercase text-white/50 mb-3">Why It Feels Extraordinary</p>
                    <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Local insight. Global discipline. Elevated execution.</h3>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Our approach is designed to uncover practical opportunities, structure them with clarity, and deliver support that goes beyond conventional consulting.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                        <p className="text-2xl font-bold text-sky-300">01</p>
                        <p className="text-sm text-white/70 mt-2">Curated opportunities</p>
                      </div>
                      <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                        <p className="text-2xl font-bold text-orange-300">02</p>
                        <p className="text-sm text-white/70 mt-2">Strategic structure</p>
                      </div>
                      <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                        <p className="text-2xl font-bold text-sky-300">03</p>
                        <p className="text-sm text-white/70 mt-2">Reliable execution</p>
                      </div>
                      <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                        <p className="text-2xl font-bold text-orange-300">04</p>
                        <p className="text-sm text-white/70 mt-2">Long-term value</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal className="mt-8 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="relative h-56 md:h-72">
                  <img
                    src="/investment-image.jpg"
                    alt="Strategic investment landscape"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/45 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6 md:p-10">
                    <div className="max-w-2xl">
                      <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-2">AI-inspired outlook</p>
                      <h3 className="text-2xl md:text-4xl font-display font-bold mb-3">A visual ending that feels forward-looking and premium.</h3>
                      <p className="text-white/75 max-w-xl leading-relaxed">
                        This closing image gives the section a clean finish and reinforces the investment-first identity of SkyTouch.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal className="text-center mb-16">
            <span className="section-label text-center">How We Invest</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Our Investment Approach</h2>
          </ScrollReveal>
          <CircularTestimonials
            testimonials={approachTestimonials}
            autoplay={true}
            colors={{
              name: "#0a0a0a",
              designation: "#6b7280",
              testimony: "#4b5563",
              arrowBackground: "#0ea5e9",
              arrowForeground: "#ffffff",
              arrowHoverBackground: "#0284c7",
            }}
            fontSizes={{
              name: "24px",
              designation: "14px",
              quote: "16px",
            }}
          />
        </div>
      </section>

      {/* WHAT DRIVES US */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal>
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&fit=crop"
                alt="Strategic growth"
                className="rounded-2xl w-full h-64 md:h-auto object-cover"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <span className="section-label">What Drives Us</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Foundation</h2>
              <p className="text-on-surface-variant/70 leading-relaxed mb-6">
                Our foundation rests on core beliefs that guide every decision. We believe fundamental value prevails over market sentiment. We believe direct engagement with management teams enhances returns. We believe portfolio diversification provides essential stability.
              </p>
              <p className="text-on-surface-variant/70 leading-relaxed">
                And we believe investments should create value not just for shareholders, but for employees, communities, and the broader economy.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Board of Directors section removed */}
    </div>
  )
}
