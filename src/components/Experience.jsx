import { experience, softSkills, languages } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <div className="font-mono text-xs text-blue tracking-[0.18em] uppercase mb-3">
            Work history
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight mb-12">
            Experience{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-blue-glow">
              & Education
            </span>
          </h2>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-blue to-transparent" />
          {experience.map((e, i) => (
            <div
              key={e.role}
              className="reveal relative mb-12"
              style={{ transitionDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="absolute -left-[2.45rem] top-1 w-2.5 h-2.5 rounded-full bg-blue shadow-[0_0_12px_#3B82F6]" />
              <div className="font-mono text-xs text-blue mb-1.5 tracking-wide">
                {e.period}
              </div>
              <div className="text-xl font-semibold text-slate-200 mb-0.5">
                {e.role}
              </div>
              <div className="text-sm text-muted mb-4">{e.company}</div>
              {e.bullets.length > 0 && (
                <ul className="list-none space-y-1.5">
                  {e.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="text-[0.875rem] text-muted leading-7 pl-5 relative"
                    >
                      <span className="absolute left-0 top-0.5 text-blue text-xs">
                        ▹
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <div className="bg-bg3/60 border border-line rounded-xl p-6">
            <div className="text-sm font-semibold text-slate-200 mb-3">
              Soft Skills
            </div>
            <ul className="space-y-1.5">
              {softSkills.map((s) => (
                <li key={s} className="text-[0.85rem] text-muted leading-7 pl-5 relative">
                  <span className="absolute left-0 top-0.5 text-blue text-xs">▹</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg3/60 border border-line rounded-xl p-6">
            <div className="text-sm font-semibold text-slate-200 mb-3">
              Languages
            </div>
            <ul className="space-y-1.5">
              {languages.map((l) => (
                <li key={l} className="text-[0.85rem] text-muted leading-7 pl-5 relative">
                  <span className="absolute left-0 top-0.5 text-blue text-xs">▹</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
