
import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              TangoApp
            </Link>
            <p className="text-gray-400 mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.solutions')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ventas" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.ticketSales')}
                </Link>
              </li>
              <li>
                <Link to="/ventas" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.drinkSales')}
                </Link>
              </li>
              <li>
                <Link to="/crm" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.crm')}
                </Link>
              </li>
              <li>
                <Link to="/fidelizacion" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.loyalty')}
                </Link>
              </li>
              <li>
                <Link to="/tiempo-real" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.realTimeReporting')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.successCases')}
                </a>
              </li>
              <li>
                <a href="#form" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.aboutUs')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.blog')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.termsConditions')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.cookiePolicy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t('footer.legalNotice')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TangoApp. {t('footer.allRightsReserved')}
          </p>
          
          <div className="flex items-center">
            <button className="flex items-center text-gray-400 hover:text-white transition-colors">
              <Globe className="w-4 h-4 mr-2" />
              <span>{t('footer.spanish')}</span>
              <span className="mx-2 text-gray-600">|</span>
              <Link to="/en" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.english')}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
