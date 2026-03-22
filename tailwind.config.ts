import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}','./src/components/**/*.{js,ts,jsx,tsx,mdx}','./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { arabic: ['Cairo', 'sans-serif'] },
      colors: {
        primary: { DEFAULT: '#6366f1', dark: '#4f46e5' },
        surface: { DEFAULT: '#1e1e2e', card: '#27273a', border: '#3f3f5a' }
      }
    }
  },
  plugins: []
}
export default config
