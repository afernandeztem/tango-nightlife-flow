
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

const ProblemsSection = () => {
  const problems = [
    {
      emoji: '📉',
      title: 'Alta tasa de fracaso',
      description: 'El 60% de los locales quiebra antes de cumplir 3 años.'
    },
    {
      emoji: '🤷',
      title: 'Falta de control',
      description: 'Cero control sobre ventas de RRPP, promotores y redes.'
    },
    {
      emoji: '⚙️',
      title: 'Flexibilidad limitada',
      description: 'Cambiar precios en mitad de la noche es casi imposible.'
    },
    {
      emoji: '🕵️',
      title: 'Sin datos, sin mejoras',
      description: 'Sin datos de clientes no hay servicio que mejore.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="problemas" className="py-28 md:py-32">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
        variants={containerVariants}
      >
        <motion.div className="text-center max-w-3xl mx-auto mb-20" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Los retos de la gestión nocturna <span className="text-gray-800">que te quitan el sueño</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            La industria del ocio nocturno enfrenta desafíos únicos que pueden hacer la diferencia entre el éxito y el fracaso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="feature-card-hover border-0 p-8 flex flex-col items-start h-full shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <div className="text-5xl mb-6">
                  {problem.emoji}
                </div>
                <h3 className="text-xl font-bold mb-4 text-left text-black">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-left">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estos problemas no son inevitables. Con las herramientas adecuadas, puedes transformar estos desafíos en oportunidades de crecimiento para tu negocio.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemsSection;
