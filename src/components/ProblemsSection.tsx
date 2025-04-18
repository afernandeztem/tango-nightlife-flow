
import React from 'react';
import { Card } from '@/components/ui/card';

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

  return (
    <section id="problemas" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Los retos de la gestión nocturna <span className="text-tango-violet">que te quitan el sueño</span>
          </h2>
          <p className="text-lg text-gray-700">
            La industria del ocio nocturno enfrenta desafíos únicos que pueden hacer la diferencia entre el éxito y el fracaso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="feature-card-hover p-6 flex flex-col items-start border-gray-200 h-full">
              <div className="text-4xl mb-4">
                {problem.emoji}
              </div>
              <h3 className="text-xl font-bold mb-2 text-left text-tango-purple">
                {problem.title}
              </h3>
              <p className="text-gray-700 text-left">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Estos problemas no son inevitables. Con las herramientas adecuadas, puedes transformar estos desafíos en oportunidades de crecimiento para tu negocio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
