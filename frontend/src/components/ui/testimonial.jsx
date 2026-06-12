import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote: "This platform revolutionized our data analysis process. The speed and accuracy are unparalleled. A must-have for any data-driven team.",
    name: "Priya Sharma",
    designation: "Data Scientist at QuantumLeap",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    quote: "The user interface is incredibly intuitive, which made the onboarding process for my team a breeze. We were up and running in hours, not days.",
    name: "Marcus Johnson",
    designation: "Head of Operations at Synergy Corp",
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    quote: "Customer support is top-notch. They are responsive, knowledgeable, and genuinely invested in our success. It feels like a true partnership.",
    name: "Isabella Rossi",
    designation: "Client Success Manager at Horizon",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
  },
  {
    quote: "I'm impressed by the constant stream of updates and new features. The development team is clearly passionate and listens to user feedback.",
    name: "Kenji Tanaka",
    designation: "Software Engineer at CodeCrafters",
    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop",
  },
  {
    quote: "The ROI was almost immediate. It streamlined our workflows so effectively that we cut project delivery times by nearly 30%.",
    name: "Fatima Al-Jamil",
    designation: "CFO at Apex Financial",
    src: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop",
  },
]

const AnimatedTestimonials = ({ testimonials, autoplay = true }) => {
  const [active, setActive] = useState(0)

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(handleNext, 5000)
    return () => clearInterval(interval)
  }, [autoplay, handleNext])

  const isActive = (index) => index === active

  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`

  return (
    <div className="mx-auto max-w-sm px-4 py-20 md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20">
        <div className="flex items-center justify-center">
            <div className="relative h-80 w-full max-w-xs">
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-400/20 via-orange-500/10 to-orange-600/20 rounded-[2rem] blur-2xl" />
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{ opacity: 0, scale: 0.9, y: 50, rotate: randomRotate() }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.5,
                      scale: isActive(index) ? 1 : 0.9,
                      y: isActive(index) ? 0 : 20,
                      zIndex: isActive(index) ? testimonials.length : testimonials.length - Math.abs(index - active),
                      rotate: isActive(index) ? '0deg' : randomRotate(),
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 origin-bottom"
                    style={{ perspective: '1000px' }}
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/500x500/1a0f0a/f97316?text=${testimonial.name.charAt(0)}`
                        e.currentTarget.onerror = null
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
        </div>

        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="flex flex-col justify-between"
            >
                <div>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="h-px w-8 bg-gradient-to-r from-orange-400 to-orange-600" />
                      <span className="text-xs tracking-[0.2em] font-semibold text-orange-500 uppercase">Testimonial</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                        {testimonials[active].name}
                    </h3>
                    <p className="text-sm text-orange-500/70">
                        {testimonials[active].designation}
                    </p>
                    <motion.p className="mt-8 text-lg text-orange-500 leading-relaxed">
                        &ldquo;{testimonials[active].quote}&rdquo;
                    </motion.p>
                </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AnimatedTestimonials }

export function Component() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(249,115,22,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.06),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,rgba(249,115,22,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        {/* Spinning orange curved lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <style>{`
              @keyframes spin-slow { to { transform: rotate(360deg); } }
              @keyframes spin-slow-reverse { to { transform: rotate(-360deg); } }
              .spin-orange-1 { transform-origin: 720px 450px; animation: spin-slow 30s linear infinite; }
              .spin-orange-2 { transform-origin: 720px 450px; animation: spin-slow-reverse 40s linear infinite; }
              .spin-orange-3 { transform-origin: 720px 450px; animation: spin-slow 50s linear infinite; }
            `}</style>
          </defs>
          <g className="spin-orange-1" opacity="0.15">
            <path d="M720,450 C720,250 920,150 920,350 C920,550 720,650 720,450" fill="none" stroke="#f97316" strokeWidth="2" />
            <path d="M720,450 C520,250 520,150 520,350 C520,550 720,650 720,450" fill="none" stroke="#f97316" strokeWidth="1.5" />
          </g>
          <g className="spin-orange-2" opacity="0.12">
            <path d="M720,450 C820,200 1020,250 920,450 C820,650 620,700 720,450" fill="none" stroke="#ea580c" strokeWidth="2" />
            <path d="M720,450 C620,200 420,250 520,450 C620,650 820,700 720,450" fill="none" stroke="#ea580c" strokeWidth="1.5" />
          </g>
          <g className="spin-orange-3" opacity="0.1">
            <path d="M720,450 C920,300 1120,400 920,550 C720,700 520,600 720,450" fill="none" stroke="#f97316" strokeWidth="3" />
            <path d="M720,450 C520,300 320,400 520,550 C720,700 920,600 720,450" fill="none" stroke="#f97316" strokeWidth="2" />
          </g>
        </svg>

        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-orange-600/8 rounded-full blur-[150px]" />
        <div className="relative z-10 w-full">
            <AnimatedTestimonials testimonials={testimonials} />
        </div>
    </div>
  )
}
