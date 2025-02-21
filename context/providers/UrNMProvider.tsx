import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { UrNMContext } from '../UrNMContext';
import { getEnvironmentInfo } from '../utils/environment';
import { sendAnalytics } from '../utils/analytics';
import { getCurrentLocation, getDeviceType, getOrCreateSessionId, getUserIP } from '../utils/helpers';
import type { AnalyticsData, LocationData } from '../types';

interface UrNMProviderProps {
    children: React.ReactNode;
}

export function UrNMProvider({ children }: UrNMProviderProps) {
    const [isUrNM, setIsUrNM] = useState<boolean>(false);
    const [startTime] = useState<number>(typeof window !== 'undefined' ? performance.now() : 0);
    const mainRef = useRef<HTMLElement>(null);

    const [domain, setDomain] = useState<string>('');
    const [isDevelopment, setIsDevelopment] = useState<boolean>(false);
    const [isProduction, setIsProduction] = useState<boolean>(false);

    useEffect(() => {
        const { hostname, isDevelopment: isDev, isProduction: isProd } = getEnvironmentInfo();
        setDomain(hostname);
        setIsDevelopment(isDev);
        setIsProduction(isProd);
    }, []);

    const urNMSendAnalytics = useCallback(
        (data: Partial<AnalyticsData>): Promise<boolean> =>
            sendAnalytics(data, domain, startTime),
        [domain, startTime]
    );

    useEffect(() => {
        let isSubscribed = true;

        const checkUrNM = async () => {
            if (typeof window === 'undefined' || !domain) return;

            try {
                const ip = await getUserIP();
                const response = await fetch(
                    'https://urnotm.vercel.app/api/get-urntm-location',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ ip })
                    }
                );

                let location: LocationData;

                if (response.ok) {
                    const locationData = await response.json();
                    location = {
                        city: locationData.city || locationData?.city,
                        country: locationData.country || locationData?.country,
                        latitude: locationData?.latitude,
                        longitude: locationData?.longitude
                    };
                } else {
                    const geoLocation = await getCurrentLocation();
                    location = {
                        city: geoLocation.city || geoLocation?.city,
                        country: geoLocation.country || geoLocation?.country,
                        latitude: geoLocation?.latitude,
                        longitude: geoLocation?.longitude
                    };
                }

                if (isSubscribed) {
                    await urNMSendAnalytics({
                        domain,
                        event: 'page_view',
                        location,
                        sessionId: getOrCreateSessionId(),
                        referrer: document.referrer,
                        timeSpent: Math.round((performance.now() - startTime) / 1000),
                        deviceType: getDeviceType(),
                        userAgent: navigator.userAgent,
                    });
                }
            } catch (error) {
                console.error('Error in checkUrNM:', error);
            }
        };

        checkUrNM();

        return () => {
            isSubscribed = false;
        };
    }, [domain, isDevelopment, startTime, urNMSendAnalytics]);

    const contextValue = useMemo(() => ({
        isUrNM,
        setIsUrNM,
        urNMSendAnalytics,
        domain,
        isDevelopment,
        isProduction,
        mainRef,
    }), [isUrNM, urNMSendAnalytics, domain, isDevelopment, isProduction]);

    return (
        <UrNMContext.Provider value={contextValue}>
            {children}
        </UrNMContext.Provider>
    );
}