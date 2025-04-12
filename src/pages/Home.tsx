
import { ArrowRight, Code, FileText, BookOpen, Sparkles, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-light to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-3xl animate-fade-in">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="text-teal-custom mr-2" size={28} />
                <h2 className="text-xl text-blue-deep">Web Developer & Designer</h2>
                <Sparkles className="text-teal-custom ml-2" size={28} />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-blue-deep mb-6 relative">
                <span className="inline-block animate-fade-in" style={{ animationDelay: "200ms" }}>Creative</span>{" "}
                <span className="inline-block relative text-teal-custom animate-fade-in" style={{ animationDelay: "400ms" }}>
                  Solutions
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,5 Q25,10 50,5 T100,5" fill="none" stroke="#0d9488" strokeWidth="2" />
                  </svg>
                </span>{" "}
                <span className="inline-block animate-fade-in" style={{ animationDelay: "600ms" }}>for Modern Web</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "800ms" }}>
                Building elegant, responsive web applications with attention to detail and a focus on user experience.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "1000ms" }}>
                <Button className="bg-blue-deep hover:bg-blue-800 text-white group transition-all duration-300">
                  <Link to="/projects" className="flex items-center">
                    View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-teal-custom text-teal-custom hover:bg-teal-custom hover:text-white group transition-all duration-300">
                  <a href="#contact" className="flex items-center">
                    Get in Touch <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12 relative inline-block mx-auto">
            What I Do
            <div className="absolute -bottom-2 left-0 right-0 mx-auto w-24 h-1 bg-teal-custom rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-14 h-14 rounded-full bg-blue-deep/10 flex items-center justify-center mb-6">
                <Code className="text-blue-deep" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-deep mb-3">Development</h3>
              <p className="text-gray-700">
                I build clean, responsive web applications using modern frameworks and best practices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-14 h-14 rounded-full bg-teal-custom/10 flex items-center justify-center mb-6">
                <FileText className="text-teal-custom" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-deep mb-3">Resume</h3>
              <p className="text-gray-700">
                View my professional experience, education, and technical skills.
              </p>
              <Link to="/resume" className="inline-block mt-4 text-teal-custom hover:text-teal-600 font-medium group">
                <span className="flex items-center">
                  View Resume <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="w-14 h-14 rounded-full bg-blue-deep/10 flex items-center justify-center mb-6">
                <BookOpen className="text-blue-deep" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-blue-deep mb-3">Blog</h3>
              <p className="text-gray-700">
                Read my thoughts on technology, development, and programming.
              </p>
              <Link to="/blog" className="inline-block mt-4 text-teal-custom hover:text-teal-600 font-medium group">
                <span className="flex items-center">
                  Read Blog <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="section-title mb-0 relative inline-block">
              Featured Projects
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-teal-custom rounded-full"></div>
            </h2>
            <Link to="/projects" className="text-teal-custom hover:text-teal-600 font-medium flex items-center group">
              View All <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://via.placeholder.com/600x400" 
                  alt="Weather Station Project"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-teal-custom text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Star size={16} />
                </div>
              </div>
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
                <Link to="/projects" className="text-teal-custom hover:text-teal-600 font-medium flex items-center group">
                  View Project <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://via.placeholder.com/600x400" 
                  alt="Portfolio Project"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-blue-deep text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Star size={16} />
                </div>
              </div>
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
                <Link to="/projects" className="text-teal-custom hover:text-teal-600 font-medium flex items-center group">
                  View Project <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card group animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative overflow-hidden">
                <img 
                  src="https://via.placeholder.com/600x400" 
                  alt="Blog Platform Project"
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-teal-custom text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <Star size={16} />
                </div>
              </div>
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
                <Link to="/projects" className="text-teal-custom hover:text-teal-600 font-medium flex items-center group">
                  View Project <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            <div className="relative w-32 h-1 bg-teal-custom mx-auto mb-8 rounded-full overflow-hidden">
              <span className="absolute top-0 left-0 h-full w-1/3 bg-white animate-[pulse_2s_infinite]"></span>
            </div>
            <p className="text-gray-700 mb-8">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to reach out.
            </p>
            <Button className="bg-teal-custom hover:bg-teal-600 text-white px-8 py-6 text-lg group transition-all duration-300">
              <a href="mailto:your.email@example.com" className="flex items-center">
                Contact Me <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
