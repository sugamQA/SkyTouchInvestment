import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SpiralAnimation } from './spiral-animation'
import { SplineScene } from './spline-scene'
import ScrollReveal from '../ScrollReveal'

export function InvestmentSectorCard() {
  const [activeIndex, setActiveIndex] = useState(0)
  
  // Initialize glow effect
  useEffect(() => {
    const syncPointer = (e) => {
      const { clientX: x, clientY: y } = e
      
      // Get all glow elements
      const glowElements = document.querySelectorAll('[data-glow-button]')
      glowElements.forEach((element) => {
        element.style.setProperty('--x', x.toFixed(2))
        element.style.setProperty('--xp', (x / window.innerWidth).toFixed(2))
        element.style.setProperty('--y', y.toFixed(2))
        element.style.setProperty('--yp', (y / window.innerHeight).toFixed(2))
      })
    }

    document.addEventListener('pointermove', syncPointer)
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
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&fit=crop'
    },
    { 
      title: 'Real Estate', 
      pct: 44, 
      color: '#f97316', 
      desc: 'Creating value through strategic property investment',
      icon: '🏗️',
      details: 'Premium commercial and residential properties in prime locations with strong rental yields.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop'
    },
    { 
      title: 'Capital Markets', 
      pct: 84, 
      color: '#0ea5e9', 
      desc: 'Strategic public market investments',
      icon: '📊',
      details: 'Well-researched public market investments across diverse sectors and geographies.',
      image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=500&h=400&fit=crop'
    },
    { 
      title: 'Hydropower', 
      pct: 48, 
      color: '#38bdf8', 
      desc: 'Sustainable energy production',
      icon: '💧',
      details: 'Long-term investments in renewable energy projects with stable cash flows.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&h=400&fit=crop'
    },
    { 
      title: 'Tourism', 
      pct: 43, 
      color: '#f97316', 
      desc: 'Growth in Nepal tourism sector',
      icon: '🏔️',
      details: 'Strategic investments in tourism infrastructure and hospitality ventures.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop'
    },
    { 
      title: 'Hospitality', 
      pct: 66, 
      color: '#0ea5e9', 
      desc: 'Premium hotel and resort investments',
      icon: '🏨',
      details: 'High-quality hotel properties with consistent occupancy and revenue growth.',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=400&fit=crop'
    },
    { 
      title: 'Technology & AI', 
      pct: 72, 
      color: '#8b5cf6', 
      desc: 'Innovation in digital transformation',
      icon: '🤖',
      details: 'Strategic investments in cutting-edge technology and artificial intelligence companies driving digital innovation and automation.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop'
    },
  ]
  
  const currentSector = sectors[activeIndex]

  const glowButtonStyles = `
    [data-glow-button] {
      --base: 220;
      --spread: 200;
      --radius: 8;
      --border: 1.5;
      --backdrop: hsl(0 0% 60% / 0.08);
      --backup-border: var(--backdrop);
      --size: 150;
      --outer: 0.8;
      --border-size: calc(var(--border, 2) * 1px);
      --spotlight-size: calc(var(--size, 150) * 1px);
      --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
      
      background-image: radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.08)), transparent
      );
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-position: 50% 50%;
      touch-action: none;
    }

    [data-glow-button]::before {
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 0.6)), transparent 100%
      );
      filter: brightness(1.5);
      pointer-events: none;
      z-index: -1;
      border-radius: calc(var(--radius) * 1px);
    }
  `
  
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: glowButtonStyles }} />
      <div className="w-full rounded-none md:rounded-2xl overflow-hidden relative">
        {/* Background Spiral Animation */}
        <div className="absolute inset-0 opacity-100">
          <SpiralAnimation />
        </div>
        
        {/* Gradient Overlay - More transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
        
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
          
          {/* Right - Spline 3D Scene + Last Sector */}
          <div className="hidden lg:flex lg:flex-col relative items-center justify-center overflow-hidden gap-6 pr-6">
            {/* Last Sector Card - Featured */}
            {sectors.length > 0 && (
              <motion.button
                onClick={() => setActiveIndex(sectors.length - 1)}
                whileHover={{ scale: 1.05 }}
                data-glow-button
                className={`relative w-full max-w-sm rounded-xl text-left transition-all border-2 overflow-hidden group h-48 ${
                  activeIndex === sectors.length - 1
                    ? 'border-current shadow-2xl' 
                    : 'border-white/20 shadow-lg'
                }`}
                style={activeIndex === sectors.length - 1 ? { borderColor: sectors[sectors.length - 1].color } : {}}
              >
                {/* Background Image */}
                <img
                  src={sectors[sectors.length - 1].image}
                  alt={sectors[sectors.length - 1].title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm font-semibold leading-tight text-white drop-shadow font-display">{sectors[sectors.length - 1].title}</p>
                      <p className="text-xs text-white/80 mt-1 drop-shadow">{sectors[sectors.length - 1].desc}</p>
                    </div>
                    <span className="text-2xl drop-shadow">{sectors[sectors.length - 1].icon}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden mr-3">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: sectors[sectors.length - 1].color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sectors[sectors.length - 1].pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                    <span className="text-xs font-bold drop-shadow" style={{ color: sectors[sectors.length - 1].color }}>
                      {sectors[sectors.length - 1].pct}%
                    </span>
                  </div>
                </div>
              </motion.button>
            )}
            
            {/* Spline 3D Scene */}
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full flex-1"
            />
          </div>
        </div>
      </div>
    </>
  )
}
