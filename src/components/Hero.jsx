import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden" aria-label="Thinkersklub Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-sm text-gray-700 shadow-sm">
            <Sparkles className="h-4 w-4 text-lime-500" />
            Next‑Gen AI & Robotics for Schools
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Build future‑ready students with Thinkersklub
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl">
            We set up immersive AI & Robotics labs, complete with curriculum, hardware, and certified trainers. Interactive, playful, and truly futuristic.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 font-semibold shadow hover:bg-gray-800 transition">
              Get a demo
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-gray-300 bg-white/70 hover:bg-white transition">
              Explore solutions
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <span className="font-semibold text-gray-900">50+ schools</span> onboarded
            </div>
            <div>
              <span className="font-semibold text-gray-900">10,000+ students</span> trained
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[420px] lg:h-[520px]" />
      </div>
    </section>
  )
}
