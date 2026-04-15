'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Video, Search, FileText, Target, ShieldCheck, Palette, TrendingUp, BarChart, Globe, Smartphone } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: 'Android and iOS Development',
        icon: Smartphone,
        description: 'Developing high-performance mobile applications for Android and iOS platforms.'
    },
    {
        title: 'Web Development',
        icon: Globe,
        description: 'Building robust, scalable, and high-performance websites and applications.'
    },
    {
        title: 'Market Research',
        icon: Search,
        description: 'Qualitative research, quantitative analysis, and observational studies to understand your market.'
    },
    {
        title: 'Marketing Plan Development',
        icon: FileText,
        description: 'Comprehensive planning, data-driven insights, and creative ideation for growth.'
    },
    {
        title: 'Performance Marketing',
        icon: TrendingUp,
        description: 'Data-focused advertising campaigns optimized for maximum ROI.'
    },
    {
        title: 'SEO & Analytics',
        icon: BarChart,
        description: 'Improving visibility and deriving actionable insights from data.'
    },
    {
        title: 'Lead Generation',
        icon: Target,
        description: 'Strategies to attract and convert high-quality leads for your business.'
    },
    {
        title: 'Video Content Creation',
        icon: Video,
        description: 'Crafting captivating video content to engage audiences and tell your brand story.'
    },
    {
        title: 'Online Reputation Management',
        icon: ShieldCheck,
        description: 'Monitoring and improving your brand perception across digital channels.'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function ServicesSection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden" id="services">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-kestone-red font-body font-bold uppercase tracking-widest text-sm block mb-3">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black">
                        Our Services
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 group border-b-4 border-transparent hover:border-kestone-red"
                        >
                            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-kestone-red transition-colors duration-300">
                                <service.icon className="text-kestone-black group-hover:text-white transition-colors duration-300" size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-kestone-black mb-4 group-hover:text-kestone-red transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 font-body mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <Link href="/services" className="inline-flex items-center text-kestone-red font-bold uppercase text-sm tracking-wider hover:underline">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
