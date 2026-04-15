'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { services } from '@/lib/servicesData';

export default function HomeContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'Marketing as a Service (MaaS)',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the WhatsApp message
        const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service Interest:* ${formData.service}
*Message:* ${formData.message || 'No message provided'}
        `.trim();

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp number
        const whatsappNumber = '918527664228';

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-24 bg-gray-50" id="contact">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-kestone-red font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-kestone-black mb-4">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto font-body">
                        Whether you need a full digital transformation or a specific marketing campaign, our team is ready to help you scale.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 md:p-12 rounded-3xl shadow-lg"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name and Phone - Side by Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                                    placeholder="+91..."
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-base"
                                placeholder="john@company.com"
                            />
                        </div>

                        {/* Service Interest - Dynamically populated from servicesData */}
                        <div>
                            <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                Service Interest
                            </label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors text-gray-600 text-base"
                            >
                                <option>Marketing as a Service (MaaS)</option>
                                {services.map((service) => (
                                    <option key={service.id} value={service.title}>
                                        {service.title}
                                    </option>
                                ))}
                                <option>Other</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-kestone-black transition-colors resize-none"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-kestone-black text-white font-bold rounded-xl hover:bg-gray-900 transition-colors flex items-center justify-center text-lg"
                        >
                            Send Message
                            <Send size={20} className="ml-2" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
