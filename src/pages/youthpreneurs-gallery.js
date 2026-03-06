'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaImages } from 'react-icons/fa';
import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';

export default function YouthpreneursGallery() {
  useEffect(() => {
    let lightbox;
    let mounted = true;

    import('glightbox').then((module) => {
      if (!mounted) {
        return;
      }

      lightbox = module.default({
        selector: '.glightbox',
      });
    });

    return () => {
      mounted = false;
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, []);

  const imageList = Array.from({ length: 12 }, (_, i) => ({
    src: `/images/youthpreneurs/gallery/yg${i + 1}.jpg`,
    alt: `Youthpreneurs Image ${i + 1}`,
  }));

  return (
    <>
      <TopBar />
      <MainHeader />

      <section
        className="relative h-[30vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
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
              className="glightbox relative block h-64 overflow-hidden rounded shadow transition hover:scale-105"
              data-gallery="youthpreneurs-gallery"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={70}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </a>
          ))}
        </div>

        {/* Button to View More */}
        <div className="flex justify-center mt-10">
          <Link
            href="/gallerydrive"
            className="inline-flex items-center px-6 py-3 bg-[#ffc107] text-[#48101f] font-semibold rounded-lg shadow hover:bg-white transition"
          >
            <FaImages className="mr-2" />
            View More Pictures
          </Link>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
