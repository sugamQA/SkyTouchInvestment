import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function SectorHoverCard({
  title,
  subtitle,
  image,
  desc,
  details,
  pct,
  color = '#0ea5e9',
  index = 0,
}) {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.08,
        ease: 'easeOut',
      },
    },
  }

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8 },
  }

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.28,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      y: 10,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-full"
      >
        <div className="relative h-full rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.08)] flex flex-col group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.10),transparent_30%)] opacity-80" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-t-3xl bg-slate-100 border-b border-slate-200 h-60">
              <img
                src={image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,transparent_28%,transparent_72%,rgba(255,255,255,0.08)_100%)]" />
              <div className="absolute top-4 right-4 rounded-full bg-white/90 text-slate-900 text-xs font-bold px-3 py-1 shadow-sm">
                {pct}% Portfolio
              </div>
              <div className="absolute top-4 left-4 rounded-full bg-slate-950/70 text-white text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1.5 border border-white/15 backdrop-blur-sm">
                Investment Sector
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <p className="text-xs uppercase tracking-[0.22em] font-semibold text-white/80 mb-1">
                  Sector Focus
                </p>
                <h3 className="text-2xl md:text-[1.75rem] font-display font-bold text-white drop-shadow-sm leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-white/80 mt-1 line-clamp-2 max-w-[92%]">
                  {subtitle}
                </p>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 border border-slate-200">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                  Portfolio share
                </span>
                <span className="text-sm font-bold" style={{ color }}>
                  {pct}%
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 min-h-[4.5rem]">
                {desc}
              </p>

              <div className="mt-5 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-xs font-medium text-slate-500 text-right line-clamp-1 max-w-[58%]">
                  {subtitle}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary border border-primary/15">
                  Learn more
                  <span aria-hidden="true">→</span>
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Sector growth
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {pct}%
                </span>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 z-20 pointer-events-none"
              >
                <div className="relative h-full rounded-2xl overflow-hidden border-2 border-primary/35 shadow-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 flex flex-col pointer-events-auto">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_30%)]" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

                  <div className="relative z-10 flex flex-col h-full overflow-y-auto custom-scrollbar">
                    <div className="mb-3 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                        <img
                          src={image}
                          alt={title}
                          loading="lazy"
                          decoding="async"
                          className="h-28 w-full object-cover"
                        />
                    </div>

                    <div className="mb-3 pb-3 border-b border-white/10">
                      <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-primary/80 mb-1.5">
                        {pct}% Portfolio Allocation
                      </p>
                      <h3 className="text-xl font-display font-bold text-white mb-1 leading-tight">
                        {title}
                      </h3>
                      <p className="text-xs text-white/70 leading-snug">
                        {subtitle}
                      </p>
                    </div>

                    <div className="mb-3 flex-1">
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {details}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden mb-2.5">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] text-slate-400 uppercase tracking-[0.16em] font-medium">
                          Strategic investment detail
                        </p>
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                          Explore sector
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 text-xs text-slate-400 font-medium">
                    ✕
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}