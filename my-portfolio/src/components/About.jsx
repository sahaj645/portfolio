import React, { useState, useEffect } from "react";
import { GraduationCap, Award, Calendar, MapPin, Download, User, Code, Brain, Sparkles, Trophy, Star } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const achievements = [
    { icon: Trophy, label: "CGPA", value: "9.19/10", color: "text-yellow-600" },
    { icon: Star, label: "12th Grade", value: "94.8%", color: "text-blue-600" },
    { icon: Award, label: "10th Grade", value: "91.2%", color: "text-purple-600" },
    { icon: Code, label: "Projects", value: "10+", color: "text-green-600" }
  ];

  const interests = [
    { icon: Code, name: "Clean Code", description: "Writing maintainable and efficient code" },
    { icon: Brain, name: "AI/ML", description: "Exploring intelligent solutions" },
    { icon: Sparkles, name: "Innovation", description: "Creating impactful digital products" },
    { icon: User, name: "User Experience", description: "Designing intuitive interfaces" }
  ];

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={achievement.label}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className={`w-8 h-8 mx-auto mb-2 ${achievement.color}`} />
                  <div className="text-2xl font-bold text-gray-800">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              );
            })}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-lg border border-white/50">
              {['overview', 'education'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100 h-full">
                
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <User className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Who I Am
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      I'm a passionate web, mobile, and AI/ML developer currently pursuing my studies in Computer Science. 
                      I enjoy building responsive applications using <span className="font-semibold text-blue-600">React</span>, 
                      <span className="font-semibold text-green-600"> Tailwind CSS</span>, and 
                      <span className="font-semibold text-purple-600"> Flutter</span>, while exploring intelligent solutions with machine learning.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Focused on clean design and exceptional user experience, I'm constantly learning and striving to craft 
                      impactful digital products that make a difference.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {interests.map((interest, index) => {
                        const IconComponent = interest.icon;
                        return (
                          <div key={interest.name} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                            <IconComponent className="w-5 h-5 text-blue-600 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-gray-800">{interest.name}</h4>
                              <p className="text-sm text-gray-600">{interest.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Education Journey
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                                Bachelor of Technology in Computer Science and Engineering
                              </h4>
                              <div className="flex items-center gap-2 text-gray-600 mb-2">
                                <MapPin className="w-4 h-4" />
                                <span>VIT University, Vellore</span>
                              </div>
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <Trophy className="w-4 h-4 text-yellow-600" />
                                  <span className="text-blue-600 font-medium">CGPA: 9.19/10</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  <span className="text-gray-500 text-sm">2022-2026</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          Higher Secondary Education (12th Grade)
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>Maa Bharti Senior Secondary School</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-blue-600" />
                          <span className="text-blue-600 font-medium">Percentage: 94.8%</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          Secondary Education (10th Grade)
                        </h4>
                        <div className="flex items-center gap-2 text-gray-600 mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>Maa Bharti Senior Secondary School</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-purple-600" />
                          <span className="text-blue-600 font-medium">Percentage: 91.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Quick Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Year</span>
                    <span className="font-semibold text-gray-800">4th Year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Specialization</span>
                    <span className="font-semibold text-gray-800">Full Stack</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-semibold text-gray-800">3+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-gray-800">Rajasthan, IN</span>
                  </div>
                </div>
              </div>

              {/* Download Resume */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Get My Resume</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Download my complete resume with detailed information about my experience and projects.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2 font-medium"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;