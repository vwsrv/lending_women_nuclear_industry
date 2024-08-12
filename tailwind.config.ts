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
    fontSize: {
      h3: '55px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'logo-white': "url('/logo-bg-white.svg')"
      },
      backgroundPosition: {
        'top-logo-white-2': 'right 5rem top 5rem'
      }
    }
  },
  plugins: []
}
export default config
