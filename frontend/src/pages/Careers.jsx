import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { ContainerScroll } from '../components/ui/container-scroll-animation'

const perks = [
  'Collaborative, team-first environment',
  'Competitive pay and benefits',
  'Licensed Projects you\'ll be proud of',
  'Career growth and training opportunities',
  'Respectful culture top to bottom',
]

// Removed inline SVG illustrations, now using real images below

const careerHeroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop&auto=format"
const careerTeamImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&fit=crop&auto=format"

export default function Careers() {
  return (
    <div className="pt-24">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5" />
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              <span className="gold-accent">Careers</span>
            </h1>
            <p className="text-lg text-on-surface-variant/70 max-w-2xl mx-auto">
              Build your career with Sky Touch Investment & Consultant Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          <ScrollReveal>
            <img
              src={careerHeroImage}
              alt="Career illustration"
              className="rounded-3xl w-full bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200 p-2"
              loading="lazy"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="section-label">Building Trust</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Work With Us</h2>
            <p className="text-on-surface-variant/70 mb-8">
              At SkyTouch, you are more than just a team member; you are a builder of dreams and communities. We value your skills, respect your time and support your growth.
            </p>
            <ul className="space-y-4">
              {perks.map((perk, i) => (
                <motion.li
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-on-surface-variant/80">{perk}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            We're <span className="gold-accent">Hiring!</span>
          </h2>
          <p className="text-on-surface-variant/70 max-w-xl mx-auto">
            No open positions at the moment. Please check back later or send your resume for future opportunities.
          </p>
        </ScrollReveal>

        <div className="text-center">
          <a
            href="mailto:careers@skytouch.com.np"
            className="btn-primary inline-flex"
          >
            SEND YOUR RESUME
          </a>
        </div>
      </section>

      {/* Container Scroll Animation Section */}
      <section className="pt-16 pb-8 overflow-hidden relative bg-white">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-to-r from-sky-400 via-blue-500 to-orange-400 bg-clip-text text-transparent">
                Join Our <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-orange-400 bg-clip-text text-transparent">Dynamic Team</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                Experience the innovation and culture that drives SkyTouch Investment & Consultant
              </p>
            </>
          }
        >
          <img
            src={careerTeamImage}
            alt="Professional career team illustration"
            className="w-full h-full object-contain rounded-2xl bg-white p-6"
            loading="lazy"
          />
        </ContainerScroll>
      </section>
    </div>
  )
}
