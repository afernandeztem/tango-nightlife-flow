
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, Beer, UserPlus, Users, Gift, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsSection = () => {
  const solutions = [
    {
      id: 'entradas',
      title: 'Venta de entradas',
      icon: <Ticket className="w-10 h-10 text-tango-violet" />,
      description: 'Sistema completo para venta online y en taquilla, con precios dinámicos y control en tiempo real.',
      route: '/ventas'
    },
    {
      id: 'consumiciones',
      title: 'Venta de consumiciones',
      icon: <Beer className="w-10 h-10 text-tango-violet" />,
      description: 'TPV inteligente para barra con catálogo personalizable y promociones programables según la hora.',
      route: '/ventas'
    },
    {
      id: 'crm',
      title: 'CRM',
      icon: <UserPlus className="w-10 h-10 text-tango-violet" />,
      description: 'Base de datos de clientes con historial de visitas, preferencias y comportamiento de compra.',
      route: '/crm'
    },
    {
      id: 'promotores',
      title: 'Promotores',
      icon: <Users className="w-10 h-10 text-tango-violet" />,
      description: 'Control total de la red de promotores con códigos personalizados, comisiones y pagos automatizados.',
      route: '/promotores'
    },
    {
      id: 'fidelizacion',
      title: 'Sistemas de fidelización',
      icon: <Gift className="w-10 h-10 text-tango-violet" />,
      description: 'Programa de puntos, niveles VIP y recompensas automáticas basadas en el historial del cliente.',
      route: '/fidelizacion'
    },
    {
      id: 'reporting',
      title: 'Reporting en tiempo real',
      icon: <BarChart3 className="w-10 h-10 text-tango-violet" />,
      description: 'Dashboard con métricas clave: ingresos, asistencia, consumo medio y tendencias comparativas.',
      route: '/tiempo-real'
    },
    {
      id: 'permisos',
      title: 'Roles & permisos',
      icon: <ShieldCheck className="w-10 h-10 text-tango-violet" />,
      description: 'Control granular de accesos por rol: gerente, encargado, camarero, taquillero o promotor.',
      route: '/roles-permisos'
    }
  ];

  const handleCardClick = () => {
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  };

  return (
    <section id="soluciones" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones que <span className="gradient-text">transforman</span> tu negocio nocturno
          </h2>
          <p className="text-lg text-gray-700">
            Optimiza cada aspecto de tu local con herramientas diseñadas específicamente para el sector del ocio nocturno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Link key={solution.id} to={solution.route} onClick={handleCardClick}>
              <Card className="feature-card-hover overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-xl text-tango-purple">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{solution.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
