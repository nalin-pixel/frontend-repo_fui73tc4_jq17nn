import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(30%_30%_at_10%_20%,rgba(34,211,238,0.12),rgba(0,0,0,0))]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-semibold text-white">From insight to action—privately</h2>
            <p className="mt-4 text-gray-300 max-w-xl">We partner with a limited number of enterprises each quarter to deliver white‑glove deployments. Share a few details and we’ll coordinate a confidential demo.</p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">Request access</a>
              <a href="#capabilities" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition">See capabilities</a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
            <div className="grid sm:grid-cols-2 gap-4 relative">
              <input className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Full name" />
              <input className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Work email" />
              <input className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" placeholder="Company" />
              <textarea rows="4" className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" placeholder="What decision flows are you augmenting?" />
            </div>
            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 py-3 font-medium text-black">Request a private demo</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
