
import React from 'react';
import FeatureLayout from '@/components/FeatureLayout';
import { ShieldCheck } from 'lucide-react';

const RolesPermisos = () => {
  return (
    <FeatureLayout
      title="Roles & Permisos"
      subtitle="Control granular de accesos por rol: gerente, encargado, camarero, taquillero o promotor. Seguridad y privacidad garantizadas."
      description="Nuestro sistema de roles y permisos te permite definir exactamente qué puede ver y hacer cada empleado en la plataforma. Los camareros solo acceden al TPV, los taquilleros a la venta de entradas, los encargados a informes específicos de su turno, y los gerentes a toda la información. Previene fraudes internos, garantiza la privacidad de datos sensibles y simplifica la formación de nuevo personal con interfaces adaptadas a cada rol."
      icon={<ShieldCheck className="w-12 h-12 text-tango-purple" />}
      benefits={[
        "Control granular: define exactamente qué puede ver y hacer cada empleado.",
        "Interfaces adaptadas por rol para simplificar el trabajo diario.",
        "Prevención de fraude interno con accesos restringidos a funciones críticas.",
        "Trazabilidad completa: registro de quién hizo qué y cuándo.",
        "Gestión multilocal con permisos específicos por venue.",
        "Formación simplificada con interfaces limpias y específicas por puesto."
      ]}
      useCases={[
        {
          title: "Cadena elimina el fraude interno con permisos estrictos",
          description: "Una cadena de pubs detectó pérdidas por manipulación de precios y cancelaciones fraudulentas. Implementaron nuestro sistema de permisos donde los camareros solo pueden vender a precios fijos, los encargados pueden aplicar descuentos hasta un 20%, y solo los gerentes pueden hacer devoluciones. El resultado fue una reducción del 90% en incidentes de fraude interno y un ahorro de 15.000€ anuales en pérdidas. Además, los empleados reportaron mayor claridad en sus responsabilidades.",
          image: "https://placehold.co/600x400/2D0D63/FFFFFF?text=Control+Fraude"
        },
        {
          title: "Discoteca mejora la eficiencia con roles especializados",
          description: "Una gran discoteca tenía problemas con empleados perdiendo tiempo en funciones que no les correspondían. Configuraron roles específicos: taquilleros con acceso solo a venta de entradas y lista de invitados, camareros con TPV simplificado sin acceso a reportes, y encargados con dashboard de su turno específico. El resultado fue una reducción del 35% en tiempo de formación de nuevo personal y un aumento del 25% en la eficiencia operativa durante las noches de mayor afluencia.",
          image: "https://placehold.co/600x400/6F3BFF/FFFFFF?text=Eficiencia+Roles"
        },
        {
          title: "Festival gestiona 200 empleados temporales sin problemas",
          description: "Un festival de 4 días necesitaba coordinar 200 empleados temporales con diferentes niveles de responsabilidad. Crearon 6 roles específicos: vendedores de entradas, camareros de barra, supervisores de zona, coordinadores de área, jefes de turno y dirección. Cada rol tenía acceso solo a la información necesaria para su función. Esto permitió una coordinación perfecta sin filtración de información sensible y redujo los errores operativos en un 60% comparado con el año anterior.",
          image: "https://placehold.co/600x400/9D4EDD/FFFFFF?text=Gestión+Temporal"
        }
      ]}
    />
  );
};

export default RolesPermisos;
