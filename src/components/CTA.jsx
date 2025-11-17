import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-5xl font-semibold text-white">Discreet by design</h2>
            <p className="mt-4 text-gray-300 max-w-xl">We work with a limited set of partners each quarter to maintain white‑glove delivery. Share a few details and our team will reach out.</p>
            <div className="mt-8 flex gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">Request access</a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition">Download brief</a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Full name" />
              <input className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Work email" />
              <input className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" placeholder="Company" />
              <textarea rows="4" className="w-full rounded-lg bg-black/60 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:col-span-2" placeholder="What decisions are you optimizing?" />
            </div>
            <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 py-3 font-medium text-black">Request a private demo</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
