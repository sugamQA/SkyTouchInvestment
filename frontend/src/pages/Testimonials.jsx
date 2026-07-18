import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { Star } from 'lucide-react'

const reviews = [
  {
    text: "SkyTouch has been more than an investor; they have been true partners in our growth journey. When we needed capital to expand our multi-specialty hospital, they not only provided funding but brought governance expertise and strategic guidance.",
    name: 'Dr. Ramesh Sharma',
    role: 'Healthcare Sector',
    src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face',
  },
  {
    text: "Finding the right investor for a technology startup in Nepal is challenging; most do not understand the sector dynamics. SkyTouch was different from our first meeting.",
    name: 'Anita KC',
    role: 'Technology Sector',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
  },
  {
    text: "Hydropower projects require investors who understand the sector complexities; long development timelines, regulatory navigation, construction risks. SkyTouch demonstrated this understanding from day one.",
    name: 'Prakash Neupane',
    role: 'Energy Sector',
    src: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop&crop=face',
  },
  {
    text: "When we decided to upgrade our property from a basic lodge to a premium eco-resort, we needed more than just capital; we needed partners who understood hospitality, sustainability, and the seasonal nature of tourism.",
    name: 'Suman Gurung',
    role: 'Tourism Sector',
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
  },
  {
    text: "As an agro-processing business working directly with farmers, we needed investors who understood agriculture unique challenges; seasonal cash flows, working capital intensity, and the importance of maintaining farmer relationships.",
    name: 'Krishna Acharya',
    role: 'Agriculture Sector',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
  },
  {
    text: "In my 25 years in business, I have worked with various financial partners, but SkyTouch stands apart in their professionalism and long-term orientation.",
    name: 'Rajiv Shrestha',
    role: 'Real Estate Sector',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
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
                    <Star key={s} size={14} className="text-tertiary fill-tertiary" />
                  ))}
                </div>
                <p className="text-sm text-on-surface-variant/70 leading-relaxed italic mb-6 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-outline/10 pt-4 flex items-center gap-3">
                  {review.src && (
                    <img
                      src={review.src}
                      alt={review.name}
                      loading="lazy"
                      className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-outline">{review.role}</p>
                  </div>
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
