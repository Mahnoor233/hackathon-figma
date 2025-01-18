import React from 'react';

import Link from 'next/link';

const Footer = () => {
  return (
    

    <footer className="bg-white text-black py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      
          <div className="text-sm text-gray-600 pt-16">
            <p>400 University Drive Suite 200</p>
            <p>Coral Gables, FL 33134 USA</p>
          </div>

        
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 ">
              <li className="pt-3">Home</li>
              <Link className="mr-5 hover:text-gray-900" href="/e_commerce_shop"> <button>Shop</button></Link>
              <li className="pt-3">About</li>
              <li className="pt-3">Contact</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-2">
              <li className="pt-3">Payment Options</li>
              <li className="pt-3">Returns</li>
              <li className="pt-3">Privacy Policies</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <form className="flex underline">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full   border-gray-300 rounded-l-md  focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-black rounded-r-md hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

  <hr />
        <div className=" text-black text-sm pb-2 pt-3">
          <p>2022 Meubel House. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;