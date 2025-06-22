// import React from 'react';
// import { Icon } from '@iconify/react';

// const Footer = () => {
//   const quickLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const socialLinks = [
//     { name: 'LinkedIn', icon: 'logos:linkedin-icon', url: 'https://linkedin.com' },
//     { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com' },
//   ];

//   return (
//     <footer className="bg-gray-900 dark:bg-gray-950 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
//           data-aos="fade-up"
//           data-aos-duration="600"
//         >
//           <div>
//             <p className="text-gray-300 dark:text-gray-200 text-sm">
//               © 2025 John Doe. All rights reserved.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.map(link => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition duration-300 text-sm"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-white dark:text-gray-100 mb-4">Follow Me</h3>
//             <div className="flex justify-center md:justify-start space-x-4">
//               {socialLinks.map(link => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition duration-300"
//                 >
//                   <Icon icon={link.icon} width="24" height="24" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { Icon } from '@iconify/react';

// const Footer = () => {
//   const quickLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const socialLinks = [
//     { name: 'LinkedIn', icon: 'logos:linkedin-icon', url: 'https://linkedin.com' },
//     { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com' },
//   ];

//   return (
//     <footer className="bg-gray-900 py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
//           data-aos="fade-up"
//           data-aos-duration="600"
//         >
//           <div>
//             <p className="text-gray-300 text-sm">
//               © 2025 John Doe. All rights reserved.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {quickLinks.map(link => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-blue-400 transition duration-300 text-sm"
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
//             <div className="flex justify-center md:justify-start space-x-4">
//               {socialLinks.map(link => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-blue-400 transition duration-300"
//                 >
//                   <Icon icon={link.icon} width="24" height="24" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'logos:linkedin-icon', url: 'https://linkedin.com' },
    { name: 'GitHub', icon: 'logos:github-icon', url: 'https://github.com' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              John Doe
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting beautiful digital experiences with modern technologies and innovative solutions.
            </p>
            <p className="text-gray-400 text-sm">
              © 2025 John Doe. All rights reserved.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-300 text-sm inline-flex items-center gap-2 hover:translate-x-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Icon icon={link.icon} width="20" height="20" />
                </a>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-gray-400 text-xs">
                Built with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;