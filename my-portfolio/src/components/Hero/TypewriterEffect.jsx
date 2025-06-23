import React, { useState, useEffect, useMemo } from 'react';
import { Code2, Smartphone, Laptop, BrainCircuit, Sparkles, Coffee } from 'lucide-react';

const TypewriterEffect = () => {
  const [currentRole, setCurrentRole] = useState(0);
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
    const currentText = roles[currentRole].text;
    let timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  const currentRoleData = roles[currentRole];
  const IconComponent = currentRoleData.icon;

  return (
    <div className={`flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium transition-all duration-500 ${currentRoleData.color}`}>
      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse" />
      <span className="transform transition-all duration-500 min-w-0">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export default TypewriterEffect;