import Image from "next/image";
import singleseater1 from "@/../public/singleseater1.png";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Main Image Section */}
      {/* <div className="flex bg-[#FBEBB5] relative px-4">
        <div className="container text-black relative">
          <div className="absolute left-[50%] transform -translate-x-1/2 top-[40%] text-xl text-center sm:text-3xl md:text-4xl">
            Rocket Single Seater
          </div>
          <button className="absolute left-[50%] transform -translate-x-1/2 top-[70%] sm:top-[75%] text-lg sm:text-xl cursor-pointer hover:text-gray-500 underline">
            Shop Now
          </button>
        </div>
        <div className="container px-4">
          <Image 
            src={singleseater1}
            alt="Single Seater"
            width={853}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </div> */}
      <div className="flex bg-[#FBEBB5] relative px-4 sm:px-6 md:px-8">
  <div className="container text-black relative flex-auto">
    <div className="absolute left-[50%] transform -translate-x-1/2 top-[30%] sm:top-[35%] md:top-[40%] text-xl sm:text-2xl md:text-4xl text-center">
      Rocket Single Seater
    </div>
    <button className="absolute left-[50%] transform -translate-x-1/2 top-[55%] sm:top-[60%] md:top-[70%] text-lg sm:text-xl cursor-pointer hover:text-gray-500 underline">
      Shop Now
    </button>
  </div>
  <div className="container px-4 sm:px-6 md:px-8">
    <Image 
      src={singleseater1}
      alt="Single Seater"
      width={853}
      height={1000}
      className="w-full h-auto"
    />
  </div>
</div>


      {/* Side Table and Sofas Section */}
      <div className="flex flex-wrap gap-4 p-4 bg-pink-50 items-center justify-center">
        {/* Side Table */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/sidetable1.png"
            alt="Side Table"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <h2 className="mt-4">Side Table</h2>
          <h3 className="underline cursor-pointer hover:text-gray-500">View More</h3>
        </div>

        {/* Sofas */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/Cloudsofathree.png"
            alt="Sofa"
            width={500}
            height={300}
            className="w-full h-auto"
          />
          <h2 className="mt-4">Sofa</h2>
          <h3 className="underline cursor-pointer hover:text-gray-500">View More</h3>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex flex-wrap justify-between gap-4 p-4">
        {/* Product Card 1 */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/Trentonmodular1.png"
            alt="Trenton Modular Sofa"
            width={287}
            height={287}
            className="rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Trenton Modular Sofa</h3>
          <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
        </div>

        {/* Product Card 2 */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/Granitedining2.png"
            alt="Granite Dining Table"
            width={287}
            height={287}
            className="rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Granite Dining Table</h3>
          <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
        </div>

        {/* Product Card 3 */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/Outdoorbartable andstool3.png"
            alt="Outdoor Bar Table"
            width={287}
            height={287}
            className="rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Outdoor Bar Table</h3>
          <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
        </div>

        {/* Product Card 4 */}
        <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
          <Image
            src="/Plainconsolewith teakmirror4.png"
            alt="Plain Console with Teak Mirror"
            width={287}
            height={287}
            className="rounded-md"
          />
          <h3 className="text-lg font-medium mt-4">Plain Console with Teak Mirror</h3>
          <h3 className="text-xl font-bold text-gray-700 mt-2">Rs. 25,000.00</h3>
        </div>
      </div>

      <center>
        <h1 className="w-[104px] underline h-[30px] pt-12 pb-12 cursor-pointer hover:text-blue-500">
          View More
        </h1>
      </center>

      {/* New Arrivals Section */}
      <div className="bg-pink-200 flex flex-wrap items-center justify-between p-4 sm:p-8">
        <div className="container">
          <Image 
            src="/Asgaard sofa 1.png"  
            alt="Asgaard Sofa" 
            width={983}  
            height={799} 
            className="w-full h-auto"
          />
        </div>
        <div className="container pt-12 pl-4 text-center sm:text-left">
          <h3 className="w-[149px] text-black text-xl sm:text-2xl">New Arrivals</h3>
          <h1 className="font-bold text-xl sm:text-3xl text-black">Asgaard Sofa</h1>
          <button className="border-black border-2 text-black px-4 py-2 mt-4 cursor-pointer hover:text-blue-500">
            Order Now
          </button>
        </div>
      </div>

      {/* Blogs Section */}
      <div>
        <center>
          <h2 className="w-[311px] font-bold text-black pt-10 text-2xl sm:text-3xl">Our Blogs</h2>
        </center>
        <center>
          <h4 className="w-[773px] text-black font-normal pt-4 pb-5 text-sm sm:text-lg">
            Find a bright ideal to suit your taste with our great selection
          </h4>
        </center>
        <div className="flex flex-wrap items-center justify-center gap-4 p-4">
          {/* Blog 1 */}
          <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl items-center justify-center w-full sm:w-1/2 md:w-1/4">
            <Image 
              src="/Rectangle 13.png"  
              alt="Blog 1"
              width={287}  
              height={287} 
            />
            <div className="pl-6">
              <h3 className="text-lg font-semibold">Going all-in with millennial design</h3>
              <h3 className="text-sm underline font-semibold cursor-pointer hover:text-blue-500">Read More</h3>
              <div className="flex items-center text-gray-600 space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <FaClock />
                  <span>5 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SlCalender />
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl items-center justify-center w-full sm:w-1/2 md:w-1/4">
            <Image 
              src="/Rectangle 14.png"  
              alt="Blog 2"
              width={287}  
              height={287} 
            />
            <div className="pl-6">
              <h3 className="text-lg font-semibold">Going all-in with millennial design</h3>
              <h3 className="text-sm underline font-semibold cursor-pointer hover:text-blue-500">Read More</h3>
              <div className="flex items-center text-gray-600 space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <FaClock />
                  <span>5 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SlCalender />
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-xl items-center justify-center w-full sm:w-1/2 md:w-1/4">
            <Image 
              src="/Rectangle 15.png"  
              alt="Blog 3"
              width={287}  
              height={287} 
            />
            <div className="pl-6">
              <h3 className="text-lg font-semibold">Going all-in with millennial design</h3>
              <h3 className="text-sm underline font-semibold cursor-pointer hover:text-blue-500">Read More</h3>
              <div className="flex items-center text-gray-600 space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <FaClock />
                  <span>5 min</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SlCalender />
                  <span>12th Oct 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="relative w-full">
        <Image 
          src="/Rectangle 17.png"  
          alt="Instagram" 
          width={1440}  
          height={450} 
          className="w-full bg-opacity-15"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center space-y-4">
          <div>
            <h1 className="text-4xl font-bold text-black">Our Instagram</h1>
            <p className="text-gray-600">Follow our store on Instagram</p>
            <button className="px-6 py-3 bg-white text-black font-medium rounded-full shadow-lg hover:shadow-xl transition-shadow">
              Follow Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

