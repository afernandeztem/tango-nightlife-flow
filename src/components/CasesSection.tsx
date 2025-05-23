
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Clock, Users, CreditCard } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const CasesSection = () => {
  const { t } = useTranslation();
  
  const cases = [
    {
      id: 'discoteca',
      title: t('cases.luxe.title'),
      icon: <TrendingUp className="w-12 h-12 text-tango-violet p-2 bg-violet-100 rounded-full" />,
      stat: t('cases.luxe.stat'),
      description: t('cases.luxe.description'),
      text: t('cases.luxe.text')
    },
    {
      id: 'festival',
      title: t('cases.soundwave.title'),
      icon: <Clock className="w-12 h-12 text-tango-violet p-2 bg-violet-100 rounded-full" />,
      stat: t('cases.soundwave.stat'),
      description: t('cases.soundwave.description'),
      text: t('cases.soundwave.text')
    },
    {
      id: 'beachclub',
      title: t('cases.sunset.title'),
      icon: <Users className="w-12 h-12 text-tango-violet p-2 bg-violet-100 rounded-full" />,
      stat: t('cases.sunset.stat'),
      description: t('cases.sunset.description'),
      text: t('cases.sunset.text')
    },
    {
      id: 'pub',
      title: t('cases.irish.title'),
      icon: <CreditCard className="w-12 h-12 text-tango-violet p-2 bg-violet-100 rounded-full" />,
      stat: t('cases.irish.stat'),
      description: t('cases.irish.description'),
      text: t('cases.irish.text')
    }
  ];

  return (
    <section id="casos" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('home.casesTitle')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('home.casesSubtitle')}
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
