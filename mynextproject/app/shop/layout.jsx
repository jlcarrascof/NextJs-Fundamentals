import Link from "next/link";

export default function ShopLayout({ children }) {
  return ( 
    <>
      <nav>
        <h3>Section Shop</h3>
        <ul>
            <li>
                <Link href="/shop/categories">Categories</Link>
            </li>
            <li>
                <Link href="/shop/categories/computers">Computers</Link>
            </li>
        </ul>    
      </nav>  
      {children}
    </>
 );
}
