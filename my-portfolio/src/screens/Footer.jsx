// import React, { useState, useEffect } from "react";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Heart,
//   Code,
//   Coffee,
// } from "lucide-react";

// const Footer = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentYear] = useState(new Date().getFullYear());

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const quickLinks = [
//     { name: "Home", href: "#home", icon: "🏠" },
//     { name: "About", href: "#about", icon: "👨‍💻" },
//     { name: "Projects", href: "#projects", icon: "🚀" },
//     { name: "Skills", href: "#skills", icon: "⚡" },
//     { name: "Contact", href: "#contact", icon: "📧" },
//   ];

//   const socialLinks = [
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       url: "https://www.linkedin.com/in/aabhas-gaur-13406123a/",
//       color: "hover:text-blue-400 hover:shadow-blue-400/20",
//     },
//     {
//       name: "GitHub",
//       icon: Github,
//       url: "https://github.com/AabhasGaur19",
//       color: "hover:text-purple-400 hover:shadow-purple-400/20",
//     },
//     {
//       name: "Email",
//       icon: Mail,
//       url: "mailto:aabhasgaur@example.com",
//       color: "hover:text-green-400 hover:shadow-green-400/20",
//     },
//   ];

//   const skills = [
//     "Full Stack Developer",
//     "Web Developer",
//     "Mobile Developer",
//     "ML Developer",
//   ];

//   return (
//     <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-6 relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <div
//           className={`transform transition-all duration-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           {/* Main content */}
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-4">
//             {/* Brand section */}
//             <div className="lg:col-span-2 space-y-6">
//               <div className="space-y-4">
//                 <h2 className="text-4xl font-bold">
//                   <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                     Aabhas Gaur
//                   </span>
//                 </h2>
//                 <div className="flex items-center gap-2 text-sm text-gray-400">
//                   <Code className="w-4 h-4" />
//                   <span>Full Stack Developer</span>
//                   <Coffee className="w-4 h-4 ml-2" />
//                   <span>Coffee Enthusiast</span>
//                 </div>
//               </div>

//               <p className="text-gray-300 text-lg leading-relaxed max-w-md">
//                 Passionate about creating exceptional digital experiences
//                 through
//                 <span className="text-blue-400 font-medium"> clean code</span>,
//                 <span className="text-purple-400 font-medium">
//                   {" "}
//                   innovative design
//                 </span>
//                 , and
//                 <span className="text-pink-400 font-medium">
//                   {" "}
//                   cutting-edge technology
//                 </span>
//                 .
//               </p>

//               {/* Skills tags */}
//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, index) => (
//                   <span
//                     key={skill}
//                     className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
//                     style={{ animationDelay: `${index * 100}ms` }}
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//               {/* Contact info */}
//               <div className="space-y-2 text-sm text-gray-400">
//                 <div className="flex items-center gap-2">
//                   <MapPin className="w-4 h-4" />
//                   <span>Kota, Rajasthan, India</span>
//                 </div>
//               </div>
//             </div>

//             {/* Quick links */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white flex items-center gap-2">
//                 <ArrowRight className="w-5 h-5 text-blue-400" />
//                 Quick Links
//               </h3>
//               <ul className="space-y-3">
//                 {quickLinks.map((link, index) => (
//                   <li
//                     key={link.name}
//                     className="transform transition-all duration-300 hover:translate-x-2"
//                   >
//                     <a
//                       href={link.href}
//                       className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
//                     >
//                       <span className="text-lg">{link.icon}</span>
//                       <span className="font-medium">{link.name}</span>
//                       <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Social links */}
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-white flex items-center gap-2">
//                 <Heart className="w-5 h-5 text-pink-400" />
//                 Connect
//               </h3>
//               <div className="space-y-4">
//                 {socialLinks.map((link, index) => {
//                   const IconComponent = link.icon;
//                   return (
//                     <a
//                       key={link.name}
//                       href={link.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`group flex items-center gap-4 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg ${link.color}`}
//                     >
//                       <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
//                         <IconComponent className="w-5 h-5" />
//                       </div>
//                       <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
//                         {link.name}
//                       </span>
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Bottom section */}
//           <div className="pt-8 border-t border-gray-700">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//               <div className="flex items-center gap-2 text-gray-400 text-sm">
//                 <span>© {currentYear} Aabhas Gaur. All rights reserved.</span>
//               </div>

//               <div className="flex items-center gap-2 text-gray-400 text-sm">
//                 <span>Made with</span>
//                 <Heart className="w-4 h-4 text-red-400 animate-pulse" />
//                 <span>and lots of</span>
//                 <Coffee className="w-4 h-4 text-amber-400" />
//                 <span>by Aabhas</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom glow effect - removed to match original */}
//     </footer>
//   );
// };

// export default Footer;



import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  Heart,
  Code,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const quickLinks = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "About", href: "#about", icon: "👨‍💻" },
    { name: "Projects", href: "#projects", icon: "🚀" },
    { name: "Skills", href: "#skills", icon: "⚡" },
    { name: "Contact", href: "#contact", icon: "📧" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aabhas-gaur-13406123a/",
      color: "hover:text-blue-400 hover:shadow-blue-400/20",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/AabhasGaur19",
      color: "hover:text-purple-400 hover:shadow-purple-400/20",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:aabhasgaur@example.com",
      color: "hover:text-green-400 hover:shadow-green-400/20",
    },
  ];

  const skills = [
    "Full Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "ML Developer",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-4 sm:py-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Main content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 py-4">
            {/* Brand section */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Aabhas Gaur
                  </span>
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs sm:text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    <span>Coffee Enthusiast</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-full sm:max-w-md">
                Passionate about creating exceptional digital experiences
                through
                <span className="text-blue-400 font-medium"> clean code</span>,
                <span className="text-purple-400 font-medium">
                  {" "}
                  innovative design
                </span>
                , and
                <span className="text-pink-400 font-medium">
                  {" "}
                  cutting-edge technology
                </span>
                .
              </p>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full text-gray-300 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Kota, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link, index) => (
                  <li
                    key={link.name}
                    className="transform transition-all duration-300 hover:translate-x-2"
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 sm:gap-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                    >
                      <span className="text-base sm:text-lg">{link.icon}</span>
                      <span className="font-medium text-sm sm:text-base">{link.name}</span>
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social links */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white flex items-center gap-2">
                <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-pink-400" />
                Connect
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg ${link.color}`}
                    >
                      <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                        <IconComponent className="w-4 sm:w-5 h-4 sm:h-5" />
                      </div>
                      <span className="font-medium text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors duration-300">
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm text-center md:text-left">
                <span>© {currentYear} Aabhas Gaur. All rights reserved.</span>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-end gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm">
                <span>Made with</span>
                <Heart className="w-3 sm:w-4 h-3 sm:h-4 text-red-400 animate-pulse" />
                <span>and lots of</span>
                <Coffee className="w-3 sm:w-4 h-3 sm:h-4 text-amber-400" />
                <span>by Aabhas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;