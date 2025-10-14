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
      setErrorMessage('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col font-sans bg-[#03002A] text-white px-4 md:px-8 lg:px-16 scroll-smooth">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-24 mb-8 tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        CONTACT US
      </h1>
      
      

      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="flex-1 p-8">
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your Message"
                  className="w-full p-3 border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  rows="6"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-gray-700 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
            {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
          </div>
        </div>

        <div className="flex-1 p-8 flex justify-center items-center">
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-full h-96">
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
              </div>

              <div className="flex items-center space-x-4">
                <MailIcon className="w-6 h-6" />
                <a href="mailto:teamvyadh@vit.ac.in" className="hover:underline">
                  teamvyadh@vit.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <PhoneIcon className="w-6 h-6" />
                <a href="tel:+917540012837" className="hover:underline">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;