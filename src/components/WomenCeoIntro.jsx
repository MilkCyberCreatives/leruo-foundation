'use client';
import React from 'react';

export default function WomenCeoIntro() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-[#333]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#48101f] mb-6">Women CEOs' Network</h2>
          <p className="text-base leading-relaxed text-gray-700">
            The Women CEOs' Network takes place in August to coincide with Women’s Month. The event is designed to bring together powerful, inspiring, and visionary women who lead successful businesses across various industries.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mt-4">
            This intimate gathering offers a unique opportunity for women at the helm of companies to share insights, exchange ideas, and form meaningful connections in a relaxed, yet productive environment.
          </p>
          <p className="text-base leading-relaxed text-gray-700 mt-4">
            This event is an empowering, high-impact gathering where women CEOs can recharge, share wisdom, and collaborate. Whether you're looking for new business insights, growth opportunities, or simply seeking inspiration from other top women in business, the Women CEOs' Network offers an unmatched opportunity to connect with and learn from the best in the industry.
          </p>
        </div>

        {/* Right: Video */}
        <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover rounded-lg"
            src="/videos/hero.mp4"
            autoPlay
            loop
            muted={false}
            controls
          />
        </div>
      </div>
    </section>
  );
}
