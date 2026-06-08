import settings from '../data/settings.json';
export { settings };
export function withSettings(s: string): string {
  return (s || '')
    .replaceAll('__PHONE_TEL__', settings.phoneTel)
    .replaceAll('__PHONE_DISPLAY__', settings.phoneDisplay)
    .replaceAll('__WEB3KEY__', settings.web3formsKey)
    .replaceAll('__NMLS__', settings.nmls);
}
