import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-6"
    >
      <motion.img
        src="/logo.png"
        alt="SkyTouch"
        className="h-48 w-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
      </div>
      <motion.span
        className="text-[11px] tracking-[0.2em] text-outline font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        INVESTMENT & CONSULTANT PVT. LTD.
      </motion.span>
    </motion.div>
  )
}
