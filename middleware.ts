import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './app/i18n';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'as-needed'
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sw.js|images|fonts|css|js|assets).*)']
};
