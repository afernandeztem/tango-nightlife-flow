
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ButtonCTA from './ui/button-cta';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-4 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-tango-purple">
          TangoApp
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#soluciones" className="text-gray-700 hover:text-tango-violet font-medium">
              Soluciones
            </a>
            <a href="#casos" className="text-gray-700 hover:text-tango-violet font-medium">
              Casos de Uso
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-tango-violet font-medium">
              Testimonios
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <ButtonCTA variant="outline" size="sm" href="#form">
              Solicita una demo
            </ButtonCTA>
            <ButtonCTA variant="primary" size="sm" href="#form">
              Empieza ahora – Gratis
            </ButtonCTA>
          </div>
        </div>
        
        <button 
          className="md:hidden text-tango-purple"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="#soluciones" 
              className="text-gray-700 hover:text-tango-violet font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Soluciones
            </a>
            <a 
              href="#casos" 
              className="text-gray-700 hover:text-tango-violet font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Casos de Uso
            </a>
            <a 
              href="#testimonios" 
              className="text-gray-700 hover:text-tango-violet font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonios
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <ButtonCTA variant="outline" size="sm" href="#form" onClick={() => setIsMenuOpen(false)}>
                Solicita una demo
              </ButtonCTA>
              <ButtonCTA variant="primary" size="sm" href="#form" onClick={() => setIsMenuOpen(false)}>
                Empieza ahora – Gratis
              </ButtonCTA>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
