import type { Config } from 'tailwindcss'
import colors from 'tailwindcss'

const config: Config = {
  content: [
    './source/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      white: '#FFF',
      'white-smoke': '#F7F7F7',
      indigo: '#2D2458',
      magenta: '#C410E1',

      'violet-pastel': '#5D4796', // + непрозрачность 23% / формула 1шт
      blue: '#2F00A9', // + непрозрачность 23% / формулы 3шт

      'magenta-dark': '#823A8D', // первая кнопка "подписаться" и вторая кнопка "поддержать проект"
      'magenta-light': '#F6BDFF', // вторая кнопка "подписаться"
      'blue-midnight': '#1F088A', // первая кнопка "поддержать проект"
      lavender: '#D3CAFF', // кнопка "зарегистрироваться"
      'violet-light': '#EAC7FF' // кнопка "подать заявку"
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
export default config
