
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { Users } from 'lucide-react';

const Promotores = () => {
  return (
    <FeatureLayout
      title="Sistema de Promotores"
      subtitle="Control total de tu red de promotores con códigos personalizados, comisiones automáticas y liquidaciones transparentes."
      description="Nuestro sistema de gestión de promotores te permite administrar una red completa de colaboradores de manera eficiente y transparente. Cada promotor tiene su código único para trackear ventas en tiempo real, sistema de comisiones flexible con distintos porcentajes según volumen o tipo de entradas, y liquidación automática con informes detallados. Elimina disputas, ahorra tiempo administrativo y motiva a tu equipo con un sistema justo y transparente."
      icon={<Users className="w-12 h-12 text-tango-purple" />}
      benefits={[
        "Códigos únicos de promotor para tracking completo de ventas y conversiones.",
        "Sistema de comisiones flexible: porcentajes variables según volumen, tipo de entrada o temporada.",
        "Liquidaciones automáticas con informes detallados para cada promotor.",
        "Ranking de promotores en tiempo real para fomentar la competencia sana.",
        "Integración con CRM para identificar qué promotores atraen mejores clientes.",
        "Gestión de pagos automatizada con histórico completo de comisiones."
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
