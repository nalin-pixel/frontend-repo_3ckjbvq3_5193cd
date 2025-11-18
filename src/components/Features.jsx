import { Users, Calendar, BookOpen, MapPin, Shield, MessageCircleHeart } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Cercles de soutien',
    desc: 'Rejoignez des groupes bienveillants par âge des enfants, thèmes et villes.'
  },
  {
    icon: BookOpen,
    title: 'Ressources vérifiées',
    desc: 'Guides, checklists, podcasts et conseils validés par des pros.'
  },
  {
    icon: Calendar,
    title: 'Événements proches',
    desc: 'Playdates, ateliers, cafés-rencontres et activités locales.'
  },
  {
    icon: MapPin,
    title: 'Découverte locale',
    desc: 'Lieux kids-friendly, bons plans et services utiles près de chez vous.'
  },
  {
    icon: Shield,
    title: 'Sécurité & respect',
    desc: 'Charte bien-être, modération active et signalements faciles.'
  },
  {
    icon: MessageCircleHeart,
    title: 'Échanges positifs',
    desc: 'Discussions douces, entraide et inspirations du quotidien.'
  },
]

export default function Features() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,182,193,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900 tracking-tight">Tout pour s'entourer et respirer</h2>
          <p className="mt-3 text-rose-700/90">L'essentiel pour se sentir soutenue chaque jour, avec douceur et couleurs.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-rose-100 bg-white/80 backdrop-blur p-6 shadow hover:shadow-lg transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400 via-amber-300 to-fuchsia-400 shadow text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-rose-900">{f.title}</h3>
              <p className="mt-1 text-rose-700/90">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
