
import { ArrowRight, Code, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-light to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-blue-deep mb-4">
                Hi, I'm <span className="text-teal-custom">Your Name</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                I build modern web applications with attention to detail and a focus on user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-deep hover:bg-blue-800 text-white">
                  <Link to="/projects" className="flex items-center">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-teal-custom text-teal-custom hover:bg-teal-custom hover:text-white">
                  <a href="#contact" className="flex items-center">
                    Get in Touch
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="rounded-full bg-blue-deep p-2 shadow-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <div className="rounded-full bg-white p-1 w-full h-full flex items-center justify-center">
                  <img 
                    src="https://via.placeholder.com/300x300" 
                    alt="Profile" 
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-14 h-14 rounded-full bg-blue-deep/10 flex items-center justify-center mb-6">
                <Code className="text-blue-deep" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-deep mb-3">Development</h3>
              <p className="text-gray-700">
                I build clean, responsive web applications using modern frameworks and best practices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-14 h-14 rounded-full bg-teal-custom/10 flex items-center justify-center mb-6">
                <FileText className="text-teal-custom" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-deep mb-3">Resume</h3>
              <p className="text-gray-700">
                View my professional experience, education, and technical skills.
              </p>
              <Link to="/resume" className="inline-block mt-4 text-teal-custom hover:text-teal-600 font-medium">
                <span className="flex items-center">
                  View Resume <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="w-14 h-14 rounded-full bg-blue-deep/10 flex items-center justify-center mb-6">
                <BookOpen className="text-blue-deep" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-deep mb-3">Blog</h3>
              <p className="text-gray-700">
                Read my thoughts on technology, development, and programming.
              </p>
              <Link to="/blog" className="inline-block mt-4 text-teal-custom hover:text-teal-600 font-medium">
                <span className="flex items-center">
                  Read Blog <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="section-title mb-0">Featured Projects</h2>
            <Link to="/projects" className="text-teal-custom hover:text-teal-600 font-medium flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card animate-fade-in" style={{ animationDelay: "100ms" }}>
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Weather Station Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-2">Weather Station</h3>
                <p className="text-gray-700 mb-4">
                  A real-time weather monitoring system built with Arduino and React.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">React</span>
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">Arduino</span>
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">IoT</span>
                </div>
                <Link to="/projects" className="text-teal-custom hover:text-teal-600 font-medium flex items-center">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card animate-fade-in" style={{ animationDelay: "200ms" }}>
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Portfolio Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-2">Personal Portfolio</h3>
                <p className="text-gray-700 mb-4">
                  Modern personal portfolio website built with React and Tailwind CSS.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">React</span>
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">Tailwind</span>
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">TypeScript</span>
                </div>
                <Link to="/projects" className="text-teal-custom hover:text-teal-600 font-medium flex items-center">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card animate-fade-in" style={{ animationDelay: "300ms" }}>
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Blog Platform Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-deep mb-2">Blog Platform</h3>
                <p className="text-gray-700 mb-4">
                  A modern blog platform with a custom CMS for content management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">Next.js</span>
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">MongoDB</span>
                  <span className="bg-blue-100 text-blue-deep text-sm px-3 py-1 rounded-full">Tailwind</span>
                </div>
                <Link to="/projects" className="text-teal-custom hover:text-teal-600 font-medium flex items-center">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to reach out.
            </p>
            <Button className="bg-teal-custom hover:bg-teal-600 text-white px-8 py-6 text-lg">
              <a href="mailto:your.email@example.com" className="flex items-center">
                Contact Me <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
