export default function RootLayout({ children }) {
 return (
    <html>
      <head>
        <title>My Next Project</title>
      </head>

      <body>
        <nav> Navbar </nav>
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Contact </li>
        </ul>    
        {children}
      </body>
    </html>
  )
}
