import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#06060a] via-[#04040a] to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(29,78,216,0.15),rgba(0,0,0,0))]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Live AI Decision Engine
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Luxury AI for decisive businesses
          </h1>
          <p className="mt-5 text-lg text-gray-300 leading-relaxed">
            AetherIQ blends probabilistic modeling, knowledge graphs, and real‑time signals to surface the next best action with boardroom confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
              Start your private pilot
            </a>
            <a href="#capabilities" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition">
              Explore capabilities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
