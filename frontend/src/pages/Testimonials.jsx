import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const reviews = [
  {
    text: "Imperial Holding has been more than an investor; they've been true partners in our growth journey. When we needed capital to expand our multi-specialty hospital, they not only provided funding but brought governance expertise and strategic guidance.",
    name: 'Dr. Ramesh Sharma',
    role: 'Healthcare Sector',
  },
  {
    text: "Finding the right investor for a technology startup in Nepal is challenging; most don't understand the sector's dynamics. Imperial Holding was different from our first meeting.",
    name: 'Anita KC',
    role: 'Technology Sector',
  },
  {
    text: "Hydropower projects require investors who understand the sector's complexities; long development timelines, regulatory navigation, construction risks. Imperial Holding demonstrated this understanding from day one.",
    name: 'Bikash Thapa',
    role: 'Energy Sector',
  },
  {
    text: "When we decided to upgrade our property from a basic lodge to a premium eco-resort, we needed more than just capital; we needed partners who understood hospitality, sustainability, and the seasonal nature of tourism.",
    name: 'Suman Gurung',
    role: 'Tourism Sector',
  },
  {
    text: "As an agro-processing business working directly with farmers, we needed investors who understood agriculture's unique challenges; seasonal cash flows, working capital intensity, and the importance of maintaining farmer relationships.",
    name: 'Krishna Acharya',
    role: 'Agriculture Sector',
  },
  {
    text: "In my 25 years in business, I've worked with various financial partners, but Imperial Holding stands apart in their professionalism and long-term orientation.",
    name: 'Rajiv Shrestha',
    role: 'Real Estate Sector',
  },
]

export default function Testimonials() {
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
              Client <span className="gold-accent">Testimonials</span>
            </h1>
            <p className="text-lg text-on-surface-variant/70 max-w-2xl mx-auto">
              Hear from our partners and clients about their experience working with us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl p-8 h-full flex flex-col"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-tertiary text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-on-surface-variant/70 leading-relaxed italic mb-6 flex-1">
                  "{review.text}"
                </p>
                <div className="border-t border-outline/10 pt-4">
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-outline">| {review.role}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-12 max-w-xl mx-auto">
            <span className="text-5xl mb-4 block">⭐</span>
            <h3 className="text-2xl font-display font-bold mb-2">Our Google Rating</h3>
            <p className="text-lg text-on-surface-variant/70">260+ reviews (4.95 of 5)</p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
