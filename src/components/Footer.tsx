
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
                <BookOpen size={16} />
              </div>
              <span className="text-xl font-semibold">KnowQuest</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your personalized learning journey starts here. Discover, learn, and grow with resources tailored to your needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/aadityakarna" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com/Karna78Karna" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com/in/aaditya-karna" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:aadityakarna646@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Learning Roadmap
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Learning Paths */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learning Paths</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Machine Learning
                </a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} KnowQuest. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
