import { aboutParagraphs, techPills, profile } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="bg-bg2 py-24 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="bg-bg3 border border-line rounded-xl overflow-hidden font-mono">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-line">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
              <span className="text-xs text-muted ml-2">Developer.kt</span>
            </div>
            <div className="p-6 text-[0.78rem] leading-[1.85]">
              <span className="text-[#546E7A]">// {profile.name}</span>
              <br />
              <span className="text-[#C792EA]">data class</span>{' '}
              <span className="text-[#82AAFF]">Developer</span>
              <span className="text-[#89DDFF]">(</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#C792EA]">val</span>{' '}
              <span className="text-[#80CBC4]">name</span>
              <span className="text-[#89DDFF]">:</span> String{' '}
              <span className="text-[#89DDFF]">=</span>{' '}
              <span className="text-[#C3E88D]">"{profile.name}"</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#C792EA]">val</span>{' '}
              <span className="text-[#80CBC4]">role</span>
              <span className="text-[#89DDFF]">:</span> String{' '}
              <span className="text-[#89DDFF]">=</span>{' '}
              <span className="text-[#C3E88D]">"Android Developer"</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#C792EA]">val</span>{' '}
              <span className="text-[#80CBC4]">experience</span>
              <span className="text-[#89DDFF]">:</span> Int{' '}
              <span className="text-[#89DDFF]">=</span>{' '}
              <span className="text-[#F78C6C]">3</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#C792EA]">val</span>{' '}
              <span className="text-[#80CBC4]">location</span>
              <span className="text-[#89DDFF]">:</span> String{' '}
              <span className="text-[#89DDFF]">=</span>{' '}
              <span className="text-[#C3E88D]">"Nagpur, India"</span>
              <span className="text-[#89DDFF]">,</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#C792EA]">val</span>{' '}
              <span className="text-[#80CBC4]">languages</span>
              <span className="text-[#89DDFF]">:</span> List&lt;String&gt;{' '}
              <span className="text-[#89DDFF]">=</span> listOf
              <span className="text-[#89DDFF]">(</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#C3E88D]">"Kotlin"</span>
              <span className="text-[#89DDFF]">,</span>{' '}
              <span className="text-[#C3E88D]">"Java"</span>
              <span className="text-[#89DDFF]">,</span>{' '}
              <span className="text-[#C3E88D]">"React Native"</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#89DDFF]">),</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#C792EA]">val</span>{' '}
              <span className="text-[#80CBC4]">superpower</span>
              <span className="text-[#89DDFF]">:</span> String{' '}
              <span className="text-[#89DDFF]">=</span>{' '}
              <span className="text-[#C3E88D]">"AI Integration"</span>
              <br />
              <span className="text-[#89DDFF]">)</span>
              <br />
              <br />
              <span className="text-[#C792EA]">fun</span>{' '}
              <span className="text-[#82AAFF]">main</span>
              <span className="text-[#89DDFF]">() {'{'}</span>
              <br />
              &nbsp;&nbsp;<span className="text-[#C792EA]">val</span>{' '}
              <span className="text-[#80CBC4]">me</span>{' '}
              <span className="text-[#89DDFF]">=</span>{' '}
              <span className="text-[#82AAFF]">Developer</span>
              <span className="text-[#89DDFF]">()</span>
              <br />
              &nbsp;&nbsp;println
              <span className="text-[#89DDFF]">(</span>
              <span className="text-[#C3E88D]">"Let's build something"</span>
              <span className="text-[#89DDFF]">)</span>
              <br />
              <span className="text-[#89DDFF]">{'}'}</span>
            </div>
          </div>
        </div>

        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="font-mono text-xs text-blue tracking-[0.18em] uppercase mb-3">
            About me
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight mb-4 leading-tight">
            I build apps that
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue to-blue-glow">
              feel intelligent
            </span>
          </h2>
          {aboutParagraphs.map((p, i) => (
            <p
              key={i}
              className="text-muted mb-5 leading-8 text-[0.975rem] [&_strong]:text-slate-200"
              dangerouslySetInnerHTML={{ __html: p.text }}
            />
          ))}
          <div className="flex flex-wrap gap-2 mt-6">
            {techPills.map((pill) => (
              <span
                key={pill}
                className="font-mono text-xs text-blue bg-blue/[0.08] border border-blue/25 rounded px-2.5 py-1 tracking-wide"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
