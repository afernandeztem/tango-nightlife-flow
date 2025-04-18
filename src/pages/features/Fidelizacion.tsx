
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { Gift } from 'lucide-react';

const Fidelizacion = () => {
  return (
    <FeatureLayout
      title="Sistemas de fidelización"
      subtitle="Convierte clientes casuales en fans fieles con programas de puntos, niveles VIP y recompensas automáticas basadas en el historial del cliente."
      description="Nuestro sistema de fidelización es una herramienta potente para retener clientes y aumentar su valor a lo largo del tiempo. Implementa programas de puntos personalizables, crea niveles VIP con beneficios exclusivos y automatiza recompensas basadas en patrones de comportamiento. Todo esto integrado con tu sistema de ventas y CRM para una experiencia fluida."
      icon={<Gift className="w-12 h-12 text-tango-purple" />}
      benefits={[
        "Aumenta la frecuencia de visitas hasta un 35% con programas de puntos.",
        "Incrementa el gasto medio por cliente con recompensas estratégicas.",
        "Mejora la experiencia con accesos VIP, consumiciones de cortesía y promociones exclusivas.",
        "Automatiza el envío de ofertas en fechas especiales como cumpleaños.",
        "Gamifica la experiencia con retos que fomentan comportamientos deseados.",
        "Obtén análisis detallados sobre la efectividad de tus programas de fidelización."
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
