import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/abstract-bg.png')] bg-cover bg-center opacity-5 pointer-events-none"></div>

      {/* Container with perfect column alignment */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
        {/* 📸 Left: Image Collage with refined positioning */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] hidden sm:flex items-center justify-center"
        >
          {/* Shadow backdrop */}
          <div className="absolute top-1/2 left-1/2 w-[85%] h-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[80px] bg-[#48101f] opacity-10 blur-xl -z-10"></div>

          {/* Image grid with perfect overlap */}
          <div className="relative w-full h-full max-w-[500px] mx-auto">
            <div className="absolute top-[5%] left-[0%] w-[45%] h-[40%] z-10">
              <motion.img
                src="/images/about-1.jpg"
                alt="Empowerment"
                className="rounded-xl object-cover w-full h-full transform rotate-3 border-4 border-white shadow-lg"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute top-[15%] left-[35%] w-[50%] h-[50%] z-20">
              <motion.img
                src="/images/about-2.jpg"
                alt="Mentorship"
                className="rounded-xl object-cover w-full h-full transform -rotate-2 border-4 border-white shadow-lg"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute top-[50%] left-[5%] w-[42%] h-[40%] z-30">
              <motion.img
                src="/images/about-3.jpg"
                alt="Training"
                className="rounded-xl object-cover w-full h-full transform rotate-1 border-4 border-white shadow-lg"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute top-[40%] left-[55%] w-[45%] h-[45%] z-40">
              <motion.img
                src="/images/about-4.jpg"
                alt="Leadership"
                className="rounded-xl object-cover w-full h-full transform -rotate-1 border-4 border-white shadow-lg"
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* 📝 Right: Text Content with perfect vertical alignment */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col justify-center h-full py-8 lg:py-12"
        >
          <div className="max-w-[580px] mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-5 text-[#48101f] leading-tight">
              Empowering Entrepreneurs, Building Legacies
            </h2>
            <p className="text-lg font-medium text-[#48101f] mb-6">
              Championing Growth for Small Businesses, Women Leaders and Youth Innovators.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We equip small Business Owners, Women CEOs, and Youthpreneurs with mentorship, and tools to build sustainable enterprises, driving job creation and generational wealth.
            </p>

            {/* Mission & Vision Section */}
<div className="grid sm:grid-cols-2 gap-8 mb-14">
  {/* Mission */}
  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
    <h3 className="text-sm font-medium text-gray-500 uppercase mb-2 tracking-wider">
      Mission
    </h3>
    <p className="text-gray-800 text-base leading-relaxed">
      To break barriers to wealth-building through education, mentorship, and equitable access to opportunity.
    </p>
  </div>

  {/* Vision */}
  <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
    <h3 className="text-sm font-medium text-gray-500 uppercase mb-2 tracking-wider">
      Vision
    </h3>
    <p className="text-gray-800 text-base leading-relaxed">
      To empower the next generation with financial independence and long-term prosperity.
    </p>
  </div>
</div>




            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/about"
                className="inline-flex items-center px-7 py-3 bg-[#48101f] text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                More About Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile-optimized fallback */}
      <div className="sm:hidden mt-8 px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about-1.jpg"
            alt="About Mobile"
            className="rounded-xl w-full h-64 object-cover shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}