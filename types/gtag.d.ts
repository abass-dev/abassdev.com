// types/gtag.d.ts
declare global {
    interface Window {
        gtag: (
            type: 'config' | 'event' | 'js',
            googleAnalyticsId: string,
            options?: {
                page_path?: string;
                [key: string]: any;
            }
        ) => void;
        dataLayer: any[];
    }
}

// This export is needed to make the file a module
export { };