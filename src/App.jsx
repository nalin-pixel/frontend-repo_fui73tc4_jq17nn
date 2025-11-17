import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Metrics from './components/Metrics'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Capabilities />
      <Metrics />
      <CTA />
      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AetherIQ. All rights reserved.</p>
          <div className="text-gray-500 text-sm">Luxury AI for decisive enterprises.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
