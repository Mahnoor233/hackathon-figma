import React from 'react'
import Image from 'next/image'
import { MdDelete } from 'react-icons/md'

const cart = () => {
  return (
    <div>
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/Rectangle 1.png"
          alt="Background"
          width={1440}
          height={316}
          className="bg-opacity-50 object-cover w-full h-[316px] sm:h-[400px] md:h-[500px]"
        />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <Image
            src="/logo1.png"
            alt="Logo"
            width={77}
            height={77}
            className="mb-4"
          />

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2 text-center">
            SHOP
          </h2>

          {/* Breadcrumb */}
          <span className="text-base sm:text-lg text-center text-gray-700">
            Home &gt; Shop
          </span>
        </div>
      </div>


      <div className="min-h-screen bg-yellow-50 flex justify-center items-center py-10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cart Items */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">


  {/* Mobile view for table (stacked layout) */}
  <div className="block sm:hidden">
    <div className="flex flex-col bg-white p-4 shadow-md rounded-lg mb-4">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="/Asgaard sofa 1.png"
          alt="Asgaard sofa"
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg bg-yellow-100"
        />
        <span className="text-sm sm:text-base lg:text-lg">Asgaard sofa</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-sm sm:text-base lg:text-lg">Price:</span>
        <span className="text-sm sm:text-base lg:text-lg">Rs. 250,000.00</span>
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-sm sm:text-base lg:text-lg">Quantity:</span>
        <input
          type="number"
          min="1"
          defaultValue="1"
          className="w-16 sm:w-20 p-2 border rounded-lg text-center text-sm sm:text-base"
        />
      </div>
      <div className="flex justify-between mb-4">
        <span className="text-sm sm:text-base lg:text-lg">Subtotal:</span>
        <span className="text-sm sm:text-base lg:text-lg">Rs. 250,000.00</span>
      </div>
      <div className="text-center text-yellow-500 cursor-pointer">
        <span className="material-icons">
          <MdDelete />
        </span>
      </div>
    </div>
  </div>
</div>




            {/* Cart Totals */}
            <div className="col-span-1">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
                <div className="flex justify-between mb-4">
                  <span>Subtotal</span>
                  <span className="font-bold">Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total</span>
                  <span className="font-bold text-yellow-500">Rs. 250,000.00</span>
                </div>
                <button className="w-full bg-yellow-500 text-white py-2 rounded-lg font-bold hover:bg-yellow-600">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-100 py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {/* Free Delivery */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Free Delivery</h3>
              <p className="text-sm text-gray-600">
                For all orders over $99, consectetur adipiscing elit.
              </p>
            </div>

            {/* 90 Days Return */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">90 Days Return</h3>
              <p className="text-sm text-gray-600">
                If goods have problems, consectetur adipiscing elit.
              </p>
            </div>

            {/* Secure Payment */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Secure Payment</h3>
              <p className="text-sm text-gray-600">
                100% secure payment, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default cart
