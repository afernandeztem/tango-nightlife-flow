
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, Users, CreditCard } from 'lucide-react';

const CasesSection = () => {
  const cases = [
    {
      id: 'discoteca',
      title: 'Discoteca LUXE',
      icon: <TrendingUp className="w-12 h-12 text-tango-violet p-2 bg-violet-100 rounded-full" />,
      stat: '+27%',
      description: 'Aumento del ticket medio por cliente',
      text: 'Implementando nuestro sistema de venta de consumiciones y fidelización, LUXE logró incrementar el consumo por cliente y agilizar el servicio en barras durante las horas punta.'
    },
    {
      id: 'festival',
      title: 'Festival SoundWave',
      icon: <Clock className="w-12 h-12 text-tango-violet p-2 bg-violet-100 rounded-full" />,
      stat: '5h',
      description: 'Ahorro semanal en gestión de promotores',
      text: 'Con el módulo de control de promotores, el equipo de SoundWave automatizó pagos y comisiones, eliminando errores y disputas mientras aumentaba su red de ventas.'
    },
    {
      id: 'beachclub',
      title: 'Ibiza Sunset Club',
      icon: <Users className="w-12 h-12 text-tango-violet p-2 bg-violet-100 rounded-full" />,
      stat: '+40%',
      description: 'Incremento en tasa de retorno de clientes',
      text: 'Gracias al CRM y sistema de fidelización, lograron identificar y premiar a sus mejores clientes, creando experiencias personalizadas que multiplicaron sus visitas.'
    },
    {
      id: 'pub',
      title: 'Irish Pub Network',
      icon: <CreditCard className="w-12 h-12 text-tango-violet p-2 bg-violet-100 rounded-full" />,
      stat: '18%',
      description: 'Reducción en costes operativos',
      text: 'La cadena de pubs implementó nuestro sistema de roles y permisos junto al reporting en tiempo real, optimizando su personal y reduciendo pérdidas por errores o fraude.'
    }
  ];

  return (
    <section id="casos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Casos de éxito que <span className="text-tango-violet">hablan por sí solos</span>
          </h2>
          <p className="text-lg text-gray-700">
            Descubre cómo diferentes negocios de ocio nocturno están transformando su operativa y resultados con TangoApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem) => (
            <Card key={caseItem.id} className="overflow-hidden feature-card-hover border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-tango-purple p-6 flex flex-col justify-center items-center text-white">
                    <h3 className="font-bold text-xl mb-2">{caseItem.title}</h3>
                    <div className="mb-4">
                      {caseItem.icon}
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold mb-1">{caseItem.stat}</p>
                      <p className="text-sm opacity-80">{caseItem.description}</p>
                    </div>
                  </div>
                  <div className="p-6 md:col-span-2 flex items-center">
                    <div>
                      <img
                        src={`https://placehold.co/400x200/${caseItem.id === 'discoteca' ? 'FF00FF' : 
                            caseItem.id === 'festival' ? '6F3BFF' :
                            caseItem.id === 'beachclub' ? '00BFFF' : 
                            '2D0D63'}/FFFFFF?text=${caseItem.title}`}
                        alt={`Caso de éxito: ${caseItem.title}`}
                        className="w-full h-32 object-cover mb-4 rounded"
                        loading="lazy"
                      />
                      <p className="text-gray-700">{caseItem.text}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
