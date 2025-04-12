
import { Button } from "@/components/ui/button";
import { ChevronRight, Code, Cpu, Cog, Bot, Zap, Server, CircuitBoard, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-foreground mb-2">
              <span className="text-sm font-medium">Mechatronics Engineer</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Blending <span className="text-teal-custom">Mechanical</span> Engineering with <span className="text-teal-custom">Technology</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              I design and build intelligent systems that bridge the gap between mechanical 
              engineering, electronics, and software development.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-teal-custom hover:bg-teal-600 text-white" asChild>
                <Link to="/projects">
                  View My Projects <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              
              <Button variant="outline" asChild>
                <Link to="/resume">My Experience</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 -right-10 lg:top-20 lg:right-20 text-muted-foreground/10">
          <Cog className="w-36 h-36 md:w-48 md:h-48 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <div className="absolute -bottom-10 -left-10 lg:bottom-20 lg:left-20 text-muted-foreground/10">
          <CircuitBoard className="w-24 h-24 md:w-36 md:h-36" />
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 px-4 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Engineering Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard 
              icon={<Wrench />} 
              title="Mechanical Design" 
              description="Designing robust mechanical systems using CAD software and engineering principles."
            />
            <SkillCard 
              icon={<CircuitBoard />} 
              title="Electronics" 
              description="Creating electronic circuits and systems for sensing, control, and automation."
            />
            <SkillCard 
              icon={<Code />} 
              title="Software Development" 
              description="Building applications and scripts to control and monitor mechatronic systems."
            />
            <SkillCard 
              icon={<Bot />} 
              title="Robotics" 
              description="Developing robotic systems with focus on kinematics, perception, and control."
            />
            <SkillCard 
              icon={<Cpu />} 
              title="Embedded Systems" 
              description="Programming microcontrollers and embedded computers for real-time applications."
            />
            <SkillCard 
              icon={<Zap />} 
              title="Control Systems" 
              description="Implementing feedback control systems for precise automation and regulation."
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Let's Build Something Amazing</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating on innovative mechatronics projects? Let's discuss how we can work together.
          </p>
          <Button className="bg-teal-custom hover:bg-teal-600 text-white">
            <a href="mailto:your.email@example.com">Get In Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

// Skill Card Component
const SkillCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="p-6 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-300 hover:scale-105 hover:border-teal-custom/30">
      <div className="text-teal-custom mb-4 bg-teal-custom/10 p-3 rounded-full inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Home;
