"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    
    const images = [
        { src: "./svg/g1.webp", alt: "Gallery Image 1" },
        { src: "./svg/g2.webp", alt: "Gallery Image 2" },
        { src: "./svg/g3.webp", alt: "Gallery Image 3" },
        { src: "./svg/g4.webp", alt: "Gallery Image 4" },
        { src: "./svg/g5.webp", alt: "Gallery Image 5" },
        { src: "./svg/g6.webp", alt: "Gallery Image 6" },
        { src: "./svg/g7.webp", alt: "Gallery Image 7" },
    ];

    const openModal = (index: number) => {
        setSelectedImage(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        }
    };

    return(
        <>
            <motion.div 
                className="min-h-screen relative p-8 overflow-x-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1 
                    className="text-[#7E4300] text-center text-6xl fontchange mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Gallery
                </motion.h1>
                
                {/* Grid container */}
                <motion.div 
                    className="grid grid-cols-4 grid-rows-3 gap-4 max-w-6xl mx-auto h-[600px] "
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* G1 - Large top left */}
                    <motion.div 
                        className="col-span-2 row-span-2 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" 
                        onClick={() => openModal(0)}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <img src="/svg/g1.webp" alt="Gallery Image 1" className="w-full h-full object-cover" />
                    </motion.div>
                    
                    {/* G2 - Medium top right */}
                    <motion.div 
                        className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" 
                        onClick={() => openModal(1)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <img src="/svg/g2.webp" alt="Gallery Image 2" className="w-full h-full object-cover" />
                    </motion.div>
                    
                    {/* G3 - Medium top far right */}
                    <motion.div 
                        className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" 
                        onClick={() => openModal(2)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <img src="/svg/g3.webp" alt="Gallery Image 3" className="w-full h-full object-cover" />
                    </motion.div>
                    
                    {/* G4 - Medium middle right */}
                    <motion.div 
                        className="col-span-2 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" 
                        onClick={() => openModal(3)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <img src="/svg/g4.webp" alt="Gallery Image 4" className="w-full h-full object-cover" />
                    </motion.div>
                    
                    {/* G5 - Small bottom left */}
                    <motion.div 
                        className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" 
                        onClick={() => openModal(4)}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <img src="/svg/g5.webp" alt="Gallery Image 5" className="w-full h-full object-cover" />
                    </motion.div>
                    
                    {/* G6 - Medium bottom middle */}
                    <motion.div 
                        className="col-span-2 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" 
                        onClick={() => openModal(5)}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <img src="/svg/g6.webp" alt="Gallery Image 6" className="w-full h-full object-cover" />
                    </motion.div>
                    
                    {/* G7 - Small bottom right */}
                    <motion.div 
                        className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" 
                        onClick={() => openModal(6)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <img src="/svg/g7.webp" alt="Gallery Image 7" className="w-full h-full object-cover" />
                    </motion.div>
                </motion.div>

                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute -top-10 -left-30 w-70 h-90 -z-1 rotate-130 rounded-4xl"
                />
                 <Image
                    src="/svg/stem.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-100 -left-30 w-70 -z-1 h-90 rotate-0 rounded-4xl"
                />

                <Image
                    src="/svg/PinkLeaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-70 -left-30 w-90 h-90 -z-1 rotate-0 rounded-4xl"
                />

                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-40 w-70 h-90 -z-1 -right-40 rotate-45 rounded-4xl"
                />

                <Image
                    src="/svg/Leaf.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-100 w-70 h-90 -z-1 -right-40 rotate-300 rounded-4xl"
                />
                 <Image
                    src="/svg/stem.svg"
                    alt="Design Leaf"
                    width={500}
                    height={300}
                    className="absolute top-80 w-90 h-90 -z-1 -right-30 rotate-180 rounded-4xl"
                />
            </motion.div>

            {/* Modal Carousel */}
            {selectedImage !== null && (
                <motion.div 
                    className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" 
                    onClick={closeModal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div 
                        className="relative max-w-4xl max-h-4xl w-full h-full flex items-center justify-center p-4" 
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ duration: 0.4, type: "spring" }}
                    >
                        {/* Close button */}
                        <motion.button 
                            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
                            onClick={closeModal}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ×
                        </motion.button>
                        
                        {/* Previous button */}
                        <motion.button 
                            className="absolute left-4 text-white text-4xl hover:text-gray-300 z-10"
                            onClick={prevImage}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ‹
                        </motion.button>
                        
                        {/* Image */}
                        <motion.img 
                            src={images[selectedImage].src} 
                            alt={images[selectedImage].alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        {/* Next button */}
                        <motion.button 
                            className="absolute right-4 text-white text-4xl hover:text-gray-300 z-10"
                            onClick={nextImage}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ›
                        </motion.button>
                        
                        {/* Image counter */}
                        <motion.div 
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            {selectedImage + 1} / {images.length}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}