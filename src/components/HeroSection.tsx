
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import ButtonCTA from './ui/button-cta';

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
    <section id="hero" className="relative min-h-screen flex items-center section-padding pt-28 lg:pt-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-violet-100 opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Software de gestión nocturna que hace <span className="gradient-text">bailar tus ingresos</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Vende entradas, consumiciones y fideliza a tus clientes desde una sola plataforma.
            </p>

            {/* Verticals ticker */}
            <div className="mb-8 overflow-hidden">
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center space-x-4 animate-ticker whitespace-nowrap">
                  {verticals.map((vertical, index) => (
                    <React.Fragment key={index}>
                      <span className="text-tango-purple font-medium">{vertical}</span>
                      {index < verticals.length - 1 && (
                        <span className="text-tango-violet">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <ButtonCTA variant="primary" size="lg" href="#form">
                Empieza ahora – Gratis <ArrowDown className="ml-2 w-4 h-4" />
              </ButtonCTA>
              <ButtonCTA variant="outline" size="lg" href="#form">
                Solicita una demo
              </ButtonCTA>
            </div>
          </div>
          
          <div className="flex justify-center">
            {isLoaded ? (
              <div className="relative animate-float">
                <div className="w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-tango-purple rounded-[40px] p-3 shadow-xl">
                  <div className="bg-white rounded-[32px] h-full overflow-hidden">
                    {/* Placeholder for iPhone mockup */}
                    <img
                      src="https://placehold.co/320x650/2d0d63/FFFFFF?text=TangoApp+Dashboard"
                      alt="TangoApp admin dashboard en un iPhone"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-tango-violet opacity-70 animate-pulse-shadow"></div>
              </div>
            ) : (
              <div className="w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-gray-200 rounded-[40px] animate-pulse"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
