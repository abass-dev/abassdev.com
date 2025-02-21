import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export const locales = ['en', 'fr'];
export const defaultLocale = 'en';

export async function getLocaleFromHeaders() {
    const requestHeaders = await headers();
    return requestHeaders.get('X-NEXT-INTL-LOCALE') || defaultLocale;
}

export default getRequestConfig(async () => {
    const locale = await getLocaleFromHeaders();
    return {
        messages: (await import(`../messages/${locale}.json`)).default,
        locale,
    };
});

