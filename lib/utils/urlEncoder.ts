// File: lib/utils/urlEncoder.ts

export const encodeUrl = (url: string): string => {
    return typeof window !== 'undefined'
        ? btoa(url)
        : Buffer.from(url).toString('base64');
};

export const decodeUrl = (encoded: string): string => {
    return typeof window !== 'undefined'
        ? atob(encoded)
        : Buffer.from(encoded, 'base64').toString();
};

export const endpoints = {
    analytics: 'aHR0cHM6Ly91cm5vdG0udmVyY2VsLmFwcC9hcGkvdXJudG0tYW5hbHl0aWNz',
    location: 'aHR0cHM6Ly91cm5vdG0udmVyY2VsLmFwcC9hcGkvZ2V0LXVybnRtLWxvY2F0aW9u',
    // Add new endpoints here
} as const;

export type EndpointKey = keyof typeof endpoints;

export const getEndpoint = (key: EndpointKey): string => {
    const encoded = endpoints[key];
    if (!encoded) {
        throw new Error(`No endpoint found for key: ${key}`);
    }
    return decodeUrl(encoded);
};