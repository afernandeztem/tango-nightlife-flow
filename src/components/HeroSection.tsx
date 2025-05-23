
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import ButtonCTA from './ui/button-cta';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate lazy loading of the animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const verticals = ['Discotecas', 'Beach Clubs', 'Festivales', 'Pubs', 'Eventos puntuales'];
  
  return (
    <section id="hero" className="relative py-32 md:py-40 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-black"
            >
              Software de gestión nocturna que hace <span className="text-tango-pink">bailar tus ingresos</span>.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Vende entradas, consumiciones y fideliza a tus clientes desde una sola plataforma.
            </motion.p>

            {/* Verticals ticker */}
            <div className="mb-10 overflow-hidden">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center space-x-4 animate-ticker whitespace-nowrap">
                  {verticals.map((vertical, index) => (
                    <React.Fragment key={index}>
                      <span className="text-tango-pink font-medium">{vertical}</span>
                      {index < verticals.length - 1 && (
                        <span className="text-gray-400">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-6"
            >
              <ButtonCTA variant="primary" size="lg" href="#form">
                Empieza ahora – Gratis <ArrowDown className="ml-2 w-4 h-4" />
              </ButtonCTA>
              <ButtonCTA variant="outline" size="lg" href="#form">
                Solicita una demo
              </ButtonCTA>
            </motion.div>
          </div>
          
          <div className="lg:col-span-6 flex justify-center">
            {isLoaded ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-white rounded-[40px] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  <div className="bg-white rounded-[32px] h-full overflow-hidden border border-gray-100">
                    {/* Device mockup with app screenshot */}
                    <img
                      src="https://placehold.co/320x650/ffffff/C5198F?text=TangoApp+Dashboard"
                      alt="TangoApp admin dashboard en un iPhone"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-tango-pink opacity-30 blur-xl"></div>
              </motion.div>
            ) : (
              <div className="w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-gray-100 rounded-[40px] animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
