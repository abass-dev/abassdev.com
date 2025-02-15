export const getHostname = (): string => {
    if (typeof window !== 'undefined') {
        return window.location.hostname;
    }
    return '';
};

export const getEnvironmentInfo = () => {
    const hostname = getHostname();
    const isDev = hostname === 'localhost' || hostname.includes('.local') || process.env.NODE_ENV === 'development';
    const isProd = !isDev && process.env.NODE_ENV === 'production';

    return {
        hostname,
        isDevelopment: isDev,
        isProduction: isProd
    };
};