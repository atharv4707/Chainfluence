import { ShieldCheckIcon, ChartBarIcon, ClockIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Immutable Records',
    desc: 'Every ad verification is stored on-chain, ensuring verifiable authenticity.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Real-Time Insights',
    desc: 'Monitor campaign performance with live updates and auditable data streams.',
    icon: ChartBarIcon
  },
  {
    title: 'Always Available',
    desc: 'Transparent records accessible 24/7 for teams and auditors.',
    icon: ClockIcon
  }
]

export default function Transparency() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center glow-text">Aptos Transparency for Ad Campaigns</h2>
        <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">Blockchain-backed proofs bring accountability to impressions, clicks, and conversions.</p>
        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3">
          {features.map(f => (
            <div key={f.title} className="rounded-xl p-6 bg-white/5 border border-white/10 hover:border-white/20 transition shadow-glow">
              <f.icon className="w-10 h-10 text-[#00e5ff]" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

