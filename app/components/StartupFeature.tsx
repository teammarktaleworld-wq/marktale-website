'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StartupFeature() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Images Col */}
                    <motion.div
                        className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative h-64 md:h-80 w-full mt-12 rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/startup-cafe.png"
                                alt="Startup Founder"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/images/service-dev.png" // Reusing dev image for context
                                alt="Coding"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Col */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-kestone-black mb-6">
                            Empower B2C Brands to <br className="hidden md:block" /> Scale Globally
                        </h2>
                        <h4 className="text-xl text-gray-500 font-medium mb-8">
                            Ready to take your brand to the next level with proven growth strategies?
                        </h4>
                        <p className="text-gray-600 font-body leading-relaxed mb-8">
                            Born from Kestone Global&apos;s marketing DNA, The Kestone GTM Acceleration Program unlocks the power of proven strategies for ambitious consumer brands. Through our commitment to fostering growth and innovation, we aim to fuel the entrepreneurial spirit and help brands connect meaningfully with their audiences.
                        </p>
                        <button className="px-8 py-3 border-2 border-kestone-black text-kestone-black font-bold uppercase tracking-wider hover:bg-kestone-black hover:text-white transition-all">
                            Explore Our Services
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
