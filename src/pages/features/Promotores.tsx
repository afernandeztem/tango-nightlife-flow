
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { Users } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Promotores = () => {
  const { t } = useTranslation();

  return (
    <FeatureLayout
      title={t('features.promoters.title')}
      subtitle={t('features.promoters.subtitle')}
      description={t('features.promoters.description')}
      icon={<Users className="w-12 h-12 text-tango-purple" />}
      benefits={[
        t('features.promoters.benefits.1'),
        t('features.promoters.benefits.2'),
        t('features.promoters.benefits.3'),
        t('features.promoters.benefits.4'),
        t('features.promoters.benefits.5'),
        t('features.promoters.benefits.6'),
      ]}
      useCases={[
        {
          title: "Discoteca gestiona 50 promotores sin conflictos",
          description: "Una discoteca de Madrid gestionaba manualmente las comisiones de 50 promotores, generando disputas constantes y 8 horas semanales de trabajo administrativo. Con nuestro sistema, cada promotor recibe su código personalizado y puede consultar sus ventas en tiempo real. Las liquidaciones automáticas eliminaron completamente las disputas y redujeron el tiempo administrativo a solo 30 minutos semanales. Además, el sistema de ranking motivó a los promotores a aumentar sus ventas un 40% en promedio.",
          image: "https://placehold.co/600x400/2D0D63/FFFFFF?text=Gestión+Promotores"
        },
        {
          title: "Festival optimiza su red de 200 promotores regionales",
          description: "Un festival nacional trabajaba con 200 promotores distribuidos por toda España, lo que hacía imposible el control manual. Implementaron nuestro sistema con comisiones escalonadas: 10% para las primeras 50 entradas, 15% de 51 a 100, y 20% por encima de 100. El resultado fue un aumento del 65% en ventas anticipadas y una distribución más equilibrada geográficamente. Los promotores más exitosos multiplicaron por 3 sus ventas gracias al sistema de incentivos progresivos.",
          image: "https://placehold.co/600x400/6F3BFF/FFFFFF?text=Red+Nacional"
        },
        {
          title: "Grupo de locales unifica la gestión de promotores",
          description: "Una cadena de 5 locales tenía promotores trabajando para múltiples venues sin coordinación. Con nuestro sistema, crearon un pool unificado donde los promotores pueden vender para cualquier local y recibir comisiones diferenciadas según el venue y el día de la semana. Esto resultó en un aumento del 45% en ventas cruzadas entre locales y permitió a los mejores promotores especializarse en eventos premium con comisiones más altas.",
          image: "https://placehold.co/600x400/9D4EDD/FFFFFF?text=Red+Unificada"
        }
      ]}
    />
  );
};

export default Promotores;
