'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Mic, Briefcase, Video } from 'lucide-react';

const achievements = [
    {
        icon: Star,
        title: "Founder & Scale",
        desc: "Successfully founded and scaled MarkTale, launching multiple brands including Delhi059 by Chef Kanishk, TripTale, Dee Cee Pearls, and Down Ridge.",
        year: "2024"
    },
    {
        icon: Trophy,
        title: "Volvo Cars India",
        desc: "Led high-impact digital marketing for Volvo Cars India, driving campaigns across web, SEO/SEM, email, social media, and display channels.",
        year: "2023"
    },
    {
        icon: Briefcase,
        title: "13SQFT.COM",
        desc: "Spearheaded marketing for 13SQFT.COM (AMS and Procurement Partnership Model), improving product visibility and engagement through structured go-to-market strategies.",
        year: "2022"
    },
    {
        icon: Award,
        title: "Kamalraj Group",
        desc: "Headed marketing for Kamalraj Group (residential and commercial), increasing client subscriptions and activating new societies through performance-driven digital campaigns.",
        year: "2021"
    },
    {
        icon: Mic,
        title: "Mindwise Media Research",
        desc: "Managed election surveys and a 120-member field team as Senior Zonal Coordinator at Mindwise Media Research Unit (India News), handling large-scale data collection and reporting.",
        year: "2019"
    },
    {
        icon: Video,
        title: "Commercial Direction",
        desc: "Directed and filmed commercial and promotional content, including a chroma ad for Unique Builders, promotional planning for eBay.in, and ad direction for Square Animation Company.",
        year: "2018"
    },
    {
        icon: Star,
        title: "National Theatre Actor",
        desc: "Represented Delhi at the national level as a theatre actor, demonstrating recognized performance skills and national-level visibility.",
        year: "2017"
    }
];

export default function AwardsGrid() {
    return (
        <section className="py-24 bg-neutral-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-blue-50 text-kestone-red rounded-lg group-hover:bg-kestone-red group-hover:text-white transition-colors duration-300">
                                    <item.icon size={24} />
                                </div>
                                <span className="text-4xl font-heading font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                                    {item.year}
                                </span>
                            </div>

                            <h3 className="text-xl font-heading font-bold mb-3 text-kestone-black">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
