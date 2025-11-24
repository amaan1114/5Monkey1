'use client';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'; 
import { useState } from "react";
export default function Gallery() {
    const images = [
        { src: "/svg/c1.webp", alt: "Coffee Art", size: "row-span-2 col-span-2" },
        { src: "/svg/5monkey.webp", alt: "Cafe Interior", size: "col-span-1" },
        { src: "/svg/bestDrink.webp", alt: "Dessert", size: "row-span-2" },
        { src: "/svg/DeliciousDishes.webp", alt: "Barista", size: "col-span-1" },
        { src: "/svg/Desserts.webp", alt: "Outdoor Seating", size: "col-span-2" },
        { src: "/svg/Lisa.png", alt: "Specialty Drink", size: "row-span-1 col-span-1" },
    ];
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

    const [modalOpen, setModalOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const openModal = (idx) => {
        setCurrentIdx(idx);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);
    const nextImg = () => setCurrentIdx((currentIdx + 1) % images.length);
    const prevImg = () => setCurrentIdx((currentIdx - 1 + images.length) % images.length);

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
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#F4AE26] drop-shadow-lg mb-4 tracking-wide">Gallery</h1>
                    <div className="w-24 h-2 bg-[#2F2105] rounded-full mb-6"></div>
                    <p className="text-xl md:text-2xl font-semibold text-white max-w-2xl text-center px-4 drop-shadow">Explore our vibrant café moments, delicious dishes, and happy guests.</p>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-6xl w-full px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                    {images.map((img, idx) => (
                        <div key={idx} className={`overflow-hidden rounded-2xl shadow-lg bg-white ${img.size} flex items-center justify-center cursor-pointer`} onClick={() => openModal(idx)}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal & Carousel */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
                    <button className="absolute top-8 right-8 text-white text-3xl font-bold" onClick={closeModal}>&times;</button>
                    <button className="absolute left-8 top-1/2 -translate-y-1/2 text-white text-4xl font-bold px-2 py-1" onClick={prevImg}>&#8592;</button>
                    <div className="max-w-3xl w-full flex flex-col items-center">
                        <img
                            src={images[currentIdx].src}
                            alt={images[currentIdx].alt}
                            className="w-full h-[60vh] object-contain rounded-2xl shadow-lg mb-4"
                        />
                        <p className="text-white text-lg font-semibold text-center">{images[currentIdx].alt}</p>
                    </div>
                    <button className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-4xl font-bold px-2 py-1" onClick={nextImg}>&#8594;</button>
                </div>
            )}
        </div>
    );
}