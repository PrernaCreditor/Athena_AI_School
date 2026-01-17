import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, BookOpen, Award, Users, Phone, ChevronDown } from 'lucide-react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
    
    // Close mega menu when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest('.mega-menu-container') && !event.target.closest('.mega-menu-toggle')) {
        setIsMegaMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const menuItems = [
    {
      title: 'About',
      links: [
        { text: 'Our Story', href: '#' },
        { text: 'Leadership', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'News & Events', href: '#' },
        { text: 'Partners', href: '#' },
      ]
    },
    {
      title: 'Academics',
      links: [
        { text: 'Curriculum', href: '#' },
        { text: 'Learning Approach', href: '#' },
        { text: 'Assessment', href: '#' },
        { text: 'Faculty', href: '#' },
        { text: 'Resources', href: '#' },
      ]
    },
    {
      title: 'Electives',
      links: [
        { text: 'Arts & Music', href: '#' },
        { text: 'Sports', href: '#' },
        { text: 'STEM', href: '#' },
        { text: 'Language', href: '#' },
        { text: 'Coding', href: '#' },
      ]
    },
    {
      title: 'Admissions',
      links: [
        { text: 'Apply Now', href: '#' },
        { text: 'Admission Process', href: '#' },
        { text: 'Tuition & Fees', href: '#' },
        { text: 'Virtual Tour', href: '#' },
        { text: 'FAQs', href: '#' },
      ]
    },
    {
      title: 'How it Works',
      links: [
        { text: 'Learning Platform', href: '#' },
        { text: 'Schedule', href: '#' },
        { text: 'Support', href: '#' },
        { text: 'Parent Portal', href: '#' },
        { text: 'Student Portal', href: '#' },
      ]
    },
    {
      title: 'Being 21K',
      links: [
        { text: 'Student Life', href: '#' },
        { text: 'Community', href: '#' },
        { text: 'Achievements', href: '#' },
        { text: 'Alumni', href: '#' },
        { text: 'Testimonials', href: '#' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { text: 'Contact Us', href: '#' },
        { text: 'Support', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Events', href: '#' },
        { text: 'Webinars', href: '#' },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} z-50 h-16 flex items-center px-4 md:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-gray-900">AI School</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 mr-16">
          <Link 
            to="/" 
            className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === '/' ? 'text-blue-600' : ''}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === '/about' ? 'text-blue-600' : ''}`}
          >
            <User size={18} />
            <span>About</span>
          </Link>
          <Link 
            to="/programs" 
            className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === '/programs' ? 'text-blue-600' : ''}`}
          >
            <BookOpen size={18} />
            <span>Programs</span>
          </Link>
          <Link 
            to="/resources" 
            className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium ${location.pathname === '/resources' ? 'text-blue-600' : ''}`}
          >
            <Award size={18} />
            <span>Resources</span>
          </Link>
          <a href="#contact" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <Phone size={18} />
            <span>Contact</span>
          </a>
        </div>
        
        {/* Hamburger menu button - visible on all screen sizes */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={() => {
              setIsOpen(!isOpen);
              setIsMegaMenuOpen(false); // Close mega menu when opening hamburger menu
            }}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            {/* Simple Navigation Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link 
                to="/" 
                className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2 ${location.pathname === '/' ? 'text-blue-600' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link 
                to="/about" 
                className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2 ${location.pathname === '/about' ? 'text-blue-600' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <User size={18} />
                <span>About</span>
              </Link>
              <Link 
                to="/programs" 
                className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2 ${location.pathname === '/programs' ? 'text-blue-600' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <BookOpen size={18} />
                <span>Programs</span>
              </Link>
              <Link 
                to="/resources" 
                className={`flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2 ${location.pathname === '/resources' ? 'text-blue-600' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Award size={18} />
                <span>Resources</span>
              </Link>
              <a 
                href="#contact" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                <span>Contact</span>
              </a>
            </div>
            
            {/* Divider */}
            <div className="border-t border-gray-200 mb-6"></div>
            
            {/* Mega Menu Content */}
            <div className="flex flex-wrap gap-8 overflow-x-auto">
              {menuItems.map((column, index) => (
                <div key={index} className="flex-shrink-0">
                  <h3 className="text-lg font-bold text-blue-900 mb-3 pb-2 relative whitespace-nowrap">
                    {column.title}
                    <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></span>
                  </h3>
                  <ul className="space-y-1">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1 whitespace-nowrap"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div className="mega-menu-container absolute top-full left-0 right-0 bg-white shadow-lg z-40 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-7 gap-8">
              {menuItems.map((column, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-blue-900 mb-4 pb-2 relative">
                    {column.title}
                    <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-yellow-400"></span>
                  </h3>
                  <ul className="space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="text-gray-700 hover:text-blue-600 hover:underline transition-colors block py-1"
                          onClick={() => setIsMegaMenuOpen(false)}
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;