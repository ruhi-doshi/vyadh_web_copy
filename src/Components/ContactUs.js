import React, { useState } from 'react';
import axios from 'axios';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const contactResponse = await axios.post('http://localhost:5000/api/contact', formData);

      if (contactResponse.status === 201) {
        const emailResponse = await axios.post('http://localhost:5000/api/send-email', formData);

        if (emailResponse.status === 201) {
          setSuccessMessage('Form submitted successfully!');
          setFormData({
            name: '',
            email: '',
            companyName: '',
            message: '',
          });
        } else {
          throw new Error('Failed to send email');
        }
      } else {
        throw new Error('Failed to save contact');
      }
    } catch (error) {
      setSuccessMessage('Successfully submitted the form. We will get back to you soon.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-[#03002A] text-white scroll-smooth">
      {/* Header Section */}
      <div className="pt-32 pb-12 px-4 md:px-8 lg:px-16 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4 font-lobster">
          CONTACT US
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-jost">
          Have questions or want to collaborate? We'd love to hear from you. Reach out and let's explore the unexplored together.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="flex-1">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700/50">
                <h2 className="text-xl font-semibold mb-6 text-white font-lobster">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5 font-jost">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="companyName">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter your company name (optional)"
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      rows="5"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
                {successMessage && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                    {errorMessage}
                  </div>
                )}
              </div>
            </div>

            {/* Map & Contact Info */}
            <div className="flex-1">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700/50 h-full">
                <h2 className="text-xl font-semibold mb-6 text-white font-lobster">Find Us</h2>
                
                {/* Map */}
                <div className="w-full h-72 md:h-80 rounded-xl overflow-hidden mb-8 border border-gray-700/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.218555515286!2d79.15329747457053!3d12.970083990858498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad39c05f867067%3A0x79c19a5d0e4a1095!2sVIT%20Vellore!5e0!3m2!1sen!2sin!4v1636471389048!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="VIT Location"
                  ></iframe>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-300 mb-4 font-lobster">Get in Touch</h3>
                  
                  <a 
                    href="mailto:teamvyadh@vit.ac.in" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-900/70 transition-all group font-jost"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <MailIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white group-hover:text-blue-400 transition-colors">teamvyadh@vit.ac.in</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+919818861205" 
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-900/70 transition-all group font-jost"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <PhoneIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white group-hover:text-blue-400 transition-colors">+91 98188 61205</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;