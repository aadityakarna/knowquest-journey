
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const { visible } = useScrollProgress();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAuth = () => setIsAuthOpen(!isAuthOpen);

  // Mock login function for demonstration
  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground animate-float">
                <BookOpen size={16} />
              </div>
              <span className="text-xl font-semibold">KnowQuest</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              <Link 
                to="/" 
                className={`nav-link text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-foreground active' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/roadmap" 
                className={`nav-link text-sm font-medium transition-colors ${
                  isActive('/roadmap') ? 'text-foreground active' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Learning Roadmap
              </Link>
              {isLoggedIn && (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`nav-link text-sm font-medium transition-colors ${
                      isActive('/dashboard') ? 'text-foreground active' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/resources" 
                    className={`nav-link text-sm font-medium transition-colors ${
                      isActive('/resources') ? 'text-foreground active' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Resources
                  </Link>
                </>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex md:items-center md:gap-4">
              {isLoggedIn ? (
                <div className="flex items-center gap-4">
                  <Link to="/profile">
                    <Button variant="ghost" size="sm" className="rounded-full hover:bg-accent">
                      Profile
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button onClick={toggleAuth} className="animate-pulse hover:animate-none">
                  Get Started
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-1 rounded-md text-muted-foreground hover:text-foreground md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block w-6 h-6" /> : <Menu className="block w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl">
            <div className="px-4 pt-2 pb-4 space-y-2 sm:px-6">
              <Link 
                to="/" 
                className={`block py-2 text-base font-medium rounded-md ${
                  isActive('/') ? 'text-accent font-semibold' : 'text-foreground hover:text-accent'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/roadmap" 
                className={`block py-2 text-base font-medium rounded-md ${
                  isActive('/roadmap') ? 'text-accent font-semibold' : 'text-foreground hover:text-accent'
                }`}
              >
                Learning Roadmap
              </Link>
              {isLoggedIn && (
                <>
                  <Link 
                    to="/dashboard" 
                    className={`block py-2 text-base font-medium rounded-md ${
                      isActive('/dashboard') ? 'text-accent font-semibold' : 'text-foreground hover:text-accent'
                    }`}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    to="/resources" 
                    className={`block py-2 text-base font-medium rounded-md ${
                      isActive('/resources') ? 'text-accent font-semibold' : 'text-foreground hover:text-accent'
                    }`}
                  >
                    Resources
                  </Link>
                </>
              )}
              <div className="pt-2">
                {isLoggedIn ? (
                  <div className="flex flex-col gap-2">
                    <Link to="/profile" className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Profile
                      </Button>
                    </Link>
                    <Button variant="default" size="sm" onClick={handleLogout} className="w-full">
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button onClick={toggleAuth} className="w-full">
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={handleLogin}
      />
    </>
  );
};

export default Navbar;
