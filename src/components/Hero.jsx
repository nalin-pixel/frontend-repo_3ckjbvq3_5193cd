import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[75vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/QblYNXAoH6zf7SHu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-white/70 backdrop-blur px-3 py-1 text-rose-700 shadow">
            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            100% gratuit • Pour toutes les mamans francophones
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-rose-900">
            La communauté joyeuse pour s'entraider, partager et souffler
          </h1>

          <p className="mt-4 text-rose-700/90 text-lg md:text-xl">
            Des cercles bienveillants, des ressources vérifiées et des événements proches de chez vous. Un espace coloré, simple et moderne, fait avec amour.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 via-amber-400 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition">
              Rejoindre la communauté
            </a>
            <a href="#" className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-white/80 px-6 py-3 text-rose-800 font-semibold shadow hover:bg-white">
              Découvrir les espaces
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
