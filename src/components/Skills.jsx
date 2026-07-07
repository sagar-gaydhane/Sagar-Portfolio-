import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <div className="font-mono text-xs text-blue tracking-[0.18em] uppercase mb-3">
            What I work with
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight mb-4">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-blue-glow">
              Skills
            </span>
          </h2>
          <p className="text-muted max-w-lg mb-12 leading-7">
            A full-stack mobile toolkit built over 3 years of production work across 5 shipped apps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="reveal group bg-bg3/60 border border-line rounded-xl p-6 transition-all hover:border-blue/45 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] relative overflow-hidden"
              style={{ transitionDelay: `${0.1 * (i % 3)}s` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-2xl mb-3.5">{s.icon}</div>
              <div className="text-[0.95rem] font-semibold text-slate-200 mb-1.5">
                {s.name}
              </div>
              <div className="text-[0.8rem] text-muted leading-7">{s.items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
