'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SponsorsSection() {
  return (
    <section className="bg-white py-16 w-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#48101f] mb-4">Our Sponsor</h2>
        <p className="text-gray-600 mb-10">
          We are grateful to our sponsor for their support and belief in our vision.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/sponsors/sponsor1.png"
            alt="Sponsor Logo"
            width={200}
            height={100}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
