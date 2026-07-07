import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="bg-bg2 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <div className="font-mono text-xs text-blue tracking-[0.18em] uppercase mb-3">
            What I've built
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-blue-glow">
              Projects
            </span>
          </h2>
          <p className="text-muted max-w-lg mb-12 leading-7">
            5 production apps shipped — each solving a real problem for real users.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="reveal group bg-bg3/60 border border-line rounded-2xl p-7 flex flex-col transition-all hover:border-blue/40 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.45)] relative overflow-hidden"
              style={{ transitionDelay: `${0.1 * (i % 3)}s` }}
            >
              <div className="flex items-start justify-between mb-3.5">
                <div className="text-3xl">{p.icon}</div>
                <span className="font-mono text-[0.65rem] text-blue bg-blue/10 border border-blue/25 rounded px-2 py-0.5 tracking-wide">
                  {p.badge}
                </span>
              </div>
              <div className="text-lg font-semibold text-slate-200 mb-1">
                {p.name}
              </div>
              <div className="text-sm text-blue font-mono mb-1">{p.sub}</div>
              <div className="text-xs text-muted font-mono mb-3">{p.period}</div>
              <p className="text-[0.85rem] text-muted leading-7 flex-1 mb-5">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.7rem] font-mono text-muted bg-white/[0.04] border border-white/[0.08] rounded px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
