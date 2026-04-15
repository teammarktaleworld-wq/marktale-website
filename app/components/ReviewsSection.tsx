"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialsSection() {
  return (
    <div className="min-h-[30rem] md:min-h-[40rem] flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden py-12 md:py-20 max-w-[100vw]">
      <div className="w-full text-center mb-8 md:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-2 md:mb-4">
          What Our Clients Say
        </h2>
        <p className="text-neutral-600 text-xs sm:text-sm md:text-base">
          Hear from those who've experienced our work
        </p>
      </div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

      <div className="mt-8 z-10">
        <a
          href="https://www.google.com/maps/search/?api=1&query=MarkTale+Dwarka+Sector+14+New+Delhi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all text-sm font-bold text-gray-800"
        >
          <span className="text-xl">⭐</span>
          Leave a Google Review
        </a>
      </div>
    </div>
  );
}

// Export as default as well to match the import in page.tsx
export default TestimonialsSection;

const testimonials = [
  {
    quote: "Professional and supportive team. Great experience!",
    name: "DivYans Jos",
    title: "Local Guide",
    rating: 5,
  },
  {
    quote:
      "It has been a very good experience working with the Marktale World. All the Employees working here all very supportive, and the founder too is very visionary and Growth Focused",
    name: "Aditya Sharma",
    title: "Client",
    rating: 5,
  },
  {
    quote: "Excellent service and results.",
    name: "Pranav",
    title: "Client",
    rating: 5,
  },
  {
    quote: "Best and creative marketing team.",
    name: "Komal Kalyan",
    title: "Client",
    rating: 5,
  },
  {
    quote:
      "Choosing MarkTale was the best decision for our brand launch! Their AI-powered marketing strategies helped us grow...",
    name: "Ashwani Singh",
    title: "Client",
    rating: 5,
  },
  {
    quote:
      "MarkTale World Pvt. Ltd. transformed my small business into a local favorite! Their digital marketing strategies,...",
    name: "Kaustubh",
    title: "Client",
    rating: 5,
  },
];