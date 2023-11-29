import Navbar from '../components/Navbar'
import { Roboto } from 'next/font/google'

export const metadata = { 
  title: 'Mi tienda con Next.js - HomePage',
  description: 'Esta es la página de inicio de mi tienda con Next.js',
  keywords: 'tienda, next.js, ecommerce',

}

export default function RootLayout({ children }) {
 return (
    <html>
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
