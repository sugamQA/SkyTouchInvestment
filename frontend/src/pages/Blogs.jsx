import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { CardStackBlogsDemo } from '../components/blocks/card-stack-blogs-demo'

const posts = [
  {
    title: 'Agriculture Sector Transformation Through Strategic Investment',
    date: 'January 23, 2026',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop',
    excerpt: 'Agriculture remains the backbone of Nepal\'s economy, employing over 60% of the population and offering significant investment opportunities.',
  },
  {
    title: 'Tourism & Hospitality Investment in Nepal',
    date: 'January 23, 2026',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop',
    excerpt: 'Nepal\'s tourism sector is experiencing a remarkable resurgence. With world-class trekking, cultural heritage, and emerging luxury destinations.',
  },
  {
    title: 'The Strategic Value of Patient Capital in Nepal Growing Economy',
    date: 'January 23, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    excerpt: 'In Nepal\'s rapidly evolving investment landscape, the distinction between short-term speculation and long-term value creation has never been more important.',
  },
  {
    title: 'Healthcare Investment: Meeting Critical Demand',
    date: 'December 25, 2025',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop',
    excerpt: 'Nepal\'s healthcare sector stands at a critical juncture. Growing middle class with rising health awareness is driving unprecedented demand.',
  },
  {
    title: 'Capital Markets Strategy for Long-Term Investors',
    date: 'December 25, 2025',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    excerpt: 'Nepal\'s capital markets have matured significantly over the past decade, offering investors liquid access to the country\'s growth story.',
  },
  {
    title: 'The Power of Diversification | Investment Strategy',
    date: 'December 25, 2025',
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop',
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
