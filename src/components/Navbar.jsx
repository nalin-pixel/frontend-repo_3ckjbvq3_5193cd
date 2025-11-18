import { useState } from 'react'
import { Menu, X, Heart, Baby } from 'lucide-react'

function NavLink({ children, href = '#' }) {
  return (
    <a href={href} className="text-sm md:text-base text-rose-700 hover:text-rose-900 font-medium transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur-md shadow-xl border border-rose-100 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 via-amber-300 to-fuchsia-400 shadow">
              <Heart className="h-5 w-5 text-white drop-shadow" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg md:text-xl font-extrabold tracking-tight bg-gradient-to-r from-rose-500 via-amber-500 to-fuchsia-500 bg-clip-text text-transparent">Mamans</span>
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-rose-700">Connectées</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink>Communauté</NavLink>
            <NavLink>Ressources</NavLink>
            <NavLink>Événements</NavLink>
            <NavLink>À propos</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-500 px-4 py-2 text-white font-semibold shadow hover:opacity-90 transition">
              <Baby className="h-4 w-4" />
              Rejoindre gratuitement
            </a>
          </div>

          <button aria-label="Ouvrir le menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-rose-200 bg-white/70 p-2 text-rose-700 shadow">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-rose-100 p-4 space-y-3">
            <NavLink>Communauté</NavLink>
            <NavLink>Ressources</NavLink>
            <NavLink>Événements</NavLink>
            <NavLink>À propos</NavLink>
            <a href="#" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-500 px-4 py-2 text-white font-semibold shadow">
              <Baby className="h-4 w-4" />
              Rejoindre gratuitement
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
