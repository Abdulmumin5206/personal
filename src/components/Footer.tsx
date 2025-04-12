
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/5 dark:bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-muted-foreground mb-4">
              A showcase of my mechatronics engineering projects and skills.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-teal-custom transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-teal-custom transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-teal-custom transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:your.email@example.com" className="text-foreground hover:text-teal-custom transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-teal-custom transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-teal-custom transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/resume" className="text-muted-foreground hover:text-teal-custom transition-colors">Resume</Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-teal-custom transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-2">Interested in working together?</p>
            <a 
              href="mailto:your.email@example.com"
              className="inline-block bg-teal-custom hover:bg-teal-600 text-white px-4 py-2 rounded transition-colors duration-200"
            >
              Send Message
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Mechatronics Engineer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
