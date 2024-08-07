import type { Config } from 'tailwindcss'
import colors from 'tailwindcss'

const config: Config = {
  content: [
    './source/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'rgba(var(--white-color), 1)',
      gray: {
        DEFAULT: '#F7F7F7',
        dark: '#B1B1B1'
      },
      blue: '#0984CB',
      indigo: '#2D2458',
      violet: '#906FCC',
      magenta: '#C410E1'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      gap: {
        '117px': '117px',
      }
    }
  },
  plugins: []
}
export default config
