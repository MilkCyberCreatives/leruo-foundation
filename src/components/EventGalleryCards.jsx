'use client';
import Link from 'next/link';

export default function EventGalleryCards() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Youthpreneurs Card */}
        <div className="bg-white border border-[#48101f] rounded-lg shadow hover:shadow-lg transition">
          <img
            src="/images/youthpreneurs/yp5.jpg"
            alt="Youthpreneurs 2025"
            className="w-full h-56 object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#48101f] mb-2">Youthpreneurs 2025</h3>
            <p className="text-sm text-gray-700 mb-4">
              Highlights from our Youthpreneurs event focused on innovation, empowerment, and business growth.
            </p>
            <Link
              href="/youthpreneurs-gallery"
              className="inline-block bg-[#48101f] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#3a0e1a] transition"
            >
              View Event Pictures
            </Link>
          </div>
        </div>

        {/* Placeholder for Women CEOs */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md opacity-60">
          <div className="w-full h-56 bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-500 text-sm">
            Images coming soon...
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">Women CEOs’ Network</h3>
            <p className="text-sm text-gray-500 mb-4">
              Images from this impactful gathering of women in leadership will be uploaded soon.
            </p>
            <button
              className="inline-block bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-not-allowed"
              disabled
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Placeholder for Branding Circle */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md opacity-60">
          <div className="w-full h-56 bg-gray-200 rounded-t-lg flex items-center justify-center text-gray-500 text-sm">
            Images coming soon...
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-500 mb-2">Branding Chief Executive Circle SA</h3>
            <p className="text-sm text-gray-500 mb-4">
              Images from the branding circle sessions will be uploaded soon.
            </p>
            <button
              className="inline-block bg-gray-400 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-not-allowed"
              disabled
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
