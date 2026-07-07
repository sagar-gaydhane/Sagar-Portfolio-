/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080C14',
        bg2: '#0D1220',
        bg3: '#111827',
        blue: {
          DEFAULT: '#3B82F6',
          dim: '#1D4ED8',
          glow: '#60A5FA',
        },
        muted: '#64748B',
        line: 'rgba(59,130,246,0.18)',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [],
}
