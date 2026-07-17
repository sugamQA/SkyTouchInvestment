import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 8.5V7.1c0-.7.5-1.1 1.2-1.1H16V3h-1.9C12 3 10.8 4.5 10.8 6.7v1.8H9v3h1.8V21h3.2v-9.5h2.4l.4-3h-2.8Z" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.9 8.6H3.8V21h3.1V8.6ZM5.3 3C4.2 3 3.4 3.8 3.4 4.8s.8 1.8 1.9 1.8c1.2 0 2-.8 2-1.8S6.5 3 5.3 3Zm4.8 5.6H7.1V21h3.1v-6.4c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21h3.1v-6.9c0-3.4-.7-5.9-4.4-5.9-1.8 0-3 1-3.5 1.8h-.1V8.6Z" />
    </svg>
  )
}

function WebsiteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 4 5.8 4 9s-1.5 6.3-4 9c-2.5-2.7-4-5.8-4-9s1.5-6.3 4-9Z" />
    </svg>
  )
}

export default function DirectorHoverCard({
  name,
  role,
  image,
  bio,
  focus = 'Strategic governance',
  facebookUrl,
  linkedinUrl,
  websiteUrl,
  index = 0,
}) {
  const [isHovered, setIsHovered] = useState(false)

  const socialLinks = [
    { icon: FacebookIcon, label: 'Facebook', url: facebookUrl },
    { icon: LinkedinIcon, label: 'LinkedIn', url: linkedinUrl },
    { icon: WebsiteIcon, label: 'Website', url: websiteUrl },
  ].filter((item) => !!item.url)

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
        <div className="relative h-full bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)] transition-shadow duration-300 p-5 flex flex-col group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.06),transparent_30%)] opacity-90" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />

          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary/10 via-white to-tertiary/10 border border-slate-200 shadow-sm">
              <img
                src={image}
                alt={name}
                loading="lazy"
                decoding="async"
                className="w-full h-[22rem] object-contain p-5 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/55 via-transparent to-transparent" />
            </div>

            <div className="px-1 pt-5 text-center">
              <h3 className="text-xl font-bold text-orange-600 mb-1 group-hover:text-orange-500 transition-colors">
                {name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-500/80">
                {role}
              </p>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed line-clamp-3">
                {bio}
              </p>

              {socialLinks.length > 0 && (
                <div className="mt-5 flex items-center justify-center gap-3">
                  {socialLinks.map(({ icon: Icon, label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-colors group-hover:border-orange-400/30 group-hover:text-orange-500"
                    >
                      <Icon size={16} strokeWidth={2.2} />
                    </a>
                  ))}
                </div>
              )}
            </div>
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
                <div className="h-full rounded-[2rem] overflow-hidden border border-primary/20 bg-white/96 backdrop-blur-xl shadow-[0_25px_80px_rgba(14,165,233,0.16)] p-6 flex flex-col text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-tertiary/8 pointer-events-none" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-center gap-4 pb-4 border-b border-primary/10 relative">
                    <div>
                      <h3 className="text-lg md:text-xl font-display font-semibold text-on-surface">
                        {name}
                      </h3>
                      <p className="text-xs tracking-wider text-orange-500 font-semibold uppercase mt-2">
                        {role}
                      </p>
                    </div>
                    <span className="absolute right-0 top-0 text-xs font-semibold text-slate-400">01</span>
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
                    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500 mx-auto">
                      {focus}
                    </div>
                    {socialLinks.length > 0 && (
                      <div className="mt-4 flex items-center justify-center gap-3">
                        {socialLinks.map(({ icon: Icon, label, url }) => (
                          <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            title={label}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:border-orange-400/30 hover:text-orange-500 transition-colors"
                          >
                            <Icon size={16} strokeWidth={2.2} />
                          </a>
                        ))}
                      </div>
                    )}
                    <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                      Click icon to open profile
                    </p>
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
