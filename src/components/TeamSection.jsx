'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Connie Matlejoane',
    image: '/images/team/bosslady.jpg',
    facebook: '#',
    linkedin: '#',
  },
  {
    name: 'Tshimo & Botshelo',
    image: '/images/team/twins.jpg',
    facebook: '#',
    linkedin: '#',
  },
  {
    name: 'Faith Maswanganyi',
    image: '/images/team/faithm.jpg',
    facebook: '#',
    linkedin: '#',
  },
];

export default function TeamSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: { y: -10 },
  };

  return (
    <section className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="bg-leruo pt-24 pb-56 md:pt-24 md:pb-64 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Foundation Team</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Our experienced team drives the foundation's vision with strategic direction and operational excellence.
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-48 md:-mt-56 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <div className="overflow-hidden rounded-xl shadow-2xl transition-all duration-300 group-hover:shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[320px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    if (index === 3) {
                      e.currentTarget.src = '/images/team/faith.jpg';
                    }
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md px-4 py-4 text-center -mt-6 mx-2 relative z-20"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-leruo text-sm font-medium mb-3">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-leruo transition-colors duration-300"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </a>
                  <a
                    href={member.facebook}
                    className="text-gray-400 hover:text-leruo transition-colors duration-300"
                    aria-label={`Connect with ${member.name} on Facebook`}
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Vision Section */}
      <div className="bg-gray-50 w-full py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="space-y-6">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-1 bg-leruo rounded-full"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="block text-2xl font-light italic mb-4">
                    "Where there is no vision, the people perish."
                  </span>
                  <span className="block text-sm text-gray-500 mb-2">- Proverbs 29:18</span>
                  Our vision is built on the foundation of empowerment through education, financial literacy, and sustainable community development.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-leruo/10 p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-leruo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-800 mb-3">Strategic Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To create generational impact by developing programs that foster financial independence, entrepreneurial skills, and leadership development in underserved communities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
