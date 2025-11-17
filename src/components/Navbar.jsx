import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = 'text-sm md:text-base text-gray-200/80 hover:text-white transition-colors'

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-[1px]">
              <div className="h-full w-full rounded-lg bg-black"></div>
            </div>
            <span className="text-white font-semibold tracking-wide">AI Augmented</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a className={navLink} href="#capabilities">Capabilities</a>
            <a className={navLink} href="#metrics">Proof</a>
            <a className={navLink} href="#contact">Contact</a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
              href="#contact"
            >
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Request a demo
            </a>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            <a className="block text-gray-200/80 hover:text-white" href="#capabilities" onClick={() => setOpen(false)}>Capabilities</a>
            <a className="block text-gray-200/80 hover:text-white" href="#metrics" onClick={() => setOpen(false)}>Proof</a>
            <a className="block text-gray-200/80 hover:text-white" href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a className="block text-white rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-center" href="#contact" onClick={() => setOpen(false)}>Request a demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
