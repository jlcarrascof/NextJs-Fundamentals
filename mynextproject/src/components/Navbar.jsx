import Link from "next/link"
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar py-5">
        <Link href="/">
            <h1 className="text-3xl font-bold">Curso de NextJS</h1>
        </Link>
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