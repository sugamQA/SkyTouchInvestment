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
    src: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "We don't simply invest capital—we become engaged partners. Through board seats, governance participation, and hands-on strategic guidance, we create value alongside management teams and stakeholders.",
    name: "Active Partnership",
    designation: "Collaborative Value Creation",
    src: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "Strategic diversification across sectors and asset classes provides portfolio stability while maximizing return potential. Our balanced approach protects capital while capturing growth opportunities.",
    name: "Strategic Diversification",
    designation: "Risk-Adjusted Returns",
    src: "https://images.pexels.com/photos/3184641/pexels-photo-3184641.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    quote: "We invest with a multi-generational perspective, building sustainable value that endures through market cycles. Long-term thinking allows us to make bold strategic decisions that create lasting impact.",
    name: "Multi-generational Vision",
    designation: "Sustainable Value Creation",
    src: "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
]

// Board of directors removed per request

export default function About() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5" />
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

      {/* GLOBAL REACH */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5">
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

      {/* Board of Directors section removed */}
    </div>
  )
}
