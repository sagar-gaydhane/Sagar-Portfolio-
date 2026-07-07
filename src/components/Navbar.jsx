import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 sm:px-12 py-[1.1rem] bg-bg/80 backdrop-blur-2xl border-b border-line transition-shadow ${
        scrolled ? 'shadow-[0_4px_32px_rgba(0,0,0,0.5)]' : ''
      }`}
    >
      <div className="font-mono text-base tracking-wide">
        <span className="text-blue-glow">SG</span>
        <span className="text-blue">.dev</span>
      </div>
      <ul className="hidden sm:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-mono text-sm text-muted tracking-wide hover:text-blue transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
