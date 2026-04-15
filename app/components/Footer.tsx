'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { services } from '@/lib/servicesData';

export default function Footer() {
    return (
        <footer className="bg-kestone-black text-white pt-20 pb-10" id="contact">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="relative block w-40 h-12 mb-6">
                            <Image
                                src="/images/image.png"
                                alt="MarkTale"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 160px, 160px"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6 font-body leading-relaxed">
                            MarkTale – Powered by AI
                            <br />
                            A Unit of MarkTale World Private Limited
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/marktaleworld" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-kestone-red transition-colors text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="https://x.com/MarktaleAi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-kestone-red transition-colors text-white">
                                <Twitter size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/marktaleworld/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-kestone-red transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.instagram.com/marktaleworld/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full hover:bg-kestone-red transition-colors text-white">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-8 uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about' },
                                { name: 'Events & Awards', href: '/awards' },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Blogs', href: '/blogs' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-kestone-red transition-colors text-sm uppercase tracking-wide">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-8 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4">
                            {services.slice(0, 8).map((service) => (
                                <li key={service.slug}>
                                    <Link href={`/services/${service.slug}`} className="text-gray-400 hover:text-kestone-red transition-colors text-sm uppercase tracking-wide">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className="text-kestone-red hover:text-white transition-colors text-sm uppercase tracking-wide font-bold">
                                    View All Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-8 uppercase tracking-wider">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                <MapPin className="text-kestone-red mr-4 mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-400">Plot no. 141, Sec. 14, Dwarka, New Delhi – 110078</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-kestone-red mr-4 flex-shrink-0" size={20} />
                                <span className="text-gray-400">+91-8527-664-228</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-kestone-red mr-4 flex-shrink-0" size={20} />
                                <span className="text-gray-400">info@marktaleworld.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © Copyright © MarkTale World Private Limited. All Rights Reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}