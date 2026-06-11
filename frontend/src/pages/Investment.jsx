import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { TextParallaxDemo } from '../components/blocks/text-parallax-demo'
import { Folder } from '../components/ui/folder-components'
import { SectorHoverCard } from '../components/ui/sector-hover-card'

const investmentHeroImage = 'https://img.lightshot.app/edM1-W54Ro2nYBDHgMMFJw.png'

const portfolioPartners = [
  { name: 'IME Prudential Insurance', logo: 'https://imperialholdings.com.np/wp-content/uploads/2026/01/imepraillogo.png', tint: 'from-sky-500/20 via-white to-sky-100' },
  { name: 'Gaura Construction', logo: 'https://imperialholdings.com.np/wp-content/uploads/2026/01/gaurg.png', tint: 'from-emerald-500/20 via-white to-emerald-100' },
  { name: 'Hathway Investment', logo: 'https://imperialholdings.com.np/wp-content/uploads/2026/01/Hathway-Logo-2.png', tint: 'from-amber-500/20 via-white to-amber-100' },
]

const marqueePartners = [...portfolioPartners, ...portfolioPartners]

const sectors = [
  {
    title: 'Private Equity',
    subtitle: 'Partnering for growth and transformation',
    desc: 'High-growth companies with strong fundamentals, scalable models, and experienced management teams.',
    details: 'Strategic private equity investments focused on businesses with clear expansion plans, disciplined governance, and long-term value creation potential across Nepal and the region.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&fit=crop',
    pct: 65,
    color: '#0ea5e9',
    folderColor: 'blue',
  },
  {
    title: 'Energy',
    subtitle: 'Powering Sustainable Growth',
    desc: "Nepal's energy security and carbon reduction goals. We invest in hydropower, solar, and renewable energy projects.",
    details: 'Renewable energy investments in hydropower and solar that support national energy security while delivering stable long-term returns.',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2026/01/landscape-view-of-hydroelectric-power-plant-free-photo.jpg',
    pct: 48,
    color: '#38bdf8',
    folderColor: 'blue',
  },
  {
    title: 'Capital Market',
    subtitle: 'Strategic Public Equity Investments',
    desc: 'Banking, hydropower, manufacturing, infrastructure, insurance — diversified public market investments.',
    details: 'Public market exposure across diversified listed sectors, targeting undervalued opportunities with strong fundamentals and market depth.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    pct: 84,
    color: '#0ea5e9',
    folderColor: 'grey',
  },
  {
    title: 'Real Estate',
    subtitle: 'Strategic Property Investment',
    desc: 'We deploy capital in commercial properties, residential developments, and mixed-use projects.',
    details: 'Commercial and residential property projects in prime growth corridors, focused on rental yield, occupancy, and capital appreciation.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    pct: 44,
    color: '#f97316',
    folderColor: 'orange',
  },
  {
    title: 'Information Technology',
    subtitle: 'Building the Digital Economy',
    desc: 'We invest in software companies, digital platforms, and technology infrastructure.',
    details: 'Digital businesses, software platforms, and technology infrastructure that accelerate productivity and create scalable recurring revenue.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    pct: 55,
    color: '#0ea5e9',
    folderColor: 'blue',
  },
  {
    title: 'Tourism & Hospitality',
    subtitle: 'Creating Value Through Strategic Investment',
    desc: 'Hotels, resorts, cable cars, and tourism infrastructure across Nepal.',
    details: 'Hospitality and tourism assets that benefit from Nepal growing visitor economy, premium destinations, and infrastructure upgrades.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    pct: 43,
    color: '#f97316',
    folderColor: 'yellow',
  },
  {
    title: 'Healthcare',
    subtitle: 'Meeting Critical Demand',
    desc: 'Hospitals, diagnostic centers, and healthcare infrastructure to serve Nepal growing population.',
    details: 'Healthcare facilities and service businesses that address unmet demand for quality care, diagnostics, and medical infrastructure.',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80',
    pct: 66,
    color: '#0ea5e9',
    folderColor: 'red',
  },
  {
    title: 'Agriculture',
    subtitle: 'Transforming Nepal Rural Economy',
    desc: 'Agro-processing, food production, and sustainable farming initiatives.',
    details: 'Agro-processing and sustainable farming initiatives designed to modernize rural value chains and strengthen food security.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    pct: 40,
    color: '#38bdf8',
    folderColor: 'orange',
  },
]

export default function Investment() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <span className="section-label text-center lg:text-left">Services</span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Strategic Investments Across <span className="gold-accent">High-Growth Sectors</span>
              </h1>
              <p className="text-lg text-on-surface-variant/70 max-w-3xl mx-auto lg:mx-0">
                We deploy disciplined capital in opportunities demonstrating strong fundamentals, exceptional management, and clear paths to sustainable value creation.
              </p>
            </motion.div>

            <ScrollReveal className="relative">
              <div className="relative rounded-[2rem] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.08)] p-3 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_35%)]" />
                <img
                  src={investmentHeroImage}
                  alt="Original uploaded investment image"
                  className="relative z-10 w-full h-full object-contain rounded-[1.6rem] bg-white"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PARTNERS */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <style>
            {`
              @keyframes partnerMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>
          <ScrollReveal className="text-center mb-10">
            <span className="section-label text-center">Trusted Portfolio Partners</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              Each selected for its growth potential and alignment with Nepal Economic Transformation
            </h2>
          </ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-outline/10 bg-white/40 py-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#eef6ff] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#eef6ff] to-transparent" />
            <div
              className="flex w-max items-center gap-16 px-8"
              style={{ animation: 'partnerMarquee 20s linear infinite' }}
            >
              {marqueePartners.map((p, i) => (
                <motion.div
                  key={`${p.name}-${i}`}
                  whileHover={{ scale: 1.05 }}
                  className={`flex h-16 md:h-20 min-w-[140px] md:min-w-[180px] items-center justify-center rounded-2xl border border-outline/10 bg-gradient-to-br ${p.tint} px-4 md:px-6 shadow-sm transition-all duration-300 hover:shadow-lg`}
                >
                  <img src={p.logo} alt={p.name} className="h-12 w-auto object-contain" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS GRID */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute top-24 left-[-8%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-24 right-[-6%] h-80 w-80 rounded-full bg-tertiary/10 blur-3xl" />

        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative">
          <ScrollReveal className="text-center mb-16">
            <span className="section-label text-center">Long-term Value Creation</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Our Investment <span className="gold-accent">Sectors</span>
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant/60 max-w-2xl mx-auto mt-4">
              Hover each sector card to view the detailed investment focus, just like the board-style cards used elsewhere in the site.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.title} delay={i * 0.05}>
                <SectorHoverCard
                  title={sector.title}
                  subtitle={sector.subtitle}
                  image={sector.image}
                  desc={sector.desc}
                  details={sector.details}
                  pct={sector.pct}
                  color={sector.color}
                  index={i}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS FOLDERS */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-20">
            <span className="section-label text-center">Explore Our Investment Sectors</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Our <span className="gold-accent">Portfolio</span> Organized
            </h2>
            <p className="text-lg text-on-surface-variant/70 max-w-3xl mx-auto mt-4">
              Hover over each folder to explore the details of our investment sectors
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.title} delay={i * 0.05}>
                <Folder
                  color={sector.folderColor}
                  size="lg"
                  label={sector.title}
                  title={sector.title}
                  subtitle={sector.subtitle}
                  desc={sector.desc}
                  details={sector.details}
                  pct={sector.pct}
                  image={sector.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEXT PARALLAX SHOWCASE */}
      <TextParallaxDemo />

      {/* CTA */}
      <section className="py-24 bg-[#0c1929]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to <span className="gold-accent">Invest</span> with Us?
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-8">
              Whether you are seeking information, exploring partnership opportunities, or ready to start a conversation — we are here to help.
            </p>
            <Link to="/contact" className="btn-primary inline-flex">
              GET IN TOUCH
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
