
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { Gift } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Fidelizacion = () => {
  const { t } = useTranslation();

  return (
    <FeatureLayout
      title={t('features.loyalty.title')}
      subtitle={t('features.loyalty.subtitle')}
      description={t('features.loyalty.description')}
      icon={<Gift className="w-12 h-12 text-tango-purple" />}
      benefits={[
        t('features.loyalty.benefits.1'),
        t('features.loyalty.benefits.2'),
        t('features.loyalty.benefits.3'),
        t('features.loyalty.benefits.4'),
        t('features.loyalty.benefits.5'),
        t('features.loyalty.benefits.6'),
      ]}
      useCases={[
        {
          title: "Club nocturno duplica la tasa de retorno con programa VIP",
          description: "Una discoteca en Barcelona implementó nuestro programa de niveles VIP con tarjetas digitales que otorgaban acceso prioritario, espacios exclusivos y descuentos en botellas según la frecuencia de visitas. En apenas 3 meses, aumentaron la tasa de retorno en un 45% y el gasto medio de los clientes VIP en un 78%. El sistema automático de ascenso de nivel basado en visitas y gastos generó una sana competencia entre clientes habituales.",
          image: "https://placehold.co/600x400/2D0D63/FFFFFF?text=Club+VIP"
        },
        {
          title: "Festival aumenta las ventas anticipadas con programa de puntos",
          description: "Un festival de verano implementó un sistema de puntos que premiaba las compras anticipadas y la adquisición de paquetes completos. Los puntos acumulados podían canjearse por merchandising exclusivo, acceso a zonas VIP o consumiciones. El resultado fue un incremento del 65% en ventas anticipadas y una reducción del 40% en cancelaciones de última hora. Además, los datos recogidos permitieron personalizar mejor la oferta para la siguiente edición.",
          image: "https://placehold.co/600x400/6F3BFF/FFFFFF?text=Festival+Puntos"
        },
        {
          title: "Beach club personaliza la experiencia con CRM integrado",
          description: "Un beach club de Ibiza combinó nuestro sistema de fidelización con el CRM para crear experiencias hiperpersonalizadas. Al reconocer a los clientes habituales mediante pulseras RFID, el personal recibía notificaciones con sus preferencias (bebidas favoritas, zonas preferidas, amigos que suelen acompañarle). Esto resultó en un aumento del 52% en las propinas y una mejora notable en las reseñas positivas sobre el servicio personalizado.",
          image: "https://placehold.co/600x400/9D4EDD/FFFFFF?text=Beach+Club+CRM"
        }
      ]}
    />
  );
};

export default Fidelizacion;
