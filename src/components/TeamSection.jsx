'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Connie Matlejoane',
    role: 'Chairperson',
    image: '/images/team/connie.jpg',
    facebook: '#',
    linkedin: '#',
  },
  {
    name: 'Peter Matlejoane',
    role: 'Treasurer',
    image: '/images/team/peter.jpg',
    facebook: '#',
    linkedin: '#',
  },
  {
    name: 'Faith Maswanganyi',
    role: 'Secretary',
    image: '/images/team/faith.jpg',
    facebook: '#',
    linkedin: '#',
  },
];

export default function TeamSection() {
  return (
    <section className="w-full">
      {/* Maroon Background with Images */}
      <div className="bg-leruo pt-20 pb-0 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-2">Leruo Foundation Team</h2>
          <p className="text-lg">
            Our team’s hard work drives our success and lasting impact.
          </p>
        </div>

        {/* Team Images */}
        <div className="max-w-7xl mx-auto mt-12 px-4 grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Name Cards in White Background (Slightly Pulled Up) */}
      <div className="bg-white w-full pt-4 pb-12 -mt-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="bg-white shadow-md rounded-lg px-4 py-3 text-center w-11/12 mx-auto">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <div className="flex justify-center gap-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={member.linkedin} className="text-leruo hover:text-black">
                    <FaLinkedinIn />
                  </a>
                  <a href={member.facebook} className="text-leruo hover:text-black">
                    <FaFacebookF />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-white w-full py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <p className="text-lg text-gray-800 leading-relaxed">
            Our vision is rooted in hope and empowerment, inspired by Proverbs 29:18:
            <br />
            <strong>"Where there is no vision, the people perish."</strong>
            <br />
            We aim to create a brighter future through empowerment and opportunity.
          </p>
          <div>
            <h4 className="text-2xl font-semibold text-leruo mb-2">Vision</h4>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to build a prosperous future by empowering the next generation to achieve
              financial independence and long-term wealth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
