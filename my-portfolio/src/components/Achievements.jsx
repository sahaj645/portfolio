// import React from 'react';
// import { Icon } from '@iconify/react';

// const Achievements = () => {
//   const achievements = [
//     {
//       title: 'AWS Certified Developer',
//       description: 'Earned the AWS Certified Developer - Associate certification, demonstrating proficiency in cloud development with AWS services.',
//       icon: 'logos:aws',
//       link: 'https://aws.amazon.com/certification/certified-developer-associate/',
//     },
//     {
//       title: 'Hackathon Winner',
//       description: 'Won 1st place in the 2022 TechFest Hackathon for developing an innovative task management app.',
//       icon: 'material-symbols:trophy',
//       link: 'https://example.com',
//     },
//     {
//       title: 'Coursera Machine Learning',
//       description: 'Completed the Machine Learning Specialization by Stanford Online on Coursera, covering supervised and unsupervised learning.',
//       icon: 'logos:coursera',
//       link: 'https://www.coursera.org/specializations/machine-learning',
//     },
//     {
//       title: 'Google Code Jam Finalist',
//       description: 'Reached the final round of Google Code Jam 2023, showcasing strong problem-solving and coding skills.',
//       icon: 'logos:google-icon',
//       link: 'https://codingcompetitions.withgoogle.com/codejam',
//     },
//   ];

//   return (
//     <section id="achievements" className="py-16 bg-gray-100 dark:bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2
//           className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
//           data-aos="fade-down"
//           data-aos-duration="600"
//         >
//           Achievements & Certifications
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {achievements.map((achievement, index) => (
//             <div
//               key={achievement.title}
//               className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//               data-aos="fade-up"
//               data-aos-duration="600"
//               data-aos-delay={index * 100}
//             >
//               <div className="flex items-center mb-4">
//                 <Icon icon={achievement.icon} width="40" height="40" className="mr-4" />
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   {achievement.title}
//                 </h3>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
//                 {achievement.description}
//               </p>
//               {achievement.link && (
//                 <a
//                   href={achievement.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
//                 >
//                   View Details
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;


// import React from 'react';
// import { Icon } from '@iconify/react';

// const Achievements = () => {
//   const achievements = [
//     {
//       title: 'AWS Certified Developer',
//       description: 'Earned the AWS Certified Developer - Associate certification, demonstrating proficiency in cloud development with AWS services.',
//       icon: 'logos:aws',
//       link: 'https://aws.amazon.com/certification/certified-developer-associate/',
//     },
//     {
//       title: 'Hackathon Winner',
//       description: 'Won 1st place in the 2022 TechFest Hackathon for developing an innovative task management app.',
//       icon: 'material-symbols:trophy',
//       link: 'https://example.com',
//     },
//     {
//       title: 'Coursera Machine Learning',
//       description: 'Completed the Machine Learning Specialization by Stanford Online on Coursera, covering supervised and unsupervised learning.',
//       icon: 'logos:coursera',
//       link: 'https://www.coursera.org/specializations/machine-learning',
//     },
//     {
//       title: 'Google Code Jam Finalist',
//       description: 'Reached the final round of Google Code Jam 2023, showcasing strong problem-solving and coding skills.',
//       icon: 'logos:google-icon',
//       link: 'https://codingcompetitions.withgoogle.com/codejam',
//     },
//   ];

//   return (
//     <section id="achievements" className="py-16 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2
//           className="text-4xl font-bold text-center text-gray-900 mb-12"
//           data-aos="fade-down"
//           data-aos-duration="600"
//         >
//           Achievements & Certifications
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {achievements.map((achievement, index) => (
//             <div
//               key={achievement.title}
//               className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
//               data-aos="fade-up"
//               data-aos-duration="600"
//               data-aos-delay={index * 100}
//             >
//               <div className="flex items-center mb-4">
//                 <Icon icon={achievement.icon} width="40" height="40" className="mr-4" />
//                 <h3 className="text-xl font-semibold text-gray-900">
//                   {achievement.title}
//                 </h3>
//               </div>
//               <p className="text-gray-600 text-sm mb-4">
//                 {achievement.description}
//               </p>
//               {achievement.link && (
//                 <a
//                   href={achievement.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline text-sm"
//                 >
//                   View Details
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;




import React from 'react';
import { Icon } from '@iconify/react';

const Achievements = () => {
  const achievements = [
    {
      title: 'AWS Certified Developer',
      description: 'Earned the AWS Certified Developer - Associate certification, demonstrating proficiency in cloud development with AWS services.',
      icon: 'logos:aws',
      link: 'https://aws.amazon.com/certification/certified-developer-associate/',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Hackathon Winner',
      description: 'Won 1st place in the 2022 TechFest Hackathon for developing an innovative task management app.',
      icon: 'material-symbols:trophy',
      link: 'https://example.com',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      title: 'Coursera Machine Learning',
      description: 'Completed the Machine Learning Specialization by Stanford Online on Coursera, covering supervised and unsupervised learning.',
      icon: 'logos:coursera',
      link: 'https://www.coursera.org/specializations/machine-learning',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      title: 'Google Code Jam Finalist',
      description: 'Reached the final round of Google Code Jam 2023, showcasing strong problem-solving and coding skills.',
      icon: 'logos:google-icon',
      link: 'https://codingcompetitions.withgoogle.com/codejam',
      color: 'from-green-400 to-emerald-500'
    },
  ];

  return (
    <section id="achievements" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-12"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          Achievements & Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/50"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg mr-4`}>
                  <Icon icon={achievement.icon} width="32" height="32" className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {achievement.description}
              </p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  View Details
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;