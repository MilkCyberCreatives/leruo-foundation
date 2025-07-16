'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-28 px-6 text-white"
      style={{
        backgroundImage: "url('/images/cta/banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Be the Reason Someone Rises
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Your donation helps us empower youth, women, and entrepreneurs to build sustainable futures. Every contribution creates a legacy.
        </p>
        <a
          href="/donate"
          className="inline-block px-8 py-3 bg-white text-leruo font-semibold rounded-full hover:bg-gray-100 transition duration-300"
        >
          Donate Now
        </a>
      </motion.div>
    </section>
  );
}
