
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { BarChart3 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const TiempoReal = () => {
  const { t } = useTranslation();

  return (
    <FeatureLayout
      title={t('features.realtime.title')}
      subtitle={t('features.realtime.subtitle')}
      description={t('features.realtime.description')}
      icon={<BarChart3 className="w-12 h-12 text-tango-purple" />}
      benefits={[
        t('features.realtime.benefits.1'),
        t('features.realtime.benefits.2'),
        t('features.realtime.benefits.3'),
        t('features.realtime.benefits.4'),
        t('features.realtime.benefits.5'),
        t('features.realtime.benefits.6'),
      ]}
      useCases={[
        {
          title: "Club nocturno incrementa ingresos ajustando promociones en tiempo real",
          description: "Un club nocturno de Barcelona monitoriza el ratio de ocupación y el ritmo de ventas en barra a través de nuestro dashboard. Al detectar que la afluencia era menor de lo esperado un jueves por la noche, activaron rápidamente una promoción de 2x1 en ciertas bebidas durante una hora, comunicándola a través de sus redes sociales. La acción resultó en un aumento del 35% en la ocupación en la siguiente hora y un incremento del 22% en los ingresos totales de la noche respecto a la previsión inicial.",
          image: "https://placehold.co/600x400/2D0D63/FFFFFF?text=Promociones+Dinámicas"
        },
        {
          title: "Festival optimiza la asignación de personal con análisis de flujos",
          description: "Un festival utilizó nuestro sistema para monitorizar en tiempo real los flujos de asistentes entre escenarios y zonas de bar. Al detectar que un escenario secundario estaba atrayendo más público del previsto, reasignaron rápidamente personal de barra y seguridad para atender la demanda. Esto evitó largas colas, mejoró la experiencia de los asistentes y permitió maximizar las ventas de bebidas en esa zona, que aumentaron un 45% respecto a la previsión inicial.",
          image: "https://placehold.co/600x400/6F3BFF/FFFFFF?text=Flujos+Asistentes"
        },
        {
          title: "Cadena de pubs detecta y corrige anomalías con alertas automáticas",
          description: "Una cadena de pubs configuró nuestro sistema para recibir alertas sobre patrones inusuales de venta o consumo. Durante un evento, el gerente recibió una notificación de que el consumo de una marca premium de ginebra era anormalmente alto en una barra específica. La investigación inmediata reveló un error en la configuración del TPV que estaba aplicando un precio incorrecto. La rápida corrección evitó pérdidas estimadas en 1.200€ solo en esa noche, además de identificar y solucionar un problema que habría pasado desapercibido en un análisis posterior.",
          image: "https://placehold.co/600x400/9D4EDD/FFFFFF?text=Alertas+Anomalías"
        }
      ]}
    />
  );
};

export default TiempoReal;
