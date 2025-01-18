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

      <div className="min-h-screen bg-yellow-50 flex justify-center items-center">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-4 gap-8 h-">
            {/* Cart Items */}
            <div className="col-span-3">
              <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-yellow-100">
                    <th className="p-4 text-left">Product</th>
                    <th className="p-4 text-left">Price</th>
                    <th className="p-4 text-left">Quantity</th>
                    <th className="p-4 text-left">Subtotal</th>
                    <th className="p-4 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 flex items-center">
                      <img
                        src="/Asgaard sofa 1.png"
                        alt="Asgaard sofa"
                        className="w-16 h-16 rounded-lg bg-yellow-100" />
                      <span className="ml-4">Asgaard sofa</span>
                    </td>
                    <td className="p-4">Rs. 250,000.00</td>
                    <td className="p-4">
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-16 p-2 border rounded-lg text-center" />
                    </td>
                    <td className="p-4">Rs. 250,000.00</td>
                    <td className="p-4 text-center text-yellow-500 cursor-pointer">
                      <span className="material-icons"><MdDelete /></span>
                    </td>
                  </tr>
                </tbody>
              </table>
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

    <div className="bg-pink-100 py-16 ">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
  
  );
}

export default cart;
