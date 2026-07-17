import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { CardStackBlogsDemo } from '../components/blocks/card-stack-blogs-demo'

const posts = [
  {
    title: 'Agriculture Sector Transformation Through Strategic Investment',
    date: 'January 23, 2026',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop',
    excerpt: 'Agriculture remains the backbone of Nepal\'s economy, employing over 60% of the population and offering significant investment opportunities.',
    slug: 'agriculture-sector-transformation',
    category: 'Agriculture',
    readTime: '5 min read',
  },
  {
    title: 'Tourism & Hospitality Investment in Nepal',
    date: 'January 23, 2026',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop',
    excerpt: 'Nepal\'s tourism sector is experiencing a remarkable resurgence. With world-class trekking, cultural heritage, and emerging luxury destinations.',
    slug: 'tourism-hospitality-investment',
    category: 'Tourism',
    readTime: '6 min read',
  },
  {
    title: 'The Strategic Value of Patient Capital in Nepal Growing Economy',
    date: 'January 23, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    excerpt: 'In Nepal\'s rapidly evolving investment landscape, the distinction between short-term speculation and long-term value creation has never been more important.',
    slug: 'patient-capital-nepal',
    category: 'Investment',
    readTime: '7 min read',
  },
  {
    title: 'Healthcare Investment: Meeting Critical Demand',
    date: 'December 25, 2025',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop',
    excerpt: 'Nepal\'s healthcare sector stands at a critical juncture. Growing middle class with rising health awareness is driving unprecedented demand.',
    slug: 'healthcare-investment',
    category: 'Healthcare',
    readTime: '6 min read',
  },
  {
    title: 'Capital Markets Strategy for Long-Term Investors',
    date: 'December 25, 2025',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop',
    excerpt: 'Nepal\'s capital markets have matured significantly over the past decade, offering investors liquid access to the country\'s growth story.',
    slug: 'capital-markets-strategy',
    category: 'Capital Markets',
    readTime: '5 min read',
  },
  {
    title: 'The Power of Diversification | Investment Strategy',
    date: 'December 25, 2025',
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&h=500&fit=crop',
    excerpt: 'In today\'s dynamic investment landscape, the age-old principle of "not putting all eggs in one basket" remains more relevant than ever.',
    slug: 'power-of-diversification',
    category: 'Strategy',
    readTime: '4 min read',
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
      <section className="py-20 max-w-[1440px] mx-auto px-6 md:px-16">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            All <span className="gold-accent">Articles</span>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden bg-white border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-lg backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>

                  {/* Date on Image */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-medium text-white/90 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-semibold text-primary/70 uppercase tracking-wider">{post.readTime}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="text-[10px] font-medium text-slate-400">{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-display font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Button */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link 
                      to={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors duration-300"
                    >
                      <span>Read Article</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
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
