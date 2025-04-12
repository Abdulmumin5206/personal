import { Cog } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface InteractiveGearProps {
  onRotationSpeedChange?: (speed: number) => void;
}

const InteractiveGear = ({ onRotationSpeedChange }: InteractiveGearProps) => {
  const [rotation, setRotation] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const targetRotationSpeedRef = useRef<number>(0);
  const currentRotationSpeedRef = useRef<number>(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const gearElement = document.querySelector('.interactive-gear');
      if (gearElement) {
        const rect = gearElement.getBoundingClientRect();
        const gearCenter = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
        
        // Calculate distance from mouse to gear center
        const distance = Math.sqrt(
          Math.pow(e.clientX - gearCenter.x, 2) + 
          Math.pow(e.clientY - gearCenter.y, 2)
        );
        
        // Reduced response area for more precise control
        const maxDistance = 100; // Reduced from 200
        const minDistance = 20;  // Reduced from 30
        
        if (distance < minDistance) {
          targetRotationSpeedRef.current = 8; // Maximum speed
        } else if (distance < maxDistance) {
          // Smooth transition between speeds with adjusted curve
          const normalizedDistance = (distance - minDistance) / (maxDistance - minDistance);
          // Use a quadratic curve for smoother falloff
          targetRotationSpeedRef.current = 8 * Math.pow(1 - normalizedDistance, 2);
        } else {
          targetRotationSpeedRef.current = 0;
        }
      }
    };

    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;
      }
      
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;
      
      // Add momentum by gradually approaching target speed
      const acceleration = 0.1; // How quickly the speed changes
      const deceleration = 0.05; // How quickly it slows down
      
      if (targetRotationSpeedRef.current === 0) {
        // Gradually slow down when no target speed
        currentRotationSpeedRef.current *= (1 - deceleration);
        if (Math.abs(currentRotationSpeedRef.current) < 0.01) {
          currentRotationSpeedRef.current = 0;
        }
      } else {
        // Smoothly accelerate towards target speed
        currentRotationSpeedRef.current += 
          (targetRotationSpeedRef.current - currentRotationSpeedRef.current) * acceleration;
      }
      
      setRotation(prev => prev + (currentRotationSpeedRef.current * deltaTime) / 16);
      
      // Notify parent component of rotation speed change
      if (onRotationSpeedChange) {
        onRotationSpeedChange(currentRotationSpeedRef.current);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [onRotationSpeedChange]);

  return (
    <div className="interactive-gear absolute -top-10 -right-10 lg:top-20 lg:right-20 text-muted-foreground/50 perspective-800">
      <Cog
        className="w-36 h-36 md:w-48 md:h-48 transition-transform duration-100 opacity-100"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-teal-custom/50 animate-spin-slow opacity-100"
        style={{ animationDuration: '25s' }}
      ></div>
    </div>
  );
};

export default InteractiveGear;