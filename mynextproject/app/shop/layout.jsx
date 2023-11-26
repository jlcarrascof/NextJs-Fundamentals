export default function ShopLayout({ children }) {
  return ( 
    <>
      <nav>
        <h3>Section Shop</h3>
        <ul>
            <li>Categories</li>
            <li>Products</li>
        </ul>    
      </nav>  
      {children}
    </>
 );
}
