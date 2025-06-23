// import React from 'react';

// const Experience = () => {
//   const experiences = [
//     {
//       company: 'Csyrus Technologies Private Limited',
//       role: 'Backend developer',
//       duration: 'May 2025 - July 2025',
//       description:
//         'I developed FastAPI-based NLP services integrated with Pinecone for semantic search and implemented OAuth authentication using Supabase for secure user access. I also worked with AWS S3 for efficient file storage and retrieval, and utilized PostgreSQL and MongoDB to manage structured and unstructured data. Operating within Agile sprints, I contributed to test coverage using Pytest and maintained comprehensive project documentation using Jira and Confluence.',
//       techStack: ['FastApi','AWS','SQLAlchemy','Supabase','PostgreSQL'],
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       company: 'Dr. Mahesh Sharma & Associates',
//       role: 'Web developer',
//       duration: 'June 2025 - July 2025',
//       description:
//         "I developed a Cause List Simplifier for a law firm to streamline daily case listings issued by the Jaipur High Court. The original Cause Lists were published in a cluttered and unstructured format, making it time-consuming for legal professionals to extract relevant case information. My solution parsed and transformed this data into a clean, organized format, significantly improving readability and efficiency for the firm's daily workflow.",
//       techStack: ['React','Node.js'],
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       company: 'Algabay',
//       role: 'Frontend devloper',
//       duration: 'June 2023 - August 2023',
//       description:
//         'I developed and launched a responsive website using React.js and Tailwind CSS, delivering a high-fidelity user interface that enhanced user engagement. I collaborated closely with design teams to accurately translate complex wireframes into fully functional, interactive web pages, ensuring consistency with the intended user experience and design goals.',
//       techStack: ['React', 'TypeScript', 'Tailwind CSS'],
//       color: 'from-green-500 to-emerald-500'
//     },
//   ];

//   return (
//     <section id="experience" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-gray-100 relative">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-10 sm:top-20 left-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <h2
//           className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 sm:mb-12"
//           data-aos="fade-down"
//           data-aos-duration="600"
//         >
//           Experience
//         </h2>
//         <div className="relative">
//           {/* Desktop Timeline */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
          
//           {/* Mobile Timeline */}
//           <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
          
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-start md:items-center mb-8 sm:mb-12 relative ${
//                 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//               }`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//               data-aos-duration="600"
//               data-aos-delay={index * 100}
//             >
//               {/* Mobile Timeline Dot */}
//               <div className="md:hidden absolute left-2.5 top-6 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-2 border-white shadow-lg"></div>
              
//               {/* Content Card */}
//               <div className="w-full md:w-5/12 ml-8 md:ml-0 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
//                 <div className={`inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4`}>
//                   {exp.duration}
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
//                   {exp.role}
//                 </h3>
//                 <p className="text-base sm:text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{exp.company}</p>
//                 <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
//                   {exp.description}
//                 </p>
//                 <div className="flex flex-wrap gap-1.5 sm:gap-2">
//                   {exp.techStack.map(tech => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 sm:px-3 sm:py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium border border-blue-200"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Desktop Timeline Elements */}
//               <div className="hidden md:flex w-0 md:w-2/12 justify-center">
//                 <div className={`w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full shadow-lg border-4 border-white`}></div>
//               </div>
//               <div className="hidden md:block w-0 md:w-5/12"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


import React from 'react';
import ExperienceBackground from '../components/Experience/ExperienceBackground';
import ExperienceHeader from '../components/Experience/ExperienceHeader';
import ExperienceTimeline from '../components/Experience/ExperienceTimeline';

const Experience = () => {
  const experiences = [
    {
      company: 'Csyrus Technologies Private Limited',
      role: 'Backend developer',
      duration: 'May 2025 - July 2025',
      description:
        'I developed FastAPI-based NLP services integrated with Pinecone for semantic search and implemented OAuth authentication using Supabase for secure user access. I also worked with AWS S3 for efficient file storage and retrieval, and utilized PostgreSQL and MongoDB to manage structured and unstructured data. Operating within Agile sprints, I contributed to test coverage using Pytest and maintained comprehensive project documentation using Jira and Confluence.',
      techStack: ['FastApi', 'AWS', 'SQLAlchemy', 'Supabase', 'PostgreSQL'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'Dr. Mahesh Sharma & Associates',
      role: 'Web developer',
      duration: 'June 2025 - July 2025',
      description:
        "I developed a Cause List Simplifier for a law firm to streamline daily case listings issued by the Jaipur High Court. The original Cause Lists were published in a cluttered and unstructured format, making it time-consuming for legal professionals to extract relevant case information. My solution parsed and transformed this data into a clean, organized format, significantly improving readability and efficiency for the firm's daily workflow.",
      techStack: ['React', 'Node.js'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Algabay',
      role: 'Frontend devloper',
      duration: 'June 2023 - August 2023',
      description:
        'I developed and launched a responsive website using React.js and Tailwind CSS, delivering a high-fidelity user interface that enhanced user engagement. I collaborated closely with design teams to accurately translate complex wireframes into fully functional, interactive web pages, ensuring consistency with the intended user experience and design goals.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="experience" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-gray-100 relative">
      <ExperienceBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ExperienceHeader />
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
};

export default Experience;