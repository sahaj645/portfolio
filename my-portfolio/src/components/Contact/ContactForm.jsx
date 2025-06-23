import React from 'react';

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div
      className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-white/50"
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-delay="100"
    >
      <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
        Send a Message
      </h3>
      <div className="space-y-4 sm:space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-white/80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base resize-none"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-sm sm:text-base"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;