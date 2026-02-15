import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const projectsData: Record<string, any> = {
    "pet2filament": {
      title: "PET2Filament Machine",
      subtitle: "Turning Plastic Waste into 3D Printing Gold",
      description: "A fully functional machine designed from scratch to convert PET plastic bottles into high-quality 3D printer filament. This project showcases my skills in mechanical design, electronics integration, and sustainable engineering.",
      heroImage: "/Portfolio/PET2Filament/IMG_0674.webp",
      tags: ["CAD Design", "Mechanical Engineering", "3D Printing", "Sustainability", "Arduino", "Recycling"],
      liveLink: "https://youtu.be/hSyhCV2-RFA",
      githubLink: "#",
      bulletPoints: [
        "Designed complete machine from scratch using CAD software (SolidWorks/Fusion 360)",
        "Engineered custom extrusion mechanism for consistent 1.75mm filament diameter",
        "Implemented PID control system with Arduino for precise temperature regulation",
        "Integrated temperature sensors and heating elements for optimal PET melting",
        "Developed filament diameter monitoring system for quality control",
        "Built and assembled mechanical frame and all components",
        "Programmed Arduino microcontroller for automated process control",
        "Tested and optimized machine performance through multiple iterations",
        "Successfully converted PET bottles into usable 3D printer filament"
      ],
      gallery: [
        { src: "/Portfolio/PET2Filament/Screenshot_26.jpg", alt: "CAD Design - Front View" },
        { src: "/Portfolio/PET2Filament/Screenshot_27.jpg", alt: "CAD Design - Detailed View" },
        { src: "/Portfolio/PET2Filament/IMG_0674.webp", alt: "Actual Machine - Front" },
        { src: "/Portfolio/PET2Filament/IMG_0675.webp", alt: "Actual Machine - Detail" }
      ],
      videoUrl: "https://www.youtube.com/embed/hSyhCV2-RFA"
    },
    "weather-station": {
      title: "Weather Station",
      subtitle: "Real-time Environmental Monitoring",
      description: "A real-time weather monitoring system built with Arduino and React. The system collects temperature, humidity, and atmospheric pressure data and displays it in a user-friendly dashboard.",
      heroImage: "/Untitled design.webp",
      tags: ["React", "Arduino", "IoT", "API", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      bulletPoints: [
        "Built Arduino-based weather station with multiple sensors",
        "Developed React dashboard for real-time data visualization",
        "Implemented API for data collection and storage",
        "Created responsive UI with Chart.js for historical data",
        "Integrated temperature, humidity, and pressure sensors",
        "Designed mobile-responsive interface for easy monitoring"
      ],
      gallery: [
        { src: "/Untitled design.webp", alt: "Weather Station Dashboard" }
      ],
      videoUrl: "https://www.youtube.com/embed/r2FQAoH0hfQ"
    },
    "planetary-gearbox": {
      title: "Double 30:1 Planetary Gearbox",
      subtitle: "Precision Mechanical Power Transmission",
      description: "A double-stage planetary gearbox system with a 30:1 reduction ratio, designed for high torque applications. This project demonstrates advanced mechanical design principles, precision manufacturing, and gear train optimization for compact and efficient power transmission.",
      heroImage: "/Portfolio/Planetary Gearbox/IMG_1005.webp",
      tags: ["CAD Design", "Mechanical Engineering", "Gearbox Design", "Manufacturing", "Precision Engineering", "3D Printing"],
      liveLink: "https://youtu.be/VfvSvfboxyE",
      githubLink: "#",
      bulletPoints: [
        "Designed complete double-stage planetary gear system from scratch using CAD software",
        "Engineered 30:1 reduction ratio for optimal torque multiplication",
        "Calculated gear ratios, tooth profiles, and load distributions",
        "Designed sun gears, planet gears, and ring gears with precise tolerances",
        "Optimized gear mesh for minimal backlash and maximum efficiency",
        "Created compact housing design for space-efficient installation",
        "Manufactured components using precision 3D printing and machining",
        "Assembled and tested gearbox under various load conditions",
        "Achieved smooth operation with minimal noise and vibration"
      ],
      gallery: [
        { src: "/Portfolio/Planetary Gearbox/IMG_1005.webp", alt: "Planetary Gearbox - Assembled View" },
        { src: "/Portfolio/Planetary Gearbox/IMG_1006.webp", alt: "Planetary Gearbox - Internal Mechanism" },
        { src: "/Portfolio/Planetary Gearbox/IMG_1007.webp", alt: "Planetary Gearbox - Gear Detail" },
        { src: "/Portfolio/Planetary Gearbox/IMG_1014.webp", alt: "Planetary Gearbox - Complete Assembly" }
      ],
      videoUrl: "https://www.youtube.com/embed/VfvSvfboxyE"
    },
    "biped-robot-pcb": {
      title: "Custom PCB for Biped Robot",
      subtitle: "From Concept to Walking Machine",
      description: "What started as an idea to understand walking mechanics turned into a full robotics project involving custom gearbox design, 3D printing, electronics, and PCB fabrication. Instead of expensive actuators, I used NEMA17 stepper motors paired with custom 5:1 planetary gearboxes to create a compact, affordable system capable of handling roughly 1kg loads at the knee and hip joints.",
      heroImage: "/Portfolio/PCB/1.webp",
      tags: ["PCB Design", "Robotics", "KiCad", "CNC Machining", "Control Theory", "3D Printing", "Stepper Motors", "Mechanical Design"],
      liveLink: "#",
      githubLink: "#",
      bulletPoints: [
        "Designed and built custom 5:1 compact planetary gearboxes from scratch to replace expensive actuators",
        "Each gearbox handles approximately 1kg load at knee and hip joints with NEMA17 stepper motors",
        "3D printed all critical mechanical parts and tested motion mechanics with jumper cable prototypes",
        "Designed complete custom PCB in KiCad for motor control and power distribution",
        "Fabricated PCB using SRM-20 CNC mill with 0.5mm V-bit tool for precise trace cutting",
        "Overcame multiple fabrication failures to successfully produce working PCB",
        "Integrated stepper motor drivers, microcontroller, and power management on single board",
        "Developed control algorithms for coordinated leg movement and balance",
        "Successfully demonstrated walking motion with custom hardware and control system",
        "Proved concept viability for low-cost biped robot platform using off-the-shelf components"
      ],
      gallery: [
        { src: "/Portfolio/PCB/1.webp", alt: "Custom PCB - Top View" },
        { src: "/Portfolio/PCB/2.webp", alt: "Custom PCB - Assembled" },
        { src: "/Portfolio/PCB/Kicadsch.png", alt: "KiCad Schematic Design" },
        { src: "/Portfolio/PCB/Kicadtracing.png", alt: "KiCad PCB Layout" },
        { src: "/Portfolio/PCB/Fusion_Step.png", alt: "CAD Design - Robot Assembly" },
        { src: "/Portfolio/PCB/Fusion_Step back.png", alt: "CAD Design - Back View" },
        { src: "/Portfolio/PCB/IMG_1192.webp", alt: "Physical Robot - Front" },
        { src: "/Portfolio/PCB/IMG_1194.webp", alt: "Physical Robot - Detail" }
      ],
      videoUrl: "https://www.youtube.com/embed/gyNPqdhr5Q4"
    }
  };

  const project = projectId ? projectsData[projectId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-teal-custom hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects = Object.keys(projectsData)
    .filter(id => id !== projectId)
    .map(id => ({ id, ...projectsData[id] }));

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-muted-foreground hover:text-teal-custom mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-teal-custom mb-4">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span 
                key={tag} 
                className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.githubLink !== "#" && (
            <div className="flex gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-foreground hover:bg-foreground hover:text-background text-foreground px-5 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
          <img 
            src={project.heroImage} 
            alt={project.title}
            className="w-full h-auto"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-base text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* What I Did - Bullet Points */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">What I Did</h2>
          <ul className="space-y-2 text-muted-foreground">
            {project.bulletPoints?.map((point: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-custom mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="max-w-5xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image: any, index: number) => (
                <div 
                  key={index}
                  onClick={() => openLightbox(image)}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer group aspect-video"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Video */}
        {project.videoUrl && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Demo Video</h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={`${project.title} Demo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherProjects.map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/projects/${otherProject.id}`}
                  className="group project-card overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden aspect-video h-32">
                    <img 
                      src={otherProject.heroImage} 
                      alt={otherProject.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-teal-custom transition-colors">
                      {otherProject.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                      {otherProject.description}
                    </p>
                    <div className="flex items-center text-teal-custom font-medium text-xs">
                      View Project <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-teal-custom transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
