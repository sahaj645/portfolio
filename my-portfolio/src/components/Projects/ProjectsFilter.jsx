import React from 'react';

const ProjectsFilter = ({ categories, category, setCategory }) => {
  return (
    <div className="flex justify-center mb-8 sm:mb-12">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/20 mx-4">
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                category === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsFilter;