// import React from 'react';

// const Experience = () => {
//   const experiences = [
//     {
//       company: 'Tech Corp',
//       role: 'Frontend Intern',
//       duration: 'June 2022 - December 2022',
//       description:
//         'Developed responsive UI components for a web application, collaborated with designers to implement pixel-perfect designs, and optimized performance using React best practices.',
//       techStack: ['React', 'Tailwind CSS', 'JavaScript'],
//     },
//     {
//       company: 'Innovate Solutions',
//       role: 'Mobile Developer Intern',
//       duration: 'January 2023 - May 2023',
//       description:
//         'Built a cross-platform mobile app using Flutter, integrated Firebase for real-time data syncing, and conducted unit testing to ensure app reliability.',
//       techStack: ['Flutter', 'Dart', 'Firebase'],
//     },
//     {
//       company: 'Data Insights Ltd',
//       role: 'Machine Learning Intern',
//       duration: 'June 2023 - August 2023',
//       description:
//         'Designed and trained a predictive model using TensorFlow, performed data preprocessing with Pandas, and presented findings to stakeholders.',
//       techStack: ['Python', 'TensorFlow', 'Pandas'],
//     },
//   ];

//   return (
//     <section id="experience" className="py-16 bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2
//           className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
//           data-aos="fade-down"
//           data-aos-duration="600"
//         >
//           Experience
//         </h2>
//         <div className="relative">
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-600"></div>
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center mb-12 ${
//                 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//               }`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//               data-aos-duration="600"
//               data-aos-delay={index * 100}
//             >
//               <div className="w-full md:w-5/12 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   {exp.role}
//                 </h3>
//                 <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
//                 <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
//                   {exp.duration}
//                 </p>
//                 <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
//                   {exp.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {exp.techStack.map(tech => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="hidden md:flex w-0 md:w-2/12 justify-center">
//                 <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
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

// import React from 'react';

// const Experience = () => {
//   const experiences = [
//     {
//       company: 'Tech Corp',
//       role: 'Frontend Intern',
//       duration: 'June 2022 - December 2022',
//       description:
//         'Developed responsive UI components for a web application, collaborated with designers to implement pixel-perfect designs, and optimized performance using React best practices.',
//       techStack: ['React', 'Tailwind CSS', 'JavaScript'],
//     },
//     {
//       company: 'Innovate Solutions',
//       role: 'Mobile Developer Intern',
//       duration: 'January 2023 - May 2023',
//       description:
//         'Built a cross-platform mobile app using Flutter, integrated Firebase for real-time data syncing, and conducted unit testing to ensure app reliability.',
//       techStack: ['Flutter', 'Dart', 'Firebase'],
//     },
//     {
//       company: 'Data Insights Ltd',
//       role: 'Machine Learning Intern',
//       duration: 'June 2023 - August 2023',
//       description:
//         'Designed and trained a predictive model using TensorFlow, performed data preprocessing with Pandas, and presented findings to stakeholders.',
//       techStack: ['Python', 'TensorFlow', 'Pandas'],
//     },
//   ];

//   return (
//     <section id="experience" className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2
//           className="text-4xl font-bold text-center text-gray-900 mb-12"
//           data-aos="fade-down"
//           data-aos-duration="600"
//         >
//           Experience
//         </h2>
//         <div className="relative">
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
//           {experiences.map((exp, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center mb-12 ${
//                 index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//               }`}
//               data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
//               data-aos-duration="600"
//               data-aos-delay={index * 100}
//             >
//               <div className="w-full md:w-5/12 bg-gray-100 rounded-lg shadow-md p-6">
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {exp.role}
//                 </h3>
//                 <p className="text-lg text-blue-600">{exp.company}</p>
//                 <p className="text-sm text-gray-500 mb-2">
//                   {exp.duration}
//                 </p>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {exp.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   {exp.techStack.map(tech => (
//                     <span
//                       key={tech}
//                       className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div className="hidden md:flex w-0 md:w-2/12 justify-center">
//                 <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
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

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Corp',
      role: 'Frontend Intern',
      duration: 'June 2022 - December 2022',
      description:
        'Developed responsive UI components for a web application, collaborated with designers to implement pixel-perfect designs, and optimized performance using React best practices.',
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'Innovate Solutions',
      role: 'Mobile Developer Intern',
      duration: 'January 2023 - May 2023',
      description:
        'Built a cross-platform mobile app using Flutter, integrated Firebase for real-time data syncing, and conducted unit testing to ensure app reliability.',
      techStack: ['Flutter', 'Dart', 'Firebase'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'Data Insights Ltd',
      role: 'Machine Learning Intern',
      duration: 'June 2023 - August 2023',
      description:
        'Designed and trained a predictive model using TensorFlow, performed data preprocessing with Pandas, and presented findings to stakeholders.',
      techStack: ['Python', 'TensorFlow', 'Pandas'],
      color: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-12"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          Experience
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="w-full md:w-5/12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium mb-4`}>
                  {exp.duration}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {exp.role}
                </h3>
                <p className="text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">{exp.company}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex w-0 md:w-2/12 justify-center">
                <div className={`w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full shadow-lg border-4 border-white`}></div>
              </div>
              <div className="hidden md:block w-0 md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;