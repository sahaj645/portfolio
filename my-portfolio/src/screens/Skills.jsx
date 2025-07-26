// import React, { useState, useEffect } from 'react';
// import { Code, Database, Smartphone, Cloud, Brain, Trophy, Star, Sparkles } from 'lucide-react';

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const skillCategories = [
//     {
//       title: 'Programming Languages',
//       icon: Code,
//       color: 'text-blue-600',
//       bgColor: 'from-blue-50 to-blue-100',
//       borderColor: 'border-blue-500',
//       skills: [
//         { name: 'C', desc: 'Low-level programming' },
//         { name: 'C++', desc: 'System programming' },
//         { name: 'Java', desc: 'Enterprise applications' },
//         { name: 'Python', desc: 'Data science & backend' },
//         { name: 'JavaScript', desc: 'Modern ES6+ features' },
//         { name: 'Dart', desc: 'Flutter development' },
//         { name: 'R', desc: 'Statistical computing' }
//       ]
//     },
//     {
//       title: 'Web Technologies',
//       icon: Code,
//       color: 'text-purple-600',
//       bgColor: 'from-purple-50 to-purple-100',
//       borderColor: 'border-purple-500',
//       skills: [
//         { name: 'HTML/CSS', desc: 'Modern web standards' },
//         { name: 'React.js', desc: 'Component-based UI' },
//         { name: 'Tailwind CSS', desc: 'Utility-first CSS' },
//         { name: 'Node.js', desc: 'Server-side JavaScript' },
//         { name: 'Express.js', desc: 'Web application framework' },
//         { name: 'Flask', desc: 'Python web framework' },
//         { name: 'Socket.io', desc: 'Real-time communication' }
//       ]
//     },
//     {
//       title: 'Mobile Development',
//       icon: Smartphone,
//       color: 'text-green-600',
//       bgColor: 'from-green-50 to-green-100',
//       borderColor: 'border-green-500',
//       skills: [
//         { name: 'Android', desc: 'Native Android development' },
//         { name: 'Flutter', desc: 'Cross-platform mobile apps' },
//         { name: 'Dart', desc: 'Flutter programming language' },
//       ]
//     },
//     {
//       title: 'Databases & Cloud',
//       icon: Database,
//       color: 'text-orange-600',
//       bgColor: 'from-orange-50 to-orange-100',
//       borderColor: 'border-orange-500',
//       skills: [
//         { name: 'MongoDB', desc: 'NoSQL database' },
//         { name: 'SQL', desc: 'Relational databases' },
//         { name: 'Firebase', desc: 'Backend as a Service' },
//         { name: 'Supabase', desc: 'Backend as a Service' },
//         { name: 'AWS', desc: 'Cloud computing platform' },
//       ]
//     },
//     {
//       title: 'Data Science & ML',
//       icon: Brain,
//       color: 'text-pink-600',
//       bgColor: 'from-pink-50 to-pink-100',
//       borderColor: 'border-pink-500',
//       skills: [
//         { name: 'NumPy', desc: 'Numerical computing' },
//         { name: 'Pandas', desc: 'Data manipulation' },
//         { name: 'Matplotlib', desc: 'Data visualization' },
//         { name: 'scikit-learn', desc: 'Machine learning' },
//         { name: 'Keras', desc: 'Deep learning' },
//         { name: 'TensorFlow', desc: 'ML framework' }
//       ]
//     },
//     {
//       title: 'Tools & Version Control',
//       icon: Cloud,
//       color: 'text-indigo-600',
//       bgColor: 'from-indigo-50 to-indigo-100',
//       borderColor: 'border-indigo-500',
//       skills: [
//         { name: 'Git', desc: 'Version control system' },
//         { name: 'GitHub', desc: 'Code collaboration' },
//         { name: 'VS Code', desc: 'Code editor' },
//         { name: 'Juypter Notebook', desc: 'Code editor' },
//         { name: 'Docker', desc: 'Containerization' }
//       ]
//     }
//   ];

//   const stats = [
//     { icon: Trophy, number: '25+', label: 'Technologies', color: 'text-yellow-600' },
//     { icon: Star, number: '6', label: 'Categories', color: 'text-blue-600' },
//     { icon: Code, number: '1+', label: 'Years Experience', color: 'text-purple-600' },
//     { icon: Sparkles, number: '10+', label: 'Projects Built', color: 'text-green-600' }
//   ];

//   return (
//     <section
//       id="skills"
//       className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-20 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//               Technical Skills
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               A comprehensive toolkit spanning multiple domains of software development and data science
//             </p>
//           </div>

//           {/* Skills Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {skillCategories.map((category, categoryIndex) => {
//               const IconComponent = category.icon;
//               return (
//                 <div
//                   key={category.title}
//                   className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
//                   style={{ animationDelay: `${categoryIndex * 100}ms` }}
//                 >
//                   {/* Category Header */}
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className={`p-2 rounded-lg bg-gradient-to-r ${category.bgColor}`}>
//                       <IconComponent className={`w-6 h-6 ${category.color}`} />
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {category.title}
//                     </h3>
//                   </div>

//                   {/* Skills List */}
//                   <div className="space-y-3">
//                     {category.skills.map((skill, skillIndex) => (
//                       <div
//                         key={skill.name}
//                         className="group p-3 rounded-lg bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 cursor-pointer"
//                         onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
//                         onMouseLeave={() => setHoveredSkill(null)}
//                       >
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
//                               {skill.name}
//                             </h4>
//                             <p className="text-sm text-gray-600">
//                               {skill.desc}
//                             </p>
//                           </div>
//                           <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.bgColor} transform transition-transform duration-300 ${
//                             hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'scale-150' : 'scale-100'
//                           }`}></div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//             {stats.map((stat, index) => {
//               const IconComponent = stat.icon;
//               return (
//                 <div
//                   key={stat.label}
//                   className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
//                   <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-600 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Call to Action */}
//           <div className="text-center">
//             <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 max-w-2xl mx-auto">
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Ready to Collaborate?
//               </h3>
//               <p className="text-gray-600 mb-6">
//                 Let's work together to bring your ideas to life with these technologies
//               </p>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 <Code className="w-5 h-5 mr-3" />
//                 Let's Build Something Amazing
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;




import React, { useState, useEffect } from 'react';
import SkillsBackground from '../components/Skills/SkillsBackground';
import SkillsHeader from '../components/Skills/SkillsHeader';
import SkillsGrid from '../components/Skills/SkillsGrid';
import SkillsStats from '../components/Skills/SkillsStats';
import SkillsCTA from '../components/Skills/SkillsCTA';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative"
    >
      <SkillsBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SkillsHeader />
          <SkillsGrid hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
          <SkillsStats />
          <SkillsCTA />
        </div>
      </div>
    </section>
  );
};

export default Skills;