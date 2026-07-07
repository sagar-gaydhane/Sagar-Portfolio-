import { profile } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="bg-bg2 py-24 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="reveal">
          <div className="font-mono text-xs text-blue tracking-[0.18em] uppercase mb-3">
            Get in touch
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight mb-4">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-blue-glow">
              work together
            </span>
          </h2>
        </div>

        <div
          className="reveal max-w-xl mx-auto bg-bg3/60 border border-line rounded-2xl p-10 sm:p-12 relative overflow-hidden"
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
          <h3 className="text-2xl font-bold mb-3 relative">
            Open to new opportunities
          </h3>
          <p className="text-muted mb-8 leading-7 relative">
            Looking for an Android Developer who ships clean, intelligent mobile experiences? I'd love to hear about what you're building.
          </p>
          <div className="flex gap-4 justify-center flex-wrap relative">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-line rounded-lg text-muted text-sm font-mono bg-white/[0.02] hover:text-blue hover:border-blue hover:bg-blue/[0.06] transition-all"
            >
              📧 Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-line rounded-lg text-muted text-sm font-mono bg-white/[0.02] hover:text-blue hover:border-blue hover:bg-blue/[0.06] transition-all"
            >
              💼 LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-line rounded-lg text-muted text-sm font-mono bg-white/[0.02] hover:text-blue hover:border-blue hover:bg-blue/[0.06] transition-all"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
