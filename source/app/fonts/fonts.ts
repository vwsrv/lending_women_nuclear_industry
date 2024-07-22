import { Inter, Montserrat } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'block',
  fallback: ['sans-serif']
})

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'block',
  fallback: ['sans-serif']
})
