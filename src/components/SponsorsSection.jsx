'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SponsorsSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-[#48101f] mb-3">
            Our <span className="text-leruo">Sponsor</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            We appreciate their generous support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.7,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="flex justify-center px-6"
        >
          <div className="p-2 transition-all duration-500 hover:scale-[1.02]">
            <Image
              src="/images/sponsors/sponsor1.png"
              alt="Sponsor Logo"
              width={240}
              height={120}
              className="object-contain w-auto h-20 sm:h-28 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-7 py-2.5 rounded-full bg-leruo text-white font-medium hover:bg-leruo-dark transition-all duration-300 hover:shadow-sm"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
}