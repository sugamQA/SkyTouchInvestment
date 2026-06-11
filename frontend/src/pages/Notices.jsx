import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const notices = [
  {
    title: 'Annual General Meeting Notice - FY 2081/82',
    date: 'March 15, 2026',
    type: 'Corporate',
  },
  {
    title: 'Board Meeting Resolution - Investment Committee Formation',
    date: 'February 28, 2026',
    type: 'Board',
  },
  {
    title: 'Notice Regarding Share Transfer and Dematerialization',
    date: 'January 10, 2026',
    type: 'Regulatory',
  },
  {
    title: 'Closure of Shareholder Register',
    date: 'December 20, 2025',
    type: 'Corporate',
  },
  {
    title: 'Appointment of Statutory Auditors for FY 2082/83',
    date: 'November 5, 2025',
    type: 'Audit',
  },
]

export default function Notices() {
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
              Legal <span className="gold-accent">Notices</span>
            </h1>
            <p className="text-lg text-on-surface-variant/70 max-w-2xl mx-auto">
              Official notices and announcements from Sky Touch Investment & Consultant Pvt. Ltd.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="space-y-4">
          {notices.map((notice, i) => (
            <ScrollReveal key={notice.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ x: 5 }}
                className="glass-card rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-wider px-2 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                      {notice.type}
                    </span>
                    <span className="text-[10px] tracking-wider text-outline">{notice.date}</span>
                  </div>
                  <h3 className="font-display font-semibold">{notice.title}</h3>
                </div>
                <span className="text-sm text-primary whitespace-nowrap cursor-pointer hover:underline">
                  Download PDF →
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
