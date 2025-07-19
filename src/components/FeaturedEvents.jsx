import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

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
    link: '/youthpreneurs',
  },
  {
    title: 'Women CEO\'s Network',
    description: 'Empowering women in leadership to build, lead and leave legacy.',
    image: '/images/womenceos3.jpg',
    link: '/womenceo',
  },
];

export default function FeaturedEvents() {
  const getShareUrl = (path) => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${path}`;
    }
    return path;
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#48101f] mb-4">Featured Events</h2>
          <p className="text-gray-600 text-lg mb-12">
            Explore our signature initiatives that are transforming lives and building communities through leadership, innovation, and empowerment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-[250px]">
                <div>
                  <h3 className="text-xl font-semibold text-[#48101f] mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{event.description}</p>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <Link
                    href={event.link}
                    className="inline-block bg-[#48101f] hover:bg-[#5c1c2d] text-white font-semibold px-5 py-2 rounded-md transition duration-300"
                  >
                    Learn More
                  </Link>
                  <div className="flex gap-3 text-[#48101f] text-sm">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl(event.link))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#5c1c2d]"
                      title="Share on Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl(event.link))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#5c1c2d]"
                      title="Share on Twitter"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getShareUrl(event.link))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#5c1c2d]"
                      title="Share on LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent('Check out this event: ' + getShareUrl(event.link))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600"
                      title="Share on WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
