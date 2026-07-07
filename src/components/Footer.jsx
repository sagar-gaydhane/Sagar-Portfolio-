import { profile } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="text-center py-8 border-t border-line font-mono text-xs text-muted">
      <p>
        Built with ❤️ by{' '}
        <span className="text-blue">{profile.name}</span> · {profile.location} ·{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
