"use client"
import React from 'react'
import Image from 'next/image'
import { FaClock, FaPhoneAlt } from 'react-icons/fa';

import { MdLocationOn } from 'react-icons/md';

const contact = () => {
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
      
          
          <h2 className="text-2xl font-bold text-black mb-2">CONTACT</h2>
      
          
          <span className="text-base text-gray-700">
            Home &gt; Conntact
          </span>
        </div>
      </div>
    
    <div className="flex flex-col items-center py-12 px-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
      <p className="text-center text-gray-600 mb-8">
        For More Information About Our Products & Services, Please Feel Free To Drop Us
        An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Contact Info */}
        <div className="space-y-6 grid-cols-1">
          <div className="flex items-start space-x-4">
          <MdLocationOn />
            <p className="text-gray-700">
              <strong>Address:</strong>
              <br />
              230 5th St. Avenue, New York NY10010, United States
            </p>
          </div>
          <div className="flex items-start space-x-4">
          <FaPhoneAlt />

            <p className="text-gray-700">
              <strong>Phone:</strong>
              <br />
              Mobile: (+84) 546-6789 <br />
              Hotline: (+84) 456-8798
            </p>
          </div>
          <div className="flex items-start space-x-4">
          <FaClock />
            <p className="text-gray-700">
              <strong>Working Time:</strong>
              <br />
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 20:00
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid-cols-1">
        <form
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="This is optional"
            />
          </div>
          <div>
            <label  className="block text-gray-700 mb-1 ">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Hi! I'd like to ask about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default contact;
