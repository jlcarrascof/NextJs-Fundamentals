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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>    
        {children}
      </body>
    </html>
  )
}
