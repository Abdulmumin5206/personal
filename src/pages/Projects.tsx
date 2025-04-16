import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { WeatherPopup } from "@/components/WeatherPopup";

type PopupContent = {
  type: 'text' | 'image' | 'video';
  value: string;
  alt?: string;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Weather Station",
      description: "A real-time weather monitoring system built with Arduino and React. The system collects temperature, humidity, and atmospheric pressure data and displays it in a user-friendly dashboard.",
      image: "/Untitled design.webp",
      tags: ["React", "Arduino", "IoT", "API", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      featured: true,
      popupContent: [
        {
          type: 'text',
          value: 'Welcome to our Weather Station Project! This project helps us monitor local weather conditions in real-time. The system consists of an Arduino-based weather station that collects data and sends it to our React dashboard.'
        },
        {
          type: 'text',
          value: 'Key Features:\n- Real-time temperature monitoring\n- Humidity tracking\n- Atmospheric pressure measurements\n- Historical data visualization\n- Mobile-responsive dashboard'
        },
        {
          type: 'image',
          value: '/Untitled design.webp',
          alt: 'Weather Station Dashboard'
        },
        {
          type: 'video',
          value: 'https://www.youtube.com/embed/r2FQAoH0hfQ',
          alt: 'Weather Station Project Demo'
        }
      ] as PopupContent[]
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground">
            I'm excited to share my projects with you! Currently, I'm showcasing my Weather Station project, and I'll be adding more amazing projects over time. Stay tuned for updates! 😊
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card animate-fade-in overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="overflow-hidden aspect-video cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={() => setSelectedProject(project.id)}
                    className="text-teal-custom hover:text-teal-600 font-medium flex items-center"
                  >
                    Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-teal-custom font-medium flex items-center"
                  >
                    GitHub <Github className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <WeatherPopup
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={projects.find(p => p.id === selectedProject)?.title || ''}
          description={projects.find(p => p.id === selectedProject)?.description || ''}
          content={projects.find(p => p.id === selectedProject)?.popupContent || []}
        />
      )}
    </div>
  );
};

export default Projects;
