
import React from 'react';
import ButtonCTA from './ui/button-cta';

const CTASection = () => {
  return (
    <section id="cta-final" className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-tango-purple to-tango-violet opacity-90"></div>
          
          {/* Content */}
          <div className="relative py-16 px-8 md:py-20 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
              Noches épicas empiezan con datos épicos
            </h2>
            
            <p className="text-white text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Únete a los cientos de negocios de ocio nocturno que están revolucionando su forma de operar y aumentando sus beneficios con TangoApp.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <ButtonCTA 
                variant="primary" 
                size="lg" 
                href="#form"
                className="bg-white text-tango-purple hover:bg-white/90"
              >
                Empieza ahora – Gratis
              </ButtonCTA>
              <ButtonCTA 
                variant="outline" 
                size="lg" 
                href="#form"
                className="border-white text-white hover:bg-white/10"
              >
                Solicita una demo
              </ButtonCTA>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-white opacity-10"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
