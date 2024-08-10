import '@/app/styles/globals.css'
import { inter } from '@/app/fonts/fonts'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
