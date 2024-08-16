// @ts-nocheck
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
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'poly-pattern': "url('/polygons.svg')",
        'logo-white': "url('/logo-bg-white.svg')",
        'logo-dark': "url('/for-contacts/logo-bg-dark.svg')",
        'icons-email': "url('/for-contacts/email.svg')",
        'icons-phone': "url('/for-contacts/phone.svg')",
        'icons-whatsup': "url('/for-contacts/whatsup.svg')",
        'icons-instagram': "url('/for-contacts/instagram.svg')",
        'icons-website': "url('/for-contacts/website.svg')",
        'icons-kolba': "url('/for-contacts/kolba.svg')",
        'icons-vkontakte': "url('/for-contacts/vkontakte.svg')",
        'icons-telegram': "url('/for-contacts/telegram.svg')"
      },
      backgroundPosition: {
        'top-logo-white-2': 'right 5rem top 5rem'
      }
    }
  },
  plugins: []
}
export default config
