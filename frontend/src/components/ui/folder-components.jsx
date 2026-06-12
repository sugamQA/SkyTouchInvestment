import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const sizeMap = {
  sm: {
    card: 'min-h-[300px] rounded-[28px] p-4',
    image: 'h-32',
    label: 'text-[10px] px-2.5 py-1',
  },
  md: {
    card: 'min-h-[320px] rounded-[32px] p-5',
    image: 'h-36',
    label: 'text-[10px] px-3 py-1',
  },
  lg: {
    card: 'min-h-[350px] rounded-[36px] p-6',
    image: 'h-40',
    label: 'text-xs px-3 py-1.5',
  },
};

const colorMap = {
  blue: {
    folder: "from-blue-400 to-blue-500",
    flap: "bg-blue-300/50",
    paperBack: "bg-blue-100/60",
    paperFront: "bg-blue-50",
    paperLine: "bg-blue-300/40",
    paperBorder: "border-blue-200",
    labelBg: "bg-blue-800/20",
    folderBorder: "border-white/30",
  },
  black: {
    folder: "from-neutral-800 to-neutral-900",
    flap: "bg-neutral-600/50",
    paperBack: "bg-neutral-500/60",
    paperFront: "bg-neutral-100",
    paperLine: "bg-neutral-300",
    paperBorder: "border-neutral-500",
    labelBg: "bg-white/10",
    folderBorder: "border-white/10",
  },
  yellow: {
    folder: "from-yellow-400 to-yellow-500",
    flap: "bg-yellow-200/50",
    paperBack: "bg-yellow-100/60",
    paperFront: "bg-yellow-50",
    paperLine: "bg-yellow-400/40",
    paperBorder: "border-yellow-200",
    labelBg: "bg-yellow-800/20",
    folderBorder: "border-white/30",
  },
  orange: {
    folder: "from-orange-400 to-orange-500",
    flap: "bg-orange-300/50",
    paperBack: "bg-orange-100/60",
    paperFront: "bg-orange-50",
    paperLine: "bg-orange-400/40",
    paperBorder: "border-orange-200",
    labelBg: "bg-orange-900/20",
    folderBorder: "border-white/30",
  },
  red: {
    folder: "from-red-400 to-red-500",
    flap: "bg-red-300/50",
    paperBack: "bg-red-100/60",
    paperFront: "bg-red-50",
    paperLine: "bg-red-400/40",
    paperBorder: "border-red-200",
    labelBg: "bg-red-900/20",
    folderBorder: "border-white/30",
  },
  grey: {
    folder: "from-gray-400 to-gray-500",
    flap: "bg-gray-300/50",
    paperBack: "bg-gray-200/60",
    paperFront: "bg-gray-100",
    paperLine: "bg-gray-400/40",
    paperBorder: "border-gray-300",
    labelBg: "bg-gray-800/20",
    folderBorder: "border-white/40",
  },
};

export const Folder = ({
  color = 'blue',
  size = 'lg',
  label,
  title,
  subtitle,
  desc,
  details,
  pct = 50,
  image,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const c = colorMap[color]
  const s = sizeMap[size]
  const cardTitle = title || label

  return (
    <motion.div
      aria-label="Folder sector card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.01 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        'group relative h-full cursor-pointer overflow-hidden border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300',
        s.card,
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.10),transparent_30%)] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col">
        <div className={cn('relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100', s.image)}>
          {image ? (
            <img
              src={image}
              alt={cardTitle}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className={cn('h-full w-full bg-gradient-to-br', c.folder)} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.10)_0%,transparent_30%,transparent_72%,rgba(255,255,255,0.08)_100%)]" />
          <div className="absolute top-4 left-4 rounded-full bg-slate-950/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white border border-white/15 backdrop-blur-sm">
            Portfolio folder
          </div>
          <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 shadow-sm">
            {pct}%
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
              {subtitle || 'Portfolio focus'}
            </p>
            <h3 className="text-2xl font-display font-bold leading-tight text-white drop-shadow-sm">
              {cardTitle}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 pt-5">
          <div className="flex items-center justify-between gap-3">
            <span className={cn('inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 uppercase tracking-[0.16em] font-semibold text-slate-500', s.label)}>
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
              {label}
            </span>
            <span className="text-sm font-bold" style={{ color }}>
              {pct}%
            </span>
          </div>

          <p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-slate-600 line-clamp-3">
            {desc || 'Curated investment focus with strong growth potential and strategic alignment.'}
          </p>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="max-w-[62%] truncate text-xs text-slate-500">
              {subtitle || 'Investment opportunity'}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 bg-primary/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              View detail
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            <div className="relative h-full rounded-[28px] border border-primary/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 shadow-2xl pointer-events-auto">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_30%)]" />
              <div className="relative z-10 flex h-full flex-col overflow-hidden">
                {image && (
                  <div className="mb-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <img src={image} alt={cardTitle} className="h-28 w-full object-cover" loading="lazy" />
                  </div>
                )}

                <div className="mb-3 border-b border-white/10 pb-3">
                  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/80">
                    {pct}% portfolio allocation
                  </p>
                  <h3 className="text-xl font-display font-bold leading-tight text-white">
                    {cardTitle}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-white/70">
                    {subtitle || label}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="text-sm leading-relaxed text-slate-200">
                    {details || desc || 'This portfolio folder highlights one of our strategic investment themes with long-term value creation potential.'}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="mb-2.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">
                      Portfolio overview
                    </p>
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Explore sector
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Folder;
