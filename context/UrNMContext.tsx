import { createContext } from 'react';
import type { UrNMContextType } from './types';

const defaultUrNMContext: UrNMContextType = {
    isUrNM: false,
    setIsUrNM: () => { },
    urNMSendAnalytics: async () => false,
    domain: '',
    isDevelopment: false,
    isProduction: false,
    mainRef: { current: null },
};

export const UrNMContext = createContext<UrNMContextType>(defaultUrNMContext);