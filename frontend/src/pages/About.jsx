import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'
import { InteractiveGlobe } from '../components/ui/interactive-globe'
import CircularTestimonials from '../components/ui/circular-testimonials'
import { Briefcase, Target, Handshake, TrendingUp, Globe, BarChart3, Building2, Lightbulb, Heart, Shield, Leaf, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react'

const approach = [
  { icon: BarChart3, title: 'Rigorous Analysis', desc: 'Comprehensive due diligence on every potential investment opportunity.', color: 'text-primary' },
  { icon: Handshake, title: 'Active Partnership', desc: 'True partners through board participation, governance oversight, and strategic guidance.', color: 'text-secondary' },
  { icon: Target, title: 'Strategic Diversification', desc: 'Balanced exposure across private equity, real estate, capital markets, and hydropower.', color: 'text-tertiary' },
  { icon: Building2, title: 'Multi-generational', desc: 'Long-term perspective, building value that lasts for generations.', color: 'text-primary' },
]

const approachTestimonials = [
  {
    quote: "We combine rigorous quantitative analysis with deep qualitative assessment. Every investment thesis undergoes stress-testing across multiple market scenarios before capital commitment.",
    name: "Rigorous Analysis",
    designation: "Data-Driven Decision Making",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "We don't simply deploy capital; we become engaged partners. Through board representation, governance oversight, and hands-on strategic guidance, we build lasting value alongside our portfolio companies.",
    name: "Active Partnership",
    designation: "Collaborative Value Creation",
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "Strategic diversification across sectors, asset classes, and geographies provides portfolio resilience while maximizing return potential. Our balanced approach protects capital while capturing growth opportunities across Nepal's expanding economy.",
    name: "Strategic Diversification",
    designation: "Risk-Adjusted Returns",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=90&fit=crop&crop=face&auto=format",
  },
  {
    quote: "We invest with a multi-generational perspective, building sustainable value that endures through market cycles. This long-term orientation allows us to make strategic decisions that create lasting impact for all stakeholders.",
    name: "Multi-generational Vision",
    designation: "Sustainable Value Creation",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=90&fit=crop&crop=face&auto=format",
  },
]

const milestones = [
  { year: '2009', title: 'Establishment & Vision', desc: 'Founded in Kathmandu with a mandate to bridge strategic capital with high-potential enterprises across Nepal.' },
  { year: '2012', title: 'Inaugural Institutional Fund', desc: 'Launched our first institutional fund focused on infrastructure and renewable energy, marking our transition from advisory to active capital deployment.' },
  { year: '2015', title: 'CARE Accreditation', desc: 'Received CARE rating for bank facilities, strengthening stakeholder confidence and expanding access to institutional-grade financial partnerships.' },
  { year: '2018', title: 'NPR 2B Portfolio Milestone', desc: 'Crossed NPR 2 billion AUM across five high-growth sectors including hydropower, real estate, financial services, and healthcare.' },
  { year: '2021', title: 'Digital & Operational Modernization', desc: 'Implemented portfolio tracking systems, enhanced client dashboards, and cybersecurity frameworks to improve decision-making and transparency.' },
  { year: '2024', title: 'NPR 5B+ AUM & Industry Leadership', desc: 'Surpassed NPR 5 billion AUM with 50+ professionals across 10+ sectors, recognized as a leading independent investment firm in Nepal.' },
]



const values = [
  { icon: Shield, title: 'Integrity', desc: 'Uncompromising ethical standards in every transaction and relationship we build.', color: 'from-blue-500 to-cyan-500' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Forward-thinking solutions that leverage market insights and emerging opportunities.', color: 'from-purple-500 to-pink-500' },
  { icon: Heart, title: 'Excellence', desc: 'Relentless pursuit of the highest quality in analysis, execution, and client service.', color: 'from-orange-500 to-red-500' },
  { icon: Leaf, title: 'Sustainability', desc: 'Responsible investing that creates lasting value for communities and the environment.', color: 'from-green-500 to-emerald-500' },
]

const awards = [
  { label: 'CARE Rated', desc: 'Bank facilities rated for financial strength', icon: Award },
  { label: 'ISO 9001:2015', desc: 'Quality management systems certified', icon: CheckCircle },
  { label: 'Nepal Finance Award', desc: 'Best Investment Advisory 2022', icon: Award },
  { label: 'Top Employer Nepal', desc: 'Great Place to Work certified 2023', icon: Users },
]

export default function About() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-[#0c1930] to-slate-950">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/60">EST. 2009</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  About{' '}
                  <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">SkyTouch</span>
                </h1>
                <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8">
                  A privately-held investment and consulting company built on principles of strategic capital allocation, 
                  rigorous analysis, and long-term value creation. Since 2009, we have been empowering businesses 
                  and investors across Nepal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#story" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors">
                    Our Story <ArrowRight size={16} />
                  </a>
                  <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 font-semibold rounded-full hover:bg-white/10 transition-colors">
                    Get in Touch
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.15} className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-tertiary/30 rounded-full blur-[60px]" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-8">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm text-center">
                      <p className="text-3xl font-bold text-white"><AnimatedCounter target={15} suffix="+" /></p>
                      <p className="text-xs text-white/40 mt-1">Years</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm text-center">
                      <p className="text-3xl font-bold text-tertiary"><AnimatedCounter target={50} suffix="+" /></p>
                      <p className="text-xs text-white/40 mt-1">Team</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm text-center">
                      <p className="text-3xl font-bold text-primary"><AnimatedCounter target={10} suffix="+" /></p>
                      <p className="text-xs text-white/40 mt-1">Sectors</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm text-center">
                      <p className="text-3xl font-bold text-white">5B+</p>
                      <p className="text-xs text-white/40 mt-1">NPR AUM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* OUR STORY / TIMELINE */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-16">
            <span className="section-label text-center">OUR JOURNEY</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              The <span className="gold-accent">SkyTouch</span> Story
            </h2>
            <p className="text-on-surface-variant/70 max-w-2xl mx-auto">
              From a bold vision in 2009 to a leading investment and consulting firm — our journey reflects 
              unwavering commitment to creating lasting value for our partners and communities.
            </p>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0
                const content = (
                  <>
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{m.year}</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-1">{m.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                  </>
                )
                return (
                  <ScrollReveal key={m.year} delay={i * 0.08}>
                    <div className="relative flex flex-col md:flex-row items-center gap-3 md:gap-6">
                      <div className="hidden md:flex flex-1 justify-end">
                        {isLeft ? <div className="w-full max-w-sm text-right">{content}</div> : null}
                      </div>
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center text-slate-700 font-bold text-xs shadow-md border-[3px] border-white">
                          {m.year.slice(2)}
                        </div>
                      </div>
                      <div className="flex-1 flex md:justify-start">
                        <div className="w-full max-w-sm">
                          <div className="md:hidden">{content}</div>
                          <div className="hidden md:block">{!isLeft ? content : null}</div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="py-24 bg-gradient-to-br from-primary/[0.03] via-white to-tertiary/[0.03]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-16">
            <span className="section-label text-center">OUR FOUNDATION</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Mission, Vision &{' '}
              <span className="gold-accent">Values</span>
            </h2>
            <p className="text-on-surface-variant/70 max-w-2xl mx-auto">
              The core principles that guide every decision, every partnership, and every investment we make.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <ScrollReveal>
              <div className="group relative h-full rounded-[2rem] bg-white border border-slate-200/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(14,165,233,0.10)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-primary/50 group-hover:h-1.5 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.25)] transition-all duration-500">
                    <Target className="text-primary" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-500">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    To become a trusted investment and consulting partner that contributes to the growth of businesses, 
                    entrepreneurs, and investors across Nepal. We envision a Nepal where strategic capital and 
                    professional guidance unlock the nation's full economic potential.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/[0.02] to-transparent rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="group relative h-full rounded-[2rem] bg-white border border-slate-200/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(124,58,237,0.10)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-purple-400 to-secondary/50 group-hover:h-1.5 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] transition-all duration-500">
                    <BarChart3 className="text-secondary" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors duration-500">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    Provide reliable consulting, support sustainable business growth, and create value through strategic 
                    planning and professional guidance. We empower our clients with the insights, networks, and 
                    capital they need to achieve enduring success.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/[0.02] to-transparent rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="group relative h-full rounded-[2rem] bg-white border border-slate-200/80 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.10)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-tertiary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary via-amber-400 to-tertiary/50 group-hover:h-1.5 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tertiary/20 to-tertiary/5 border border-tertiary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-all duration-500">
                    <Handshake className="text-tertiary" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-tertiary transition-colors duration-500">Our Commitment</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    We commit to transparency, integrity, and excellence in every engagement. Our clients deserve 
                    nothing less than our best thinking, our deepest expertise, and our unwavering dedication to 
                    their long-term success.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-tertiary/[0.02] to-transparent rounded-full blur-2xl" />
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl bg-white border border-slate-200/70 p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
                  <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b ${v.color} transition-all duration-500 rounded-r" />
                  <div className="relative z-10 pl-2">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                      <v.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-24 bg-primary/[0.03]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal>
              <span className="section-label">Our Global Network</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Worldwide <span className="gold-accent">Presence</span>
              </h2>
              <p className="text-on-surface-variant/70 leading-relaxed mb-6">
                SkyTouch operates through a global network of investment professionals and strategic partners. 
                Our international reach enables us to identify opportunities across regions while maintaining 
                deep local expertise.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 mt-8">
                <div>
                  <p className="text-3xl font-bold text-primary"><AnimatedCounter target={50} suffix="+" /></p>
                  <p className="text-xs text-on-surface-variant/60 mt-2">Team Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary"><AnimatedCounter target={10} suffix="+" /></p>
                  <p className="text-xs text-on-surface-variant/60 mt-2">Sectors Invested</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">NPR 5B+</p>
                  <p className="text-xs text-on-surface-variant/60 mt-2">Portfolio Value</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="flex justify-center">
              <div className="w-full max-w-sm h-80 lg:h-96">
                <InteractiveGlobe size={400} autoRotateSpeed={0.0015} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-16">
            <span className="section-label text-center">RECOGNITION</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Awards &{' '}
              <span className="gold-accent">Accreditations</span>
            </h2>
            <p className="text-on-surface-variant/70 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading industry bodies and institutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((a, i) => (
              <ScrollReveal key={a.label} delay={i * 0.1}>
                <div className="group relative rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <a.icon size={30} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{a.label}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT APPROACH */}
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
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                            alt="Investment analytics dashboard"
                            loading="lazy"
                            className="h-full w-full object-cover rounded-xl"
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

                  <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-primary/10 to-tertiary/10 p-8 backdrop-blur-xl">
                    <p className="text-xs tracking-[0.28em] uppercase text-white/50 mb-4">Performance Metrics</p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Portfolio IRR</span>
                        <span className="text-2xl font-bold text-sky-300">18.5%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-sky-400 to-primary h-2 rounded-full" style={{width: '85%'}} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Client Retention</span>
                        <span className="text-2xl font-bold text-orange-300">98%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-orange-400 to-tertiary h-2 rounded-full" style={{width: '98%'}} />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-sm">Projects Delivered</span>
                        <span className="text-2xl font-bold text-sky-300">150+</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-sky-400 to-primary h-2 rounded-full" style={{width: '92%'}} />
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

      {/* IMPACT & SUSTAINABILITY */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="section-label">OUR IMPACT</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Sustainability &{' '}
                <span className="gold-accent">Responsible Investing</span>
              </h2>
              <p className="text-on-surface-variant/70 leading-relaxed mb-6">
                We believe that long-term value creation goes hand in hand with environmental stewardship, 
                social responsibility, and strong governance practices. Our ESG framework guides every 
                investment decision we make.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Leaf, title: 'Environmental Stewardship', desc: 'We prioritize investments in renewable energy, sustainable infrastructure, and eco-friendly ventures.' },
                  { icon: Users, title: 'Social Responsibility', desc: 'Our investments create meaningful employment and support community development across Nepal.' },
                  { icon: Shield, title: 'Governance Excellence', desc: 'We maintain the highest standards of corporate governance, transparency, and accountability.' },
                  { icon: GraduationCap, title: 'Knowledge Transfer', desc: 'We invest in capacity building and professional development for local talent and partners.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80&fit=crop"
                alt="Sustainability and growth"
                loading="lazy"
                className="rounded-3xl w-full h-96 object-cover shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SKYTOUCH */}
      <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#0f2035] to-[#0a1628]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">The SkyTouch Difference</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Why Choose <span className="bg-gradient-to-r from-sky-400 to-primary bg-clip-text text-transparent">SkyTouch</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-4">
              Discover what sets us apart in the world of strategic investments
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              { icon: Target, title: 'Precision Targeting', desc: 'Data-driven investment selection with high success rate across sectors.', stat: '95%', statLabel: 'Success Rate', color: 'text-primary' },
              { icon: Handshake, title: 'Trusted Partnerships', desc: 'Long-term relationships built on transparency, integrity, and mutual growth.', stat: '500+', statLabel: 'Partners', color: 'text-secondary' },
              { icon: TrendingUp, title: 'Proven Returns', desc: 'Consistent strong IRR with risk-adjusted portfolio strategies.', stat: '18.5%', statLabel: 'Avg. IRR', color: 'text-tertiary' },
              { icon: Globe, title: 'Global Perspective', desc: 'Local expertise combined with international investment standards.', stat: '10+', statLabel: 'Sectors', color: 'text-primary' },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div className="group relative h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon size={24} className={feature.color} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-6 flex-grow">{feature.desc}</p>
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-primary bg-clip-text text-transparent">{feature.stat}</p>
                      <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">{feature.statLabel}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>


        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-primary via-primary-dark to-primary">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center relative">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Start Your Journey</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Invest in{' '}
              <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">Nepal's Future?</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Partner with SkyTouch for strategic investment opportunities that deliver sustainable growth 
              and exceptional returns. Let's build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
                <span>Schedule a Consultation</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/investment" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300">
                <span>Explore Opportunities</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}