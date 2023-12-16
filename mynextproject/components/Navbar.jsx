import Link from "next/link"
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1>Curso de NextJS</h1>

        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/shop">Shop</Link>
            </li>
            <li>
                <Link href="/posts">Posts</Link>
            </li>
        </ul>
    </nav>    
  );
}