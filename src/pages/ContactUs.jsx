import React, { useState } from 'react';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interests: []
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      message: '',
      interests: []
    });
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <>
      <AppNavbar />
      <div className="min-h-screen bg-gradient-to-b  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-slate-400 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Column - Contact Info */}
              <div className="w-full lg:w-1/3 bg-[#032541] p-8 text-white">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Let's discuss something cool together</h1>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <span className="mr-3 text-xl">📌</span>
                    <div>
                      <h3 className="font-semibold text-slate-300">Email</h3>
                      <p className="text-slate-200">Scoottzz55@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="mr-3 text-xl">📞</span>
                    <div>
                      <h3 className="font-semibold text-slate-300">Phone</h3>
                      <p className="text-slate-200">012 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="mr-3 text-xl">🗺️</span>
                    <div>
                      <h3 className="font-semibold text-slate-300">Address</h3>
                      <p className="text-slate-200">Chrouy Chongva, Phnom Penh </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="w-full lg:w-2/3 bg-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send message
                  </button>
                </form>

                {submitSuccess && (
                  <div className="mt-6 p-4 bg-green-100 border border-green-200 text-green-700 rounded-lg text-center">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactForm;