'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lightbulb } from 'lucide-react';

const locations = [
    'Canada', 'USA', 'UAE', 'India', 'New Zealand', 'South Africa'
];

const industries = [
    'Healthcare', 'B2B', 'E-Commerce', 'FMCG',
    'Finance', 'Education', 'SaaS',
    'Mobile Apps', 'Fashion', 'Hospitality'
];

export default function GlobalIndustries() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Global Presence */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center mb-6">
                            <Globe className="text-kestone-red mr-4" size={32} />
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-kestone-black">
                                Global Presence
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-8 font-body">
                            Worked with clients across the globe, delivering excellence without borders.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {locations.map((loc, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                    <span className="w-2 h-2 bg-kestone-red rounded-full" />
                                    <span className="text-lg font-heading font-medium text-gray-800">{loc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Industries Served */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center mb-6">
                            <Lightbulb className="text-kestone-red mr-4" size={32} />
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-kestone-black">
                                Industries Served
                            </h2>
                        </div>
                        <p className="text-gray-600 mb-8 font-body">
                            Our expertise spans across diverse sectors, helping unique challenges find unique solutions.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {industries.map((ind, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-body text-sm font-medium hover:bg-kestone-red hover:text-white transition-colors duration-300 cursor-default"
                                >
                                    {ind}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
