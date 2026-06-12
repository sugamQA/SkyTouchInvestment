import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { CardStackBlogsDemo } from '../components/blocks/card-stack-blogs-demo'

const posts = [
  {
    title: 'Agriculture Sector Transformation Through Strategic Investment',
    date: 'January 23, 2026',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2026/01/Agri-food-System-in-Nepal-Cover-e1760003757945-1024x614-1.webp',
    excerpt: 'Agriculture remains the backbone of Nepal\'s economy, employing over 60% of the population and offering significant investment opportunities.',
  },
  {
    title: 'Tourism & Hospitality Investment in Nepal',
    date: 'January 23, 2026',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2026/01/Tourism-7.jpg.bv_.webp',
    excerpt: 'Nepal\'s tourism sector is experiencing a remarkable resurgence. With world-class trekking, cultural heritage, and emerging luxury destinations.',
  },
  {
    title: 'The Strategic Value of Patient Capital in Nepal Growing Economy',
    date: 'January 23, 2026',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2025/12/dynamic-data-visualization-3d-1024x700.jpg',
    excerpt: 'In Nepal\'s rapidly evolving investment landscape, the distinction between short-term speculation and long-term value creation has never been more important.',
  },
  {
    title: 'Healthcare Investment: Meeting Critical Demand',
    date: 'December 25, 2025',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2025/12/group-surgeons-doing-surgery-hospital-operating-theater-medical-team-doing-critical-operation-group-surgeons-operating-room-with-surgery-equipment-modern-medical-background-1024x683.jpg',
    excerpt: 'Nepal\'s healthcare sector stands at a critical juncture. Growing middle class with rising health awareness is driving unprecedented demand.',
  },
  {
    title: 'Capital Markets Strategy for Long-Term Investors',
    date: 'December 25, 2025',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2025/12/stock-market-exchange-economics-investment-graph-1024x746.jpg',
    excerpt: 'Nepal\'s capital markets have matured significantly over the past decade, offering investors liquid access to the country\'s growth story.',
  },
  {
    title: 'The Power of Diversification | Investment Strategy',
    date: 'December 25, 2025',
    image: 'https://imperialholdings.com.np/wp-content/uploads/2025/12/Energy-Solar-Hydro-6.jpg.bv_.webp',
    excerpt: 'In today\'s dynamic investment landscape, the age-old principle of "not putting all eggs in one basket" remains more relevant than ever.',
  },
]

export default function Blogs() {
  return (
    <div className="pt-24">
      {/* FEATURED BLOGS CAROUSEL */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-16">
            <span className="section-label text-center">Latest Insights</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Featured <span className="gold-accent">Blog Posts</span>
            </h2>
            <p className="text-lg text-on-surface-variant/70 max-w-3xl mx-auto mt-4">
              Explore our latest investment insights, sector analysis, and market perspectives
            </p>
          </ScrollReveal>
          <CardStackBlogsDemo />
        </div>
      </section>

      {/* ALL BLOGS GRID */}
      <section className="py-16 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -5 }}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] tracking-wider text-outline mb-2">{post.date}</p>
                  <h3 className="text-lg font-display font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-on-surface-variant/60 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-outline/10">
                    <span className="text-xs text-primary font-semibold">Read More →</span>
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
