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
    <section className="bg-white py-16 md:py-20 px-6 md:px-8 lg:px-12">


      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* LEFT COLUMN - Accordion and Image */}

<div className="border border-gray-200 rounded-xl p-6 md:p-8 h-full">

        <div className="w-full flex flex-col justify-between">
          <div>

            <div className="bg-[#f9f2f1] p-4 rounded-lg mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[#48101f] leading-tight">
                Challenges Faced by Youthpreneurs
              </h3>
            </div>


            <div className="space-y-3">
              {challenges.map((item, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex justify-between items-center px-5 py-4 text-left ${
                      openIndex === index ? 'bg-[#f9f2f1] text-[#48101f]' : 'hover:bg-gray-50 text-gray-800'
                    } transition-colors`}
                  >
                    <span className="font-medium text-base md:text-lg">
                      {item.title}
                    </span>
                    <svg
                      className={`w-5 h-5 ml-3 flex-shrink-0 transform transition-transform ${
                        openIndex === index ? 'rotate-180 text-[#48101f]' : 'text-gray-500'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-5 pb-5 pt-1 text-gray-700 text-sm md:text-base leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 📷 Add image at the bottom of left column */}
          <img
            src="/images/youthpreneurs/challenges.jpg"
            alt="Empowering Youth"
            className="rounded-xl mt-8 shadow-md"
          />
        </div>
        </div>

        {/* RIGHT COLUMN - Content */}
        <div className="w-full">
          <div className="border border-gray-200 rounded-xl p-6 md:p-8 h-full">
            <div className="space-y-6">
              <div className="bg-[#f9f2f1] p-4 rounded-lg mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#48101f] leading-tight">
                  Empowering the Next Generation
                </h3>
              </div>
              
              <div className="space-y-5 text-gray-700 text-base md:text-[17px] leading-relaxed">
                <p>
                  Youthpreneurs are the future of entrepreneurship, bringing fresh ideas, energy, and a 
                      global perspective to the business world. By supporting and empowering them, we can 
                      foster the next generation of business leaders, innovators, and problem-solvers who 
                      will reshape industries and create positive change in society. Whether through 
                      mentorship, funding, or education, helping Youthpreneurs succeed is an investment in 
                      a brighter, more innovative tomorrow. To ensure that Youthpreneurs succeed and 
                      thrive, it’s important to provide the right ecosystem of support, and that is what Leruo 
                      Foundation, and our partners are committed to doing.
                </p>
                
                <div className="border-l-4 border-[#48101f] pl-4 py-1">
                  <p>Through comprehensive support systems including:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Targeted mentorship programs</li>
                    <li>Strategic funding opportunities</li>
                    <li>Practical business education</li>
                  </ul>
                </div>
                
                <p>
                  We're cultivating a new breed of leaders who will transform industries and drive meaningful societal progress.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mt-1 mr-3 text-[#48101f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <div>
                    <p className="font-bold text-[#48101f] text-lg">Collaboration is key to building strong entrepreneurial ecosystems. Let’s create a brighter, entrepreneurial future together!</p>
                    <button className="mt-3 bg-[#48101f] hover:bg-[#3a0c19] text-white font-medium py-2 px-5 rounded-lg transition duration-200">
                      Join the Movement
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
