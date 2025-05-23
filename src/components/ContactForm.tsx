
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
import { useTranslation } from '@/hooks/useTranslation';

const ContactForm = () => {
  const { t } = useTranslation();
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
            <h3 className="text-xl font-bold mb-6 text-tango-purple">{t('form.personalData')}</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">{t('form.firstName')} *</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidos">{t('form.lastName')} *</Label>
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
                  <Label htmlFor="email">{t('form.email')} *</Label>
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
                  <Label htmlFor="telefono">{t('form.phone')}</Label>
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
                <Label htmlFor="empresa">{t('form.companyName')} *</Label>
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
            <h3 className="text-xl font-bold mb-6 text-tango-purple">{t('form.aboutBusiness')}</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tipoNegocio">{t('form.businessType')} *</Label>
                <Select
                  value={formData.tipoNegocio}
                  onValueChange={(value) => handleSelectChange('tipoNegocio', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('form.selectOption')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discoteca">{t('form.nightclub')}</SelectItem>
                    <SelectItem value="beach-club">{t('form.beachClub')}</SelectItem>
                    <SelectItem value="festival">{t('form.festival')}</SelectItem>
                    <SelectItem value="pub">{t('form.pub')}</SelectItem>
                    <SelectItem value="promotora">{t('form.promoter')}</SelectItem>
                    <SelectItem value="otro">{t('form.other')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="facturacion">{t('form.annualRevenue')}</Label>
                <Select
                  value={formData.facturacion}
                  onValueChange={(value) => handleSelectChange('facturacion', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('form.selectOption')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="menos-100k">{t('form.lessThan100k')}</SelectItem>
                    <SelectItem value="100k-300k">{t('form.100kTo300k')}</SelectItem>
                    <SelectItem value="300k-500k">{t('form.300kTo500k')}</SelectItem>
                    <SelectItem value="500k-1m">{t('form.500kTo1m')}</SelectItem>
                    <SelectItem value="mas-1m">{t('form.moreThan1m')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h3 className="text-xl font-bold mb-6 text-tango-purple">{t('form.functionalitiesInterest')}</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="entradas"
                    checked={formData.funcionalidades.entradas}
                    onCheckedChange={(checked) => handleCheckboxChange('entradas', checked as boolean)}
                  />
                  <Label htmlFor="entradas" className="cursor-pointer">{t('form.ticketSales')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consumiciones"
                    checked={formData.funcionalidades.consumiciones}
                    onCheckedChange={(checked) => handleCheckboxChange('consumiciones', checked as boolean)}
                  />
                  <Label htmlFor="consumiciones" className="cursor-pointer">{t('form.drinkSales')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="crm"
                    checked={formData.funcionalidades.crm}
                    onCheckedChange={(checked) => handleCheckboxChange('crm', checked as boolean)}
                  />
                  <Label htmlFor="crm" className="cursor-pointer">{t('form.crm')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="promotores"
                    checked={formData.funcionalidades.promotores}
                    onCheckedChange={(checked) => handleCheckboxChange('promotores', checked as boolean)}
                  />
                  <Label htmlFor="promotores" className="cursor-pointer">{t('form.promoterManagement')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="fidelizacion"
                    checked={formData.funcionalidades.fidelizacion}
                    onCheckedChange={(checked) => handleCheckboxChange('fidelizacion', checked as boolean)}
                  />
                  <Label htmlFor="fidelizacion" className="cursor-pointer">{t('form.loyaltySystems')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="reporting"
                    checked={formData.funcionalidades.reporting}
                    onCheckedChange={(checked) => handleCheckboxChange('reporting', checked as boolean)}
                  />
                  <Label htmlFor="reporting" className="cursor-pointer">{t('form.realTimeReporting')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="roles"
                    checked={formData.funcionalidades.roles}
                    onCheckedChange={(checked) => handleCheckboxChange('roles', checked as boolean)}
                  />
                  <Label htmlFor="roles" className="cursor-pointer">{t('form.rolesPermissions')}</Label>
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <h3 className="text-xl font-bold mb-6 text-tango-purple">{t('form.additionalMessage')}</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mensaje">{t('form.additionalInfo')}</Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder={t('form.specificNeeds')}
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
            {t('common.startTransforming')}
          </h2>
          <p className="text-lg text-gray-700">
            {t('common.requestInfo')}
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
                      {t('form.previous')}
                    </ButtonCTA>
                  )}
                  <div className="ml-auto">
                    {step < 4 ? (
                      <ButtonCTA variant="primary" type="button" onClick={nextStep}>
                        {t('form.next')}
                      </ButtonCTA>
                    ) : (
                      <ButtonCTA variant="primary" type="submit">
                        {t('form.submit')}
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
                <h3 className="text-2xl font-bold mb-4 text-tango-purple">{t('form.thankYou')}</h3>
                <p className="text-lg mb-6">
                  {t('form.receivedRequest')}
                </p>
                <ButtonCTA variant="primary" type="button" onClick={() => setIsSubmitted(false)}>
                  {t('form.sendAnother')}
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
