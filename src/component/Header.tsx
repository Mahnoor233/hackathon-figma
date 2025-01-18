
import React from 'react'
import Link from 'next/link';



import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { MdOutlinePerson, MdSearch } from 'react-icons/md';


const Header = () => {
    return(
          <header className="text-gray-600 body-font">
         <div className=" left-0 bg-transparent">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-10">
      <Link className="mr-5 hover:text-gray-900" href="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900" href="/shop"> Shop</Link>
      <Link className="mr-5 hover:text-gray-900" href="/singleproduct"> Single products</Link>
      
      <Link className="mr-5 hover:text-gray-900" href="/contact"> Contact</Link>
    </nav>
   <div className='gap-4 flex h-8'>
   <Link href="/account"> <MdOutlinePerson /></Link>
   <Link href="/account">  <MdSearch /> </Link>
   <Link href="/checkout">  <FaHeart /> </Link>
   <Link href="/cart"> <FaShoppingCart /></Link>
    </div>
    </div>
    </div>
  
</header>
  
  
        
    )
    }
export default Header;