import React from 'react';
import { Sparkles } from 'lucide-react';

const AboutSidebar = () => {
  return (
    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-blue-100">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
          Quick Stats
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm sm:text-base">Current Year</span>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">3rd</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm sm:text-base">Specialization</span>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">Full Stack</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm sm:text-base">Experience</span>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">1+ Year</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600 text-sm sm:text-base">Location</span>
            <span className="font-semibold text-gray-800 text-sm sm:text-base">Chennai,IN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSidebar;
