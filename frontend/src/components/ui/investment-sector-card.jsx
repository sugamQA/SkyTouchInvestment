import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ScrollReveal'

export function InvestmentSectorCard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const glowRef = useRef(null)
  
  // Initialize glow effect - single listener on container
  useEffect(() => {
    const container = glowRef.current
    if (!container) return

    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e
      container.style.setProperty('--x', x.toFixed(2))
      container.style.setProperty('--xp', (x / window.innerWidth).toFixed(2))
      container.style.setProperty('--y', y.toFixed(2))
      container.style.setProperty('--yp', (y / window.innerHeight).toFixed(2))
    }

    document.addEventListener('pointermove', syncPointer, { passive: true })
    return () => document.removeEventListener('pointermove', syncPointer)
  }, [])
  
  const sectors = [
    { 
      title: 'Private Equity', 
      pct: 65, 
      color: '#0ea5e9', 
      desc: 'Partnering for growth and transformation',
      icon: '📈',
      details: 'Strategic investments in high-growth companies with strong fundamentals and experienced management teams.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=90&fit=crop&auto=format'
    },
    { 
      title: 'Real Estate', 
      pct: 44, 
      color: '#f97316', 
      desc: 'Creating value through strategic property investment',
      icon: '🏗️',
      details: 'Premium commercial and residential properties in prime locations with strong rental yields.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=90&fit=crop&auto=format'
    },
    { 
      title: 'Capital Markets', 
      pct: 84, 
      color: '#0ea5e9', 
      desc: 'Strategic public market investments',
      icon: '📊',
      details: 'Well-researched public market investments across diverse sectors and geographies.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=90&fit=crop&auto=format'
    },
    { 
      title: 'Hydropower', 
      pct: 48, 
      color: '#38bdf8', 
      desc: 'Sustainable energy production',
      icon: '💧',
      details: 'Long-term investments in renewable energy projects with stable cash flows.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=90&fit=crop&auto=format'
    },
    { 
      title: 'Tourism', 
      pct: 43, 
      color: '#f97316', 
      desc: 'Growth in Nepal tourism sector',
      icon: '🏔️',
      details: 'Strategic investments in tourism infrastructure and hospitality ventures.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=90&fit=crop&auto=format'
    },
    { 
      title: 'Hospitality', 
      pct: 66, 
      color: '#0ea5e9', 
      desc: 'Premium hotel and resort investments',
      icon: '🏨',
      details: 'High-quality hotel properties with consistent occupancy and revenue growth.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=90&fit=crop&auto=format'
    },
    { 
      title: 'Technology & AI', 
      pct: 72, 
      color: '#8b5cf6', 
      desc: 'Innovation in digital transformation',
      icon: '🤖',
      details: 'Strategic investments in cutting-edge technology and artificial intelligence companies driving digital innovation and automation.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=90&fit=crop&auto=format'
    },
  ]
  
  const currentSector = sectors[activeIndex]

  return (
    <>
      <div ref={glowRef} className="w-full relative overflow-hidden rounded-[2rem] border border-white/10">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-x-0 top-0 h-[16px] bg-white/10 backdrop-blur-md border-b border-white/20 shadow-[0_8px_30px_rgba(255,255,255,0.08)]" />
        <div className="absolute inset-x-0 top-0 h-[2px] bg-white/35" />
        
        {/* Content Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left - Content */}
          <div className="px-6 md:px-16 py-16 md:py-24 flex items-center">
            <div className="max-w-3xl">
              {/* Header */}
              <ScrollReveal>
                <span className="text-xs tracking-[0.2em] font-semibold text-tertiary uppercase block mb-2">
                  Strategic Investments
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white drop-shadow-lg">
                  {currentSector.title}
                </h3>
                <p className="text-base text-white/90 mb-8 max-w-xl drop-shadow">
                  {currentSector.details}
                </p>
                
                {/* Progress Indicator */}
                <div className="mb-12">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs tracking-wider text-white/80 font-semibold drop-shadow">
                      Portfolio Allocation
                    </span>
                    <span className="text-3xl font-bold font-display drop-shadow-lg" style={{ color: currentSector.color }}>
                      {currentSector.pct}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-white/20 rounded-full overflow-hidden drop-shadow">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: currentSector.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${currentSector.pct}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Sector Grid */}
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {sectors.slice(0, -1).map((sector, i) => (
                    <motion.button
                      key={sector.title}
                      onClick={() => setActiveIndex(i)}
                      whileHover={{ scale: 1.05 }}
                      data-glow-button
                      className={`relative p-0 rounded-xl text-left transition-all border-2 overflow-hidden group h-40 ${
                        activeIndex === i 
                          ? 'border-current shadow-2xl' 
                          : 'border-white/20 shadow-lg'
                      }`}
                      style={activeIndex === i ? { borderColor: sector.color } : {}}
                    >
                      {/* Background Image */}
                      <img
                        src={sector.image}
                        alt={sector.title}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-3 flex flex-col justify-end backdrop-blur-sm">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-xs font-semibold leading-tight text-white drop-shadow font-display">{sector.title}</p>
                            <p className="text-[10px] text-white/80 mt-0.5 drop-shadow">{sector.desc}</p>
                          </div>
                          <span className="text-lg drop-shadow">{sector.icon}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden mr-2">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: sector.color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${sector.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: 'easeOut' }}
                            />
                          </div>
                          <span className="text-xs font-bold drop-shadow" style={{ color: sector.color }}>
                            {sector.pct}%
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
                
                {/* Action Button */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-sm font-semibold text-white hover:shadow-lg shadow-lg drop-shadow-lg transition-all"
                >
                  Explore Sectors →
                </motion.button>
              </div>
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative h-full min-h-[400px] lg:min-h-full flex items-center justify-center p-8 md:p-12">
            <div className="relative group">
              {/* Decorative glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-tertiary/20 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative border ring */}
              <div className="absolute -inset-3 border border-white/10 rounded-[2rem] group-hover:border-primary/30 transition-colors duration-500" />
              
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-xl" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-xl" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />
              
              <img
                src="/investment-image.jpg"
                alt="SkyTouch Investment"
                className="relative w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Tags overlay */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <span className="px-3 py-1.5 text-xs font-bold tracking-wide text-white bg-gradient-to-r from-emerald-500 to-green-600 rounded-full shadow-lg backdrop-blur-sm">
                  Profit +
                </span>
                <span className="px-3 py-1.5 text-xs font-bold tracking-wide text-white bg-gradient-to-r from-primary to-blue-600 rounded-full shadow-lg backdrop-blur-sm">
                  Growth
                </span>
                <span className="px-3 py-1.5 text-xs font-bold tracking-wide text-white bg-gradient-to-r from-violet-500 to-purple-600 rounded-full shadow-lg backdrop-blur-sm">
                  Secure
                </span>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="px-3 py-1.5 text-xs font-bold tracking-wide text-white bg-black/40 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                  ROI 24%
                </span>
                <span className="px-3 py-1.5 text-xs font-bold tracking-wide text-white bg-black/40 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                  Trusted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
