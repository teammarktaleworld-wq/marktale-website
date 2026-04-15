'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TeamCTA() {
    return (
        <section className="relative w-full bg-white pt-24 pb-24">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-kestone-red font-bold uppercase tracking-widest text-sm mb-4 block">B2B Marketing Agency</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-kestone-black mb-6 max-w-4xl mx-auto">
                        We are big enough to manage scale & small enough to understand the care you need
                    </h2>
                    <p className="text-gray-500 max-w-3xl mx-auto font-body mb-8">
                        You may be an established enterprise with defined processes for almost everything or a self-funded start-up looking to create a niche for itself, we are here for you to make things work.
                    </p>
                    <Link href="/contact" className="bg-kestone-black text-white px-6 py-3 md:px-10 md:py-4 font-bold uppercase tracking-wider hover:bg-gray-900 transition-all hover:shadow-lg inline-block">
                        Get In Touch
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}