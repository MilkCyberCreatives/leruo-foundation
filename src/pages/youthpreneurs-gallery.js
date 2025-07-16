'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';

export default function YouthpreneursGallery() {
  const [GLightbox, setGLightbox] = useState(null);

  useEffect(() => {
    // Only run this on the client side
    import('glightbox').then((module) => {
      const lightbox = module.default({
        selector: '.glightbox',
      });
      setGLightbox(lightbox);
    });
  }, []);

  const imageList = Array.from({ length: 12 }, (_, i) => ({
    src: `/images/youthpreneurs/yp${i + 1}.jpg`,
    alt: `Youthpreneurs Image ${i + 1}`,
  }));

  return (
    <>
      <TopBar />
      <MainHeader />
      <section className="relative h-[30vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}>
        <div className="absolute inset-0 bg-[#48101f] opacity-80 z-0" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Youthpreneurs Gallery</h1>
          <p className="text-lg mt-2">Moments captured from our Youthpreneurs event.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imageList.map((image, index) => (
            <a
              key={index}
              href={image.src}
              className="glightbox block overflow-hidden rounded shadow hover:scale-105 transition"
              data-gallery="youthpreneurs-gallery"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </a>
          ))}
        </div>
      </section>

      <FooterSection />
    </>
  );
}
