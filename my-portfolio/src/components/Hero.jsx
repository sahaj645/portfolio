import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin, MapPin, Coffee, Code2, Sparkles,Smartphone ,Laptop,BrainCircuit } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const roles = useMemo(() => [
    { text: 'Full Stack Developer', icon: Code2, color: 'text-blue-300' },
    { text: 'Web Developer', icon: Laptop, color: 'text-green-300' },
    { text: 'Mobile Developer', icon: Smartphone, color: 'text-yellow-300' },
    { text: 'ML Developer', icon: BrainCircuit, color: 'text-purple-300' },
    { text: 'UI/UX Enthusiast', icon: Sparkles, color: 'text-pink-300' },
    { text: 'Tech Explorer', icon: Code2, color: 'text-indigo-300' },
    { text: 'Good Human', icon: Coffee, color: 'text-red-300' }
  ], []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole].text;
    let timeout;

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 50); // Faster typing speed
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Shorter pause duration
      }
    } else {
      // Deleting phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30); // Much faster deleting speed
      } else {
        // Move to next role and start typing
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const currentRoleData = roles[currentRole];
  const IconComponent = currentRoleData.icon;

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-white/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.5}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-blue-300/10 rounded-full blur-2xl transition-all duration-1500"
          style={{
            right: `${mousePosition.x * 0.3}%`,
            bottom: `${mousePosition.y * 0.3}%`,
            transform: 'translate(50%, 50%)'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main heading with enhanced animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-4 border border-white/20">
              <MapPin className="w-4 h-4" />
              <span>India</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-2 tracking-tight">
            <span className="inline-block transform hover:scale-105 transition-transform duration-300">
              Aabhas
            </span>
            <span className="inline-block transform hover:scale-105 transition-transform duration-300 delay-75 ml-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Gaur
            </span>
          </h1>

          {/* Enhanced role display with typewriter effect */}
          <div className="h-20 flex items-center justify-center mb-4">
            <div className={`flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-medium transition-all duration-500 ${currentRoleData.color}`}>
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" />
              <span className="transform transition-all duration-500 min-w-0">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>

          {/* Enhanced description */}
          <p className="text-lg sm:text-xl text-white/90 mt-6 max-w-2xl mx-auto leading-relaxed">
            Crafting <span className="font-semibold text-blue-200">innovative digital solutions</span> with 
            passion for <span className="font-semibold text-purple-200">clean code</span> and 
            <span className="font-semibold text-pink-200"> exceptional user experiences</span>.
          </p>

          {/* Stats or highlights */}
          <div className="flex justify-center gap-8 mt-8 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/70">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3+</div>
              <div className="text-sm text-white/70">Years Exp</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/70">Dedication</div>
            </div>
          </div>

          {/* Enhanced action buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="/resume.pdf"
              className="group relative px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              View Resume
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-base sm:text-lg font-semibold transform hover:-translate-y-1 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <Mail className="w-5 h-5 group-hover:animate-pulse" />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/AabhasGaur19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aabhas-gaur-13406123a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center text-white/70 hover:text-white transition-all duration-300 group"
        >
          <span className="text-sm mb-2 group-hover:animate-pulse">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;