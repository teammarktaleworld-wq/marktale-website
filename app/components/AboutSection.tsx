'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
    { label: 'Brands Scaled', value: '30+' },
    { label: 'Years of Growth', value: '1.5' },
    { label: 'Client Retention', value: '95%' },
    { label: 'Projects Delivered', value: '50+' },
];

export default function AboutSection() {
    return (
        <section className="py-24 bg-neutral-50" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-kestone-red font-body font-bold uppercase tracking-widest text-sm block mb-4">Who We Are</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-8 leading-tight">
                            More Than Just An Agency. <br />
                            <span className="text-gray-500">We Are Your Growth Partners.</span>
                        </h2>
                        <p className="text-lg text-gray-600 font-body mb-6 leading-relaxed">
                            MarkTale – Powered by AI is a full-service startup building, branding, marketing, and technology company. We work as a growth partner, not a vendor — combining AI tools, human creativity, and execution clarity to deliver real business outcomes.
                        </p>
                        <p className="text-lg text-gray-600 font-body mb-8 leading-relaxed">
                            In just 1.5 years, we've built and scaled 30+ brands across India and international markets including Canada and the USA. We leverage cutting-edge technology to solve complex business challenges.
                        </p>
                        <Link href="/about" className="px-8 py-3 border-2 border-kestone-black text-kestone-black font-bold uppercase tracking-wider hover:bg-kestone-black hover:text-white transition-all duration-300 inline-block">
                            Read Our Story
                        </Link>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="w-full lg:w-1/2 grid grid-cols-2 gap-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 shadow-lg border-b-4 border-kestone-red hover:-translate-y-2 transition-transform duration-300"
                            >
                                <h3 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}