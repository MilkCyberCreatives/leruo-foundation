'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Darker overlay & optimized background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/images/cta/banner.jpg"
          alt="Empowered community"
          fill
          priority
          quality={100}
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div> {/* Increased darkness */}
      </div>

      <motion.div
        className="relative mx-auto max-w-4xl px-5 py-20 sm:py-24 lg:px-8" // Reduced height
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Be the Reason Someone Rises
          </motion.h2>
          
          <motion.p
            className="mx-auto mt-4 max-w-xl text-base text-gray-100 sm:text-lg" // Tightened spacing
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Your donation empowers youth and entrepreneurs to build sustainable futures. Every contribution creates impact.
          </motion.p> {/* Condensed to 2 lines */}
          
          <motion.div
            className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="/bankingdetails"
              className="rounded-full bg-leruo px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-leruo-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leruo transition-all duration-200 hover:scale-[1.03]"
            >
              Donate Now
            </Link>
            <Link
              href="/youthpreneurs"
              className="rounded-full bg-white/15 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
            >
              See Our Impact
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}