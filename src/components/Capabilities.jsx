import { motion } from 'framer-motion'
import { Brain, LineChart, Shield, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Causal Inference',
    desc: 'Move beyond correlation. Understand impact drivers and simulate outcomes across markets and segments.'
  },
  {
    icon: LineChart,
    title: 'Real-time Signals',
    desc: 'Fuse streaming data with historical context to update decisions in milliseconds.'
  },
  {
    icon: Shield,
    title: 'Governed AI',
    desc: 'Transparent, auditable recommendations with built-in guardrails for compliance.'
  },
  {
    icon: Sparkles,
    title: 'Private Models',
    desc: 'Proprietary models deployed in your VPC with strict data residency controls.'
  },
]

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 bg-gradient-to-b from-black to-[#080812]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_80%_10%,rgba(168,85,247,0.12),rgba(0,0,0,0))]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-semibold text-white"
        >
          Decisions you can defend
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition"
            >
              <it.icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
