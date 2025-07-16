'use client';
import React from 'react';

export default function AboutIntro() {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-6 md:gap-12">
        {/* Left Column - Text */}
        <div>
          <h2 className="text-4xl font-bold text-leruo mb-6">
            About Leruo Foundation
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            A dynamic non-profit organization dedicated to fostering growth, innovation, and success
            for small business owners in the branding industry, women entrepreneurs and youth entrepreneurs—
            or <strong>Youthpreneurs</strong> as we call them. Our mission is to provide the tools,
            resources, and support needed to build sustainable businesses and empower the next generation of leaders.
          </p>

          <h3 className="text-2xl font-semibold text-leruo mb-4">Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            We aim to create a world where young individuals and communities have the knowledge,
            resources, and opportunities to thrive economically.
            <br /><br />
            Through education, mentorship, and innovation, we seek to break down barriers to wealth-building,
            fostering a new wave of entrepreneurs, leaders, and changemakers who will shape a more equitable
            and sustainable global economy for generations to come.
          </p>

          <a
            href="/public/pdfs/leruocompanyprofile.pdf"
            className="inline-block bg-leruo text-white font-semibold px-6 py-3 rounded-full hover:bg-[#3a0e1a] transition"
          >
            VIEW FOUNDATION PROFILE
          </a>
        </div>

        {/* Right Column - Wider Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/about-1.jpg"
            alt="About Leruo Foundation"
            className="w-full max-w-[480px] h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
