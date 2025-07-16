'use client';
import React, { useState } from 'react';

const challenges = [
  {
    title: 'Lack of Experience',
    content:
      'Many young entrepreneurs lack the experience that older business owners might have, which can lead to challenges in decision-making, strategy, and business operations.',
  },
  {
    title: 'Access to Capital',
    content:
      'Obtaining funding is often a major barrier. Traditional investors may hesitate to invest in young entrepreneurs due to perceived risks or lack of business history.',
  },
  {
    title: 'Networking Limitations',
    content:
      'While digital networks are growing, many youth entrepreneurs may lack connections with industry professionals, potential partners, or investors who can help them scale.',
  },
  {
    title: 'Work-Life Balance',
    content:
      'Balancing the demands of running a business with personal life, education, or part-time jobs can be difficult for young entrepreneurs, leading to burnout or stress.',
  },
  {
    title: 'Limited Business Knowledge',
    content:
      'While many young entrepreneurs are passionate and creative, they may need more formal business education to tackle complex issues like scaling, finance, or hiring.',
  },
];

export default function YouthpreneursChallenges() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* LEFT COLUMN - Accordion */}
        <div>
          <h2 className="text-3xl font-bold text-[#48101f] mb-6">Key Challenges Faced by Youthpreneurs</h2>
          <div className="space-y-4">
            {challenges.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-5 py-4 text-lg font-semibold text-[#7b1f2b] hover:bg-[#fef1ef] transition"
                >
                  {item.title}
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-700 text-[16px] leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Description */}
        <div className="flex flex-col justify-center">
          <div className="bg-[#fafafa] p-8 rounded-xl shadow-md border border-gray-200 text-gray-800 text-[17px] leading-relaxed">
            <p className="mb-4">
              <strong>Youthpreneurs are the future of entrepreneurship</strong>, bringing fresh ideas, new energy, and global perspectives to the business world.
            </p>
            <p className="mb-4">
              By empowering them through mentorship, funding, and education, we foster the next generation of problem-solvers and changemakers across industries.
            </p>
            <p>
              <strong>Leruo Foundation</strong> is dedicated to creating the right ecosystem to ensure Youthpreneurs thrive and transform communities through innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
