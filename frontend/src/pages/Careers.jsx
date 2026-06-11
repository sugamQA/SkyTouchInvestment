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

const careerHeroIllustration = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
  <defs>
    <linearGradient id="g1" x1="420" y1="180" x2="1460" y2="900" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0EA5E9" stop-opacity="0.22" />
      <stop offset="1" stop-color="#F97316" stop-opacity="0.14" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="transparent" />
  <circle cx="470" cy="280" r="240" fill="#0EA5E9" fill-opacity="0.08" />
  <circle cx="1460" cy="260" r="210" fill="#F97316" fill-opacity="0.07" />
  <circle cx="1370" cy="820" r="300" fill="#0EA5E9" fill-opacity="0.06" />
  <path d="M340 780C520 610 700 560 860 520C1040 476 1220 390 1560 240" stroke="url(#g1)" stroke-width="18" stroke-linecap="round" />
  <path d="M420 700C610 620 760 620 920 560C1080 500 1250 420 1500 340" stroke="#0EA5E9" stroke-opacity="0.18" stroke-width="8" stroke-linecap="round" stroke-dasharray="14 18" />
  <g opacity="0.95">
    <rect x="500" y="210" width="920" height="620" rx="48" fill="#FFFFFF" fill-opacity="0.92" stroke="#CBD5E1" stroke-opacity="0.75" stroke-width="4" />
    <rect x="560" y="270" width="300" height="22" rx="11" fill="#0EA5E9" fill-opacity="0.18" />
    <rect x="560" y="320" width="520" height="18" rx="9" fill="#E2E8F0" />
    <rect x="560" y="356" width="460" height="18" rx="9" fill="#E2E8F0" />
    <rect x="560" y="392" width="390" height="18" rx="9" fill="#E2E8F0" />
    <rect x="560" y="470" width="360" height="210" rx="28" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="3" />
    <rect x="950" y="470" width="360" height="210" rx="28" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="3" />
    <rect x="560" y="710" width="750" height="24" rx="12" fill="#E2E8F0" />
  </g>
  <g transform="translate(1090 310)">
    <rect x="0" y="180" width="500" height="190" rx="28" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="4" />
    <rect x="34" y="206" width="158" height="16" rx="8" fill="#0EA5E9" fill-opacity="0.18" />
    <rect x="34" y="240" width="250" height="12" rx="6" fill="#E2E8F0" />
    <rect x="34" y="266" width="220" height="12" rx="6" fill="#E2E8F0" />
    <rect x="290" y="208" width="172" height="110" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3" />
    <path d="M310 286L350 258L380 274L426 236L444 228" stroke="#0EA5E9" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="444" cy="228" r="7" fill="#0EA5E9" />
    <circle cx="118" cy="88" r="58" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4" />
    <circle cx="118" cy="72" r="24" fill="#0EA5E9" fill-opacity="0.18" />
    <path d="M56 180C66 140 92 116 118 116C144 116 170 140 180 180" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4" />
    <circle cx="280" cy="78" r="58" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4" />
    <circle cx="280" cy="62" r="24" fill="#F97316" fill-opacity="0.18" />
    <path d="M218 180C228 140 254 116 280 116C306 116 332 140 342 180" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4" />
    <rect x="70" y="330" width="360" height="18" rx="9" fill="#E2E8F0" />
  </g>
  <g transform="translate(610 556)">
    <rect x="0" y="0" width="220" height="108" rx="20" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3" />
    <rect x="22" y="24" width="176" height="12" rx="6" fill="#0EA5E9" fill-opacity="0.18" />
    <rect x="22" y="50" width="126" height="12" rx="6" fill="#E2E8F0" />
    <rect x="22" y="76" width="150" height="12" rx="6" fill="#E2E8F0" />
  </g>
  <g transform="translate(940 556)">
    <rect x="0" y="0" width="250" height="108" rx="20" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3" />
    <path d="M26 80L76 56L114 72L160 38L220 26" stroke="#0EA5E9" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="220" cy="26" r="7" fill="#0EA5E9" />
  </g>
</svg>
`)

const careerTeamIllustration = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
  <defs>
    <linearGradient id="teamGlow" x1="480" y1="140" x2="1440" y2="920" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0EA5E9" stop-opacity="0.2" />
      <stop offset="1" stop-color="#F97316" stop-opacity="0.12" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="transparent" />
  <circle cx="960" cy="540" r="360" fill="url(#teamGlow)" opacity="0.55" />
  <path d="M420 780C560 650 720 620 864 620C1008 620 1170 650 1500 780" stroke="#CBD5E1" stroke-opacity="0.8" stroke-width="5" stroke-linecap="round" />
  <path d="M520 300H1380" stroke="#E2E8F0" stroke-width="4" stroke-linecap="round" stroke-dasharray="16 18" />
  <g transform="translate(420 220)">
    <rect x="0" y="0" width="1080" height="620" rx="48" fill="#FFFFFF" fill-opacity="0.88" stroke="#E2E8F0" stroke-width="4" />
    <rect x="56" y="58" width="220" height="22" rx="11" fill="#0EA5E9" fill-opacity="0.2" />
    <rect x="56" y="104" width="430" height="18" rx="9" fill="#E2E8F0" />
    <rect x="56" y="138" width="360" height="18" rx="9" fill="#E2E8F0" />
    <rect x="56" y="188" width="260" height="10" rx="5" fill="#CBD5E1" />
  </g>
  <g transform="translate(560 370)">
    <circle cx="120" cy="100" r="70" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="4" />
    <circle cx="120" cy="78" r="28" fill="#0EA5E9" fill-opacity="0.18" />
    <path d="M48 222C58 178 88 154 120 154C152 154 182 178 192 222" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4" />
    <rect x="54" y="238" width="132" height="16" rx="8" fill="#E2E8F0" />
  </g>
  <g transform="translate(820 350)">
    <circle cx="120" cy="100" r="70" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="4" />
    <circle cx="120" cy="78" r="28" fill="#F97316" fill-opacity="0.18" />
    <path d="M48 222C58 178 88 154 120 154C152 154 182 178 192 222" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4" />
    <rect x="54" y="238" width="132" height="16" rx="8" fill="#E2E8F0" />
  </g>
  <g transform="translate(1080 370)">
    <circle cx="120" cy="100" r="70" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="4" />
    <circle cx="120" cy="78" r="28" fill="#0EA5E9" fill-opacity="0.18" />
    <path d="M48 222C58 178 88 154 120 154C152 154 182 178 192 222" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="4" />
    <rect x="54" y="238" width="132" height="16" rx="8" fill="#E2E8F0" />
  </g>
  <g transform="translate(700 620)">
    <rect x="0" y="0" width="520" height="150" rx="28" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="4" />
    <path d="M34 102L114 70L164 86L242 50L326 68L430 34" stroke="#0EA5E9" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="430" cy="34" r="7" fill="#0EA5E9" />
    <rect x="34" y="28" width="156" height="12" rx="6" fill="#0EA5E9" fill-opacity="0.18" />
  </g>
</svg>
`)

const careerHeroImage = `data:image/svg+xml;charset=UTF-8,${careerHeroIllustration}`
const careerTeamImage = `data:image/svg+xml;charset=UTF-8,${careerTeamIllustration}`

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <ScrollReveal>
            <img
              src={careerHeroImage}
              alt="Career illustration"
              className="rounded-3xl w-full bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] border border-slate-200 p-2"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="section-label">Building Trust</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why Work With Us</h2>
            <p className="text-on-surface-variant/70 mb-8">
              At SkyTouch, you are more than just a team member — you are a builder of dreams and communities. We value your skills, respect your time and support your growth.
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
      <section className="py-24 overflow-hidden relative">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
                Join Our <span className="gold-accent">Dynamic Team</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Experience the innovation and culture that drives SkyTouch Investment & Consultant
              </p>
            </>
          }
        >
          <img
            src={careerTeamImage}
            alt="Professional career team illustration"
            className="w-full h-full object-contain rounded-2xl bg-white p-6"
          />
        </ContainerScroll>
      </section>
    </div>
  )
}
