"use client"
import React from 'react'
import Image from 'next/image'
import { MdPerson3 } from 'react-icons/md';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';
const blog = () => {
  return (
    <div>
         <div className="relative">
          
              <Image
                src="/Rectangle 1.png"
                alt="Background"
                width={1440}
                height={316}
                className="bg-opacity-50"
              />
            
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  width={77}
                  height={77}
                  className="mb-4"
                />
                <h2 className="text-2xl font-bold text-black mb-2">BLOG</h2>
             <span className="text-base text-gray-700">
                  Home &gt; Blog
                </span>
              </div>
            </div>
           <div className="text-center">
    <div className="min-h-screen   grid grid-cols-2   py-10 px-4 ">
      <div className="max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="/Rectangle 68 (1).png"
          alt="Blog post"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          {/* Metadata */}
          <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
            <div className="flex items-center space-x-1">
            <MdPerson3 />Admin
            </div>
            <div className="flex items-center space-x-1">
            <FaCalendarAlt />14 Oct 2022
            </div>
            <div className="flex items-center space-x-1">
            <FaTag />Wood
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Going all-in with millennial design
          </h2>

          {/* Content */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
            tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
            molestie a iaculis at erat.
          </p>

          {/* Read More */}
          <a
        
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="\Rectangle 68 (2).png"
          alt="Blog post"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          {/* Metadata */}
          <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
            <div className="flex items-center space-x-1">
            <MdPerson3 />Admin
            </div>
            <div className="flex items-center space-x-1">
            <FaCalendarAlt />14 Oct 2022
            </div>
            <div className="flex items-center space-x-1">
            <FaTag />Wood
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Exploring new ways of decorating
          </h2>

          {/* Content */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
            tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
            molestie a iaculis at erat.
          </p>

          {/* Read More */}
          <a
        
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            Read more
          </a>
        </div>
      </div>
      <div className="max-w-2xl bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="/Rectangle 68.png"
          alt="Blog post"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          {/* Metadata */}
          <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
            <div className="flex items-center space-x-1">
            <MdPerson3 />Admin
            </div>
            <div className="flex items-center space-x-1">
            <FaCalendarAlt />14 Oct 2022
            </div>
            <div className="flex items-center space-x-1">
            <FaTag />Wood
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Handmade pieces that took time to make
          </h2>

          {/* Content */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi
            tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis
            molestie a iaculis at erat.
          </p>

          {/* Read More */}
          <a
        
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
<div className="grid grid-cols-1">


<div>
            <label className="block text-sm font-medium text-gray-700">
          
            </label>
            <input
              type="search"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
            />
          </div>
</div>
    </div>
    <div className="flex space-x-2 items-center justify-center pb-16 pt-2">
          <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition">
            1
          </button>
          <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition">
            2
          </button>
          <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition">
            3
          </button>
          <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition">
            Next
          </button>
        </div>
       
      





      <div className="flex bg-pink-100 px-10 py-14">
        <div className="container">
          <h1 className="text-black">Free Delivery</h1>
          <h5 className="text-gray-400">For all oders over $50, consectetur adipim scing elit.</h5>
        </div>
        <div className="container">
          <h1 className="text-black">90 Days Return</h1>
          <h5 className="text-gray-400">If goods have problems, consectetur adipim scing elit.</h5>
        </div>
        <div className="container">
          <h1 className="text-black">Secure Payment</h1>
          <h5 className="text-gray-400">100% secure payment, consectetur adipim scing elit.</h5>
        </div>
      </div>
    </div>
  );
}

export default blog;
