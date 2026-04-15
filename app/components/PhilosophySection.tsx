'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BarChart2, Layers } from 'lucide-react';

const philosophies = [
    {
        title: 'Strategic Approach',
        icon: Compass,
        description: 'We take a strategic, data-driven approach to marketing, blending traditional and digital techniques to create customized solutions for your brand.'
    },
    {
        title: 'Measurable Impact',
        icon: BarChart2,
        description: 'Our services are designed to deliver measurable results, helping you track and optimize your marketing efforts for maximum impact.'
    },
    {
        title: 'Seamless Integration',
        icon: Layers,
        description: 'We seamlessly integrate traditional and digital marketing channels, ensuring a cohesive brand experience across all touchpoints.'
    }
];

export default function PhilosophySection() {
    return (
        <section className="py-20 bg-kestone-black text-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-kestone-red font-body font-bold uppercase tracking-widest text-sm block mb-3">Core Values</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold">
                        Core Marketing Philosophy
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="bg-gray-900/50 p-6 md:p-8 border border-gray-800 rounded-sm hover:border-kestone-red transition-colors duration-300"
                        >
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 text-kestone-red">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 font-body leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
