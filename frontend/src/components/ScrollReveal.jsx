import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  }),
}

export default function ScrollReveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
