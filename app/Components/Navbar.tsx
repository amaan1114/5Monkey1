"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let menuTimeout: NodeJS.Timeout | null = null;
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuDropdownOpen, setIsMobileMenuDropdownOpen] = useState(false);
  const [isDesktopMenuDropdownOpen, setIsDesktopMenuDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileMenuDropdownOpen(false); // Always close dropdown when toggling main menu
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
    setIsMenuOpen(false); // Close mobile menu when link is clicked
  };

  // Helper to map pathname to active link
  const getActiveLink = () => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/about-us")) return "About Us";
    if (pathname.startsWith("/menu")) return "Menu";
    if (pathname.startsWith("/gallery")) return "Gallery";
    if (pathname.startsWith("/contact")) return "Contact";
    return "";
  };

  // Sync activeLink with route
  React.useEffect(() => {
    setActiveLink(getActiveLink());
  }, [pathname]);

  return (
    <div className="flex flex-row justify-between items-center  w-screen py-2 bg-[#F6EBDA] z-50 px-4">
      {/* Logo */}
      <Link href='/'>
        <Image src='./logo.webp' alt="logo"
          unoptimized
          width={150}
          height={50}
          className="m-4 mb-0"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-5 lg:gap-10 flex-row justify-center items-center text-lg">
        <Link 
          href='/' 
          onClick={() => handleLinkClick("Home")}
          className={`transition-colors ${activeLink === "Home" ? "text-[#FF902B]" : "hover:text-amber-600"}`}
        >
          Home
        </Link>
        <Link 
          href='/about-us' 
          onClick={() => handleLinkClick("About Us")}
          className={`transition-colors ${activeLink === "About Us" ? "text-[#FF902B]" : "hover:text-amber-600"}`}
        >
          About Us
        </Link>
        {/* Menu Dropdown with Arrow for Desktop */}
        <div
          className="relative inline-block"
          onMouseEnter={() => {
            if (menuTimeout) clearTimeout(menuTimeout);
            setIsDesktopMenuDropdownOpen(true);
          }}
          onMouseLeave={() => {
            menuTimeout = setTimeout(() => setIsDesktopMenuDropdownOpen(false), 500);
          }}
        >
          <button
            className={`cursor-pointer flex items-center transition-colors ${activeLink === "Menu" ? "text-[#FF902B]" : "hover:text-amber-600"}`}
            onClick={() => {
              setIsDesktopMenuDropdownOpen((open) => !open);
              window.location.href = "/menu";
            }}
            type="button"
          >
            Menu
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {isDesktopMenuDropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
              <Link href="/menu?type=drinks" className="block px-4 py-2 text-amber-900 hover:bg-amber-100">Drinks</Link>
              <Link href="/menu?type=desserts" className="block px-4 py-2 text-amber-900 hover:bg-amber-100">Desserts</Link>
            </div>
          )}
        </div>
          <Link 
            href='/gallery' 
            onClick={() => handleLinkClick("Gallery")}
            className={`transition-colors ${activeLink === "Gallery" ? "text-[#FF902B]" : "hover:text-amber-600"}`}
          >
            Gallery
          </Link>
        <Link 
          href='/contact' 
          onClick={() => handleLinkClick("Contact")}
          className={`transition-colors ${activeLink === "Contact" ? "text-[#FF902B]" : "hover:text-amber-600"}`}
        >
          Contact
        </Link>
      </div>

      {/* Desktop Reservation Button */}
      <button className="hidden md:block bg-yellow-500 text-white font-bold cursor-pointer px-4 py-2 rounded-4xl hover:bg-yellow-600 transition-colors">
        Reservation
      </button>

      {/* Mobile Burger Button */}
      <button 
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 mt-4"
      >
        <span className={`bg-amber-900 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`bg-amber-900 block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`bg-amber-900 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
  <div className={`md:hidden fixed top-15 left-0 w-full bg-[#F6EBDA] shadow-lg z-100 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <Link 
            href='/' 
            onClick={() => handleLinkClick("Home")}
            className={`text-lg font-medium transition-colors ${activeLink === "Home" ? "text-[#FF902B]" : "text-amber-900 hover:text-amber-600"}`}
          >
            Home
          </Link>
          <Link 
            href='/about-us' 
            onClick={() => handleLinkClick("About Us")}
            className={`text-lg font-medium transition-colors ${activeLink === "About Us" ? "text-[#FF902B]" : "text-amber-900 hover:text-amber-600"}`}
          >
            About Us
          </Link>
          {/* Menu with dropdown for mobile */}
          <div className="relative">
            <button
              className={`text-lg font-medium transition-colors flex items-center w-full ${activeLink === "Menu" ? "text-[#FF902B]" : "text-amber-900 hover:text-amber-600"}`}
              onClick={() => {
                setIsMobileMenuDropdownOpen((open) => !open);
              }}
              type="button"
            >
              Menu
              <span className="ml-1 cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </span>
            </button>
            {/* Dropdown for Drinks and Desserts */}
            {isMobileMenuDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
                <Link href="/menu?type=drinks" className="block px-4 py-2 text-amber-900 hover:bg-amber-100" onClick={() => setIsMobileMenuDropdownOpen(false)}>Drinks</Link>
                <Link href="/menu?type=desserts" className="block px-4 py-2 text-amber-900 hover:bg-amber-100" onClick={() => setIsMobileMenuDropdownOpen(false)}>Desserts</Link>
              </div>
            )}
          </div>
          <Link 
            href='/gallery' 
            onClick={() => handleLinkClick("Gallery")}
            className={`text-lg font-medium transition-colors ${activeLink === "Gallery" ? "text-[#FF902B]" : "text-amber-900 hover:text-amber-600"}`}
          >
            Gallery
          </Link>
          <Link 
            href='/contact' 
            onClick={() => handleLinkClick("Contact")}
            className={`text-lg font-medium transition-colors ${activeLink === "Contact" ? "text-[#FF902B]" : "text-amber-900 hover:text-amber-600"}`}
          >
            Contact
          </Link>
          <button className="bg-yellow-500 text-white font-bold cursor-pointer px-4 py-2 rounded-4xl hover:bg-yellow-600 transition-colors w-fit">
            Reservation
          </button>
        </div>
      </div>
    </div>
  )
}