'use client';
import React from 'react';

export default function AboutImpact() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-leruo mb-6">Our Impact</h2>
        <p className="text-lg text-gray-700 mb-12">
          At Leruo Foundation, we measure success not just by numbers, but by lives changed, businesses launched, and dreams empowered.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-5xl font-bold text-leruo mb-2">100+</h3>
            <p className="text-gray-700 font-medium">Youthpreneurs Empowered</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-5xl font-bold text-leruo mb-2">50+</h3>
            <p className="text-gray-700 font-medium">Women Entrepreneurs Supported</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-5xl font-bold text-leruo mb-2">20+</h3>
            <p className="text-gray-700 font-medium">Programs & Workshops Hosted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
