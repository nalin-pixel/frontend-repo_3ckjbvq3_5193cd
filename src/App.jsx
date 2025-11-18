import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-rose-900">
      {/* Background soft gradients */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-40" style={{
          background: 'linear-gradient(135deg,#FFE5E5,#E5E5FF,#E5FFE5,#FFFFE5)'
        }} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl opacity-40" style={{
          background: 'linear-gradient(135deg,#FFB88C,#FF9A9E,#FECFEF)'
        }} />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-rose-700/80">
          Fait avec amour • 100% gratuit • Mamans Connectées
        </div>
      </footer>
    </div>
  )
}

export default App
