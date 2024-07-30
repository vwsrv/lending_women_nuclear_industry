// @ts-nocheck
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss'

const config: Config = {
  content: [
    './source/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'poly-pattern': "url('/polygons.svg')"
      }
    }
  },
  plugins: []
}
export default config
