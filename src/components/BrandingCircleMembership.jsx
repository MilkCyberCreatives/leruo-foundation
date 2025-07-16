'use client';
import React from 'react';
import { FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';

export default function BrandingCircleMembership() {
  return (
    <section className="py-16 bg-white px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#48101f] mb-6">
          Membership Fee Options
        </h2>
        <p className="text-gray-700 mb-10">
          Join the Branding Circle and choose a payment option that suits your business journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Annual Membership */}
          <div className="bg-[#f9f9f9] rounded-lg shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center mb-4 text-[#48101f]">
              <FaCalendarAlt className="text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Annual Membership</h3>
            </div>
            <p className="text-gray-700 text-base">
              Pay once a year and enjoy all member benefits at a discounted rate.
            </p>
            <p className="text-xl font-bold text-[#48101f] mt-4">R2,400.00</p>
            <a
              href="/apply"
              className="inline-block mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full transition"
            >
              Join Now
            </a>
          </div>

          {/* Monthly Membership */}
          <div className="bg-[#f9f9f9] rounded-lg shadow-md p-6 text-left hover:shadow-lg transition">
            <div className="flex items-center mb-4 text-[#48101f]">
              <FaMoneyBillWave className="text-2xl mr-3" />
              <h3 className="text-xl font-semibold">Monthly Membership</h3>
            </div>
            <p className="text-gray-700 text-base">
              Flexible month-to-month access to all Branding Circle resources and sessions.
            </p>
            <p className="text-xl font-bold text-[#48101f] mt-4">R300.00</p>
            <a
              href="/apply"
              className="inline-block mt-6 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full transition"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
