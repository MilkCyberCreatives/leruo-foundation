'use client';
import React from 'react';

export default function WomenCeoIntro() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-[#333]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="order-1 md:order-none">
          <h2 className="text-3xl md:text-4xl font-bold text-[#48101f] mb-6">Women CEOs' Network</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The Women CEOs' Network takes place in August to coincide with Women's Month. The event is designed to bring together powerful, inspiring, and visionary women who lead successful businesses across various industries.
            </p>
            <p>
              This intimate gathering offers a unique opportunity for women at the helm of companies to share insights, exchange ideas, and form meaningful connections in a relaxed, yet productive environment.
            </p>
            <p>
              This event is an empowering, high-impact gathering where women CEOs can recharge, share wisdom, and collaborate. Whether you're looking for new business insights, growth opportunities, or simply seeking inspiration from other top women in business, the Women CEOs' Network offers an unmatched opportunity to connect with and learn from the best in the industry.
            </p>
          </div>
        </div>

        {/* Right: YouTube Video */}
        <div className="order-0 md:order-none w-full rounded-xl overflow-hidden shadow-lg border-2 border-[#48101f]/20">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dEWtSCfTUH0?start=3&autoplay=0&mute=0"
              title="Women CEOs' Network Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}