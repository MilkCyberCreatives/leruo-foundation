'use client';
export default function GoogleMapSection() {
  return (
    <section className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.431408127465!2d28.15986397541017!3d-26.052153877170543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956defc76f0385%3A0x6388b34b061a83f!2sCRM%20Enterprise%20(PTY)%20LTD!5e0!3m2!1sen!2sza!4v1752590914491!5m2!1sen!2sza"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
