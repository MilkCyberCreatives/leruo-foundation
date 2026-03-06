'use client';

import React from 'react';
import Image from 'next/image';

export default function BrandingCircleIntro() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf7_0%,#fff4ee_32%,#fffdfb_100%)] px-4 py-18 sm:px-6 lg:px-20">
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(72,16,31,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(72,16,31,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"
        aria-hidden="true"
      />
      <div
        className="absolute left-[-10rem] top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(201,165,106,0.26),_transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-7rem] bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(72,16,31,0.12),_transparent_68%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_72%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-18 xl:gap-24">
          <div className="relative">
            <div
              className="absolute left-0 top-10 hidden h-24 w-24 rounded-[1.75rem] border border-[#48101f]/10 bg-white/60 lg:block"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-12 right-10 hidden h-16 w-16 rounded-full border border-[#c9a56a]/40 bg-[#fff8f2] lg:block"
              aria-hidden="true"
            />
            <div className="relative rounded-[2rem] border border-[#48101f]/10 bg-white/78 p-8 sm:p-10 lg:p-12 backdrop-blur-md">
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="h-px w-14 bg-[linear-gradient(90deg,#48101f,rgba(72,16,31,0))]" aria-hidden="true" />
                <span className="text-sm font-medium tracking-[0.18em] text-[#48101f]">
                  branding chief executive circle sa
                </span>
                <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(72,16,31,0.2),rgba(72,16,31,0))]" aria-hidden="true" />
              </div>

              <h2 className="max-w-2xl text-3xl font-bold leading-[1.05] text-[#48101f] sm:text-4xl lg:text-[3rem]">
                About Branding Chief Executive Circle SA
              </h2>

              <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.3fr)_minmax(240px,0.7fr)] xl:items-start">
                <p className="max-w-2xl text-lg leading-relaxed text-gray-700">
                  Branding Chief Executive Circle SA is an initiative aimed at equipping entrepreneurs with the knowledge, tools,
                  and mentorship needed to develop powerful brand identities that resonate with their target markets.
                  Through interactive workshops, expert-led discussions, and real-life brand case studies, participants
                  learn to build authentic and impactful brand strategies that drive business success.
                </p>

                <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                  <span className="rounded-[1.4rem] border border-[#48101f]/10 bg-[linear-gradient(180deg,#fffdfb_0%,#fff5ee_100%)] px-4 py-4 text-sm font-medium text-gray-700">
                    high-level insights
                  </span>
                  <span className="rounded-[1.4rem] border border-[#48101f]/10 bg-[linear-gradient(180deg,#fffdfb_0%,#fff5ee_100%)] px-4 py-4 text-sm font-medium text-gray-700">
                    executive networking
                  </span>
                  <span className="rounded-[1.4rem] border border-[#48101f]/10 bg-[linear-gradient(180deg,#fffdfb_0%,#fff5ee_100%)] px-4 py-4 text-sm font-medium text-gray-700">
                    real-world case studies
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex w-full justify-center lg:justify-end">
            <div
              className="absolute left-6 right-12 top-10 h-[88%] rounded-[2.75rem] border border-[#48101f]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,245,238,0.6))]"
              aria-hidden="true"
            />
            <div
              className="absolute right-2 top-0 h-28 w-28 rounded-[1.8rem] border border-[#c9a56a]/35 bg-[#fff8f1]"
              aria-hidden="true"
            />
            <div className="relative w-full max-w-[34rem] rounded-[2.75rem] border border-[#48101f]/12 bg-white/82 p-4 sm:p-5 backdrop-blur-md">
              <div
                className="absolute inset-4 rounded-[2.15rem] border border-dashed border-[#48101f]/14"
                aria-hidden="true"
              />
              <div className="relative rounded-[2.2rem] bg-[linear-gradient(160deg,#fffdfa_0%,#f7eee9_52%,#fff8f3_100%)] p-5 sm:p-6">
                <div
                  className="absolute left-5 top-5 rounded-full border border-[#48101f]/10 bg-white/80 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#48101f]"
                  aria-hidden="true"
                />
                <div className="relative mx-auto w-full max-w-md aspect-[210/297] overflow-hidden rounded-[1.8rem] border border-[#48101f]/10 bg-white">
                  <div
                    className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.26),transparent_18%,transparent_82%,rgba(72,16,31,0.05))]"
                    aria-hidden="true"
                  />
                  <Image
                    src="/bc-launch.jpg"
                    alt="Branding Chief Executive Circle SA launch poster"
                    fill
                    quality={72}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 34rem"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
