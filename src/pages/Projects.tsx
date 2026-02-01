import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "pet2filament",
      title: "PET2Filament Machine",
      description: "A fully functional machine designed from scratch to convert PET plastic bottles into 3D printer filament. Combining mechanical engineering, electronics, and sustainability.",
      thumbnail: "/Portfolio/PET2Filament/IMG_0674.webp",
      tags: ["CAD Design", "Mechanical Engineering", "3D Printing", "Sustainability"],
      featured: true,
    },
    {
      id: "weather-station",
      title: "Weather Station",
      description: "A real-time weather monitoring system built with Arduino and React. Collects temperature, humidity, and atmospheric pressure data.",
      thumbnail: "/Untitled design.webp",
      tags: ["React", "Arduino", "IoT", "API"],
      featured: true,
    },
    {
      id: "planetary-gearbox",
      title: "Double 30:1 Planetary Gearbox",
      description: "A precision-engineered double-stage planetary gearbox with a 30:1 reduction ratio. Designed and manufactured for high torque applications with compact form factor.",
      thumbnail: "/Portfolio/Planetary Gearbox/IMG_1005.webp",
      tags: ["CAD Design", "Mechanical Engineering", "Gearbox Design", "Manufacturing"],
      featured: true,
    }
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground">
            Explore my engineering projects where I combine creativity, technical skills, and sustainability. 
            From designing machines from scratch to building IoT systems, each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group project-card animate-fade-in overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden aspect-video">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-teal-custom transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-teal-custom font-medium group-hover:translate-x-2 transition-transform">
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
