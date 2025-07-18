'use client';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '226709a2-37e7-40a9-8684-5854ec2787b6',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          replyto: formData.email,
          confirmation_email: true // ✅ Sends confirmation to sender
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(result.message || 'Failed to send message');
      }
    } catch (err) {
      setError('An error occurred while sending your message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#48101f] mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, partnership ideas, or just want to say hello.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="bg-[#f9f2f1] rounded-2xl p-8 lg:p-10 shadow-sm">
            <h3 className="text-2xl font-bold text-[#48101f] mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#48101f] text-white p-3 rounded-full">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#48101f]">Phone</h4>
                  <a href="tel:+27776052454" className="text-gray-700 hover:text-[#48101f]">+27 77 605 2454</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48101f] text-white p-3 rounded-full">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#48101f]">Email</h4>
                  <a href="mailto:connect@leruofoundation.org" className="text-gray-700 hover:text-[#48101f]">connect@leruofoundation.org</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#48101f] text-white p-3 rounded-full">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#48101f]">Address</h4>
                  <p className="text-gray-700">1103 Tugela Street, Klipfontein View Ext 1, Midrand, 1685</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#48101f]/20 shadow-sm">
            <h3 className="text-2xl font-bold text-[#48101f] mb-8">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#48101f]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#48101f]"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#48101f]"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#48101f]"
              ></textarea>

              {error && <div className="text-red-600">{error}</div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#48101f] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3a0c19] transition-colors"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <FiSend className="inline mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg mt-4">
                  ✅ Your message has been sent successfully. Please check your email!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
