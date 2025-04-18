
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ButtonCTA from './ui/button-cta';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    empresa: '',
    tipoNegocio: '',
    facturacion: '',
    funcionalidades: {
      entradas: false,
      consumiciones: false,
      crm: false,
      promotores: false,
      fidelizacion: false,
      reporting: false,
      roles: false,
    },
    mensaje: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      funcionalidades: {
        ...prev.funcionalidades,
        [name]: checked,
      },
    }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      // Here you would POST to /api/leads in a real implementation
      console.log('Form submitted:', formData);
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h3 className="text-xl font-bold mb-6 text-tango-purple">Datos personales</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidos">Apellidos *</Label>
                  <Input
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa">Nombre del local o empresa *</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h3 className="text-xl font-bold mb-6 text-tango-purple">Sobre tu negocio</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tipoNegocio">Tipo de negocio *</Label>
                <Select
                  value={formData.tipoNegocio}
                  onValueChange={(value) => handleSelectChange('tipoNegocio', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discoteca">Discoteca</SelectItem>
                    <SelectItem value="beach-club">Beach Club</SelectItem>
                    <SelectItem value="festival">Festival</SelectItem>
                    <SelectItem value="pub">Pub</SelectItem>
                    <SelectItem value="promotora">Promotora</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="facturacion">Facturación anual aproximada</Label>
                <Select
                  value={formData.facturacion}
                  onValueChange={(value) => handleSelectChange('facturacion', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="menos-100k">Menos de 100.000€</SelectItem>
                    <SelectItem value="100k-300k">100.000€ - 300.000€</SelectItem>
                    <SelectItem value="300k-500k">300.000€ - 500.000€</SelectItem>
                    <SelectItem value="500k-1m">500.000€ - 1.000.000€</SelectItem>
                    <SelectItem value="mas-1m">Más de 1.000.000€</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-bold mb-6 text-tango-purple">Funcionalidades que te interesan</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="entradas"
                    checked={formData.funcionalidades.entradas}
                    onCheckedChange={(checked) => handleCheckboxChange('entradas', checked as boolean)}
                  />
                  <Label htmlFor="entradas" className="cursor-pointer">Venta de entradas</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consumiciones"
                    checked={formData.funcionalidades.consumiciones}
                    onCheckedChange={(checked) => handleCheckboxChange('consumiciones', checked as boolean)}
                  />
                  <Label htmlFor="consumiciones" className="cursor-pointer">Venta de consumiciones</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="crm"
                    checked={formData.funcionalidades.crm}
                    onCheckedChange={(checked) => handleCheckboxChange('crm', checked as boolean)}
                  />
                  <Label htmlFor="crm" className="cursor-pointer">CRM</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="promotores"
                    checked={formData.funcionalidades.promotores}
                    onCheckedChange={(checked) => handleCheckboxChange('promotores', checked as boolean)}
                  />
                  <Label htmlFor="promotores" className="cursor-pointer">Gestión de promotores</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="fidelizacion"
                    checked={formData.funcionalidades.fidelizacion}
                    onCheckedChange={(checked) => handleCheckboxChange('fidelizacion', checked as boolean)}
                  />
                  <Label htmlFor="fidelizacion" className="cursor-pointer">Sistemas de fidelización</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="reporting"
                    checked={formData.funcionalidades.reporting}
                    onCheckedChange={(checked) => handleCheckboxChange('reporting', checked as boolean)}
                  />
                  <Label htmlFor="reporting" className="cursor-pointer">Reporting en tiempo real</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="roles"
                    checked={formData.funcionalidades.roles}
                    onCheckedChange={(checked) => handleCheckboxChange('roles', checked as boolean)}
                  />
                  <Label htmlFor="roles" className="cursor-pointer">Roles & permisos</Label>
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-xl font-bold mb-6 text-tango-purple">Mensaje adicional</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mensaje">¿Algo más que quieras contarnos?</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Cuéntanos más sobre tus necesidades específicas..."
                />
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section id="form" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empieza a <span className="gradient-text">transformar</span> tu negocio
          </h2>
          <p className="text-lg text-gray-700">
            Solicita información personalizada o comienza tu prueba gratuita de 14 días ahora mismo.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 md:p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                {renderStep()}
                
                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <ButtonCTA variant="outline" type="button" onClick={prevStep}>
                      Anterior
                    </ButtonCTA>
                  )}
                  <div className="ml-auto">
                    {step < 4 ? (
                      <ButtonCTA variant="primary" type="button" onClick={nextStep}>
                        Siguiente
                      </ButtonCTA>
                    ) : (
                      <ButtonCTA variant="primary" type="submit">
                        Enviar solicitud
                      </ButtonCTA>
                    )}
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          step === i ? 'bg-tango-violet' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-4 text-tango-purple">¡Gracias!</h3>
                <p className="text-lg mb-6">
                  Hemos recibido tu solicitud y te contactaremos en las próximas 24 horas.
                </p>
                <ButtonCTA variant="primary" type="button" onClick={() => setIsSubmitted(false)}>
                  Enviar otra solicitud
                </ButtonCTA>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
