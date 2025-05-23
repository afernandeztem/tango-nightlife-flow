
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, Beer, UserPlus, Users, Gift, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const SolutionsSection = () => {
  const { t } = useTranslation();
  
  const solutions = [
    {
      id: 'entradas',
      title: t('solutions.tickets.title'),
      icon: <Ticket className="w-10 h-10 text-tango-violet" />,
      description: t('solutions.tickets.description'),
      route: '/ventas'
    },
    {
      id: 'consumiciones',
      title: t('solutions.drinks.title'),
      icon: <Beer className="w-10 h-10 text-tango-violet" />,
      description: t('solutions.drinks.description'),
      route: '/ventas'
    },
    {
      id: 'crm',
      title: t('solutions.crm.title'),
      icon: <UserPlus className="w-10 h-10 text-tango-violet" />,
      description: t('solutions.crm.description'),
      route: '/crm'
    },
    {
      id: 'promotores',
      title: t('solutions.promoters.title'),
      icon: <Users className="w-10 h-10 text-tango-violet" />,
      description: t('solutions.promoters.description'),
      route: '/promotores'
    },
    {
      id: 'fidelizacion',
      title: t('solutions.loyalty.title'),
      icon: <Gift className="w-10 h-10 text-tango-violet" />,
      description: t('solutions.loyalty.description'),
      route: '/fidelizacion'
    },
    {
      id: 'reporting',
      title: t('solutions.reporting.title'),
      icon: <BarChart3 className="w-10 h-10 text-tango-violet" />,
      description: t('solutions.reporting.description'),
      route: '/tiempo-real'
    },
    {
      id: 'permisos',
      title: t('solutions.roles.title'),
      icon: <ShieldCheck className="w-10 h-10 text-tango-violet" />,
      description: t('solutions.roles.description'),
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
            {t('home.solutionsTitle')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('home.solutionsSubtitle')}
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
