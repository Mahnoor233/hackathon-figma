import React from 'react'
import Image from 'next/image'

const checkout = () => {
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
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          {/* Logo */}
          <Image
            src="/logo1.png"
            alt="Logo"
            width={77}
            height={77}
            className="mb-4"
          />

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">CHECK OUT</h2>

          {/* Breadcrumb */}
          <span className="text-base sm:text-lg text-center text-gray-700">
            Home &gt; Check Out
          </span>
        </div>
      </div>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-8">
            {/* Billing Details Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Billing details</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company Name (Optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    Country / Region
                  </label>
                  <select
                    id="country"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option>Sri Lanka</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Street Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Street Address"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Town / City
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Town / City"
                  />
                </div>

                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-gray-700">
                    Province
                  </label>
                  <select
                    id="province"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option>Western Province</option>
                    <option>Southern Province</option>
                    <option>Central Province</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="ZIP Code"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Phone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 ">
                    Additional Information
                  </label>
                  <textarea
                    id="notes"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Additional Notes"
                  />
                </div>
              </form>
            </div>

            {/* Order Summary Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Order Summary</h2>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                <div className="mb-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span>Assigned seat x 1</span>
                    <span>Rs. 250,000.00</span>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>Rs. 250,000.00</span>
                </div>
                <hr className="my-4" />

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <div className="space-y-2">
                    <div>
                      <input
                        type="radio"
                        id="bankTransfer"
                        name="payment"
                        className="mr-2"
                      />
                      <label htmlFor="bankTransfer" className="text-sm">
                        Direct Bank Transfer
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        className="mr-2"
                      />
                      <label htmlFor="cash" className="text-sm">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-black text-white py-2 rounded-md text-center font-medium"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
