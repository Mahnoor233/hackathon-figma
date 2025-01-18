"use client"
import Link from 'next/link'
import Image from 'next/image'

import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdStarOutline } from 'react-icons/md';



const singleproduct = () => {
  return (

    <div>


      <nav className="flex  h-6 text-gray-500 gap-7 pl-[120px] pt-5 ">
        <Link href="/" className="hover:text-gray-700">Home</Link>
        <span className="text-black"> &gt;</span>
        <Link href="/shop" className="hover:text-gray-700">Shop</Link>
        <span className="text-black"> &gt;</span>
        <span className="text-black">|</span>
        <span className="text-gray-700 font-semibold">Asgaard sofa</span>
      </nav>

      <div className="flex pt-11">
        <div className='flex'>
        <div className="grid grid-cols-1 gap-y-2 pt-2 container h-[500px] w-[100px] p-4">
  <div className="row-span-1">
    <Image
      src="/13.png"
      alt="Image 1"
      width={76}
      height={80}
      className="bg-yellow-100"
    />
  </div>
  <div className="row-span-1">
    <Image
      src="/Outdoor sofa set 1.png"
      alt="Image 2"
      width={76}
      height={80}
      className="bg-yellow-100"
    />
  </div>
  <div className="row-span-1">
    <Image
      src="/Stuart sofa 1.png"
      alt="Image 3"
      width={76}
      height={80}
      className="bg-yellow-100"
    />
  </div>
  <div className="row-span-1">
    <Image
      src="/Maya sofa three seater (1) 1.png"
      alt="Image 4"
      width={76}
      height={80}
      className="bg-yellow-100"
    />
  </div>
</div>

      
          <div className="  pt-3 w-[323px] h-[500px] radius-[10px] bg-yellow-100">
            <Image
              src="/Asgaard sofa 1.png"
              alt="1"
              width={481}
              height={391}
              className="pt-11"
            />
          </div>

        </div>

        <div className="container p-6 flex-1">

          <h1 className="text-3xl font-bold mb-2">Asgaard sofa</h1>
          <p className="text-xl text-gray-600 mb-4">Rs. 250,000.00</p>
          <div className="flex items-center mb-4 gap-3">
            <div className="flex bg-white text-yellow-300">
              <MdStarOutline /> 
              <MdStarOutline /> 
              <MdStarOutline /> 
              <MdStarOutline /> 
              <MdStarOutline />

            </div>
            <p className="text-gray-500">| 5 Customer Review</p>
          </div>
          <p className="text-gray-700 mb-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
            highs for a sound.
          </p>
          <div className="mb-4">
            <p className="text-gray-700 font-semibold mb-2">Size</p>

            <div className="flex gap-4">
              <button className="bg-yellow-100 rounded w-[30px] h-[30px]">L</button>
              <button className="bg-slate-100 rounded w-[30px] h-[30px]">XL</button>
              <button className="bg-slate-100 rounded w-[30px] h-[30px]">XS</button>
            </div>
          </div>

          <p className="text-gray-700 font-semibold mb-2 pt-3">Color</p>
          <div className="mb-6 flex gap-3">
            <div className="bg-purple-500 rounded-[50px] w-[30px] h-[30px] top-[614px] left-735p"></div>
            <div className="bg-black rounded-[50px] w-[30px] h-[30px] top-[614px] left-735p"></div>
            <div className="bg-amber-700 rounded-[50px] w-[30px] h-[30px] top-[614px] left-735p"></div>

          </div>
          <div className="flex items-center mb-6">

            <button className="border-black border-solid w-[215px] h-[64px] top-[676px] left-[876px] border-[1px] rounded-[15px] text-black   pt-4 ">

              Add To Cart
            </button>
          </div>





          <hr className="text-gray-600 border-[2px] pl-2" />
          <div className="text-gray-400 max-w-lg h-auto">
  <div className="p-6 text-gray-600">
    <ul className="space-y-4">
      {/* SKU */}
      <li className="flex justify-between">
        <span className="font-medium">SKU</span>
        <span>SS001</span>
      </li>

      {/* Category */}
      <li className="flex justify-between">
        <span className="font-medium">Category</span>
        <span>Sofas</span>
      </li>

      {/* Tags */}
      <li className="flex justify-between">
        <span className="font-medium">Tags</span>
        <span>Sofa, Chair, Home, Shop</span>
      </li>

      {/* Share */}
      <li className="flex justify-between items-center">
        <span className="font-medium">Share</span>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-600 hover:text-blue-600 transition text-2xl"
            aria-label="Share on Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-600 hover:text-blue-700 transition text-2xl"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-600 hover:text-blue-400 transition text-2xl"
            aria-label="Share on Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </li>
    </ul>
  </div>
</div>


        </div>
      </div>
      <hr className="text-gray-600 border-[2px] pl-2" />
      <div className="justify-center items-center">
        <div className="flex justify-center items-center pt-4 gap-4">
          <h1 className="text-black">Description</h1>
          <h2 className="text-gray-500">Additional Information</h2>
          <h2 className="text-gray-500">Reviews [5]</h2>
        </div>
        <p className="text-gray-500 pt-5 pl-24 pr-24">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p className="text-gray-500 pt-5 pl-24 pr-24" >Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        <div className="flex pt-3">
          <div className="container pl-7 top-[1362px] left-[734px] ">
            <Image
              src="/1.png"
              alt="1"
              width={605}
              height={348}
              className="bg-pink-100 gap-4 h-full"
            />
          </div>
          <div className="container  pr-7  top-[1362px] left-[734px] ">
            <Image
              src="/2.png"
              alt="1"
              width={605}
              height={348}
              className="bg-pink-100 h-full "
            />

          </div>
        </div>
      </div>
     
<div className="flex flex-wrap justify-between gap-4 pl-2 pr-2 pt-4 pb-3">
  {/* Product Card 1 */}
  <div className="flex flex-col items-center p-4 border border-gray-200 round-lg shadow-md hover:shadow-xl">
    <Image
      src="/Trentonmodular1.png"
      alt="Trenton modular sofa"
      width={287}
      height={287}
      className="rounded-md"
    />
    <h3 className="text-lg font-medium mt-4">Trenton Modular Sofa</h3>
    <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
  </div>

  {/* Product Card 2 */}
  <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Granitedining2.png"
      alt="Granite dining table with dining chair"
      width={287}
      height={287}
      className="rounded-md"
    />
    <h3 className="text-lg font-medium mt-4">Granite Dining Table with Chair</h3>
    <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
  </div>

  {/* Product Card 3 */}
  <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Outdoorbartable andstool3.png"
      alt="Outdoor bar table and stool"
      width={287}
      height={287}
      className="rounded-md"
    />
    <h3 className="text-lg font-medium mt-4">Outdoor Bar Table and Stool</h3>
    <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
  </div>

  {/* Product Card 4 */}
  <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
    <Image
      src="/Plainconsolewith teakmirror4.png"
      alt="Plain console with teak mirror"
      width={287}
      height={287}
      className="rounded-md"
    />
    <h3 className="text-lg font-medium mt-4">Plain Console with Teak Mirror</h3>
    <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
  </div>
</div>



</div>

  )
}


export default singleproduct;
