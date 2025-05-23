
import React from 'react';
import ButtonCTA from './ui/button-cta';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const CTASection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="cta-final" className="py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-tango-pink to-tango-pink/70"></div>
          
          {/* Content */}
          <div className="relative py-20 px-8 md:py-24 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-10 max-w-4xl mx-auto leading-tight">
              {t('home.ctaTitle')}
            </h2>
            
            <p className="text-white text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              {t('home.ctaSubtitle')}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <ButtonCTA 
                variant="primary" 
                size="lg" 
                href="#form"
                className="bg-white text-tango-pink hover:bg-white/90 shadow-xl"
              >
                {t('header.startNow')}
              </ButtonCTA>
              <ButtonCTA 
                variant="outline" 
                size="lg" 
                href="#form"
                className="border-white text-white hover:bg-white/10"
              >
                {t('header.requestDemo')}
              </ButtonCTA>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white opacity-10 blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white opacity-10 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
