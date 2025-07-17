export default function HeroBanner() {
  // Cloudinary-hosted video URL
  const videoUrl = "https://res.cloudinary.com/dpkqxcdlv/video/upload/v1752740523/hero_fi1w4g.mp4";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video - Cloudinary */}
      <video
        src={videoUrl}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
          Empowering the Next Generation
        </h1>
        <p className="text-xl md:text-xl mb-8 max-w-2xl font-light tracking-wide">
          Driving change through leadership, innovation, and community.
        </p>
        <a
          href="/becomesponsor"
          className="bg-white text-[#48101f] font-bold px-10 py-3 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
        >
          PARTNER WITH US
        </a>
      </div>
    </section>
  );
}
