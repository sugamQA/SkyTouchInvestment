import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import DirectorHoverCard from '../components/ui/director-hover-card'

const boardMembers = [
  {
    name: 'Ambika Prasad Poudel',
    role: 'Chairman',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2025/12/amb-removebg-preview.png',
    bio: 'Renowned entrepreneur and financial expert with over 30 years of experience in capital markets, hospitality, and diversified sectors. Chairman of Hilife Foods Limited and Kanjirowa National Secondary School. Serves as Director of IME Prudential General Insurance Ltd. Holds MBA and MPA from Tribhuvan University.',
    email: 'info@skytouch.com.np',
    phone: '+977-1-4XXXXXX',
    expertise: ['Capital Markets', 'Hospitality', 'Diversified Sectors', 'Leadership'],
  },
  {
    name: 'Mrs. Jiban Kumari Aryal',
    role: 'Managing Director',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2026/01/Mam-scaled.png',
    bio: 'Distinguished entrepreneur and financial strategist with leadership across Nepal\'s capital markets, hospitality, insurance, telecommunications and investment sectors.',
    email: 'info@skytouch.com.np',
    phone: '+977-1-4XXXXXX',
    expertise: ['Capital Markets', 'Insurance', 'Telecommunications', 'Investment'],
  },
  {
    name: 'Mr. Kumar Poudel',
    role: 'Chief Investment Officer',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2026/01/Png-Photo.png',
    bio: 'Visionary leader and Managing Director of Gaura Construction Pvt. Ltd. Holds Master\'s degree in Business Management from St. Xavier\'s College. Recognized by Prime Minister\'s Office for outstanding performance in hydroelectric projects.',
    email: 'info@skytouch.com.np',
    phone: '+977-1-4XXXXXX',
    expertise: ['Construction', 'Hydroelectric Projects', 'Business Management', 'Strategy'],
  },
]

const topDirectors = boardMembers.slice(0, 3)

const imperialBoardMembers = [
  {
    name: 'SUGAM CHHETRI',
    role: 'Computer Engineer | Software Developer',
    image: '/IMG_4126.JPG',
    bio: 'Experienced in building modern, responsive websites and software applications. Currently working at SkyTouch Investment Consultant Pvt. Ltd., leading IT operations, software development, website management, and digital strategy. Skilled in full-stack development, UI/UX design, and performance optimization, focused on delivering scalable, secure, and business-driven digital solutions.',
    focus: 'Full-stack development and IT leadership',
    facebookUrl: 'https://facebook.com/scxetri',
    linkedinUrl: 'https://www.linkedin.com/in/scxetri/',
    websiteUrl: 'https://www.sugamchhetri.com.np',
  },
  {
    name: 'Bodhraj Devkota',
    role: 'Managing Director',
    image: 'https://imperialfund.com.np/wp-content/uploads/2024/12/resize-3-2-1.png',
    bio: '27+ years in banking, including senior leadership experience as a former CEO.',
    focus: 'Banking leadership',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const staggerWrap = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export default function Boards() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] opacity-25" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-tertiary/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] opacity-15" />
        <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10">
        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pt-32 pb-20">
          <motion.div variants={staggerWrap} initial="hidden" animate="visible" className="text-center mb-12">
            <div className="inline-block mb-4">
              <motion.span variants={fadeUp} className="text-xs tracking-[0.3em] font-bold text-primary uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20 shadow-sm">
                Leadership Excellence
              </motion.span>
            </div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Top 3 <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Board of Directors</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The three leadership cards below use the director content and images from the About page and are displayed as the top row on this page.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
          >
            {[
              { number: '3', label: 'Board Members', icon: '👥' },
              { number: '90+', label: 'Years Combined', icon: '📊' },
              { number: '500M+', label: 'Deployed Capital', icon: '💰' },
              { number: '98%', label: 'Success Rate', icon: '⭐' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.25 }}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.06)] hover:border-primary/30 transition-all duration-300 group h-full">
                  <p className="text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</p>
                  <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{stat.number}</p>
                  <p className="text-xs md:text-sm text-slate-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pb-20">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Top 3 Team Members
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600">
              Hover over each card to discover more about each team member
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {topDirectors.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 0.08}>
                <DirectorHoverCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                  focus={member.expertise?.[0] || 'Leadership'}
                  index={idx}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pb-20">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16 text-center"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Our Team
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 max-w-3xl mx-auto">
              Click on the team member to see the full profile in a card styled after the Imperial reference.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center justify-items-center">
            <ScrollReveal className="w-full max-w-[420px] md:justify-self-start" delay={0}>
              <DirectorHoverCard
                {...imperialBoardMembers[0]}
                index={0}
              />
            </ScrollReveal>
            <ScrollReveal className="w-full max-w-[420px] md:justify-self-end" delay={0.08}>
              <DirectorHoverCard
                {...imperialBoardMembers[1]}
                index={1}
              />
            </ScrollReveal>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 border-t border-slate-200">
          <motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Leadership Principles
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600">
              Guiding our decision-making and investment strategies
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Integrity',
                desc: 'We maintain the highest ethical standards in all our dealings and transactions.',
                icon: '⚖️',
              },
              {
                title: 'Excellence',
                desc: 'We pursue perfection in portfolio management and client service delivery.',
                icon: '🏆',
              },
              {
                title: 'Innovation',
                desc: 'We embrace new opportunities and modern strategies in investment.',
                icon: '💡',
              },
              {
                title: 'Transparency',
                desc: 'We communicate openly and honestly with all stakeholders.',
                icon: '👁️',
              },
            ].map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.05)] hover:border-primary/30 group transition-all duration-300"
              >
                <p className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{value.icon}</p>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to Work With Our Leadership?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Connect with our board members for strategic partnerships and investment opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/30"
              >
                Schedule a Meeting
              </motion.a>
              <motion.a
                href="/investment"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-primary/30 hover:border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all duration-300"
              >
                Explore Opportunities
              </motion.a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
