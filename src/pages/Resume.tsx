import { ArrowRight, Briefcase, GraduationCap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const Resume = () => {
  const skills = [
    { name: "CAD Design (SolidWorks, Fusion360, AutoCAD)", level: 95 },
    { name: "3D Printing & CNC", level: 90 },
    { name: "ANSYS & FEMM", level: 85 },
    { name: "MATLAB & Simulink", level: 85 },
    { name: "C/C++", level: 80 },
    { name: "Python", level: 75 },
    { name: "Embedded Systems", level: 85 },
    { name: "Manufacturing & Prototyping", level: 90 },
  ];

  const experiences = [
    {
      title: "Mechatronics Engineer",
      company: "CFYI -Fablab",
      period: "11/2024 - Present",
      description: "Led prototyping and product development for national engineering competitions, including a weather station project. Developed and maintained comprehensive 2D/3D CAD models and technical documentation using SolidWorks, Fusion 360, and AutoCAD. Collaborated with teams to optimize product designs, achieving 15% cost reduction per prototype. Oversaw fabrication processes and implemented version-controlled design database."
    },
    {
      title: "Junior Mechatronics Engineer",
      company: "ID Partner",
      period: "09/2023 - 04/2024",
      description: "Redesigned and developed 0.1 mm air gap rotatable gear mechanics for electromagnetic mechanical switches, achieving ∼50% cost reduction. Created detailed CAD designs, prototyped models with 3D printers and CNC machines. Utilized ANSYS for structural and thermal analysis. Developed a copper conductor calculator with MATLAB simulation and GUI."
    },
    {
      title: "3D Printer R&D intern",
      company: "TÜBİTAK",
      period: "06/2022 - 09/2022",
      description: "Collaborated with PhDs to develop next-gen 3D printers for horizontal printing in molding operations. Performed structural stress and strain analysis using ANSYS. Assisted in designing and implementing control systems for conveyors using Arduino Mega and Raspberry Pi."
    }
  ];

  const education = [
    {
      degree: "BS in Mechatronics Engineering",
      institution: "University of Karabuk",
      period: "2020 - 2024",
      description: "GPA: 3.15/4.00"
    },
    {
      degree: "BS in Electrical and Computer Engineering",
      institution: "NTUA (Erasmus+)",
      period: "2022 - 2023",
      description: "GPA: 3.2/4.00"
    },
    {
      degree: "Academic Lyceum",
      institution: "TDTU Academic Lyceum",
      period: "2017 - 2019",
      description: "Tashkent, Uzbekistan"
    }
  ];

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
          </div>

          {/* Skills Section */}
          <section className="mb-16">
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
          <section className="mb-16">
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

          {/* Education Section */}
          <section className="mb-16">
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
