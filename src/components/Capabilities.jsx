import { motion } from 'framer-motion'
import { Brain, LineChart, Shield, Sparkles, Workflow, Activity, Users, Gauge } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Autonomous agents in your tools',
    desc: 'Proactive copilots that watch signals, reason over context, and take action in CRMs, ERPs, and data apps.'
  },
  {
    icon: LineChart,
    title: 'Causal + graph-powered reasoning',
    desc: 'Understand why things move, not just that they moved—simulate interventions and forecast outcomes with confidence.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade control',
    desc: 'Granular permissions, audit trails, and policy guardrails so every recommendation is explainable and compliant.'
  },
  {
    icon: Sparkles,
    title: 'Private by default',
    desc: 'Run models in your VPC. Keep data residency and IP protection aligned with your governance.'
  },
  {
    icon: Activity,
    title: 'Real-time decisions',
    desc: 'Fuse streaming events with history to update recommendations in milliseconds.'
  },
  {
    icon: Users,
    title: 'Human-in-the-loop',
    desc: 'Blend automation with expert oversight. Accept, refine, or roll back actions with one click.'
  },
  {
    icon: Workflow,
    title: 'Workflow-native',
    desc: 'Embed into the tools your teams already use—no new tabs, no context switching.'
  },
  {
    icon: Gauge,
    title: 'Measurable impact',
    desc: 'Closed-loop experimentation to attribute lift and continuously improve policies.'
  }
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
          AI that collaborates with your team
        </motion.h2>
        <p className="mt-4 text-gray-300 max-w-3xl">From forecasting and planning to sales ops and support, bring an always‑on partner that explains its reasoning, proposes actions, and learns from outcomes.</p>
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
