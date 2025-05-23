
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ButtonCTA from './ui/button-cta';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-tango-pink">
          TangoApp
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="#soluciones" className="text-gray-800 hover:text-tango-pink font-medium transition duration-300">
              Soluciones
            </a>
            <a href="#casos" className="text-gray-800 hover:text-tango-pink font-medium transition duration-300">
              Casos de Uso
            </a>
            <a href="#testimonios" className="text-gray-800 hover:text-tango-pink font-medium transition duration-300">
              Testimonios
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <ButtonCTA variant="outline" size="sm" href="#form">
              Solicita una demo
            </ButtonCTA>
            <ButtonCTA variant="primary" size="sm" href="#form">
              Empieza ahora – Gratis
            </ButtonCTA>
          </div>
        </div>
        
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-6">
              <a 
                href="#soluciones" 
                className="text-gray-800 hover:text-tango-pink font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluciones
              </a>
              <a 
                href="#casos" 
                className="text-gray-800 hover:text-tango-pink font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos de Uso
              </a>
              <a 
                href="#testimonios" 
                className="text-gray-800 hover:text-tango-pink font-medium py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </a>
              <div className="flex flex-col space-y-4 pt-4">
                <ButtonCTA variant="outline" size="default" href="#form" onClick={() => setIsMenuOpen(false)}>
                  Solicita una demo
                </ButtonCTA>
                <ButtonCTA variant="primary" size="default" href="#form" onClick={() => setIsMenuOpen(false)}>
                  Empieza ahora – Gratis
                </ButtonCTA>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
