"use client";
import { useState, useEffect } from "react";
import menuData from "../data/menu.json";
import drinksMenu from "../../src/drinksMenu.json";
import dessertsMenu from "../../src/dessertsMenu.json";
import { useSearchParams } from "next/navigation";
// Removed unused HTMLFlipBook import
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function Menu() {
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
  const categories = menuData.menu.categories;
  const searchParams = useSearchParams();
  const sectionType = searchParams.get("type");

  // Drinks section rendering
  if (sectionType === "drinks") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6EBDA] via-white to-[#F4AE26] flex flex-col items-center justify-start"
     >
        <div className="w-full relative h-[350px] md:h-[500px] flex items-center justify-center mb-12"  >
          <div
            className="absolute inset-0 rounded-b-3xl flex flex-col items-center justify-center"
            style={{
              backgroundImage: "linear-gradient(rgba(44,21,5,0.7), rgba(244,174,38,0.3)), url('/svg/menu.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#F4AE26] drop-shadow-lg mb-4 tracking-wide">Drinks Menu</h1>
            <div className="w-24 h-2 bg-[#2F2105] rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl font-semibold text-white max-w-2xl text-center px-4 drop-shadow">Explore our selection of hot, cold, and specialty beverages.</p>
          </div>
        </div>
        <div className="rounded-xl p-12 w-full min-h-20 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {drinksMenu.map((category) => (
              <div key={category.category} className="bg-amber-50 rounded-lg shadow p-6 border border-amber-200 flex flex-col" data-aos="flip-left">
                <h2 className="text-2xl font-bold text-amber-800 mb-2 border-b border-amber-300 pb-1">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={item.name + idx} className="border-b border-gray-100 pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 pr-4">
                          <h3 className="font-semibold text-gray-800 text-base leading-tight">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                              {item.description.length > 80
                                ? `${item.description.substring(0, 80)}...`
                                : item.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right min-w-fit">
                          {item.price && (
                            <span className="font-bold text-amber-700 text-sm">₹{item.price}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desserts section rendering
  if (sectionType === "desserts") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F6EBDA] via-white to-[#F4AE26] flex flex-col items-center justify-start">
        <div className="w-full relative h-[350px] md:h-[500px] flex items-center justify-center mb-12">
          <div
            className="absolute inset-0 rounded-b-3xl flex flex-col items-center justify-center"
            style={{
              backgroundImage: "linear-gradient(rgba(44,21,5,0.7), rgba(244,174,38,0.3)), url('/svg/menu.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#F4AE26] drop-shadow-lg mb-4 tracking-wide">Desserts Menu</h1>
            <div className="w-24 h-2 bg-[#2F2105] rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl font-semibold text-white max-w-2xl text-center px-4 drop-shadow">Indulge in our delicious dessert selection.</p>
          </div>
        </div>
        <div className="rounded-xl p-12 w-full min-h-20 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {dessertsMenu.map((category) => (
              <div key={category.category} className="bg-amber-50 rounded-lg shadow p-6 border border-amber-200 flex flex-col" data-aos="flip-left">
                <h2 className="text-2xl font-bold text-amber-800 mb-2 border-b border-amber-300 pb-1">
                  {category.category}
                </h2>
                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <div key={item.name + idx} className="border-b border-gray-100 pb-2">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 pr-4">
                          <h3 className="font-semibold text-gray-800 text-base leading-tight">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                              {item.description.length > 80
                                ? `${item.description.substring(0, 80)}...`
                                : item.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right min-w-fit">
                          {item.price && (
                            <span className="font-bold text-amber-700 text-sm">₹{item.price}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6EBDA] via-white to-[#F4AE26] flex flex-col items-center justify-start">
      {/* Hero Section */}
      <div className="w-full relative h-[350px] md:h-[500px] flex items-center justify-center mb-12" data-aos="fade-up">
        <div
          className="absolute inset-0 rounded-b-3xl flex flex-col items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(rgba(44,21,5,0.7), rgba(244,174,38,0.3)), url('/svg/menu.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#F4AE26] drop-shadow-lg mb-4 tracking-wide">Our Menu</h1>
          <div className="w-24 h-2 bg-[#2F2105] rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl font-semibold text-white max-w-2xl text-center px-4 drop-shadow">Discover our European & Italian specialties, crafted for every taste.</p>
        </div>
      </div>
      <div className="rounded-xl p-12 w-full min-h-20 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <div key={category.id} className="bg-amber-50 rounded-lg shadow p-6 border border-amber-200 flex flex-col" data-aos="flip-left">
              <h2 className="text-2xl font-bold text-amber-800 mb-2 border-b border-amber-300 pb-1">
                {category.name}
              </h2>
              <p className="text-sm text-gray-600 italic mb-4">{category.description}</p>
              <div className="space-y-3">
                {category.items.map((item: any) => (
                  <div key={item.id} className="border-b border-gray-100 pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-gray-800 text-base leading-tight">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {item.description.length > 80
                            ? `${item.description.substring(0, 80)}...`
                            : item.description}
                        </p>
                        {item.addOns && item.addOns.length > 0 && (
                          <p className="text-xs text-amber-600 mt-1">
                            Add-ons: {item.addOns.join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="text-right min-w-fit">
                        {item.price && (
                          <span className="font-bold text-amber-700 text-sm">₹{item.price}</span>
                        )}
                        {item.priceWithChicken && (
                          <div className="text-xs text-gray-600">₹{item.priceWithChicken}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}