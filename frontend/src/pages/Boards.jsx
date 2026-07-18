import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import DirectorHoverCard from '../components/ui/director-hover-card'
import { Scale, Trophy, Lightbulb, Eye, Quote, MapPin, GraduationCap, Award, Building2, ChevronRight } from 'lucide-react'

const boardMembers = [
  {
    name: 'Ambika Prasad Poudel',
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
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/40" />
                <span className="text-xs tracking-[0.3em] font-bold text-primary uppercase">Leadership</span>
                <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/40" />
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
                Board of <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Directors</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Visionary leadership driving excellence across capital markets, hospitality, and strategic investments in Nepal.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2"><Award size={16} className="text-primary" /> 30+ Years Experience</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-2"><Building2 size={16} className="text-secondary" /> Multiple Sectors</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="flex items-center gap-2"><MapPin size={16} className="text-tertiary" /> Nepal</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 md:px-16 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-2 relative">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-tertiary/20 rounded-[2.5rem] blur-2xl opacity-60" />
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.1)]">
                    <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-tertiary" />
                    <img
                      src={chairman.image}
                      alt={chairman.name}
                      loading="eager"
                      className="w-full h-[28rem] object-contain p-8"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
                    <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-slate-900">{chairman.name}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{chairman.role}</p>
                      </div>
                      <div className="flex gap-2">
                        {chairman.facebookUrl && (
                          <a href={chairman.facebookUrl} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path d="M13.5 8.5V7.1c0-.7.5-1.1 1.2-1.1H16V3h-1.9C12 3 10.8 4.5 10.8 6.7v1.8H9v3h1.8V21h3.2v-9.5h2.4l.4-3h-2.8Z" />
                            </svg>
                          </a>
                        )}
                        {chairman.instagramUrl && (
                          <a href={chairman.instagramUrl} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 2 .2 2.7.5.7.3 1.4.7 2 1.3.6.6 1 1.2 1.3 2 .3.7.5 1.5.5 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 2-.5 2.7-.3.7-.7 1.4-1.3 2-.6.6-1.2 1-2 1.3-.7.3-1.5.5-2.7.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-2-.2-2.7-.5-.7-.3-1.4-.7-2-1.3-.6-.6-1-1.2-1.3-2-.3-.7-.5-1.5-.5-2.7-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c0-1.2.2-2 .5-2.7.3-.7.7-1.4 1.3-2 .6-.6 1.2-1 2-1.3.7-.3 1.5-.5 2.7-.5 1.2 0 1.6 0 4.8 0Zm0-2.2C8.7 0 8.3 0 7.1.1 5.8.1 4.8.4 4 .8c-.9.4-1.6.9-2.3 1.6C1 3.2.5 4 .1 4.8-.2 5.6 0 6.6 0 7.9 0 9.1 0 9.5 0 12s0 3 .1 4.2c.1 1.2.4 2.2.8 3 .4.9.9 1.6 1.6 2.3.7.7 1.4 1.2 2.3 1.6.7.3 1.7.6 3 .8 1.2.1 1.6.1 4.2.1s3 0 4.2-.1c1.2-.1 2.2-.4 3-.8.9-.4 1.6-.9 2.3-1.6.6-.7 1.2-1.4 1.6-2.3.3-.7.6-1.7.8-3 .1-1.2.1-1.6.1-4.2s0-3-.1-4.2c-.1-1.2-.4-2.2-.8-3-.4-.9-.9-1.6-1.6-2.3C20.8 1 20 .5 19.2.1c-.7-.3-1.7-.6-3-.8C15 .1 14.6 0 12 0Zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.2a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <motion.div variants={staggerWrap} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                  <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-4">
                    <Quote size={20} className="text-primary/40" />
                    <span className="text-xs tracking-[0.25em] font-bold text-primary uppercase bg-primary/5 px-4 py-1.5 rounded-full">Chairman's Profile</span>
                    <Quote size={20} className="text-primary/40 rotate-180" />
                  </motion.div>

                  <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                    {chairman.name}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.25em] text-primary font-semibold mb-6">
                    {chairman.role}
                  </motion.p>

                  <motion.p variants={fadeUp} className="text-slate-600 leading-relaxed mb-8 text-base">
                    {chairman.bio}
                  </motion.p>

                  <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { number: '30+', label: 'Years Experience', color: 'from-primary to-secondary' },
                      { number: '4+', label: 'Sectors', color: 'from-secondary to-tertiary' },
                      { number: 'MBA', label: 'Highest Degree', color: 'from-tertiary to-primary' },
                      { number: '100%', label: 'Dedication', color: 'from-primary to-tertiary' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-200 text-center">
                        <p className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.number}</p>
                        <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500 mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                    {chairman.expertise.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/5 text-primary border border-primary/15">
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
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary/90" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work With Our Leadership?
              </h3>
              <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
                Connect with us for strategic partnerships and investment opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-3.5 bg-white text-primary font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
                >
                  Schedule a Meeting
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="/investment"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Explore Opportunities
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  )
}
