export default function HeroBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/videos/hero.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Empowering the Next Generation
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Driving change through leadership, innovation, and community.
        </p>
        <a
          href="#donate"
          className="bg-white text-[#48101f] font-bold px-8 py-3 rounded-full text-lg shadow-md hover:bg-gray-100 transition"
        >
          PARTNER WITH US
        </a>
      </div>
    </section>
  );
}
