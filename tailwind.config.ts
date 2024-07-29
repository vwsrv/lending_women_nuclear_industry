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
      indigo: '#2D2458',
      gray: {
        DEFAULT: '#F7F7F7',
        dark: '#B1B1B1'
      },
      violet: {
        DEFAULT: '#906FCC', // Кнопки + "схемы хим.связей"
        // pastel: '#5D4796', // + непрозрачность 23% / формула 1шт
        // light: '#EAC7FF',  // кнопка "подать заявку"
      }, 
      blue: {
        DEFAULT: '#0984CB', // Кнопки
        // DEFAULT: '#2F00A9', // + непрозрачность 23% / формулы 3шт
        // midnight: '#1F088A', // первая кнопка "поддержать проект"
      }, 
      magenta: {
        DEFAULT: '#C410E1',
        // dark: '#823A8D', // первая кнопка "подписаться" и вторая кнопка "поддержать проект"
        // light: '#F6BDFF', // вторая кнопка "подписаться"
      }, 
      // lavender: '#D3CAFF', // кнопка "зарегистрироваться"
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
