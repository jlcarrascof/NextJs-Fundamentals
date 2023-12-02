import Navbar from '../components/Navbar'
import { Roboto } from 'next/font/google'

export const metadata = { 
  title: 'Mi tienda con Next.js - HomePage',
  description: 'Esta es la página de inicio de mi tienda con Next.js',
  keywords: 'tienda, next.js, ecommerce',
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["normal", "italic"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
 return (
    <html>
      <body className={roboto.className} >
        <Navbar />

        {children}
      </body>
    </html>
  )
}
