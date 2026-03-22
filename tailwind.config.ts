import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: { arabic: ['Cairo', 'sans-serif'] },
      colors: {
        surface: { DEFAULT: '#0f0f1e', card: '#141428', card2: '#1a1a30', border: 'rgba(99,102,241,0.15)' },
        primary:  { DEFAULT: '#6366f1', dark: '#4f46e5', light: '#818cf8' },
        accent:   { cyan: '#22d3ee', emerald: '#10b981', rose: '#f43f5e', amber: '#f59e0b' },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 25px rgba(99,102,241,0.25)',
        'glow-emerald': '0 0 25px rgba(16,185,129,0.2)',
        'glow-cyan': '0 0 25px rgba(34,211,238,0.2)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
