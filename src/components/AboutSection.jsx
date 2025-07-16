import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Optional abstract background */}
      <div className="absolute inset-0 bg-[url('/images/abstract-bg.png')] bg-cover bg-center opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* 📸 Left: Animated Image Collage with Shadow */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[540px] md:h-[500px] sm:h-[400px] xs:h-[360px] hidden sm:block"
        >
          <div className="absolute top-12 left-6 w-[360px] h-[460px] rounded-[100px] bg-[#48101f] opacity-10 blur-2xl -z-10"></div>

          <div className="absolute top-0 left-0 w-44 h-60 z-10">
            <img
              src="/images/about-1.jpg"
              alt="Empowerment"
              className="rounded-2xl object-cover w-full h-full transform rotate-3 border-4 border-white"
            />
          </div>
          <div className="absolute top-20 left-36 w-48 h-72 z-20">
            <img
              src="/images/about-2.jpg"
              alt="Mentorship"
              className="rounded-2xl object-cover w-full h-full transform -rotate-2 border-4 border-white"
            />
          </div>
          <div className="absolute top-44 left-8 w-40 h-60 z-30">
            <img
              src="/images/about-3.jpg"
              alt="Training"
              className="rounded-2xl object-cover w-full h-full transform rotate-1 border-4 border-white"
            />
          </div>
          <div className="absolute top-32 left-60 w-44 h-64 z-40">
            <img
              src="/images/about-4.jpg"
              alt="Leadership"
              className="rounded-2xl object-cover w-full h-full transform -rotate-1 border-4 border-white"
            />
          </div>
        </motion.div>

        {/* 📝 Right: Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#48101f]">
            Empowering Entrepreneurs, Building Legacies
          </h2>
          <p className="text-lg font-medium text-[#48101f] mb-6">
            Championing Growth for Small Businesses, Women Leaders and Youth Innovators.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            We equip small business owners, women CEOs, and youthpreneurs with mentorship, funding, and tools to build sustainable enterprises, driving job creation and generational wealth.
          </p>

          {/* 🎯 Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">
                <span className="inline-block px-4 py-1 border border-[#48101f] rounded-full text-[#48101f] text-sm tracking-wide">
                  MISSION
                </span>
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                To break barriers to wealth-building through education, mentorship, and equitable access to opportunity.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">
                <span className="inline-block px-4 py-1 border border-[#48101f] rounded-full text-[#48101f] text-sm tracking-wide">
                  VISION
                </span>
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                To empower the next generation with financial independence and long-term prosperity.
              </p>
            </div>
          </div>

          {/* 🔘 Animated CTA Button */}
          <motion.a
            href="/about"
            className="inline-block px-6 py-3 bg-[#48101f] text-white rounded-full font-semibold hover:bg-opacity-90 transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            More About Us
          </motion.a>
        </motion.div>
      </div>

      {/* Fallback for mobile: Show a static image instead of collage */}
      <div className="sm:hidden mt-10 px-4">
        <img
          src="/images/about-1.jpg"
          alt="About Mobile"
          className="rounded-xl w-full h-64 object-cover shadow-md"
        />
      </div>
    </section>
  );
}
