import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const Projects = () => {
  const [category, setCategory] = useState('All');

  const projects = [
    {
      title: 'Movie-Recommendation System',
      category: 'Web',
      image: 'https://source.unsplash.com/random/800x600/?ecommerce',
      description: 'A full-stack online shopping platform with user authentication and payment integration.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management App',
      category: 'Mobile',
      image: 'https://source.unsplash.com/random/800x600/?mobile',
      description: 'A cross-platform mobile app for task organization and team collaboration.',
      techStack: ['Flutter', 'Firebase', 'Dart'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Image Classification Model',
      category: 'ML',
      image: 'https://source.unsplash.com/random/800x600/?machine-learning',
      description: 'A deep learning model for classifying images using convolutional neural networks.',
      techStack: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      category: 'Web',
      image: 'https://source.unsplash.com/random/800x600/?portfolio',
      description: 'A personal portfolio showcasing projects and skills with a modern UI.',
      techStack: ['React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  const categories = ['All', 'Web', 'Mobile', 'ML'];

  const filteredProjects = category === 'All' ? projects : projects.filter(project => project.category === category);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations across various technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/20">
            <div className="flex space-x-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 transform"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-all duration-300 group/link"
                  >
                    <Icon icon="logos:github-icon" width="20" height="20" className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="font-medium text-sm">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-purple-600 transition-all duration-300 group/link"
                  >
                    <Icon icon="material-symbols:link" width="20" height="20" className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="font-medium text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Icon icon="logos:github-icon" width="24" height="24" className="mr-3" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;