import {Link,Outlet} from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <br></br>
        <input type="search" placeholder="Search for products"/>
        <nav>
            <Link to ='OldProducts' className='example'>Old products</Link>
            <Link to ='NewProducts' className ='example'>New products</Link>


        </nav>
        <Outlet/>
    </div>
  )
}
