'use client';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import { useState } from "react";
export default function Contact() {
      AOS.init();
      useEffect(() => {
           AOS.init({
             // Global settings:
             disable: false,
             startEvent: 'DOMContentLoaded',
             initClassName: 'aos-init',
             animatedClassName: 'aos-animate',
             useClassNames: false,
             disableMutationObserver: false,
             debounceDelay: 50,
             throttleDelay: 99,
             // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
             offset: 120,
             delay: 0,
             duration: 1000,
             easing: 'ease',
             once: false,
             mirror: false,
             anchorPlacement: 'top-bottom',
           });
         }, []);
         
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6EBDA] via-white to-[#F4AE26] flex flex-col items-center justify-start"
    data-aos="fade-up">
      {/* Hero Section */}
      <div className="w-full relative h-[350px] md:h-[500px] flex items-center justify-center mb-12">
        <div
          className="absolute inset-0 rounded-b-3xl flex flex-col items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(rgba(44,21,5,0.7), rgba(244,174,38,0.3)), url('/svg/menu.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#F4AE26] drop-shadow-lg mb-4 tracking-wide">Contact Us</h1>
          <div className="w-24 h-2 bg-[#2F2105] rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl font-semibold text-white max-w-2xl text-center px-4 drop-shadow">Booking and Payment Information</p>
        </div>
      </div>
      <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div className="bg-white rounded-xl shadow p-6 border border-amber-200 flex flex-col mb-6">
          <h2 className="text-2xl font-bold text-amber-800 mb-2">Booking and Payment Information</h2>
          <p className="text-gray-700 mb-4">Certainly elsewhere my do allowance at. The address farther six hearted hundred towards husband. Are securing off occasion remember daughter replying. Held that feel his see own yet. Strangers ye to he sometimes propriety. Saw met applauded favourite deficient engrossed concealed.</p>
          <p className="text-gray-700 mb-4">Certainly elsewhere my do allowance at. The address farther six hearted hundred towards husband. Are securing off occasion remember daughter replying. Held that feel his see own yet. Strangers ye to him sometimes propriety. Saw met applauded favourite deficient engrossed concealed.</p>
          <h2 className="text-xl font-bold text-amber-800 mt-6 mb-2">About Us</h2>
          <div className="text-gray-700 mb-2">
            <div>Monday-Friday</div>
            <div>11:00 am - 4:00 pm <span className="italic">(breakfast, lunch)</span></div>
            <div>4:00 pm – 11:00 pm <span className="italic">(dinner)</span></div>
            <div className="mt-2">Saturday-Sunday</div>
            <div>11:00 am - 4:00 pm <span className="italic">(breakfast, lunch)</span></div>
            <div>4:00 pm – 11:00 pm <span className="italic">(dinner)</span></div>
          </div>
          <div className="mt-4 font-semibold text-amber-700">Sector-15, SCO-150, Sonipat, Haryana</div>
        </div>
        <form className="bg-white rounded-xl shadow p-6 border border-amber-200 flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-amber-800 mb-2">Reserve your table</h2>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">First Name</label>
            <input type="text" placeholder="Enter Your First Name" className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Last Name</label>
            <input type="text" placeholder="Enter Your Last Name" className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="Email Address" className="border rounded px-3 py-2" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Phone no.</label>
            <input type="tel" placeholder="Phone Number" minLength={10} maxLength={10} className="border rounded px-3 py-2" />
          </div>
          <button type="submit" className="bg-yellow-500 text-white font-bold cursor-pointer px-4 py-2 rounded-4xl hover:bg-yellow-600 transition-colors mt-4">Reserve</button>
        </form>
      </div>
    </div>
  );
}