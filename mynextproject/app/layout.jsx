import Link from "next/link"

export default function RootLayout({ children }) {
 return (
    <html>
      <head>
        <title>My Next Project</title>
      </head>

      <body>
        <nav> Navbar </nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>    
        {children}
      </body>
    </html>
  )
}
