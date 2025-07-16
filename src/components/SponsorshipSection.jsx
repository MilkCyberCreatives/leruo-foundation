// components/SponsorshipSection.jsx
'use client';
import React from 'react';

export default function SponsorshipSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-[#48101f] text-white rounded-md p-6 mb-10">
          <h2 className="text-3xl font-bold">Sponsorship Opportunities</h2>
          <p className="mt-2 text-gray-200">
            We offer a range of sponsorship and donation opportunities tailored to meet the needs of your organization and the goals you hope to achieve through partnership. These opportunities include:
          </p>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="border border-[#48101f] rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#48101f] mb-4">Event Sponsorship</h3>
            <p className="text-gray-700">
              <strong>Annual Youthpreneurs:</strong> Host or sponsor keynotes, workshops, and networking events that bring together hundreds of small business owners and Youthpreneurs.
            </p>
            <p className="mt-3 text-gray-700">
              <strong>Business Pitch Competitions:</strong> Sponsor pitch events where entrepreneurs present their innovative ideas to potential investors and gain recognition in the business community.
            </p>
          </div>

          <div className="border border-[#48101f] rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#48101f] mb-4">Program Sponsorship</h3>
            <p className="text-gray-700">
              <strong>Youthpreneurs Training Programs:</strong> Sponsor specific educational or mentorship programs designed to empower Youthpreneurs with the skills to succeed in the marketplace.
            </p>
            <p className="mt-3 text-gray-700">
              <strong>Leruo Foundation Changemakers Program:</strong> Help fund an accelerator that provides intensive training and access to resources for small business owners looking to scale.
            </p>
          </div>
        </div>

        {/* General Donations */}
        <div>
          <h3 className="text-xl font-semibold text-[#48101f] mb-2">General Donations</h3>
          <p className="mb-2 text-gray-700">
            Donations of any size will have a direct impact on the lives of small business owners and aspiring entrepreneurs. Your contribution will help fund workshops, mentorship opportunities, and networking events such as the Women CEO's Breakfast.
          </p>
          <p className="text-gray-700">
            <strong>Recognition as a Key Partner:</strong> All donations will be acknowledged on our website, in event materials, and you will have promotional product stands at all our events.
          </p>
        </div>
      </div>
    </section>
  );
}
