import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const blogData = {
  'agriculture-sector-transformation': {
    title: 'Agriculture Sector Transformation Through Strategic Investment',
    date: 'January 23, 2026',
    category: 'Agriculture',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop',
    excerpt: 'Agriculture remains the backbone of Nepal\'s economy, employing over 60% of the population and offering significant investment opportunities.',
    content: [
      {
        heading: 'The Current State of Agriculture in Nepal',
        body: 'Agriculture contributes approximately 25-30% to Nepal\'s GDP and employs over 60% of the population. Despite its significance, the sector faces challenges including fragmented landholdings, limited access to modern technology, inadequate irrigation facilities, and poor market linkages. However, these challenges also present enormous opportunities for strategic investors willing to drive transformation.',
      },
      {
        heading: 'Investment Opportunities',
        body: 'Strategic investment in agriculture can unlock tremendous value across the entire value chain. From modern farming techniques to agro-processing and export-oriented production, the opportunities are vast and growing.',
        points: [
          'Commercial farming with modern irrigation and greenhouse technology',
          'Organic agriculture for premium domestic and international markets',
          'Agro-processing units for value addition and export',
          'Cold storage and supply chain infrastructure',
          'Agricultural technology and precision farming solutions',
        ],
      },
      {
        heading: 'SkyTouch Approach to Agricultural Investment',
        body: 'SkyTouch Investment takes a holistic approach to agricultural transformation. We identify projects that combine financial returns with social impact, creating sustainable value for investors while improving livelihoods for farming communities across Nepal.',
      },
    ],
  },
  'tourism-hospitality-investment': {
    title: 'Tourism & Hospitality Investment in Nepal',
    date: 'January 23, 2026',
    category: 'Tourism',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=600&fit=crop',
    excerpt: 'Nepal\'s tourism sector is experiencing a remarkable resurgence. With world-class trekking, cultural heritage, and emerging luxury destinations.',
    content: [
      {
        heading: 'Nepal\'s Tourism Renaissance',
        body: 'Nepal\'s tourism sector is witnessing a powerful comeback. With Mount Everest, ancient temples, vibrant culture, and adventure tourism, the country attracts millions of visitors annually. The government\'s target of 5 million tourists by 2030 creates unprecedented investment opportunities.',
      },
      {
        heading: 'Key Investment Areas',
        body: 'The tourism sector offers diverse investment opportunities across multiple segments:',
        points: [
          'Luxury resorts and boutique hotels in scenic locations',
          'Adventure tourism infrastructure (trekking, rafting, paragliding)',
          'Eco-tourism and sustainable hospitality projects',
          'Cultural tourism experiences and heritage hotels',
          'Wellness and spiritual retreat centers',
        ],
      },
      {
        heading: 'Returns and Impact',
        body: 'Tourism investments typically deliver 12-18% annualized returns while creating significant employment opportunities. Government incentives include tax holidays and duty-free equipment imports for qualifying projects.',
      },
    ],
  },
  'patient-capital-nepal': {
    title: 'The Strategic Value of Patient Capital in Nepal Growing Economy',
    date: 'January 23, 2026',
    category: 'Investment',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    excerpt: 'In Nepal\'s rapidly evolving investment landscape, the distinction between short-term speculation and long-term value creation has never been more important.',
    content: [
      {
        heading: 'Understanding Patient Capital',
        body: 'Patient capital refers to investment with a longer time horizon, willing to forgo immediate returns in exchange for potentially higher long-term gains. In Nepal\'s emerging market context, this approach is particularly valuable for projects that require extended development periods.',
      },
      {
        heading: 'Why Nepal Needs Patient Capital',
        body: 'Nepal\'s infrastructure, healthcare, and energy sectors require significant upfront investment with longer payback periods. Patient capital can bridge this gap:',
        points: [
          'Hydropower projects with 7-10 year development cycles',
          'Infrastructure development requiring extended construction periods',
          'Healthcare facilities needing time to build reputation and patient base',
          'Agricultural transformation requiring multi-year commitments',
        ],
      },
      {
        heading: 'SkyTouch\'s Long-Term Approach',
        body: 'SkyTouch Investment champions the patient capital approach, partnering with projects that create lasting value. Our portfolio demonstrates that patient capital consistently delivers superior risk-adjusted returns while contributing to Nepal\'s economic development.',
      },
    ],
  },
  'healthcare-investment': {
    title: 'Healthcare Investment: Meeting Critical Demand',
    date: 'December 25, 2025',
    category: 'Healthcare',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop',
    excerpt: 'Nepal\'s healthcare sector stands at a critical juncture. Growing middle class with rising health awareness is driving unprecedented demand.',
    content: [
      {
        heading: 'Healthcare Gap in Nepal',
        body: 'Nepal faces a significant healthcare infrastructure gap. Despite progress in recent years, the country has only 0.7 physicians per 1,000 people compared to the WHO recommendation of 1. This gap represents both a social need and an investment opportunity.',
      },
      {
        heading: 'Investment Opportunities',
        body: 'The healthcare sector offers multiple entry points for strategic investors:',
        points: [
          'Multi-specialty hospitals in underserved regions',
          'Diagnostic centers with advanced imaging technology',
          'Telemedicine platforms connecting rural patients with specialists',
          'Pharmaceutical distribution and retail chains',
          'Medical education and training facilities',
        ],
      },
      {
        heading: 'Financial Performance',
        body: 'Quality healthcare providers in Nepal generate strong, stable cash flows with gross margins typically exceeding 35%. Hospital occupancy rates of 70-85% are achievable in well-located facilities with quality services.',
      },
    ],
  },
  'capital-markets-strategy': {
    title: 'Capital Markets Strategy for Long-Term Investors',
    date: 'December 25, 2025',
    category: 'Capital Markets',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
    excerpt: 'Nepal\'s capital markets have matured significantly over the past decade, offering investors liquid access to the country\'s growth story.',
    content: [
      {
        heading: 'Nepal\'s Capital Market Evolution',
        body: 'The Nepal Stock Exchange (NEPSE) has grown substantially, with market capitalization exceeding NPR 4 trillion. Regulatory improvements, increased transparency, and growing institutional participation have transformed the market into a viable investment avenue.',
      },
      {
        heading: 'Strategic Approaches',
        body: 'Long-term investors can capitalize on Nepal\'s growth through multiple strategies:',
        points: [
          'Blue-chip stocks in banking, hydropower, and FMCG sectors',
          'Mutual funds and unit trust schemes for diversified exposure',
          'Corporate bonds offering stable fixed-income returns',
          'IPO investments in high-growth companies',
          'Sector-specific ETFs for targeted exposure',
        ],
      },
      {
        heading: 'Risk Management',
        body: 'SkyTouch employs rigorous risk management frameworks including portfolio diversification, systematic investment plans, and regular rebalancing to optimize risk-adjusted returns in Nepal\'s dynamic capital markets.',
      },
    ],
  },
  'power-of-diversification': {
    title: 'The Power of Diversification | Investment Strategy',
    date: 'December 25, 2025',
    category: 'Strategy',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=1200&h=600&fit=crop',
    excerpt: 'In today\'s dynamic investment landscape, the age-old principle of "not putting all eggs in one basket" remains more relevant than ever.',
    content: [
      {
        heading: 'Why Diversification Matters',
        body: 'Diversification is the cornerstone of sound investment strategy. By spreading investments across different asset classes, sectors, and geographies, investors can reduce risk while maintaining return potential. In Nepal\'s evolving economy, this principle is especially critical.',
      },
      {
        heading: 'SkyTouch Diversification Framework',
        body: 'Our portfolio construction follows a disciplined diversification approach:',
        points: [
          'Private equity investments in high-growth sectors',
          'Real estate for stable, inflation-hedged returns',
          'Capital market instruments for liquidity and growth',
          'Hydropower for long-term, predictable cash flows',
          'Healthcare and tourism for demographic-driven growth',
        ],
      },
      {
        heading: 'Benefits of a Balanced Portfolio',
        body: 'A well-diversified portfolio delivers consistent returns across market cycles. SkyTouch\'s balanced approach has achieved 15-20% annualized returns while maintaining lower volatility compared to concentrated investment strategies.',
      },
    ],
  },
}

export default function BlogDetail() {
  const { id } = useParams()
  const blog = blogData[id]

  if (!blog) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-widest text-white bg-primary rounded-full mb-4">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{blog.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-12 md:py-20">
        <ScrollReveal>
          <p className="text-xl text-slate-600 leading-relaxed mb-12 pb-8 border-b border-slate-200">
            {blog.excerpt}
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {blog.content.map((section, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {section.body}
                </p>
                {section.points && (
                  <ul className="space-y-3 ml-6">
                    {section.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-600">
                        <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Back to Blogs */}
        <ScrollReveal>
          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to All Articles</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
