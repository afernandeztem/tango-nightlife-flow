
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

interface FeatureLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  useCases: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  benefits: string[];
}

const FeatureLayout: React.FC<FeatureLayoutProps> = ({
  title,
  subtitle,
  description,
  icon,
  useCases,
  benefits,
}) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 px-4 bg-gradient-to-br from-white via-purple-50 to-violet-100">
          <div className="container mx-auto">
            <Link to="/" className="inline-flex items-center text-tango-purple hover:text-tango-violet mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('common.backToHome')}
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {title}
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  {subtitle}
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-tango-purple/10 flex items-center justify-center">
                  {icon}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-tango-purple">
                ¿Qué es {title.split(' ').slice(0, 2).join(' ')}?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                {description}
              </p>

              <h3 className="text-2xl font-bold mb-4 text-tango-purple">
                {t('common.keyBenefits')}
              </h3>
              <ul className="list-disc list-inside mb-12 space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Functionality Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              {t('common.whatWeOffer')}
            </h2>
            
            <div className="space-y-16">
              {useCases.map((functionality, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="md:w-1/2">
                    <img 
                      src={functionality.image} 
                      alt={functionality.title} 
                      className="rounded-lg shadow-lg w-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-tango-purple">
                      {functionality.title}
                    </h3>
                    <p className="text-gray-700">
                      {functionality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default FeatureLayout;
