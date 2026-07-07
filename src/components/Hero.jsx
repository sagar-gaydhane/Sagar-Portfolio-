import { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'

function useTypewriter(roles) {
  const [text, setText] = useState('')

  useEffect(() => {
    let ri = 0
    let ci = 0
    let deleting = false
    let timeout

    const tick = () => {
      const current = roles[ri]
      if (!deleting) {
        ci++
        setText(current.slice(0, ci))
        if (ci === current.length) {
          deleting = true
          timeout = setTimeout(tick, 1800)
          return
        }
      } else {
        ci--
        setText(current.slice(0, ci))
        if (ci === 0) {
          deleting = false
          ri = (ri + 1) % roles.length
        }
      }
      timeout = setTimeout(tick, deleting ? 45 : 80)
    }

    timeout = setTimeout(tick, 80)
    return () => clearTimeout(timeout)
  }, [roles])

  return text
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-28 pb-16"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl">
        <div className="inline-block font-mono text-xs text-blue tracking-[0.15em] uppercase border border-line rounded-full px-4 py-1.5 mb-7 bg-blue/[0.06]">
          Available for new opportunities
        </div>

        <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-none tracking-tight mb-2">
          <span className="text-slate-200">{profile.firstName} </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-blue-glow">
            {profile.lastName}
          </span>
        </h1>

        <p className="font-mono text-[clamp(0.9rem,2vw,1.15rem)] text-muted mb-7 tracking-wide">
          <span>{typed}</span>
          <span className="text-blue animate-blink">_</span>
        </p>

        <p className="text-[1.05rem] text-muted max-w-xl mx-auto mb-11 leading-relaxed">
          Building intelligent Android experiences — from AI-powered features and real-time systems to wearable integrations. 3+ years turning ideas into production apps.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-blue text-white border border-blue hover:bg-blue-glow hover:border-blue-glow hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,246,0.35)] transition-all"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-medium bg-transparent text-slate-200 border border-line hover:border-blue hover:text-blue hover:-translate-y-0.5 transition-all"
          >
            Get in touch
          </a>
        </div>

        <div className="flex gap-8 sm:gap-12 justify-center flex-wrap mt-14 pt-10 border-t border-line">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <div
                className="reveal text-2xl font-bold text-blue font-mono"
                data-count={s.value}
              >
                0
              </div>
              <div className="text-xs text-muted tracking-wide uppercase mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
