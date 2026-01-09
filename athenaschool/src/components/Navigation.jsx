import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, BookOpen, Award, Users, Phone, ChevronDown } from 'lucide-react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 h-16 flex items-center px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">AI School</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
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
          <a href="#programs" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <BookOpen size={18} />
            <span>Programs</span>
          </a>
          <a href="#features" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <Award size={18} />
            <span>Features</span>
          </a>
          <a href="#testimonials" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <Users size={18} />
            <span>Testimonials</span>
          </a>
          <a href="#contact" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium">
            <Phone size={18} />
            <span>Contact</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-4">
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
            <a 
              href="#programs" 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen size={18} />
              <span>Programs</span>
            </a>
            <a 
              href="#features" 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              <Award size={18} />
              <span>Features</span>
            </a>
            <a 
              href="#testimonials" 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              <Users size={18} />
              <span>Testimonials</span>
            </a>
            <a 
              href="#contact" 
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;