'use client';
import React from 'react';
import Link from 'next/link';

export default function WomenCeoLaunchSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Image Column */}
        <div className="h-full">
          <div className="h-full w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/womenceos/women-network.jpg"
              alt="Women CEOs Network"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className="h-full flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#48101f] mb-4">
              Women CEOs' Breakfast Network Launch
            </h2>
            <p className="text-gray-700 mb-4">
              Leruo Foundation proudly announces the launch of the Women CEOs' Network. This exclusive initiative is designed to bring together powerful, inspiring, and visionary women who lead successful businesses across various industries who are leading established businesses with a minimum of two years in operation and at least five permanent employees. Whether you're looking for new business insights, growth opportunities, or simply seeking inspiration from other top women in business, the Women CEOs' Network offers an unmatched opportunity to connect with and learn from the best in the industry.
            </p>
            <p className="text-gray-700 mb-4">
              Membership is highly selective, based on proven leadership, industry impact, and a strong alignment with the Foundation’s mission to empower women in leadership. To maintain a space of deep engagement and high-value connection, the network will be limited to just 10 participants.
            </p>
            <p className="text-gray-700 mb-4">
              By joining, you commit not only to growing your own leadership capacity but also to contributing to the success of fellow women entrepreneurs.
            </p>
            <p className="text-gray-700 mb-6">
              The launch event will be held on <strong>Saturday, 9 August 2025</strong>. This intimate gathering offers a unique opportunity for women at the helm of companies to share insights, exchange ideas, and form meaningful connections in a relaxed, yet productive environment.
            </p>
            <p className="text-gray-700 mb-6">
             Join us for an inspiring morning that could redefine your business and leadership path.
            </p>
          </div>

          <div>
            <Link
              href="https://forms.gle/riSRPcD3V1YfUYL69"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-[#48101f] font-semibold px-6 py-3 rounded-full transition"
            >
              Click here to apply
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
