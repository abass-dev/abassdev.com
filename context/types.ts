// Basic data types
interface LocationData {
    latitude?: number;
    longitude?: number;
    country?: string;
    city?: string;
}

interface ReferrerInfo {
    url: string;
    type: string;       // 'direct' | 'internal' | 'search' | 'social' | 'other'
    source?: string;    // e.g., 'Google', 'Facebook', etc.
    medium?: string;    // e.g., 'organic', 'cpc', 'email', etc.
    campaign?: string;  // UTM campaign
    term?: string;      // UTM term
    content?: string;   // UTM content
}

// Base analytics data
interface AnalyticsData {
    domain: string;
    event: string;
    userAgent?: string;
    location?: LocationData;
    sessionId?: string;
    referrer?: string;
    referrerInfo?: ReferrerInfo;
    timeSpent?: number;
    deviceType?: 'mobile' | 'desktop' | 'tablet';
}

// Enhanced analytics data
interface EnhancedAnalyticsData extends AnalyticsData {
    pageDepth?: number;        // How deep into the site they've gone
    previousEvents?: string[]; // Last 5 events in this session
    userFlow?: {
        previousPage?: string;
        currentPage: string;
        nextPage?: string;
    };
    interactionData?: {
        lastInteractionTime?: string;
        timeSinceLastInteraction?: number;
        scrollDepth?: number;
        clickCount?: number;
    };
}

// Context types
interface UrNMContextType {
    isUrNM: boolean;
    setIsUrNM: (value: boolean) => void;
    urNMSendAnalytics: (data: AnalyticsData) => Promise<boolean>;
    domain: string;
    isDevelopment: boolean;
    isProduction: boolean;
    mainRef: React.RefObject<HTMLElement>;
}

// Prisma-specific types
interface PrismaAnalyticsData {
    event: string;
    domain: string;
    userAgent?: string | undefined;
    location?: string | undefined;  // JSON stringified LocationData
    sessionId?: string | undefined;
    referrer?: string | undefined;
    referrerInfo?: string | undefined;  // JSON stringified ReferrerInfo
    timeSpent?: number | undefined;
    deviceType?: string | undefined;
}

export type {
    LocationData,
    ReferrerInfo,
    AnalyticsData,
    EnhancedAnalyticsData,
    UrNMContextType,
    PrismaAnalyticsData
};