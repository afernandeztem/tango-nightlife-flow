
import { translationsEn } from './translations-en';
import { translationsEs } from './translations-es';

export const translations = {
  en: translationsEn,
  es: translationsEs,
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
