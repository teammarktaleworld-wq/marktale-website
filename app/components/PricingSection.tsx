'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: "Startup Building Plan",
        icon: Rocket,
        tagline: "Best for new startups & founders",
        price: "25,000",
        secondMonthPrice: "15,000",
        features: [
            "Website + Domain + Hosting",
            "Brand setup",
            "Social media setup & optimization",
            "Content (graphics, reels, articles)",
            "SEO basics",
            "Monthly report"
        ],
        cta: "Book Free Consultation",
        ctaLink: "/contact",
        highlighted: false
    },
    {
        name: "Growth Plan",
        icon: TrendingUp,
        tagline: "For businesses ready to scale",
        price: "50,000",
        secondMonthPrice: "35,000",
        features: [
            "Includes everything in Startup Plan",
            "E-commerce product listing & optimization",
            "Paid ads setup",
            "Advanced growth strategy",
            "Funnel & retargeting"
        ],
        cta: "Get Started Now",
        ctaLink: "/contact",
        highlighted: true,
        badge: "MOST POPULAR"
    }
];

export default function PricingSection() {
    return (
        <section className="py-24 bg-gray-50" id="pricing">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-4">
                        Pricing Plans
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 ${plan.highlighted
                                    ? 'bg-kestone-black text-white'
                                    : 'bg-white text-kestone-black'
                                } shadow-xl`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 right-8 bg-yellow-400 text-kestone-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="flex items-center gap-3 mb-4">
                                <plan.icon size={32} className={plan.highlighted ? 'text-kestone-red' : 'text-kestone-red'} />
                                <h3 className="text-2xl font-heading font-bold">{plan.name}</h3>
                            </div>

                            <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                                {plan.tagline}
                            </p>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold">₹{plan.price}</span>
                                    <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                                        / 1st Month
                                    </span>
                                </div>
                                <p className={`text-sm mt-2 ${plan.highlighted ? 'text-blue-400' : 'text-blue-600'}`}>
                                    ₹{plan.secondMonthPrice}/month 2nd Month onwards
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlighted ? 'bg-yellow-400' : 'bg-green-100'
                                            }`}>
                                            <Check size={14} className={plan.highlighted ? 'text-kestone-black' : 'text-green-600'} strokeWidth={3} />
                                        </div>
                                        <span className={`text-sm ${plan.highlighted ? 'text-gray-200' : 'text-gray-700'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.ctaLink}
                                className={`block w-full text-center py-4 rounded-xl font-bold uppercase tracking-wider transition-all ${plan.highlighted
                                        ? 'bg-yellow-400 text-kestone-black hover:bg-yellow-500'
                                        : 'bg-white text-kestone-black border-2 border-kestone-black hover:bg-kestone-black hover:text-white'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
