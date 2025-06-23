import React from 'react';

const HeroBackground = ({ mousePosition }) => {
  return (
    <>
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
    </>
  );
};

export default HeroBackground;