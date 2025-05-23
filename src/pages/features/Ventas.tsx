
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { Ticket, Beer } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Ventas = () => {
  const { t } = useTranslation();

  return (
    <FeatureLayout
      title={t('features.sales.title')}
      subtitle={t('features.sales.subtitle')}
      description={t('features.sales.description')}
      icon={
        <div className="flex">
          <Ticket className="w-10 h-10 text-tango-purple" />
          <Beer className="w-10 h-10 text-tango-purple -ml-2" />
        </div>
      }
      benefits={[
        t('features.sales.benefits.1'),
        t('features.sales.benefits.2'),
        t('features.sales.benefits.3'),
        t('features.sales.benefits.4'),
        t('features.sales.benefits.5'),
        t('features.sales.benefits.6'),
      ]}
      useCases={[
        {
          title: "Discoteca aumenta ingresos un 35% con precios dinámicos",
          description: "Una conocida discoteca implementó nuestro sistema de precios dinámicos para entradas, que incrementaba automáticamente el precio según se acercaba el evento y aumentaba el nivel de ocupación. El resultado fue un aumento del 35% en ingresos por venta de entradas y una distribución más equilibrada de la llegada de clientes, reduciendo colas y mejorando la experiencia. Además, las promociones early-bird generaron mayor viralidad en redes sociales y atrajeron a un público nuevo.",
          image: "https://placehold.co/600x400/2D0D63/FFFFFF?text=Precios+Dinámicos"
        },
        {
          title: "Beach club optimiza las barras con TPV inteligente",
          description: "Un beach club de Valencia instaló nuestro sistema de TPV inteligente en sus 5 barras. El sistema sugería automáticamente promociones según la hora del día (como happy hours) y recomendaba productos complementarios basados en el pedido inicial. Esto resultó en un incremento del 27% en el ticket medio y una reducción del 40% en el tiempo de atención por cliente. Los informes detallados permitieron identificar qué productos funcionaban mejor en cada momento del día, optimizando el inventario.",
          image: "https://placehold.co/600x400/6F3BFF/FFFFFF?text=TPV+Inteligente"
        }
      ]}
    />
  );
};

export default Ventas;
