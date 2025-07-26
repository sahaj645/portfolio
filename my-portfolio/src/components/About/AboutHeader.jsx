import React from 'react';

const AboutHeader = () => {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        About Me
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
        Competitive and driven developer who thrives on solving complex problems and delivering high-quality digital solutions with modern technologies.
      </p>
    </div>
  );
};

export default AboutHeader;