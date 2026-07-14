export const locales = ['en', 'ar'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

export function isSupported(locale: string | undefined): locale is Locale {
  return !!locale && (locales as readonly string[]).includes(locale);
}
