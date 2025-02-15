// utils/referrerUtils.ts

import React from "react";

export interface ReferrerInfo {
    fullUrl: string;
    domain: string;
    path: string;
    queryParams: Record<string, string>;
    utmParams: {
        source?: string;
        medium?: string;
        campaign?: string;
        term?: string;
        content?: string;
    };
    timestamp: number;
    isDirectNavigation: boolean;
    isSearchEngine: boolean;
    searchEngineName?: string;
}

export class ReferrerTracker {
    private static readonly STORAGE_KEY = 'referrer_history';
    private static readonly SEARCH_ENGINES = {
        'google': /google\./,
        'bing': /bing\./,
        'yahoo': /yahoo\./,
        'duckduckgo': /duckduckgo\./,
        'baidu': /baidu\./,
        'yandex': /yandex\./
    };

    /**
     * Gets unique domains from history using Array methods instead of Set
     */
    private static getUniqueDomains(history: ReferrerInfo[]): string[] {
        return history
            .map(h => h.domain)
            .filter((domain, index, self) =>
                domain && self.indexOf(domain) === index
            );
    }

    /**
     * Captures and analyzes the current referrer information
     */
    static captureReferrer(): ReferrerInfo | null {
        const referrer = document.referrer || '';
        const currentUrl = window.location.href;
        if (!referrer) {
            return null; // Avoid saving empty referrers
        }

        try {
            const referrerUrl = new URL(referrer);
            const currentUrlObj = new URL(currentUrl);

            const isSearchEngine = this.detectSearchEngine(referrerUrl.hostname);

            const info: ReferrerInfo = {
                fullUrl: referrer,
                domain: referrerUrl.hostname,
                path: referrerUrl.pathname,
                queryParams: this.parseQueryParams(referrerUrl.search),
                utmParams: this.extractUtmParams(currentUrlObj.search),
                timestamp: Date.now(),
                isDirectNavigation: !referrer,
                isSearchEngine: isSearchEngine.isSearch,
                searchEngineName: isSearchEngine.engineName
            };

            this.saveToHistory(info);
            return info;
        } catch (error) {
            console.error("Error processing referrer:", error);
            return null;
        }
    }

    static getReferrerHistory(): ReferrerInfo[] {
        try {
            const history = localStorage.getItem(this.STORAGE_KEY);
            return history ? JSON.parse(history) : [];
        } catch {
            return [];
        }
    }

    static getOriginalReferrer(): ReferrerInfo | null {
        const history = this.getReferrerHistory();
        return history.length > 0 ? history[0] : null;
    }

    static getPreviousReferrer(): ReferrerInfo | null {
        const history = this.getReferrerHistory();
        return history.length > 1 ? history[history.length - 2] : null;
    }

    static isReturningVisitor(): boolean {
        return this.getReferrerHistory().length > 1;
    }

    static getJourneyAnalytics() {
        const history = this.getReferrerHistory();
        return {
            totalVisits: history.length,
            firstVisit: history[0]?.timestamp,
            lastVisit: history[history.length - 1]?.timestamp,
            searchEngineVisits: history.filter(h => h.isSearchEngine).length,
            directVisits: history.filter(h => h.isDirectNavigation).length,
            domains: this.getUniqueDomains(history),
            hasUtmParams: history.some(h => Object.keys(h.utmParams).length > 0)
        };
    }

    static clearHistory(): void {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
        } catch (error) {
            console.error('Failed to clear referrer history:', error);
        }
    }

    private static createDirectNavigationInfo(): ReferrerInfo {
        return {
            fullUrl: '',
            domain: '',
            path: '',
            queryParams: {},
            utmParams: {},
            timestamp: Date.now(),
            isDirectNavigation: true,
            isSearchEngine: false
        };
    }

    private static parseQueryParams(search: string): Record<string, string> {
        const params: Record<string, string> = {};
        new URLSearchParams(search).forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }

    private static extractUtmParams(search: string) {
        const params = new URLSearchParams(search);
        return {
            source: params.get('utm_source') || undefined,
            medium: params.get('utm_medium') || undefined,
            campaign: params.get('utm_campaign') || undefined,
            term: params.get('utm_term') || undefined,
            content: params.get('utm_content') || undefined
        };
    }

    private static detectSearchEngine(hostname: string): { isSearch: boolean; engineName?: string } {
        for (const [engine, pattern] of Object.entries(this.SEARCH_ENGINES)) {
            if (pattern.test(hostname)) {
                return { isSearch: true, engineName: engine };
            }
        }
        return { isSearch: false };
    }

    private static saveToHistory(info: ReferrerInfo): void {
        try {
            const history = this.getReferrerHistory();

            // Prevent saving duplicate direct navigations
            if (info.isDirectNavigation && history.length > 0 && history[history.length - 1].isDirectNavigation) {
                return;
            }

            history.push(info);

            // Keep only last 10 entries
            const trimmedHistory = history.slice(-10);

            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(trimmedHistory));
        } catch (error) {
            console.error("Failed to save referrer to history:", error);
        }
    }

}

// Hook for React components
export function useReferrer() {
    const [referrerInfo, setReferrerInfo] = React.useState<ReferrerInfo | null>(null);

    React.useEffect(() => {
        setReferrerInfo(ReferrerTracker.captureReferrer());
    }, []);

    return {
        referrerInfo,
        history: ReferrerTracker.getReferrerHistory(),
        isReturningVisitor: ReferrerTracker.isReturningVisitor(),
        analytics: ReferrerTracker.getJourneyAnalytics(),
        originalReferrer: ReferrerTracker.getOriginalReferrer(),
        previousReferrer: ReferrerTracker.getPreviousReferrer()
    };
}