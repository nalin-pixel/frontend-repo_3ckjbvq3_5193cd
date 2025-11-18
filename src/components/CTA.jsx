export default function CTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white/80 backdrop-blur p-8 md:p-12 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,182,193,0.25),transparent_60%)]" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-extrabold text-rose-900">Prête à rejoindre un cocon bienveillant ?</h3>
            <p className="mt-2 text-rose-700/90 max-w-2xl">Crée ton profil en 2 minutes et découvre des mamans près de chez toi, des ressources adaptées et des activités qui font du bien.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-rose-500 via-amber-400 to-fuchsia-500 px-6 py-3 text-white font-semibold shadow-lg hover:opacity-90 transition">Créer mon compte gratuit</a>
              <a href="#" className="inline-flex items-center justify-center rounded-xl border border-rose-200 bg-white/80 px-6 py-3 text-rose-800 font-semibold shadow hover:bg-white">En savoir plus</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
