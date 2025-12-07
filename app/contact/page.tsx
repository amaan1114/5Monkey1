"use client";
import Image from "next/image"
import { motion } from "framer-motion"

export default function ContactPage(){
    return(
        <>
            <motion.div 
                className="min-h-screen relative p-8 overflow-x-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1 
                    className="text-[#7E4300] text-center text-3xl md:text-5xl lg:text-6xl fontchange mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Contact Us
                </motion.h1>
                
                {/* Contact Form */}
                <motion.div 
                    className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-10 relative z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-center text-black mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Reserve Your Table
                    </motion.h2>
                    
                    <form className="space-y-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-semibold text-[#7E4300] mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7E4300] focus:outline-none transition-colors"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-semibold text-[#7E4300] mb-2">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7E4300] focus:outline-none transition-colors"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-[#7E4300] mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7E4300] focus:outline-none transition-colors"
                                placeholder="Enter your email address"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-[#7E4300] mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7E4300] focus:outline-none transition-colors"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Reservation Details */}
                        <div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-semibold text-[#7E4300] mb-2">
                                    Reservation Date *
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#7E4300] focus:outline-none transition-colors"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#7E4300] text-white font-bold py-4 px-6 rounded-lg cursor-pointer hover:bg-[#6B3600] transition-colors duration-300 text-lg"
                        >
                            Reserve Table
                        </button>
                    </form>
                </motion.div>

                {/* Restaurant Information */}
                <motion.div 
                    className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {/* About Us */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold text-[#7E4300] mb-6">About Us</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Experience authentic European & Italian flavors in a cozy, vibrant setting. 
                            5Monkey Café brings you a diverse range of flavors that promise to satisfy every palate, 
                            from handcrafted pasta and wood-fired pizzas to fresh salads and decadent desserts.
                        </p>
                    </div>

                    {/* Operating Hours */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold text-[#7E4300] mb-6">Operating Hours</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-black mb-2">Monday - Friday</h4>
                                <p className="text-gray-700 text-sm">11:00 AM - 4:00 PM <span className="text-[#7E4300]">(Breakfast, Lunch)</span></p>
                                <p className="text-gray-700 text-sm">4:00 PM - 11:00 PM <span className="text-[#7E4300]">(Dinner)</span></p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-black mb-2">Saturday - Sunday</h4>
                                <p className="text-gray-700 text-sm">11:00 AM - 4:00 PM <span className="text-[#7E4300]">(Breakfast, Lunch)</span></p>
                                <p className="text-gray-700 text-sm">4:00 PM - 11:00 PM <span className="text-[#7E4300]">(Dinner)</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:col-span-2">
                        <h3 className="text-2xl font-bold text-[#7E4300] mb-6 text-center">Visit Us</h3>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7E4300] rounded-full mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-black mb-2">Our Location</h4>
                            <p className="text-lg text-gray-700 font-medium">Sector-15, SCO-150</p>
                            <p className="text-lg text-gray-700 font-medium">Sonipat, Haryana</p>
                        </div>
                    </div>
                </motion.div>

                {/* Background Decorative Elements */}
                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="hidden md:block absolute -top-10 -left-30 w-70 h-90 -z-1 rotate-130 rounded-4xl opacity-60"
                />
                <Image
                    src="/svg/Stem.svg"
                    alt="Design Stem"
                    width={500}
                    height={300}
                    className="hidden md:block absolute top-100 -left-30 w-70 -z-1 h-90 rotate-0 rounded-4xl opacity-60"
                />
                <Image
                    src="/svg/PinkLeaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="hidden md:block absolute top-70 -left-30 w-90 -z-1 h-90 rotate-0 rounded-4xl opacity-60"
                />
                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="hidden md:block absolute top-40 w-70 h-90 -z-1 -right-40 rotate-45 rounded-4xl opacity-60"
                />
                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="hidden md:block absolute top-100 w-70 h-90 -z-1 -right-40 rotate-300 rounded-4xl opacity-60"
                />
                <Image
                    src="/svg/Stem.svg"
                    alt="Design Stem"
                    width={500}
                    height={300}
                    className="hidden md:block absolute top-80 w-90 h-90 -z-1 -right-30 rotate-180 rounded-4xl opacity-60"
                />
            </motion.div>
        </>
    )
}