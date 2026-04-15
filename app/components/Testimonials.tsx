'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
    return (
        <section className="flex flex-col lg:flex-row h-auto lg:h-[600px] w-full">
            {/* Left: Red Quote Box */}
            <motion.div
                className="w-full lg:w-1/2 bg-kestone-red flex items-center justify-center p-8 lg:p-20 relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <Quote className="absolute top-10 left-10 text-white/20 w-32 h-32" />
                <div className="relative z-10 text-white text-center">
                    <Quote className="w-12 h-12 mb-6 mx-auto" />
                    <h3 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-4">
                        Awesome B2C <br /> Marketing Agency. <br /> Flawless Project <br /> Delivery.
                    </h3>
                </div>
                {/* Decorative Circles if needed */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 border-4 border-white/10 rounded-full" />
            </motion.div>

            {/* Right: Dark Context Box */}
            <motion.div
                className="w-full lg:w-1/2 bg-[#1a1a1a] flex items-center justify-center p-8 lg:p-20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="max-w-lg text-left">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Clientele</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        Testimony to Our <br /> Business Excellence
                    </h2>
                    <h4 className="text-xl text-gray-400 font-medium mb-8">
                        We are humbled when some of the biggest global brands trust us with their marketing campaigns
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                        Mobile app marketing for an EdTech brand, Virtual Event for a pharma company, Audience Generation for a consumer durable brand, Inside Sales Program for an OEM...
                    </p>
                    <Link href="/projects" className="bg-white text-kestone-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors inline-block">
                        Look at our Clients
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}