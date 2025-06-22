import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    'Programming Languages': [
      { name: 'C', icon: 'logos:c' },
      { name: 'C++', icon: 'logos:cplusplus' },
      { name: 'Java', icon: 'logos:java' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'R', icon: 'logos:r-lang' },
      { name: 'Dart', icon: 'logos:dart' },
    ],
    'Web Technologies': [
      { name: 'HTML/CSS', icon: 'logos:html-5' },
      { name: 'React.js', icon: 'logos:react' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Express.js', icon: 'logos:express' },
      { name: 'Flask', icon: 'logos:flask' },
    ],
    'Databases & Cloud': [
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      { name: 'SQL Plus', icon: 'logos:oracle' },
      { name: 'AWS', icon: 'logos:aws' },
    ],
    'Mobile & Tools': [
      { name: 'Flutter', icon: 'logos:flutter' },
      { name: 'Socket.io', icon: 'logos:socket-io' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'logos:github-icon' },
    ],
    'Data Science & ML': [
      { name: 'NumPy', icon: 'logos:numpy' },
      { name: 'Pandas', icon: 'logos:pandas' },
      { name: 'Matplotlib', icon: 'logos:matplotlib-icon' },
      { name: 'scikit-learn', icon: 'logos:scikit-learn' },
      { name: 'Keras', icon: 'logos:keras' },
      { name: 'TensorFlow', icon: 'logos:tensorflow' },
    ],
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple domains of software development and data science
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([categoryName, skills]) => (
            <div key={categoryName} className="group">
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {categoryName}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6 justify-center">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative group/skill"
                    onMouseEnter={() => setHoveredSkill(`${categoryName}-${skill.name}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Card */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 transform group-hover/skill:scale-105">
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl group-hover/skill:from-blue-100 group-hover/skill:to-purple-100 transition-all duration-300">
                          <Icon 
                            icon={skill.icon} 
                            width="48" 
                            height="48" 
                            className="group-hover/skill:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-center text-sm font-semibold text-gray-800 mb-3">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '25+', label: 'Technologies' },
            { number: '5+', label: 'Categories' },
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Built' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to collaborate on your next project?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Icon icon="material-symbols:mail-outline" width="24" height="24" className="mr-3" />
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
