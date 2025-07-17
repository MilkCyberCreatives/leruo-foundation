'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutImpact() {
  const stats = [
    { value: "100+", label: "Youthpreneurs Empowered" },
    { value: "50+", label: "Women Entrepreneurs Supported" },
    { value: "20+", label: "Programs & Workshops Hosted" }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-leruo mb-4"
            variants={item}
          >
            Our Measurable Impact
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed"
            variants={item}
          >
            At Leruo Foundation, we quantify success through tangible outcomes—lives transformed, 
            businesses launched, and sustainable dreams empowered.
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={container}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-leruo mb-3">{stat.value}</h3>
                <p className="text-gray-700 font-medium text-base md:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}