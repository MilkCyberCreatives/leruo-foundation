'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutIntro() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 0.77, 0.47, 0.97] }
    }
  };

  const images = [
    { top: '2%', left: '0%', src: 'about/aboutus1.jpg' },
    { top: '10%', left: '40%', src: 'about/aboutus2.jpg' },
    { top: '55%', left: '5%', src: 'about/aboutus3.jpg' },
    { top: '42%', left: '55%', src: 'about/aboutus4.jpg' },
    { top: '20%', left: '20%', src: 'about/aboutus5.jpg' },
    { top: '66%', left: '40%', src: 'about/aboutus6.jpg' }
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div variants={item}>
              <h2 className="text-3xl sm:text-4xl font-bold text-leruo leading-tight">
                About Leruo Foundation
              </h2>
              <div className="h-1 w-16 bg-leruo my-4"></div>
            </motion.div>

            <motion.p className="text-gray-700 text-lg leading-relaxed" variants={item}>
              A dynamic non-profit organization dedicated to fostering growth, innovation, and success
              for small business owners in the branding industry, women entrepreneurs and youth entrepreneurs—
              or <strong className="font-semibold text-leruo">Youthpreneurs</strong> as we call them. Our mission is to provide the tools,
              resources, and support needed to build sustainable businesses and empower the next generation of leaders.
            </motion.p>

            <motion.div variants={item}>
              <h3 className="text-2xl font-semibold text-leruo mb-3">Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                We aim to create a world where young individuals and communities have the knowledge,
                resources, and opportunities to thrive economically.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                Through education, mentorship, and innovation, we seek to break down barriers to wealth-building,
                fostering a new wave of entrepreneurs, leaders, and changemakers who will shape a more equitable
                and sustainable global economy for generations to come.
              </p>
            </motion.div>

            <motion.div variants={item} className="pt-2">
              <a
                href="/pdfs/leruo_company_profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-leruo hover:bg-[#3a0e1a] text-white font-medium py-3 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border border-leruo/10"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                View Leruo Foundation Profile
              </a>
            </motion.div>
          </div>

          {/* Image Collage (Right) */}
          <motion.div
            className="w-full lg:w-1/2 relative h-[500px] sm:h-[580px] hidden sm:flex items-center justify-center"
            variants={item}
          >
            {/* Background Blur Circle */}
            <div className="absolute top-1/2 left-1/2 w-[90%] h-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[60px] bg-leruo opacity-10 blur-3xl -z-10"></div>

            {/* Image Grid */}
            <div className="relative w-full h-full max-w-[520px] mx-auto">
              {images.map((img, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-[42%] h-[40%]`}
                  style={{ top: img.top, left: img.left }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`/images/${img.src}`}
                    alt={`Gallery ${i + 1}`}
                    className="rounded-xl object-cover w-full h-full border-4 border-white shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}