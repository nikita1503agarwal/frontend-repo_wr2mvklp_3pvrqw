import { useState } from 'react'
import { Menu, X, Bot, Sparkles } from 'lucide-react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-lime-400 to-cyan-400 grid place-items-center shadow-md">
        <Bot className="h-5 w-5 text-gray-900" />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-extrabold tracking-tight">Thinkers</span>
        <span className="text-xl font-extrabold tracking-tight text-lime-400">klub</span>
      </div>
    </div>
  )
}

const navItems = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Labs', href: '#labs' },
  { label: 'Training', href: '#training' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="shrink-0" aria-label="Thinkersklub Home">
            <Logo />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              <Sparkles className="h-4 w-4 text-lime-300" />
              Get a Demo
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-700 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-lime-300" />
              Get a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
