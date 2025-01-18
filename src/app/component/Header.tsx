"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaHeart, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { MdOutlinePerson, MdSearch } from 'react-icons/md';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="text-gray-600 body-font shadow-md">
    <div className="container mx-auto flex p-5 flex-wrap items-center justify-between">
      
      <Link href="/" className="flex items-center text-2xl font-semibold text-gray-900">
        <span>MySite</span>
      </Link>

   
      <div className="md:hidden flex items-center" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </div>

      
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
      >
        <Link className="text-lg text-gray-900 hover:text-blue-500" href="/">
          Home
        </Link>
        <Link className="text-lg text-gray-900 hover:text-blue-500" href="/shop">
          Shop
        </Link>
        <Link className="text-lg text-gray-900 hover:text-blue-500" href="/singleproduct">
          Single Products
        </Link>
        <Link className="text-lg text-gray-900 hover:text-blue-500" href="/contact">
          Contact
        </Link>
      
          <div className="gap-4 flex items-center justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
            <Link href="/account" className="text-xl md:text-2xl">
              <MdOutlinePerson />
            </Link>
            <Link href="/account" className="text-xl md:text-2xl">
              <MdSearch />
            </Link>
            <Link href="/checkout" className="text-xl md:text-2xl">
              <FaHeart />
            </Link>
            <Link href="/cart" className="text-xl md:text-2xl">
              <FaShoppingCart />
            </Link>
            </div>
            </nav>
    </div>
          
    </header>
  );
};

export default Header;





  