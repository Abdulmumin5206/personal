import { useEffect, useState } from 'react';

const BackgroundParticles = () => {
  const [particles] = useState(() => 
    Array.from({ length: 8 }, () => ({
      size: Math.random() * 50 + 10,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 15 + 15,
      animationDelay: Math.random() * 2,
      floatType: Math.floor(Math.random() * 3)
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div 
          key={i}
          className="absolute bg-teal-custom/50 rounded-full will-change-transform"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
            animation: `float-${particle.floatType} ${particle.animationDuration}s infinite ease-in-out`,
            animationDelay: `${particle.animationDelay}s`,
            transform: 'translateZ(0)', // Force GPU acceleration
            backfaceVisibility: 'hidden' // Optimize rendering
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles; 