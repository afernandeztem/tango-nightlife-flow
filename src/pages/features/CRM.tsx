
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { UserPlus } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const CRM = () => {
  const { t } = useTranslation();

  return (
    <FeatureLayout
      title={t('features.crm.title')}
      subtitle={t('features.crm.subtitle')}
      description={t('features.crm.description')}
      icon={<UserPlus className="w-12 h-12 text-tango-purple" />}
      benefits={[
        t('features.crm.benefits.1'),
        t('features.crm.benefits.2'),
        t('features.crm.benefits.3'),
        t('features.crm.benefits.4'),
        t('features.crm.benefits.5'),
        t('features.crm.benefits.6'),
      ]}
      useCases={[
        {
          title: "Discoteca recupera clientes inactivos con campaña segmentada",
          description: "Una discoteca de Madrid utilizó nuestro CRM para identificar clientes que no habían visitado el local en los últimos 3 meses. Crearon una campaña específica con una oferta de entrada gratuita y una consumición, logrando recuperar al 28% de estos clientes. El seguimiento posterior mostró que el 65% de los recuperados volvieron al menos una vez más en el siguiente trimestre, generando un ROI del 340% sobre la inversión en la campaña.",
          image: "https://placehold.co/600x400/2D0D63/FFFFFF?text=Campaña+Reactivación"
        },
        {
          title: "Grupo de pubs personaliza ofertas según preferencias de bebida",
          description: "Una cadena de pubs analizó las preferencias de bebidas de sus clientes y creó segmentos por tipo de consumidor: amantes de la cerveza artesanal, aficionados a los cócteles premium, y entusiastas de los destilados. Cada grupo recibió comunicaciones personalizadas sobre eventos temáticos y promociones específicas. El resultado fue un aumento del 37% en la asistencia a eventos temáticos y un incremento del 52% en el consumo de productos de alta gama.",
          image: "https://placehold.co/600x400/6F3BFF/FFFFFF?text=Segmentación+Bebidas"
        },
        {
          title: "Festival optimiza la venta anticipada con datos históricos",
          description: "Un festival anual utilizó los datos históricos de compra para predecir el mejor momento para lanzar ofertas de early-bird. Analizando el comportamiento de compra de ediciones anteriores, identificaron que los compradores tempranos preferían packs con alojamiento incluido. Adaptaron su estrategia para ofrecer estos paquetes antes y a un precio más atractivo, logrando vender el 45% de las entradas en las primeras dos semanas, mejorando su flujo de caja y reduciendo los costes de marketing a medida que se acercaba el evento.",
          image: "https://placehold.co/600x400/9D4EDD/FFFFFF?text=Análisis+Predictivo"
        }
      ]}
    />
  );
};

export default CRM;
