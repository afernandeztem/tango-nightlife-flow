
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { BarChart3 } from 'lucide-react';

const TiempoReal = () => {
  return (
    <FeatureLayout
      title="Reporting en tiempo real"
      subtitle="Dashboard con métricas clave e insights que te permiten tomar decisiones al momento para maximizar tu rentabilidad mientras el evento transcurre."
      description="Nuestro sistema de reporting en tiempo real proporciona una visión instantánea de lo que está sucediendo en tu negocio mientras ocurre. Visualiza KPIs clave como ocupación, ventas por hora, eficiencia por barra y rentabilidad por productos. Compara resultados con periodos anteriores e identifica tendencias. Recibe alertas configurables cuando se alcanzan objetivos o aparecen anomalías que requieren tu atención inmediata."
      icon={<BarChart3 className="w-12 h-12 text-tango-purple" />}
      benefits={[
        "Toma decisiones informadas al momento basadas en datos en tiempo real.",
        "Ajusta precios y promociones durante el evento para optimizar ingresos.",
        "Identifica cuellos de botella operativos antes de que afecten la experiencia del cliente.",
        "Compara el rendimiento actual con datos históricos para contextualizar las métricas.",
        "Recibe alertas automáticas sobre situaciones que requieren atención inmediata.",
        "Acceso multiplataforma: visualiza tus datos desde cualquier dispositivo, en cualquier lugar."
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
