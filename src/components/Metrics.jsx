import { motion } from 'framer-motion'

const stats = [
  { k: '30–60%', v: 'Cost-to-serve reduction', note: 'through automation and first‑time resolution' },
  { k: '10–20%', v: 'Revenue uplift', note: 'from proactive, personalized next‑best‑actions' },
  { k: '4–8x', v: 'Faster time to answer', note: 'shorter loop from signal → insight → action' },
]

export default function Metrics() {
  return (
    <section id="metrics" className="relative py-24 bg-gradient-to-b from-[#080812] to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold text-white">Outcomes that compound</h2>
          <p className="mt-4 text-gray-300">Proven lift across revenue, cost, and speed—without sacrificing control.</p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400 text-4xl sm:text-5xl font-semibold">{s.k}</div>
              <div className="mt-2 text-white text-lg">{s.v}</div>
              <div className="mt-1 text-sm text-gray-400">{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
