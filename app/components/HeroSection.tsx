'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import LogoCarousel from './LogoCarousel';
import LogoCarouselMobile from './LogoCarouselMobile';

const slides = [
    {
        title: "MarkTale",
        subtitle: "AI Powered Marketing Agency"
    },
    {
        title: "Digital Media Maestro",
        subtitle: "Crafting your Symphony of Digital Impact"
    },
    {
        title: "Helping Brands Grow",
        subtitle: "Strategic. Measurable. Seamless."
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-16 lg:py-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Geometric Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent" />
            </div>

            {/* Content Grid - Left: Text, Right: Logo Carousel */}
            <div className="relative z-10 container mx-auto px-6 max-w-7xl h-full py-4 lg:py-0">
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 h-full justify-center lg:items-center">
                    {/* Left Column - Text Content */}
                    <div className="max-w-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h2 className="text-xl md:text-2xl font-body font-bold text-kestone-black uppercase tracking-widest mb-4">
                                    {slides[currentSlide].subtitle}
                                </h2>
                                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-kestone-black leading-tight">
                                    {slides[currentSlide].title}
                                </h1>
                            </motion.div>
                        </AnimatePresence>

                        {/* Static CTA or description if needed */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-8"
                        >
                            <p className="text-lg text-gray-600 max-w-lg mb-8">
                                MarkTale is an AI powered pioneering advertising and marketing company dedicated to helping businesses of all sizes achieve their maximum potential through innovative and effective marketing strategies.
                            </p>
                            <Link href="/services" className="px-8 py-4 bg-kestone-red text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-blue-700 transition-all hover:shadow-xl transform hover:-translate-y-1 inline-block">
                                Explore Services
                            </Link>
                        </motion.div>
                    </div>

                    {/* Logo Carousel - Vertical on desktop, Horizontal on mobile */}
                    <motion.div
                        className="h-[140px] lg:h-[600px] relative lg:pl-12"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        {/* Mobile: Horizontal Carousel */}
                        <div className="lg:hidden">
                            <LogoCarouselMobile />
                        </div>
                        {/* Desktop: Vertical Carousel */}
                        <div className="hidden lg:block h-full">
                            <LogoCarousel />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? "w-12 bg-kestone-red" : "w-6 bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}