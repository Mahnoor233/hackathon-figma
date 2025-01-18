import React from 'react'
import Image from 'next/image'
import { FiFilter } from 'react-icons/fi';

import Sofa14 from "@/../public/sofa14.png"
import { MdOutlineGridView } from 'react-icons/md';

const shop = () => {
  return (
    <div>
      <div className=" w-full ">
      <div className="relative">
  {/* Background Image */}
  <Image
    src="/Rectangle 1.png"
    alt="Background"
    width={1440}
    height={316}
    className="bg-opacity-50"
  />

  {/* Centered Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    {/* Logo */}
    <Image
      src="/logo1.png"
      alt="Logo"
      width={77}
      height={77}
      className="mb-4"
    />

    {/* Title */}
    <h2 className="text-2xl font-bold text-black mb-2">SHOP</h2>

    {/* Breadcrumb */}
    <span className="text-base text-gray-700">
      Home &gt; Shop
    </span>
  </div>
</div>


        <div className="bg-pink-100 py-4 px-6 flex items-center justify-between border-b border-gray-300">

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
              <div className="text-lg">
                <FiFilter /></div>
              <span className="text-sm">Filter</span>
            </button>
            <div className="text-lg text-gray-600 hover:text-gray-800 cursor-pointer">
            <MdOutlineGridView /></div>
          </div>
          <div className="h-[14px]">|</div>
          <p className="text-sm text-gray-600 ">

            Showing <span className="font-medium">1–16</span> of <span className="font-medium">32</span> results
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <span className="text-sm">Show</span>
              <input
                type="number"
                defaultValue="16"
                className="w-12 text-center border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <span className="text-sm">Short by</span>
              <select
                className="border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2 pl-2 pr-2 pt-4 pb-3">
  <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Trentonmodular1.png"
      alt="1"
      width={300}   
      height={300}  
    />
    <h3 className=" pl-5">Trenton modular sofa_3</h3>
    <h3 className=" pl-5">Rs. 25,000.00</h3>
  </div>

  <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Granitedining2.png"
      alt="2"
      width={300}   
      height={300}  
    />
    <h3 className=" pl-5 ">Granite dining table with dining chair</h3>
    <h3 className=" pl-5 ">Rs. 25,000.00</h3>
  </div>

  <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Outdoorbartable andstool3.png"
      alt="3"
      width={300}   
      height={300}  
    />
    <h3 className="flex pl-5">Outdoor bar table and stool</h3>
    <h3 className=" pl-5 ">Rs. 25,000.00</h3>
  </div>

  <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Plainconsolewith teakmirror4.png"
      alt="4"
      width={300}   
      height={300}  
    />
    <h3 className=" pl-5 ">Plain console with teak mirror</h3>
    <h3 className=" pl-5 ">Rs. 25,000.00</h3>
  </div>
</div>

<br />

<div className="flex">
  <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Graincoffeetable5.png"
      alt="1"
      width={300}   
      height={300}  
    />
    <h3 className="pl-5">Trenton modular sofa_3</h3>
    <h3 className="pl-5">Rs. 25,000.00</h3>
  </div>

  <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Kentcoffeetable6.png"
      alt="2"
      width={300}   
      height={300}  
    />
    <h3 className=" pl-5 pt-11">Granite dining table with dining chair</h3>
    <h3 className=" pl-5 pt-10">Rs. 25,000.00</h3>
  </div>

  <div className="flex flex-col items-center  border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Reclaimedteakcoffeetable7.png"
      alt="3"
      width={300}   
      height={300}  
    />
    <h3 className=" pl-5">Outdoor bar table and stool</h3>
    <h3 className=" pl-5 pt-4">Rs. 25,000.00</h3>
  </div>

  <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Roundcoffeetable_color8.png"
      alt="4"
      width={300}   
      height={300}  
    />
    <h3 className=" pl-5">Plain console with teak mirror</h3>
    <h3 className=" pl-5 pt-4">Rs. 25,000.00</h3>
  </div>
</div>


          

      <br />
      <div className="flex">
        <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image
            src="/Plainconsole9.png"
            alt="1"
            width={287}
            height={287}

          />
          <h3 className=" pl-5">Trenton modular sofa_3</h3>
          <h3 className=" pl-5">Rs. 25,000.00</h3>
        </div>

        <div className="cflex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image
            src="/ReclaimedteakSideboard10.png"
            alt="2"
            width={287}
            height={287}

          />
          <h3 className=" pl-5 pt-11">Granite dining table with dining chair</h3>
          <h3 className=" pl-5 pt-10">Rs. 25,000.00</h3>
        </div>
        <div className="flex flex-col items-center p- border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image
            src="/SJP_0825(11).png"
            alt="3"
            width={287}
            height={287}

          />
          <h3 className=" pl-5">Outdoor bar table and stool</h3>
          <h3 className=" pl-5 pt-4">Rs. 25,000.00</h3>
        </div>
        <div className="flex flex-col items-center p-4border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image
            src="/Bellachairandtable12.png"
            alt="4"
            width={287}
            height={287}

          />
          <h3 className=" pl-5 ">Plain console with teak mirror</h3>
          <h3 className=" pl-5 pt-4">Rs. 25,000.00</h3>
        </div>
      </div>
      <br />
      <div className="flex">
        <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image
            src="/16.png"
            alt="1"
            width={287}
            height={287}

          />
          <h3 className=" pl-5">Trenton modular sofa_3</h3>
          <h3 className=" pl-5">Rs. 25,000.00</h3>
        </div>

        <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image
            src="/16.png"
            alt="2"
            width={287}
            height={287}

          />
          <h3 className=" pl-5 pt-11">Granite dining table with dining chair</h3>
          <h3 className="pl-5 pt-10">Rs. 25,000.00</h3>
        </div>
        <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image
            src={Sofa14}
            alt="3"
            width={287}
            height={287}

          />
          <h3 className=" pl-5">Outdoor bar table and stool</h3>
          <h3 className=" pl-5 pt-4">Rs. 25,000.00</h3>
        </div>
        <div className="flex flex-col items-center border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image
            src="/13.png"
            alt="4"
            width={287}
            height={287}

          />
          <h3 className=" pl-5 ">Plain console with teak mirror</h3>
          <h3 className="pl-5 pt-4">Rs. 25,000.00</h3>
        </div>

</div> 

        <div className="flex space-x-2 items-center justify-center pb-16">
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


export default shop;

