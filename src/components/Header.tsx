import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ButtonCTA from './ui/button-cta';
import LanguageSelector from './LanguageSelector';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={scrollToTop}
          className="text-2xl font-bold text-black hover:text-gray-600 transition-colors duration-300"
        >
          TangoApp
        </button>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <a href="#soluciones" className="text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg font-medium transition-all duration-300">
              {t('header.solutions')}
            </a>
            <a href="#casos" className="text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg font-medium transition-all duration-300">
              {t('header.cases')}
            </a>
            <a href="#testimonios" className="text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg font-medium transition-all duration-300">
              {t('header.testimonials')}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ButtonCTA variant="outline" size="sm" href="#form">
              {t('header.requestDemo')}
            </ButtonCTA>
            <ButtonCTA variant="primary" size="sm" href="#form">
              {t('header.startNow')}
            </ButtonCTA>
          </div>
        </div>
        
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSelector />
          <button 
            className="text-gray-800 hover:text-black transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
                className="text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg font-medium text-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.solutions')}
              </a>
              <a 
                href="#casos" 
                className="text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg font-medium text-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.cases')}
              </a>
              <a 
                href="#testimonios" 
                className="text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg font-medium text-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.testimonials')}
              </a>
              <div className="flex flex-col space-y-4 pt-4">
                <ButtonCTA variant="outline" size="default" href="#form" onClick={() => setIsMenuOpen(false)}>
                  {t('header.requestDemo')}
                </ButtonCTA>
                <ButtonCTA variant="primary" size="default" href="#form" onClick={() => setIsMenuOpen(false)}>
                  {t('header.startNow')}
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
