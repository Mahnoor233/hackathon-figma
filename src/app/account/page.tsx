import React from 'react'
import Image from 'next/image'
const account = () => {
  return (
    <div>
          <div className="relative">
              {/* Background Image */}
              <Image
                  src="/Rectangle 1.png"
                  alt="Background"
                  width={1440}
                  height={316}
                  className="bg-opacity-50" />

              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {/* Logo */}
                  <Image
                      src="/logo1.png"
                      alt="Logo"
                      width={77}
                      height={77}
                      className="mb-4" />

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-black mb-2">MY ACCOUNT</h2>

                  {/* Breadcrumb */}
                  <span className="text-base text-gray-700">
                      Home &gt; My Account
                  </span>
              </div>
          </div>
          
    <div className="h-auto  flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-2 gap-8 p-14 w-full bg-white shadow-md rounded-md  ">
        {/* Login Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Log In</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username or email address
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username or email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-gray-600">Remember me</label>
          </div>
          <div className="flex justify-between items-center">
            <button className="bg-blue-500 text-white rounded-md px-6 py-2 font-medium hover:bg-blue-600 transition">
              Log In
            </button>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Lost Your Password?
            </a>
          </div>
        </div>

        {/* Register Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Register</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              A link to set a new password will be sent to your email address.
            </p>
            <p>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-blue-500 hover:underline">
                privacy policy
              </a>
              .
            </p>
          </div>
          <button className="bg-blue-500 text-white rounded-md px-6 py-2 font-medium hover:bg-blue-600 transition">
            Register
          </button>
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

    


export default account;
