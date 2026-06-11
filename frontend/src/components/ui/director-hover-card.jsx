import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DirectorHoverCard({ name, role, image, bio, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative h-full group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-full"
      >
        <div className="glass-card rounded-2xl overflow-hidden h-full border border-primary/10 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
          <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 via-white to-tertiary/10 overflow-hidden">
              <img
                src={image}
                alt={name}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
          </div>

          <div className="p-6">
            <h3 className="text-lg md:text-xl font-display font-semibold text-on-surface">
              {name}
            </h3>
            <p className="text-xs tracking-wider text-primary font-semibold uppercase mt-2">
              {role}
            </p>
            <p className="text-sm text-on-surface-variant/70 mt-4 leading-relaxed line-clamp-3">
              {bio}
            </p>
            <p className="text-xs text-primary/70 mt-5 font-medium">
              Hover for full profile →
            </p>
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="absolute inset-0 z-20"
            >
              <div className="h-full rounded-2xl overflow-hidden border border-primary/25 bg-white/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(14,165,233,0.16)] p-6 flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-tertiary/8 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-primary/10">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-semibold text-on-surface">
                        {name}
                      </h3>
                      <p className="text-xs tracking-wider text-primary font-semibold uppercase mt-2">
                        {role}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-slate-400">01</span>
                  </div>

                  <div className="flex-1 pt-4">
                    <p className="text-sm text-on-surface-variant/80 leading-relaxed">
                      {bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-primary/10">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold mb-2">
                      Leadership Focus
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Strategic governance
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
