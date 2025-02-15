import type { AnalyticsData, LocationData } from '../types';
import { getReferrerInfo, getDeviceType, getOrCreateSessionId } from './helpers';

export const sendAnalytics = async (
    data: Partial<AnalyticsData>,
    domain: string,
    startTime: number
): Promise<boolean> => {
    if (typeof window === 'undefined') return false;

    try {
        const apiUrl = 'https://urnotm.vercel.app/api/urntm-analytics';
        const referrerInfo = getReferrerInfo();

        const enrichedData: AnalyticsData = {
            ...data,
            domain: data.domain || domain,
            event: data.event || 'unknown',
            referrerInfo,
            userAgent: window.navigator.userAgent,
            referrer: document.referrer,
            sessionId: getOrCreateSessionId(),
            deviceType: getDeviceType(),
            timeSpent: Math.round((performance.now() - startTime) / 1000),
        };

        if (data.location) {
            const location: LocationData = {
                city: data.location.city,
                country: data.location.country,
                latitude: data.location.latitude,
                longitude: data.location.longitude,
            };
            enrichedData.location = location;
        }

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(enrichedData),
        });

        if (!response.ok) {
            throw new Error(`Analytics API error: ${response.status}`);
        }

        return true;
    } catch (error) {
        console.error('Error sending analytics:', error);
        return false;
    }
};