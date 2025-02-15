import type { LocationData, ReferrerInfo } from '../types';

const generateSessionId = (): string => {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const getOrCreateSessionId = (): string => {
    if (typeof window === 'undefined') return generateSessionId();

    try {
        let sessionId = sessionStorage.getItem('sessionId');
        if (!sessionId) {
            sessionId = generateSessionId();
            sessionStorage.setItem('sessionId', sessionId);
        }
        return sessionId;
    } catch (error) {
        // Fall back to generating a new session ID if sessionStorage is unavailable
        return generateSessionId();
    }
};

export const getDeviceType = (): 'mobile' | 'desktop' | 'tablet' => {
    if (typeof window === 'undefined') return 'desktop';

    try {
        const ua = navigator.userAgent.toLowerCase();
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i.test(ua)) {
            return 'tablet';
        }
        if (
            /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
                ua
            )
        ) {
            return 'mobile';
        }
        return 'desktop';
    } catch (error) {
        return 'desktop';
    }
};

export const getCurrentLocation = async (): Promise<LocationData> => {
    if (typeof window === 'undefined') {
        return {
            latitude: undefined,
            longitude: undefined,
            city: undefined,
            country: undefined
        };
    }

    return new Promise((resolve) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        city: undefined,
                        country: undefined
                    });
                },
                () => resolve({
                    latitude: undefined,
                    longitude: undefined,
                    city: undefined,
                    country: undefined
                }),
                { timeout: 5000 }
            );
        } else {
            resolve({
                latitude: undefined,
                longitude: undefined,
                city: undefined,
                country: undefined
            });
        }
    });
};

export const getReferrerInfo = (): ReferrerInfo => {
    if (typeof window === 'undefined') {
        return {
            url: 'direct',
            type: 'direct',
            source: 'direct',
            medium: 'direct',
            campaign: '',
            term: '',
            content: '',
        };
    }

    try {
        const referrer = document.referrer;
        const urlParams = new URLSearchParams(window.location.search);
        let referrerUrl: URL;

        try {
            referrerUrl = new URL(referrer);
        } catch {
            referrerUrl = new URL('https://direct');
        }

        const utmSource = urlParams.get('utm_source');
        const utmMedium = urlParams.get('utm_medium');
        const utmCampaign = urlParams.get('utm_campaign');
        const utmTerm = urlParams.get('utm_term');
        const utmContent = urlParams.get('utm_content');

        const getReferrerType = (referrerHost: string): string => {
            const searchEngines = ['google', 'bing', 'yahoo', 'duckduckgo', 'baidu'];
            const socialMedia = ['facebook', 'twitter', 'linkedin', 'instagram', 'pinterest'];

            const host = referrerHost.toLowerCase();

            if (!referrer) return 'direct';
            if (host === window.location.host) return 'internal';
            if (searchEngines.some(se => host.includes(se))) return 'search';
            if (socialMedia.some(sm => host.includes(sm))) return 'social';
            return 'other';
        };

        const getReferrerSource = (referrerHost: string, type: string): string => {
            if (!referrer) return 'direct';
            if (type === 'internal') return window.location.hostname;
            return referrerHost.replace('www.', '');
        };

        const type = getReferrerType(referrerUrl.hostname);
        const source = utmSource || getReferrerSource(referrerUrl.hostname, type);

        return {
            url: referrer || 'direct',
            type,
            source,
            medium: utmMedium || (type === 'search' ? 'organic' : type),
            campaign: utmCampaign || '',
            term: utmTerm || '',
            content: utmContent || '',
        };
    } catch (error) {
        console.error('Error getting referrer info:', error);
        return {
            url: 'direct',
            type: 'direct',
            source: 'direct',
            medium: 'direct',
            campaign: '',
            term: '',
            content: '',
        };
    }
};

export const getUserIP = async (): Promise<string> => {
    if (typeof window === 'undefined') return '';

    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
            throw new Error(`Failed to fetch IP: ${response.status}`);
        }
        const data = await response.json();
        return data.ip || '';
    } catch (error) {
        console.error('Error fetching IP:', error);
        return '';
    }
};