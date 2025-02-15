// MainContext.tsx
'use client';

import React from 'react';
import HeadScript from '@/components/HeadScript';
import Nav from "../components/navigation/Navigation";
import dynamic from 'next/dynamic';
import { UrNMProvider } from './providers/UrNMProvider';

// Dynamically import components with SSR disabled
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const ScrollUp = dynamic(() => import("../components/ui/ScrollUp"), { ssr: false });

// MainProvider component
export function MainContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <UrNMProvider>
            <Nav />
            {children}
            <ScrollUp />
            <Footer />
            <HeadScript />
        </UrNMProvider>
    );
}