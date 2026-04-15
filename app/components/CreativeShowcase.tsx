'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Heart, MessageCircle, Bookmark } from 'lucide-react';

const creativeContent = [
    {
        type: 'post' as const,
        image: 'https://www.instagram.com/p/DBjCxUbuKge/media/?size=l',
        thumbnail: 'https://www.instagram.com/p/DBjCxUbuKge/media/?size=l',
        brand: 'Delhi059',
        likes: '2.4k',
        comments: '156',
        views: '',
        duration: '',
        link: 'https://www.instagram.com/p/DBjCxUbuKge/'
    },
    {
        type: 'post' as const,
        thumbnail: 'https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l',
        image: 'https://www.instagram.com/p/DSGIHDZgcQm/media/?size=l',
        brand: 'Local Ride',
        views: '',
        duration: '',
        likes: '3.1k',
        comments: '203',
        link: 'https://www.instagram.com/p/DSGIHDZgcQm/'
    },
    {
        type: 'post' as const,
        image: '/creatives/promaccreatives.png',
        thumbnail: '/creatives/promaccreatives.png',
        brand: 'Promac Advisory',
        likes: '1.9k',
        comments: '124',
        views: '',
        duration: '',
        link: undefined
    },
    {
        type: 'post' as const,
        thumbnail: 'https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l',
        image: 'https://www.instagram.com/p/DTSxqv6iNh5/media/?size=l',
        brand: 'Astro Nexus',
        views: '',
        duration: '',
        likes: '1.8k',
        comments: '89',
        link: 'https://www.instagram.com/p/DTSxqv6iNh5/'
    },
    {
        type: 'post' as const,
        image: 'https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l',
        thumbnail: 'https://www.instagram.com/p/DHIHRiZSdrU/media/?size=l',
        brand: 'Dee Cee Accessories',
        likes: '2.2k',
        comments: '167',
        views: '',
        duration: '',
        link: 'https://www.instagram.com/p/DHIHRiZSdrU/'
    },
    {
        type: 'post' as const,
        thumbnail: '/creatives/biryanibar.jpg',
        image: '/creatives/biryanibar.jpg',
        brand: 'Biryani Bar',
        views: '',
        duration: '',
        likes: '3.5k',
        comments: '234',
        link: undefined
    }
];

const stats = [
    { number: '30+', label: 'Brands Built' },
    { number: '10+', label: 'Years of Legacy' },
    { number: '500K+', label: 'Lives Impacted' },
    { number: '100%', label: 'Passion Driven' }
];

export default function CreativeShowcase() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Legacy Story Section */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-6">
                        <span className="text-sm font-bold uppercase tracking-widest text-kestone-red">
                            Our Journey
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-kestone-black mb-6 leading-tight">
                        A Legacy Reborn,<br />
                        <span className="text-kestone-red">A Vision Renewed</span>
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-lg md:text-xl text-gray-700 font-body leading-relaxed">
                            Every great story has chapters of triumph and transformation. Ours began with a dream—to build brands that don't just exist, but <span className="font-bold text-kestone-black">inspire, connect, and dominate</span>.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 font-body leading-relaxed">
                            After years of building 30+ brands and touching half a million lives, we faced a crossroads. But from that moment of reflection came something more powerful—<span className="font-bold text-kestone-red">a restart fueled by passion, experience, and an unshakeable commitment to creativity</span>.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 font-body leading-relaxed">
                            Today, we don't just create content. We craft <span className="font-bold text-kestone-black">legacies</span>. We tell <span className="font-bold text-kestone-black">stories</span>. We build <span className="font-bold text-kestone-black">empires</span>.
                        </p>
                    </div>
                </motion.div>

                {/* Stats Counter */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-4xl md:text-5xl font-heading font-bold text-kestone-red mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm md:text-base font-body text-gray-600 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Creative Content Preview */}
                <div className="mb-12">
                    <motion.h3
                        className="text-3xl md:text-4xl font-heading font-bold text-kestone-black text-center mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Our Creative Universe
                    </motion.h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {creativeContent.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => {
                                    if (item.link) {
                                        window.open(item.link, '_blank', 'noopener,noreferrer');
                                    }
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.brand}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-white font-heading font-bold text-sm mb-2">
                                            {item.brand}
                                        </p>
                                        <div className="flex items-center gap-4 text-white text-xs">
                                            <span className="flex items-center gap-1">
                                                <Heart size={14} />
                                                {item.likes}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageCircle size={14} />
                                                {item.comments}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* View More CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Link href="/projects">
                        <motion.button
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-kestone-red text-white font-heading font-bold text-lg rounded-full hover:bg-kestone-black transition-all duration-300 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Our Full Journey
                            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
                        </motion.button>
                    </Link>
                    <p className="mt-4 text-gray-600 font-body text-sm">
                        Dive into our visual journey, reels, articles, and influencer campaigns
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
