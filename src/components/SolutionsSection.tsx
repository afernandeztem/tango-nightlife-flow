
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Ticket, Beer, UserPlus, Users, Gift, BarChart3, ShieldCheck } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      id: 'entradas',
      title: 'Venta de entradas',
      icon: <Ticket className="w-10 h-10 text-tango-violet" />,
      description: 'Sistema completo para venta online y en taquilla, con precios dinámicos y control en tiempo real.',
      details: 'Vende entradas anticipadas online con descuentos automáticos por volumen o early-bird. Controla el aforo en tiempo real y optimiza los precios según la demanda. Compatible con escáneres de código QR y pulseras RFID.',
      useCase: 'Las discotecas que utilizan nuestro sistema de venta de entradas anticipadas reportan un aumento del 35% en ingresos por noche y una reducción significativa en los tiempos de espera en la entrada.'
    },
    {
      id: 'consumiciones',
      title: 'Venta de consumiciones',
      icon: <Beer className="w-10 h-10 text-tango-violet" />,
      description: 'TPV inteligente para barra con catálogo personalizable y promociones programables según la hora.',
      details: 'Gestiona múltiples barras desde un solo panel, crea happy hours automáticos, y promociones 2x1 programables. Acepta pagos con tarjeta, móvil o pulseras con saldo precargado. Análisis detallado de popularidad de bebidas y rentabilidad.',
      useCase: 'Los beach clubs que implementan nuestro sistema de consumiciones ven un incremento del 27% en el ticket medio gracias a las promociones personalizadas y paquetes sugeridos automáticamente.'
    },
    {
      id: 'crm',
      title: 'CRM',
      icon: <UserPlus className="w-10 h-10 text-tango-violet" />,
      description: 'Base de datos de clientes con historial de visitas, preferencias y comportamiento de compra.',
      details: 'Captura datos desde la compra de entradas o check-in, perfila a tus clientes según sus hábitos de consumo, frecuencia de visitas y preferencias. Envía comunicaciones personalizadas por SMS o email con ofertas específicas.',
      useCase: 'Los pubs que utilizan nuestro CRM para segmentar clientes y enviar promociones personalizadas han incrementado la tasa de retorno en un 40% y la fidelidad de clientes VIP en un 65%.'
    },
    {
      id: 'promotores',
      title: 'Promotores',
      icon: <Users className="w-10 h-10 text-tango-violet" />,
      description: 'Control total de la red de promotores con códigos personalizados, comisiones y pagos automatizados.',
      details: 'Cada promotor tiene su código único para trackear ventas en tiempo real. Sistema de comisiones flexible con distintos porcentajes según volumen o tipo de entradas. Liquidación automática con informes detallados por promotor.',
      useCase: 'Los festivales que gestionan promotores con TangoApp ahorran 5 horas semanales en administración y han eliminado las disputas sobre comisiones gracias a la transparencia del sistema.'
    },
    {
      id: 'fidelizacion',
      title: 'Sistemas de fidelización',
      icon: <Gift className="w-10 h-10 text-tango-violet" />,
      description: 'Programa de puntos, niveles VIP y recompensas automáticas basadas en el historial del cliente.',
      details: 'Configura programas de puntos canjeables por consumiciones o accesos VIP. Crea membresías con beneficios exclusivos y promociones de cumpleaños. Implementa gamificación con retos que incentiven el consumo y la asistencia regular.',
      useCase: 'Las discotecas con programa de fidelización TangoApp aumentan la frecuencia de visita de sus clientes en un 33% y logran que el 65% recomiende el local a sus amigos.'
    },
    {
      id: 'reporting',
      title: 'Reporting en tiempo real',
      icon: <BarChart3 className="w-10 h-10 text-tango-violet" />,
      description: 'Dashboard con métricas clave: ingresos, asistencia, consumo medio y tendencias comparativas.',
      details: 'Visualiza KPIs clave como ocupación, ventas por hora, eficiencia por barra y rentabilidad por productos. Compara resultados con periodos anteriores e identifica tendencias. Recibe alertas configurables cuando se alcanzan objetivos o aparecen anomalías.',
      useCase: 'Los gerentes que monitorean su negocio con nuestro reporting en tiempo real pueden ajustar precios y promociones durante la noche, aumentando los ingresos hasta un 22% en horas valle.'
    },
    {
      id: 'permisos',
      title: 'Roles & permisos',
      icon: <ShieldCheck className="w-10 h-10 text-tango-violet" />,
      description: 'Control granular de accesos por rol: gerente, encargado, camarero, taquillero o promotor.',
      details: 'Define exactamente qué puede ver y hacer cada empleado en el sistema. Los camareros solo acceden al TPV, los taquilleros a la venta de entradas, y los encargados a informes específicos. Previene fraudes y garantiza la privacidad de datos sensibles.',
      useCase: 'Los locales con múltiples sedes que utilizan nuestro sistema de permisos han reducido incidentes de fraude interno en un 90% y han simplificado la formación de nuevo personal.'
    }
  ];

  return (
    <section id="soluciones" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones que <span className="gradient-text">transforman</span> tu negocio nocturno
          </h2>
          <p className="text-lg text-gray-700">
            Optimiza cada aspecto de tu local con herramientas diseñadas específicamente para el sector del ocio nocturno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Card key={solution.id} className="feature-card-hover overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  {solution.icon}
                </div>
                <CardTitle className="text-xl text-tango-purple">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="details" className="border-b-0">
                    <AccordionTrigger className="text-sm font-medium text-tango-violet py-2 hover:no-underline">
                      Ver detalles
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 pb-4 text-sm text-gray-700 space-y-4">
                        <p>{solution.details}</p>
                        <div className="border-l-4 border-tango-violet pl-4 italic">
                          <p className="text-sm font-medium text-gray-800">Caso de éxito:</p>
                          <p className="text-sm text-gray-600">{solution.useCase}</p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
