import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white p-10 md:p-14 overflow-hidden relative">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Bring Thinkersklub to your school</h2>
              <p className="mt-3 text-gray-300 max-w-2xl">Get a personalized demo of our labs, curriculum and training programs. We’ll tailor a roll‑out plan for your students and teachers.</p>
            </div>

            <form className="flex-1 grid sm:grid-cols-2 gap-3 w-full">
              <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-lime-400/60" placeholder="Your name" />
              <input type="email" className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-lime-400/60" placeholder="School email" />
              <input className="sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-lime-400/60" placeholder="School / Organization" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 text-gray-900 font-semibold px-5 py-3 hover:brightness-95 transition">
                <Mail className="h-5 w-5" />
                Request demo
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
