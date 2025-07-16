'use client';
export default function ContactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Contact Details */}
        <div>
          <h2 className="text-3xl font-bold text-leruo mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            Have a question, suggestion, or want to work with us? Reach out through any of the channels below.
          </p>
          <div className="space-y-4 mt-8 text-gray-800">
            <div>
              <h4 className="font-semibold text-leruo">Phone:</h4>
              <p>+27 79 123 4567</p>
            </div>
            <div>
              <h4 className="font-semibold text-leruo">Email:</h4>
              <p>info@leruofoundation.org</p>
            </div>
            <div>
              <h4 className="font-semibold text-leruo">Address:</h4>
              <p>1103 Tugela Street, Klipfontein View, Ext 1, Midrand, 1685</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-leruo mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-leruo"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-leruo"
              />
            </div>
            <input
              type="text"
              required
              placeholder="Subject"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-leruo"
            />
            <textarea
              rows="5"
              required
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-leruo"
            ></textarea>
            <button
              type="submit"
              className="bg-leruo text-white font-semibold px-6 py-3 rounded-full hover:bg-[#3a0e1a] transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
