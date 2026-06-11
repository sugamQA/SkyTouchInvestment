import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function BoardMemberCard({
  name,
  role,
  image,
  bio,
  email,
  phone,
  expertise = [],
  index = 0,
  imagePosition = '50% 100%',
}) {
  const [isHovered, setIsHovered] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  }

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.02, y: -8 },
  }

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
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
        <div className="relative h-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] transition-shadow duration-300 p-6 flex flex-col justify-between group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_30%)] opacity-90" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-tertiary" />

          <div className="relative z-10">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <img
                src={image}
                alt={name}
                className="w-full h-56 object-contain p-2 transition-transform duration-300"
                style={{ objectPosition: imagePosition }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/60 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]" />
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-3">
                {role}
              </p>
            </div>

            {expertise.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {expertise.slice(0, 2).map((exp, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 font-medium"
                  >
                    {exp}
                  </span>
                ))}
                {expertise.length > 2 && (
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200 font-medium">
                    +{expertise.length - 2}
                  </span>
                )}
              </div>
            )}

            <p className="text-sm text-slate-600 line-clamp-3 group-hover:text-slate-700 transition-colors">
              {bio}
            </p>
          </div>

          <div className="relative z-10 mt-4 text-center">
            <p className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Hover for more →
            </p>
          </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 z-50 pointer-events-none"
            >
              <div className="relative h-full bg-white rounded-2xl overflow-hidden border-2 border-primary/35 shadow-2xl p-5 flex flex-col pointer-events-auto">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.10),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_30%)]" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col h-full overflow-y-auto custom-scrollbar">
                  <div className="mb-3 pb-3 border-b border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {name}
                    </h3>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      {role}
                    </p>
                  </div>

                  <div className="mb-4 flex-1">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {bio}
                    </p>
                  </div>

                  {expertise.length > 0 && (
                    <div className="mb-4 pb-4 border-t border-b border-slate-200 py-4">
                      <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wide">
                        Expertise
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {expertise.map((exp, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-3 py-2 rounded-lg border border-primary/20 font-medium hover:bg-primary/15 transition-colors"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    {email && (
                      <div className="flex items-center gap-3">
                        <span className="text-primary text-lg">✉</span>
                        <a
                          href={`mailto:${email}`}
                          className="text-xs text-slate-600 hover:text-primary transition-colors break-all"
                        >
                          {email}
                        </a>
                      </div>
                    )}
                    {phone && (
                      <div className="flex items-center gap-3">
                        <span className="text-primary text-lg">☎</span>
                        <a
                          href={`tel:${phone}`}
                          className="text-xs text-slate-600 hover:text-primary transition-colors"
                        >
                          {phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute top-3 right-3 text-xs text-slate-400 font-medium">
                  ✕
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
