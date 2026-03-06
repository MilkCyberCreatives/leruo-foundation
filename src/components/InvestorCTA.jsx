'use client';
import React from 'react';
import Image from 'next/image';

const InvestorCTA = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/youthpreneurs/RFP-1-02.jpg"
          alt="Call for Changemakers"
          fill
          sizes="100vw"
          quality={72}
          className="object-cover object-center"
        />
        {/* ✅ Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ✅ Foreground Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Partner with Us: Changemakers Incubation Programme 2026/2027
        </h2>
        <p className="mb-6 text-lg md:text-xl leading-relaxed drop-shadow-md">
          Join the Leruo Foundation in empowering youthpreneurs across South Africa.
          We&apos;re seeking passionate implementation partners and sponsors to help us deliver impactful programs.
        </p>
        <a
          href="/pdfs/leruo-foundation-rfp.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300"
        >
          📄 Download the RFP &amp; Get Involved
        </a>
      </div>
    </section>
  );
};

export default InvestorCTA;
