'use client';
import React from 'react';
import { FaUsers, FaCalendarAlt, FaHandshake, FaChartLine } from 'react-icons/fa';

export default function BrandingCircleWhyJoin() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side */}
        <div className="flex flex-col justify-between bg-white rounded-lg p-6 border border-[#e5e7eb]">
          <h2 className="text-3xl font-bold text-[#48101f] mb-4">
            Why Join the Branding Chief Executive Circle SA?
          </h2>
          <ul className="space-y-5 text-gray-700">
            <li className="flex items-start gap-4">
              <FaUsers className="text-[#48101f] text-xl mt-1" />
              <div>
                <strong>Networking Opportunities:</strong><br />
                Connect with a select group of influential branding experts and entrepreneurs.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaCalendarAlt className="text-[#48101f] text-xl mt-1" />
              <div>
                <strong>Exclusive Events:</strong><br />
                Gain access to cutting-edge strategies and trends in branding from key industry stakeholders.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaHandshake className="text-[#48101f] text-xl mt-1" />
              <div>
                <strong>Collaborative Environment:</strong><br />
                Share knowledge and foster partnerships with other successful business owners.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaChartLine className="text-[#48101f] text-xl mt-1" />
              <div>
                <strong>Growth & Development:</strong><br />
                Access mentorship and professional development tailored to branding business owners.
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between bg-white border border-[#48101f] rounded-lg p-8 shadow-sm">
          <div>
            <p className="text-gray-700 mb-4">
              As a member, you’ll be part of a dynamic community that’s passionate about building stronger brands and advancing the industry.
            </p>
            <p className="text-gray-700 mb-6">
              We look forward to welcoming you to the Branding Chief Executive Circle SA and embarking on this exciting journey together!
            </p>
          </div>

          <div className="space-y-4 mt-auto">
            <a
              href="/downloads/brandingcircle-form.pdf"
              className="inline-block bg-yellow-400 text-[#48101f] font-semibold px-5 py-2 rounded-full hover:bg-yellow-500 transition"
              download
            >
              📄 Download Application Form
            </a>
            <br />
            <a
              href="/about"
              className="inline-block text-[#48101f] underline hover:text-[#3a0e1a] transition text-sm"
            >
              Learn more about the Branding Chief Executive Circle SA &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
