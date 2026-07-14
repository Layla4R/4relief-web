import { isSupported, defaultLocale, Locale } from './routing';

export async function getMessages(locale?: string) {
  const loc: Locale = isSupported(locale) ? locale : defaultLocale;
  try {
    const msgs = await import(`../messages/${loc}.json`);
    return msgs.default ?? msgs;
  } catch (err) {
    const fallback = await import(`../messages/${defaultLocale}.json`);
    return fallback.default ?? fallback;
  }
}
