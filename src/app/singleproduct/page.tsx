"use client"
import Link from 'next/link'
import Image from 'next/image'

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdStarOutline } from 'react-icons/md';

const SingleProduct = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16">

      {/* Breadcrumb Navigation */}
      <nav className="flex text-gray-500 gap-3 pt-5">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        <span className="text-black"> &gt;</span>
        <Link href="/shop" className="hover:text-gray-700">Shop</Link>
        <span className="text-black"> &gt;</span>
        <span className="text-black">|</span>
        <span className="text-gray-700 font-semibold">Asgaard sofa</span>
      </nav>

      <div className="flex flex-col lg:flex-row pt-11 gap-6">

        {/* Product Image and Thumbnails */}
        <div className="flex flex-col lg:flex-row gap-4 lg:w-1/2">
          
          {/* Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:flex lg:flex-col">
            <Image src="/13.png" alt="Image 1" width={76} height={80} className="bg-yellow-100" />
            <Image src="/Outdoor sofa set 1.png" alt="Image 2" width={76} height={80} className="bg-yellow-100" />
            <Image src="/Stuart sofa 1.png" alt="Image 3" width={76} height={80} className="bg-yellow-100" />
            <Image src="/Maya sofa three seater (1) 1.png" alt="Image 4" width={76} height={80} className="bg-yellow-100" />
          </div>

          {/* Main Product Image */}
          <div className="w-full lg:w-[323px] h-[500px] bg-yellow-100 flex justify-center items-center">
            <Image src="/Asgaard sofa 1.png" alt="Asgaard Sofa" width={481} height={391} className="object-cover pt-11" />
          </div>

        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Asgaard sofa</h1>
          <p className="text-xl text-gray-600 mb-4">Rs. 250,000.00</p>

          {/* Rating and Reviews */}
          <div className="flex items-center mb-4 gap-3">
            <div className="flex text-yellow-300">
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
              <MdStarOutline />
            </div>
            <p className="text-gray-500">| 5 Customer Reviews</p>
          </div>

          <p className="text-gray-700 mb-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </p>

          {/* Size Selection */}
          <div className="mb-4">
            <p className="text-gray-700 font-semibold mb-2">Size</p>
            <div className="flex gap-4">
              <button className="bg-yellow-100 rounded w-[30px] h-[30px]">L</button>
              <button className="bg-slate-100 rounded w-[30px] h-[30px]">XL</button>
              <button className="bg-slate-100 rounded w-[30px] h-[30px]">XS</button>
            </div>
          </div>

          {/* Color Selection */}
          <p className="text-gray-700 font-semibold mb-2 pt-3">Color</p>
          <div className="mb-6 flex gap-3">
            <div className="bg-purple-500 rounded-full w-[30px] h-[30px]"></div>
            <div className="bg-black rounded-full w-[30px] h-[30px]"></div>
            <div className="bg-amber-700 rounded-full w-[30px] h-[30px]"></div>
          </div>

          {/* Add to Cart Button */}
          <div className="mb-6">
            <button className="border-black border-2 w-full sm:w-[215px] h-[64px] rounded-[15px] text-black py-4">
              Add To Cart
            </button>
          </div>

          {/* SKU, Category, Tags, and Share */}
          <hr className="text-gray-600 border-[2px]" />
          <div className="text-gray-400">
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-medium">SKU</span>
                <span>SS001</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Category</span>
                <span>Sofas</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Tags</span>
                <span>Sofa, Chair, Home, Shop</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">Share</span>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition text-2xl">
                    <FaFacebook />
                  </a>
                  <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-700 transition text-2xl">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400 transition text-2xl">
                    <FaTwitter />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Description and Additional Info Section */}
      <hr className="text-gray-600 border-[2px]" />
      <div className="text-center pt-6">
        <div className="flex justify-center gap-4">
          <h1 className="text-black">Description</h1>
          <h2 className="text-gray-500">Additional Information</h2>
          <h2 className="text-gray-500">Reviews [5]</h2>
        </div>

        <p className="text-gray-500 pt-5 max-w-4xl mx-auto px-6">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-gray-500 pt-5 max-w-4xl mx-auto px-6">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced.
        </p>

        
        <div className="flex flex-wrap justify-center gap-4 pt-6">
  <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[45%] xl:w-[45%]">
    <Image
      src="/1.png"
      alt="Image 1"
      width={605}
      height={348}
      className="rounded-md w-full"
    />
  </div>
  <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[45%] xl:w-[45%]">
    <Image
      src="/2.png"
      alt="Image 2"
      width={605}
      height={348}
      className="rounded-md w-full"
    />
  </div>
</div>

      </div>

      {/* Related Products */}
      <div className="flex flex-wrap justify-between gap-4 pt-6">
        {/* Product Card 1 */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image src="/Trentonmodular1.png" alt="Trenton modular sofa" width={287} height={287} className="rounded-md" />
          <h3 className="text-lg font-medium mt-4">Trenton Modular Sofa</h3>
          <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image src="/Granitedining2.png" alt="Granite dining table with dining chair" width={287} height={287} className="rounded-md" />
          <h3 className="text-lg font-medium mt-4">Granite Dining Table with Chair</h3>
          <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image src="/Outdoorbartable andstool3.png" alt="Outdoor bar table and stool" width={287} height={287} className="rounded-md" />
          <h3 className="text-lg font-medium mt-4">Outdoor Bar Table and Stool</h3>
          <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
          <Image src="/Plainconsolewith teakmirror4.png" alt="Plain console with teak mirror" width={287} height={287} className="rounded-md" />
          <h3 className="text-lg font-medium mt-4">Plain Console with Teak Mirror</h3>
          <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
        </div>
      </div>

    </div>
  );
};

export default SingleProduct;
