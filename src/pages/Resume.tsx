import { ArrowRight, Download, Briefcase, GraduationCap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Resume = () => {
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  const [downloadReason, setDownloadReason] = useState("");
  const [cvUrl, setCvUrl] = useState("/Abdulmumin Abdusattorov_Resume (1).pdf");

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Git", level: 80 },
    { name: "UI/UX Design", level: 70 },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Lead frontend development for various web applications. Implemented responsive designs, optimized performance, and mentored junior developers."
    },
    {
      title: "Web Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed responsive websites and web applications for clients in various industries. Worked with React, JavaScript, and CSS frameworks."
    },
    {
      title: "Junior Developer",
      company: "Startup Studio",
      period: "2016 - 2018",
      description: "Assisted in developing web applications and websites. Worked primarily with HTML, CSS, and JavaScript."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Web Technologies and Software Engineering."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors. Focused on programming fundamentals and web development."
    }
  ];

  const handleDownloadClick = () => {
    setIsDownloadDialogOpen(true);
  };

  const handleDownload = () => {
    // Here you can add analytics or logging for the download reason
    console.log("CV downloaded with reason:", downloadReason);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'your-cv.pdf'; // The filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsDownloadDialogOpen(false);
    setDownloadReason("");
  };

  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">My Resume</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A summary of my experience, skills, and education.
              </p>
            </div>
            <Button 
              className="mt-4 md:mt-0 bg-teal-custom hover:bg-teal-600 text-white"
              onClick={handleDownloadClick}
            >
              <span className="flex items-center">
                Download CV <Download className="ml-2 h-4 w-4" />
              </span>
            </Button>
          </div>

          {/* Download Dialog */}
          <Dialog open={isDownloadDialogOpen} onOpenChange={setIsDownloadDialogOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Download CV</DialogTitle>
                <DialogDescription>
                  I'd love to know why you're interested in my CV. This helps me understand what opportunities you're looking for.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="reason">Reason for Download</Label>
                  <Input
                    id="reason"
                    placeholder="e.g., Job opportunity, Research, Collaboration"
                    value={downloadReason}
                    onChange={(e) => setDownloadReason(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsDownloadDialogOpen(false);
                    setDownloadReason("");
                  }}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  onClick={handleDownload}
                  className="bg-teal-custom hover:bg-teal-600 text-white"
                >
                  Download CV
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Skills Section */}
          <section className="mb-16 animate-fade-in">
            <div className="flex items-center mb-6">
              <Code className="text-teal-custom mr-3" size={24} />
              <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-secondary/10" />
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center mb-8">
              <Briefcase className="text-teal-custom mr-3" size={24} />
              <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border pb-8 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-custom"></div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-teal-custom mr-3" size={24} />
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-border pb-8 last:pb-0">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal-custom"></div>
                  <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
