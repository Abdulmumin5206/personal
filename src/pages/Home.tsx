import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Cpu, Cog, Bot, Zap, Server, CircuitBoard, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import InteractiveGear from "@/components/InteractiveGear";
import BackgroundParticles from "@/components/BackgroundParticles";

const Home = () => {
  const [animateHero, setAnimateHero] = useState(false);
  const [textBrightness, setTextBrightness] = useState(1);
  const [circuitPosition, setCircuitPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [rgbColor, setRgbColor] = useState({ r: 13, g: 148, b: 136 });
  const circuitRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setAnimateHero(true);
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let hue = 0;

    const animateRGB = () => {
      if (isHovering) {
        // Make the color change faster
        hue = (hue + 3) % 360;
        
        // Use vibrant RGB colors with full range
        const r = Math.floor(Math.sin(hue * Math.PI / 180) * 127 + 128);
        const g = Math.floor(Math.sin((hue + 120) * Math.PI / 180) * 127 + 128);
        const b = Math.floor(Math.sin((hue + 240) * Math.PI / 180) * 127 + 128);
        
        setRgbColor({ r, g, b });
        animationFrame = requestAnimationFrame(animateRGB);
      }
    };

    if (isHovering) {
      animationFrame = requestAnimationFrame(animateRGB);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isHovering]);

  const handleGearRotationSpeedChange = (speed: number) => {
    // Map rotation speed to brightness (0.5 to 1.5)
    const brightness = 0.5 + Math.min(Math.abs(speed) / 8, 1);
    setTextBrightness(brightness);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (circuitRef.current) {
      const rect = circuitRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to circuit center
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + 
        Math.pow(e.clientY - centerY, 2)
      );
      
      // Only respond if mouse is within 200px of the circuit
      if (distance < 200) {
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const maxOffset = 20;
        const offset = Math.max(0, maxOffset * (1 - distance / 200));
        
        setCircuitPosition({
          x: Math.cos(angle) * offset,
          y: Math.sin(angle) * offset
        });
        setIsHovering(true);
      } else {
        setCircuitPosition({ x: 0, y: 0 });
        setIsHovering(false);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-16" onMouseMove={handleMouseMove}>
      {/* Hero Section with Improved Animation */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div 
              className={`inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-foreground mb-2 transition-all duration-700 transform ${animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="text-sm font-medium">Mechatronics Engineer</span>
            </div>
            
            <h1 
              className={`text-4xl md:text-6xl font-bold tracking-tight transition-all duration-1000 transform ${animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
              style={{ 
                transitionDelay: '400ms',
                filter: `brightness(${textBrightness})`,
                transition: 'filter 0.2s ease-out, color 0.2s ease-out',
                willChange: 'filter, color',
                color: `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`
              }}
            >
              Blending <span className="relative">
                Mechanical
                <span className="absolute bottom-1 left-0 w-full h-1 rounded-full transform scale-x-100 origin-left transition-transform duration-1000"
                  style={{ 
                    backgroundColor: `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.8)`,
                    transition: 'background-color 0.2s ease-out'
                  }}
                ></span>
              </span> Engineering with <span className="relative">
                Technology
                <span className="absolute bottom-1 left-0 w-full h-1 rounded-full transform scale-x-100 origin-left transition-transform duration-1000"
                  style={{ 
                    backgroundColor: `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.8)`,
                    transition: 'background-color 0.2s ease-out'
                  }}
                ></span>
              </span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-muted-foreground max-w-2xl transition-all duration-1000 ${animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
              style={{ 
                transitionDelay: '600ms',
                filter: `brightness(${textBrightness})`,
                transition: 'filter 0.3s ease-out',
                willChange: 'filter'
              }}
            >
              I design and build intelligent systems that bridge the gap between mechanical 
              engineering, electronics, and software development.
            </p>
            
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-1000 ${animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <Button className="bg-teal-custom hover:bg-teal-600 hover:scale-105 transition-all duration-300 text-white relative overflow-hidden group" asChild>
                <Link to="/projects">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-custom to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">View My Projects</span>
                  <ChevronRight className="ml-1 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button className="bg-teal-custom hover:bg-teal-600 hover:scale-105 transition-all duration-300 text-white relative overflow-hidden group" asChild>
                <Link to="/resume">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-teal-custom/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">My Experience</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Interactive Gear */}
        <InteractiveGear onRotationSpeedChange={handleGearRotationSpeedChange} />
        
        {/* Decorative Elements */}
        <div 
          ref={circuitRef}
          className="absolute -bottom-10 -left-10 lg:bottom-20 lg:left-20 text-muted-foreground/50 animate-float-1"
          style={{
            transform: `translate(${circuitPosition.x}px, ${circuitPosition.y}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <CircuitBoard 
            className={`w-24 h-24 md:w-36 md:h-36 transition-all duration-1000 transform ${
              animateHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            } ${isHovering ? 'scale-110' : 'scale-100'}`}
            style={{ 
              transitionDelay: '500ms',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              transition: 'transform 0.3s ease-out'
            }} 
          />
        </div>
        
        {/* Background particles */}
        <BackgroundParticles />
      </section>
      
      {/* Skills Section with Hover Effects */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-secondary/10 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            filter: 'none'
          }}
        ></div>
      
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-foreground relative inline-block">
            Engineering Expertise
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-custom transform scale-x-100 origin-left transition-transform duration-1000"></span>
          </h2>
          
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specialized in creating intelligent systems that combine mechanical precision with digital innovation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Wrench />} 
              title="Mechanical Design" 
              description="Designing robust mechanical systems using CAD software and engineering principles."
              color="teal"
            />
            <SkillCard 
              icon={<CircuitBoard />} 
              title="Electronics" 
              description="Creating electronic circuits and systems for sensing, control, and automation."
              color="blue"
            />
            <SkillCard 
              icon={<Code />} 
              title="Software Development" 
              description="Building applications and scripts to control and monitor mechatronic systems."
              color="indigo"
            />
            <SkillCard 
              icon={<Bot />} 
              title="Robotics" 
              description="Developing robotic systems with focus on kinematics, perception, and control."
              color="purple"
            />
            <SkillCard 
              icon={<Cpu />} 
              title="Embedded Systems" 
              description="Programming microcontrollers and embedded computers for real-time applications."
              color="pink"
            />
            <SkillCard 
              icon={<Zap />} 
              title="Control Systems" 
              description="Implementing feedback control systems for precise automation and regulation."
              color="orange"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action with Animation */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/5 opacity-50"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Let's Build Something Amazing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating on innovative mechatronics projects? Let's discuss how we can work together.
          </p>
          <Button className="bg-teal-custom hover:bg-teal-600 text-white relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(13,148,136,0.5)]">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-custom to-teal-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            <span className="relative z-10">Get In Touch</span>
            <a href="mailto:your.email@example.com" className="absolute inset-0" aria-label="Get In Touch"></a>
          </Button>
        </div>
      </section>
    </div>
  );
};

// Enhanced Skill Card Component with Color Variants and Animations
const SkillCard = ({ 
  icon, 
  title, 
  description, 
  color = "teal" 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  color?: "teal" | "blue" | "indigo" | "purple" | "pink" | "orange" 
}) => {
  const colorMap = {
    teal: "from-teal-400/10 to-teal-500/20 hover:border-teal-400/50 text-teal-500",
    blue: "from-blue-400/10 to-blue-500/20 hover:border-blue-400/50 text-blue-500",
    indigo: "from-indigo-400/10 to-indigo-500/20 hover:border-indigo-400/50 text-indigo-500",
    purple: "from-purple-400/10 to-purple-500/20 hover:border-purple-400/50 text-purple-500",
    pink: "from-pink-400/10 to-pink-500/20 hover:border-pink-400/50 text-pink-500",
    orange: "from-orange-400/10 to-orange-500/20 hover:border-orange-400/50 text-orange-500",
  };
  
  return (
    <div className={`p-6 rounded-lg border border-border bg-gradient-to-br ${colorMap[color]} backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:scale-105 hover:translate-y-[-5px] group relative overflow-hidden`}>
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className={`mb-4 bg-gradient-to-br ${colorMap[color].split(" ")[0]} p-3 rounded-full inline-block transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-teal-custom transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300">{description}</p>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default Home;
