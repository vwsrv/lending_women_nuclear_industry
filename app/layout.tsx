import '../src/app/styles/global.css'
import { inter, montserrat } from '@/app/fonts/fonts'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru" className={`${montserrat.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
