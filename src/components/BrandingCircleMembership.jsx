'use client';
import React from 'react';
import { FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';
import Link from 'next/link';

export default function BrandingCircleMembership() {
  return (
    <section className="py-16 bg-white px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#48101f] mb-4">
            Membership Fee Options
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Join the Branding Circle and choose a payment option that suits your business journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Annual Membership */}
          <div className="bg-[#f9f9f9] rounded-xl border border-gray-100 p-8 text-left hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-[#48101f] p-3 rounded-full mr-4">
                <FaCalendarAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#48101f]">Annual Membership</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Pay once a year and enjoy all member benefits at a discounted rate.
            </p>
            <p className="text-2xl font-bold text-[#48101f] mb-6">R2,400.00</p>
            <Link
              href="/contact?membership=annual"
              className="block w-full bg-[#48101f] hover:bg-[#5a1a2d] text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-300"
            >
              Select Annual Plan
            </Link>
          </div>

          {/* Monthly Membership */}
          <div className="bg-[#f9f9f9] rounded-xl border border-gray-100 p-8 text-left hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-[#48101f] p-3 rounded-full mr-4">
                <FaMoneyBillWave className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#48101f]">Monthly Membership</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Flexible month-to-month access to all Branding Circle resources and sessions.
            </p>
            <p className="text-2xl font-bold text-[#48101f] mb-6">R300.00</p>
            <Link
              href="/contact?membership=monthly"
              className="block w-full bg-[#48101f] hover:bg-[#5a1a2d] text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-300"
            >
              Select Monthly Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}