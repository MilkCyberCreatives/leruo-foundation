import TopBar from '@/components/TopBar';
import MainHeader from '@/components/MainHeader';
import FooterSection from '@/components/FooterSection';

export default function PrivacyPage() {
  return (
    <>
      <TopBar />
      <MainHeader />

      <section
        className="relative flex h-[30vh] items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#48101f] opacity-90" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Privacy & POPIA</h1>
          <p className="mt-2 text-lg">How information is handled on the Leruo Foundation website</p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl space-y-10 text-gray-700">
          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#48101f]">Information you provide</h2>
            <p className="leading-relaxed">
              When you use the contact form, you may provide your name, email address, subject and message.
              The form is submitted through Web3Forms so that Leruo Foundation can receive and respond to your enquiry.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#48101f]">Payments and donations</h2>
            <p className="leading-relaxed">
              Online donations are completed on Yoco&apos;s secure payment service. Leruo Foundation&apos;s website
              does not collect card details directly.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#48101f]">Embedded and external services</h2>
            <p className="leading-relaxed">
              Some pages use services such as Google Maps, YouTube and external social platforms. Those services may
              process technical information according to their own privacy practices when you interact with them.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl font-bold text-[#48101f]">Local browser features</h2>
            <p className="leading-relaxed">
              The private note feature on the 2026 graduation digital programme stores the note only in your browser
              on your device. It is not submitted to Leruo Foundation or stored on this website&apos;s server.
            </p>
          </div>

          <div id="popia" className="scroll-mt-28">
            <h2 className="mb-3 text-2xl font-bold text-[#48101f]">POPIA and your information</h2>
            <p className="leading-relaxed">
              Leruo Foundation aims to handle personal information responsibly and only for the purpose for which it
              was provided. If you want to ask what information was submitted through the website, request a
              correction, or raise a privacy concern, contact the Foundation using the details below.
            </p>
          </div>

          <div className="rounded-2xl border border-[#48101f]/15 bg-[#f9f2f1] p-6">
            <h2 className="mb-3 text-xl font-bold text-[#48101f]">Privacy enquiries</h2>
            <p>
              Email:{' '}
              <a className="font-semibold text-[#48101f] underline" href="mailto:connect@leruofoundation.org">
                connect@leruofoundation.org
              </a>
            </p>
            <p className="mt-2">Phone: +27 77 605 2454</p>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
