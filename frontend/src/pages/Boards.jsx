import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import DirectorHoverCard from '../components/ui/director-hover-card'
import { Scale, Trophy, Lightbulb, Eye, Quote, MapPin, GraduationCap, Award, Building2, ChevronRight } from 'lucide-react'

const boardMembers = [
  {
    name: 'Ambika Prasad Paudel',
    role: 'Chairman',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2025/12/amb-removebg-preview.png',
    bio: 'Renowned entrepreneur and financial expert with over 30 years of experience in capital markets, hospitality, and diversified sectors. Chairman of Hilife Foods Limited and Kanjirowa National Secondary School. Serves as Director of IME Prudential General Insurance Ltd. Holds MBA and MPA from Tribhuvan University.',
    email: 'info@skytouch.com.np',
    phone: '+977-1-4XXXXXX',
    expertise: ['Capital Markets', 'Hospitality', 'Diversified Sectors', 'Leadership'],
    facebookUrl: 'https://www.facebook.com/paudelap?mibextid=ZbWKwL',
    instagramUrl: 'https://www.instagram.com/ambikappaudel?igsh=b2plbWI4OXM5YWpq',
  },
]

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
    name: 'Coming Soon',
    role: 'New Team Member',
    image: '',
    bio: 'We are excited to welcome a new professional to our team. Details will be announced shortly.',
    focus: 'To be announced',
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

const chairman = boardMembers[0]

export default function Boards() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-tertiary/8 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-32 pb-16 md:pb-24">
            <motion.div variants={staggerWrap} initial="hidden" animate="visible" className="text-center max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-orange-500/40" />
                <span className="text-xs tracking-[0.3em] font-bold text-orange-500 uppercase">Leadership</span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-orange-500/40" />
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
                Board of{' '}
                <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">Directors</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Visionary leadership driving excellence across capital markets, hospitality, and strategic investments in Nepal.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2"><Award size={16} className="text-orange-500" /> 30+ Years Experience</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-2"><Building2 size={16} className="text-amber-500" /> Multiple Sectors</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-2"><MapPin size={16} className="text-tertiary" /> Nepal</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative mx-auto pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#060e1a] via-[#0a1628] to-[#0d1a30]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-sky-400/8 rounded-full blur-[100px]" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-2 relative">
                <div className="relative flex flex-col items-center">
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-full blur-3xl opacity-60" />
                  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.06),0_24px_80px_rgba(15,23,42,0.2)] group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />
                    <img
                      src={chairman.image}
                      alt={chairman.name}
                      loading="eager"
                      className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 opacity-100 translate-y-0 z-20">
                      {chairman.facebookUrl ? (
                        <a href={chairman.facebookUrl} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white shadow-lg transition-all duration-300 hover:scale-110">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                      ) : (
                        <span className="h-10 w-10 rounded-full bg-white/50 flex items-center justify-center text-slate-300 cursor-not-allowed">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </span>
                      )}
                      {chairman.instagramUrl ? (
                        <a href={chairman.instagramUrl} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#E4405F] hover:bg-gradient-to-br hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5] hover:text-white shadow-lg transition-all duration-300 hover:scale-110">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        </a>
                      ) : (
                        <span className="h-10 w-10 rounded-full bg-white/50 flex items-center justify-center text-slate-300 cursor-not-allowed">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                          </svg>
                        </span>
                      )}
                      {chairman.linkedinUrl ? (
                        <a href={chairman.linkedinUrl} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white shadow-lg transition-all duration-300 hover:scale-110">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      ) : (
                        <span className="h-10 w-10 rounded-full bg-white/50 flex items-center justify-center text-slate-300 cursor-not-allowed">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <motion.div variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="lg:mt-28">
                  <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-4">
                    <Quote size={20} className="text-orange-400/40" />
                    <span className="text-xs tracking-[0.25em] font-bold text-orange-400 uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10">Chairman's Profile</span>
                    <Quote size={20} className="text-orange-400/40 rotate-180" />
                  </motion.div>

                  <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
                    {chairman.name}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-orange-400">
                      <Award size={18} />
                    </span>
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.25em] text-orange-400 font-semibold mb-6">
                    {chairman.role}
                  </motion.p>

                  <motion.p variants={fadeUp} className="text-white/60 leading-relaxed mb-8 text-base">
                    {chairman.bio}
                  </motion.p>

                  <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {[
                      { number: '30+', label: 'Years Experience', gradient: 'from-orange-400 to-amber-400', accent: 'border-orange-500/20' },
                      { number: '4+', label: 'Sectors', gradient: 'from-amber-400 to-orange-400', accent: 'border-amber-500/20' },
                      { number: 'MBA', label: 'Highest Degree', gradient: 'from-orange-400 to-amber-400', accent: 'border-orange-500/20' },
                      { number: '100%', label: 'Dedication', gradient: 'from-orange-400 to-amber-500', accent: 'border-amber-500/20' },
                    ].map((stat, i) => (
                      <div
                        key={stat.label}
                        className="relative bg-white/5 rounded-2xl p-5 border border-white/10 text-center group cursor-default overflow-hidden transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />
                        <div className="relative z-10">
                          <p className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent inline-block`}>
                            {stat.number}
                          </p>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mt-2 font-semibold">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
                    {chairman.expertise.map((skill, i) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-xs font-semibold rounded-full bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="relative max-w-[1440px] mx-auto px-6 md:px-16">
            <motion.div variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-primary/40" />
                <span className="text-xs tracking-[0.3em] font-bold text-primary uppercase">Our People</span>
                <span className="h-px w-6 bg-gradient-to-l from-transparent to-primary/40" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                Meet the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Team</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto text-lg">
                The dedicated professionals driving our vision forward
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollReveal delay={0}>
                <DirectorHoverCard {...imperialBoardMembers[0]} index={0} />
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <DirectorHoverCard {...imperialBoardMembers[1]} index={1} />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 md:px-16 py-24">
          <motion.div variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center mb-16">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-xs tracking-[0.3em] font-bold text-primary uppercase">Our Values</span>
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-primary/40" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Leadership <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Principles</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-500 max-w-2xl mx-auto text-lg">
              The core values that guide every decision we make
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Integrity',
                desc: 'We maintain the highest ethical standards in all our dealings and transactions.',
                icon: Scale,
                gradient: 'from-primary/20 to-primary/5',
                iconBg: 'bg-primary/10',
                iconColor: 'text-primary',
                borderHover: 'hover:border-primary/30',
              },
              {
                title: 'Excellence',
                desc: 'We pursue perfection in portfolio management and client service delivery.',
                icon: Trophy,
                gradient: 'from-tertiary/20 to-tertiary/5',
                iconBg: 'bg-tertiary/10',
                iconColor: 'text-tertiary',
                borderHover: 'hover:border-tertiary/30',
              },
              {
                title: 'Innovation',
                desc: 'We embrace new opportunities and modern strategies in investment.',
                icon: Lightbulb,
                gradient: 'from-secondary/20 to-secondary/5',
                iconBg: 'bg-secondary/10',
                iconColor: 'text-secondary',
                borderHover: 'hover:border-secondary/30',
              },
              {
                title: 'Transparency',
                desc: 'We communicate openly and honestly with all stakeholders.',
                icon: Eye,
                gradient: 'from-primary/20 to-primary/5',
                iconBg: 'bg-primary/10',
                iconColor: 'text-primary',
                borderHover: 'hover:border-primary/30',
              },
            ].map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className={`group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.04)] ${value.borderHover} transition-all duration-500 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 mb-5 rounded-2xl ${value.iconBg} flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${value.iconColor} group-hover:shadow-lg`}>
                    <value.icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pb-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative rounded-3xl overflow-hidden group/cta"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#060e1a] via-[#0a1628] to-[#0d1a30]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/15 rounded-full blur-[100px] group-hover/cta:bg-orange-500/20 transition-all duration-700" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-sky-400/12 rounded-full blur-[100px] group-hover/cta:bg-sky-400/20 transition-all duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/8 rounded-full blur-[120px]" />

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

            <div className="relative px-8 py-20 md:px-20 md:py-24 text-center">
              <motion.span
                variants={fadeUp}
                className="inline-block text-[10px] tracking-[0.35em] font-bold text-white/30 uppercase mb-6 bg-white/5 px-5 py-2 rounded-full border border-white/10"
              >
                Get In Touch
              </motion.span>

              <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-5 leading-[1.15]">
                Ready to Work With{' '}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-300 bg-clip-text text-transparent">Our Leadership</span>
                {' '}?
              </motion.h3>

              <motion.p variants={fadeUp} className="text-white/50 mb-12 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
                Connect with us for strategic partnerships and investment opportunities
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn relative px-9 py-4 font-semibold rounded-2xl inline-flex items-center gap-3 overflow-hidden transition-all duration-500 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-all duration-700" />
                  <span className="relative z-10 flex items-center gap-2.5">
                    Schedule a Meeting
                    <span className="w-6 h-6 rounded-lg bg-white/15 flex items-center justify-center group-hover/btn:bg-white/25 transition-colors">
                      <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </span>
                  </span>
                </motion.a>

                <motion.a
                  href="/investment"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn relative px-9 py-4 font-semibold rounded-2xl inline-flex items-center gap-3 overflow-hidden transition-all duration-500 border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/5 backdrop-blur-sm"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center gap-2.5">
                    Explore Opportunities
                    <ChevronRight size={14} className="opacity-50 group-hover/btn:translate-x-0.5 transition-all" />
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
