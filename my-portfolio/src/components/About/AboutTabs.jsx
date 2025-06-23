import React from 'react';

const AboutTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mb-6 sm:mb-8 px-4">
      <div className="bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/50 w-full sm:w-auto">
        <div className="flex w-full sm:w-auto">
          {['overview', 'education'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTabs;