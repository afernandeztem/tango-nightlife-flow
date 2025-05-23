
import { translations, Language, TranslationKey } from './translations';

class I18n {
  private currentLanguage: Language = 'en';

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && this.isValidLanguage(savedLanguage)) {
      this.currentLanguage = savedLanguage;
      return;
    }

    // Check browser language
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('es')) {
      this.currentLanguage = 'es';
    } else {
      this.currentLanguage = 'en'; // Default fallback
    }

    // Save to localStorage
    localStorage.setItem('language', this.currentLanguage);
  }

  private isValidLanguage(lang: string): lang is Language {
    return Object.keys(translations).includes(lang);
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  public setLanguage(language: Language) {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
    // Trigger a custom event to notify components of language change
    window.dispatchEvent(new CustomEvent('languageChange', { detail: language }));
  }

  public t(key: TranslationKey): string {
    return translations[this.currentLanguage][key] || translations.en[key] || key;
  }

  public getAvailableLanguages(): Language[] {
    return Object.keys(translations) as Language[];
  }
}

export const i18n = new I18n();
