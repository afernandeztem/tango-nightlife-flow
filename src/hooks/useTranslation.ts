
import { useState, useEffect } from 'react';
import { i18n } from '@/i18n/i18n';
import { Language, TranslationKey } from '@/i18n/translations';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(i18n.getCurrentLanguage());

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLanguage(event.detail);
    };

    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  const t = (key: TranslationKey): string => {
    return i18n.t(key);
  };

  const changeLanguage = (language: Language) => {
    i18n.setLanguage(language);
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages: i18n.getAvailableLanguages(),
  };
};
