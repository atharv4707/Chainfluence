import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-600/20 via-transparent to-cyan-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold glow-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where Digital Marketing Meets Blockchain
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Chainfluence blends actionable marketing analytics with the transparency and trust of Aptos.
        </motion.p>
        <motion.div className="mt-10 flex justify-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <a href="#features" className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 border border-white/10">Explore Features</a>
          <a href="#dashboard" className="px-6 py-3 rounded bg-gradient-to-r from-[#7a5cff] to-[#00e5ff] shadow-glow hover:opacity-90">Open Dashboard</a>
        </motion.div>
      </div>
    </section>
  )
}

