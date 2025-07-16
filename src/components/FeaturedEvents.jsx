import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const events = [
  {
    title: 'Branding Chief Executive Circle SA',
    description: 'An elite networking and development program for brand-driven executives.',
    image: '/images/branding-circle.jpg',
    link: '/brandingcircle',
  },
  {
    title: 'Youthpreneurs',
    description: 'Equipping young minds with tools to create and scale sustainable businesses.',
    image: '/images/youthpreneurs.jpg',
    link: '/youthpreneurs2025',
  },
  {
    title: 'Women CEO’s Network',
    description: 'Empowering women in leadership to build, lead and leave legacy.',
    image: '/images/womenceos.jpg',
    link: '/womenceo',
  },
];

export default function FeaturedEvents() {
  return (
    <section className="py-20 bg-white text-center">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-leruo mb-4">Featured Events</h2>
        <p className="text-gray-600 mb-12">
          Explore our signature initiatives that are transforming lives and building communities through leadership, innovation, and empowerment.
        </p>
      </motion.div>

      <div className="flex overflow-x-auto scrollbar-hide space-x-6 px-4 md:px-0 md:grid md:grid-cols-3 md:gap-8 md:space-x-0 max-w-7xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] max-w-sm bg-gray-50 shadow-md rounded-xl p-5 flex-shrink-0 transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg w-full h-56 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-leruo mb-2">{event.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{event.description}</p>

            <div className="flex justify-between items-center mt-4">
              <a
                href={event.link}
                className="inline-block bg-leruo text-white text-sm px-4 py-2 rounded-full hover:bg-opacity-90 transition"
              >
                Learn More
              </a>
              <div className="flex gap-3 text-leruo text-sm">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${event.link}`} target="_blank" rel="noopener noreferrer" title="Share on Facebook"><FaFacebookF /></a>
                <a href={`https://twitter.com/intent/tweet?url=${event.link}`} target="_blank" rel="noopener noreferrer" title="Share on Twitter"><FaTwitter /></a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${event.link}`} target="_blank" rel="noopener noreferrer" title="Share on LinkedIn"><FaLinkedinIn /></a>
                <a href={`https://wa.me/?text=${event.link}`} target="_blank" rel="noopener noreferrer" title="Share on WhatsApp"><FaWhatsapp /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
