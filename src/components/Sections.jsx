import { Cpu, Bot, BookOpen, Wrench, ShieldCheck, Users } from 'lucide-react'

export default function Sections() {
  return (
    <section className="relative" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">AI & Robotics solutions for every school</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">From turnkey labs to hands-on training programs, we deliver everything schools need to launch future‑ready learning.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: 'AI Lab Setup', desc: 'Complete hardware kits, workstations, and cloud tools—all installed and ready.' },
            { icon: Bot, title: 'Robotics Lab', desc: 'Modular robotics kits with sensors, motors and controllers for all grades.' },
            { icon: BookOpen, title: 'K‑12 Curriculum', desc: 'Age‑appropriate, standards‑aligned curriculum with projects and assessments.' },
            { icon: Wrench, title: 'Teacher Enablement', desc: 'Train‑the‑trainer bootcamps plus ongoing support and lesson plans.' },
            { icon: ShieldCheck, title: 'Safe & Secure', desc: 'Child‑safe hardware, monitored cloud access, and privacy‑first software.' },
            { icon: Users, title: 'Clubs & Competitions', desc: 'After‑school clubs, hackathons and national robotics challenges.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition">
              <Icon className="h-8 w-8 text-lime-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
