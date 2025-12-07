"use client";
import Image from "next/image"
import { useState } from "react";
import Link from "next/link";

export default function Navbar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
    const [isMobileMenuDropdownOpen, setIsMobileMenuDropdownOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuHover = (isOpen: boolean) => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }

        if (isOpen) {
            setIsMenuDropdownOpen(true);
        } else {
            // Add a delay before hiding the dropdown
            const timeout = setTimeout(() => {
                setIsMenuDropdownOpen(false);
            }, 200);
            setHoverTimeout(timeout);
        }
    };

    const toggleMobileMenuDropdown = () => {
        setIsMobileMenuDropdownOpen(!isMobileMenuDropdownOpen);
    };

    const closeAllMenus = () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
        setIsMobileMenuOpen(false);
        setIsMenuDropdownOpen(false);
        setIsMobileMenuDropdownOpen(false);
    };

    return(
    <>
    <div className="flex flex-row justify-between items-center w-screen py-4 md:py-6 lg:py-15 z-50 px-4 md:px-8 lg:px-15 relative">
        <Image src="./svg/logo.svg" alt="logo"
        unoptimized
        width={120}
        height={40}
        className="w-24 h-8 md:w-32 md:h-10 lg:w-36 lg:h-12 m-2 md:m-4 mb-0"
        />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-5 lg:gap-10 flex-row justify-center items-center text-lg relative">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <Link href="/#OurStory" className="hover:text-amber-600 transition-colors">Our Story</Link>
            
            {/* Menu Dropdown */}
            <div 
                className="relative"
                onMouseEnter={() => handleMenuHover(true)}
                onMouseLeave={() => handleMenuHover(false)}
            >
                <Link 
                    href="/menu" 
                    className="hover:text-amber-600 transition-colors flex items-center gap-1"
                >
                    Menu
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </Link>
                
                {/* Dropdown Menu */}
                {isMenuDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <Link 
                            href="/menu/drinks" 
                            className="block px-4 py-2 text-gray-800 hover:bg-[#F6EBDA] hover:text-[#7E4300] transition-colors"
                            onClick={closeAllMenus}
                        >
                            Drinks
                        </Link>
                        <Link 
                            href="/menu/desserts" 
                            className="block px-4 py-2 text-gray-800 hover:bg-[#F6EBDA] hover:text-[#7E4300] transition-colors"
                            onClick={closeAllMenus}
                        >
                            Desserts
                        </Link>
                    </div>
                )}
            </div>
            
            <Link href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
            <button className="bg-[#7E4300] text-white px-5 py-2 rounded-4xl cursor-pointer" onClick={()=>{window.location.href='/contact'}}>Book a Table</button>
        </div>

        {/* Tablet Navigation */}
        <div className="hidden md:flex lg:hidden gap-3 flex-row justify-center items-center text-base relative">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <Link href="/#OurStory" className="hover:text-amber-600 transition-colors">Story</Link>
            
            {/* Menu Dropdown for Tablet */}
            <div 
                className="relative"
                onMouseEnter={() => handleMenuHover(true)}
                onMouseLeave={() => handleMenuHover(false)}
            >
                <Link 
                    href="/menu" 
                    className="hover:text-amber-600 transition-colors flex items-center gap-1"
                >
                    Menu
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </Link>
                
                {/* Dropdown Menu for Tablet */}
                {isMenuDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        <Link 
                            href="/menu/drinks" 
                            className="block px-3 py-2 text-sm text-gray-800 hover:bg-[#F6EBDA] hover:text-[#7E4300] transition-colors"
                            onClick={closeAllMenus}
                        >
                            Drinks
                        </Link>
                        <Link 
                            href="/menu/desserts" 
                            className="block px-3 py-2 text-sm text-gray-800 hover:bg-[#F6EBDA] hover:text-[#7E4300] transition-colors"
                            onClick={closeAllMenus}
                        >
                            Desserts
                        </Link>
                    </div>
                )}
            </div>
            
            <Link href="/gallery" className="hover:text-amber-600 transition-colors">Gallery</Link>
            <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
            <button className="bg-[#7E4300] text-white px-3 py-2 rounded-3xl cursor-pointer text-sm" onClick={()=>{window.location.href='/contact'}}>Book Table</button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
        >
            <span className={`bg-[#7E4300] block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`bg-[#7E4300] block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bg-[#7E4300] block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-[#F6EBDA] shadow-lg z-50">
                <div className="flex flex-col p-6 space-y-4">
                    <Link href="/" className="text-lg font-medium text-[#7E4300] hover:text-amber-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/#OurStory" className="text-lg font-medium text-[#7E4300] hover:text-amber-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
                    
                    {/* Mobile Menu Dropdown */}
                    <div>
                        <button 
                            onClick={toggleMobileMenuDropdown}
                            className="text-lg font-medium text-[#7E4300] hover:text-amber-600 transition-colors flex items-center gap-2 w-full text-left"
                        >
                            Menu
                            <svg className={`w-4 h-4 transform transition-transform ${isMobileMenuDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        
                        {/* Mobile Menu Dropdown Items */}
                        {isMobileMenuDropdownOpen && (
                            <div className="mt-2 ml-4 space-y-2 border-l-2 border-[#7E4300] pl-4">
                                <Link href="/menu" className="block text-base font-medium text-[#7E4300] hover:text-amber-600 transition-colors" onClick={closeAllMenus}>Food Menu</Link>
                                <Link href="/menu/drinks" className="block text-base font-medium text-[#7E4300] hover:text-amber-600 transition-colors" onClick={closeAllMenus}>Drinks</Link>
                                <Link href="/menu/desserts" className="block text-base font-medium text-[#7E4300] hover:text-amber-600 transition-colors" onClick={closeAllMenus}>Desserts</Link>
                            </div>
                        )}
                    </div>
                    
                    <Link href="/gallery" className="text-lg font-medium text-[#7E4300] hover:text-amber-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                    <Link href="/contact" className="text-lg font-medium text-[#7E4300] hover:text-amber-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    <button className="bg-[#7E4300] text-white px-5 py-3 rounded-4xl cursor-pointer w-fit mt-2" onClick={() => setIsMobileMenuOpen(false)}>Book a Table</button>
                </div>
            </div>
        )}
    </div>
    </>
    )
}