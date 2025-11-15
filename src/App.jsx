import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <CTA />
        <footer id="about" className="border-t border-gray-200 py-12 text-center text-gray-600">
          © {new Date().getFullYear()} Thinkersklub. Empowering schools with AI & Robotics.
        </footer>
      </main>
    </div>
  )
}

export default App
