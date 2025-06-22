// import React, { useState, useEffect } from 'react';
// import { Icon } from '@iconify/react';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   useEffect(() => {
//     // Initialize theme on mount
//     const savedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initialDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
//     console.log('Initializing theme:', { savedTheme: 'dark', prefersDark: true, initialDark: true });
//     setDarkMode(initialDark);
//     if (initialDark) {
//       document.documentElement.classList.add('dark-mode');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     console.log('Toggling theme to:', newDarkMode ? 'dark' : 'light');
//     localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
//     if (newDarkMode) {
//       document.documentElement.classList.add('dark-mode');
//     } else {
//       document.documentElement.classList.remove('dark-mode');
//     }
//   };

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
//               MyPortfolio
//             </a>
//           </div>
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map(link => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
//               aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//             >
//               <Icon
//                 icon={darkMode ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'}
//                 width="20"
//                 height="20"
//               />
//             </button>
//             <button
//               className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
//               onClick={toggleMobileMenu}
//               aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {navLinks.map(link => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition duration-300"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <a href="#home" className="text-2xl font-bold text-gray-800">
//               MyPortfolio
//             </a>
//           </div>
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map(link => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-600 hover:text-gray-900 transition duration-300"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//           <div className="flex items-center">
//             <button
//               className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
//               onClick={toggleMobileMenu}
//               aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {navLinks.map(link => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block text-gray-600 hover:text-gray-900 transition duration-300"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







































// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <a 
//               href="#home" 
//               className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
//             >
//               MyPortfolio
//             </a>
//           </div>
          
//           <div className="hidden md:flex space-x-8 items-center">
//             {navLinks.map(link => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium group"
//               >
//                 {link.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             ))}
//           </div>
          
//           <div className="flex items-center">
//             <button
//               className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
//               onClick={toggleMobileMenu}
//               aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
//             >
//               <svg
//                 className="h-6 w-6 transform transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       <div className={`md:hidden transition-all duration-300 ease-in-out ${
//         isMobileMenuOpen 
//           ? 'max-h-screen opacity-100' 
//           : 'max-h-0 opacity-0 overflow-hidden'
//       }`}>
//         <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-blue-100">
//           {navLinks.map((link, index) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-1"
//               style={{
//                 animationDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
//               }}
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;








import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if (href === '#home') {
      // Scroll to top for home
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Handle other sections
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const navbarHeight = 64; // Height of your navbar (h-16 = 64px)
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              MyPortfolio
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <div className="flex items-center">
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg
                className="h-6 w-6 transform transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md border-t border-blue-100">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-1"
              style={{
                animationDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;