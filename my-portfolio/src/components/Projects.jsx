import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import movieImage from '../assets/movie.png'; 
import chrunImage from '../assets/chrun.png'; 
import cancerImage from '../assets/cancer.png'; 
import travelImage from '../assets/travel.png'; 
import causeListImage from '../assets/causeList.png'; 
import chatImage from '../assets/chat.jpg'; 
import todoImage from '../assets/todo.jpg'; 
import mealsImage from '../assets/meals.jpg'; 
import tttImage from '../assets/ttt.jpg'; 


const Projects = () => {
  const [category, setCategory] = useState('All');

  const projects = [
    {
      title: 'Movie-Recommendation System',
      category: ['Web', 'ML'], // Changed to array to support multiple categories
      image: movieImage,
      description: 'A web application that recommends movies similar to a selected title using content-based filtering.',
      techStack: ['React', 'Fast Api', 'NLP'],
      github: 'https://github.com/AabhasGaur19/movie-recommendation-website',
      demo: 'https://movie-recommendation-website-eight.vercel.app/',
    },
    {
      title: 'Chat App',
      category: ['Mobile'],
      image: chatImage,
      description: 'A mobile application that enables seamless real-time messaging between users.',
      techStack: ['Flutter', 'Firebase', 'Dart','Node.js','MongoDB Atlas','Socket.io'],
      github: 'https://github.com/AabhasGaur19/chat-app',
      // demo: 'https://example.com',
    },
    {
      title: 'Brest cancer predection',
      category: ['ML'],
      image: cancerImage,
      description: 'A smart system that helps identify the likelihood of breast cancer early for better health outcomes.',
      techStack: ['Python', 'NumPy','Pandas','Logistic Rgression','Random Forest'],
      github: 'https://github.com/AabhasGaur19/Breast-cancer-',
      // demo: 'https://example.com',
    },
    {
      title: 'Customer Chrun Predection',
      category: ['ML'],
      image: chrunImage,
      description: 'A smart system that helps understand which customers are likely to stop using a service, enabling timely action to retain them.',
      techStack: ['Python', 'NumPy','Pandas','Logistic Rgression','Random Forest','XG boost'],
      github: 'https://github.com/AabhasGaur19/Customer-churn-rate-prediction',
      // demo: 'https://example.com',
    },
    {
      title: 'Holiday booking site',
      category: ['Web'],
      image: travelImage,
      description: 'A user-friendly platform that makes planning and booking holidays easy and hassle-free.',
      techStack: ['HTML','Css','Java-script','AOS'],
      github: 'https://github.com/AabhasGaur19/Holiday-Booking',
      // demo: 'https://example.com', // deploy this 
    },
    {
      title: 'CauseList simplifier',
      category: ['Web'],
      image: causeListImage,
      description: 'A helpful tool that simplifies and organizes complex court case lists, making them easier to understand .',
      techStack: ['React', 'Node.js'],
      github: 'https://github.com/AabhasGaur19/Mahesh-sharma-and-associate',
      demo: 'https://mahesh-sharma-and-associate.vercel.app/', // deploy this 
    },
    {
      title: 'TO-DO app',
      category: ['Mobile'],
      image: todoImage,
      description: 'An easy-to-use app that helps you organize tasks and stay on top of your daily goals.',
      techStack: ['Dart','Flutter'],
      github: 'https://github.com/AabhasGaur19/Task-app',
      // demo: '',  
    },
    {
      title: 'Meals app',
      category: ['Mobile'],
      image: mealsImage,
      description: 'A mobile app that serves as a digital menu, making it easy to browse and choose meals on the go.',
      techStack: ['Dart','Flutter'],
      github: 'https://github.com/AabhasGaur19/Meals-app',
      // demo: '',  
    },
    {
      title: 'Tic-Tac-Toe',
      category: ['Mobile'],
      image: tttImage,
      description: 'A fun and interactive game that lets users enjoy classic Tic-Tac-Toe anytime.',
      techStack: ['Dart','Flutter'],
      github: 'https://github.com/AabhasGaur19/TIC-TAC-TOE-Mobile',
      // demo: '',  
    },
  ];

  const categories = ['All', 'Web', 'Mobile', 'ML'];

  const filteredProjects = category === 'All' ? projects : projects.filter(project => 
    Array.isArray(project.category) ? project.category.includes(category) : project.category === category
  );

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
                  {Array.isArray(project.category) ? (
                    <div className="flex flex-col gap-1">
                      {project.category.map(cat => (
                        <span key={cat} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                          {cat}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                      {project.category}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-64">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4 flex-grow">
                  {project.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full border border-blue-200/50 h-fit"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="flex space-x-4 mt-auto">
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
            href="https://github.com/AabhasGaur19"
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