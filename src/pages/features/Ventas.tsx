
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { Ticket, Beer } from 'lucide-react';

const Ventas = () => {
  return (
    <FeatureLayout
      title="Sistema integral de ventas"
      subtitle="Gestiona entradas y consumiciones desde una única plataforma que maximiza tus ingresos con precios dinámicos y promociones inteligentes."
      description="Nuestro sistema de ventas unificado te permite controlar tanto las entradas como las consumiciones desde una sola plataforma. Vende entradas online con precios dinámicos adaptados a la demanda, implementa promociones automáticas según la hora o nivel de ocupación, y gestiona múltiples barras con TPVs inteligentes que sugieren promociones y combos. Todo sincronizado en tiempo real para una visión global de los ingresos."
      icon={
        <div className="flex">
          <Ticket className="w-10 h-10 text-tango-purple" />
          <Beer className="w-10 h-10 text-tango-purple -ml-2" />
        </div>
      }
      benefits={[
        "Aumenta los ingresos por entrada con precios dinámicos basados en la demanda.",
        "Incrementa el ticket medio en barra con promociones automáticas y sugerencias de venta cruzada.",
        "Reduce tiempos de espera en la entrada y en barra con procesos optimizados.",
        "Minimiza el fraude y las pérdidas con un control estricto de transacciones.",
        "Simplifica la gestión con informes unificados de entradas y consumiciones.",
        "Múltiples métodos de pago integrados: efectivo, tarjeta, pulseras RFID con saldo precargado y códigos QR."
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
        },
        {
          title: "Festival implementa pulseras RFID con saldo para consumo",
          description: "Un festival de tres días sustituyó los tickets físicos por pulseras RFID con saldo precargado. Los asistentes podían recargar sus pulseras online o en puntos del recinto, y pagar todas sus consumiciones con solo un toque. Esto no solo mejoró la experiencia del usuario, sino que aumentó el gasto medio por asistente en un 34%, redujo el fraude en casi un 100% y proporcionó datos valiosos sobre patrones de consumo en diferentes zonas y horarios del festival.",
          image: "https://placehold.co/600x400/9D4EDD/FFFFFF?text=Pulseras+RFID"
        }
      ]}
    />
  );
};

export default Ventas;
