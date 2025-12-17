'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const CookiesConsentContext = createContext();

export const CookiesConsentProvider = ({ children }) => {
    const [isAccepted, setIsAccepted] = useState(false);
    const [isDecided, setIsDecided] = useState(null); // null = jeszcze nie wiemy

    useEffect(() => {
        const stored = localStorage.getItem('cookiesAccepted'); // "true" | "false" | null

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsAccepted(stored === 'true');
        setIsDecided(stored !== null);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setIsAccepted(true);
        setIsDecided(true);
    };

    const declineCookies = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setIsAccepted(false);
        setIsDecided(true);
    };

    return (
        <CookiesConsentContext.Provider value={{ isAccepted, isDecided, acceptCookies, declineCookies }}>
            {children}
        </CookiesConsentContext.Provider>
    );
};

export const useCookiesConsent = () => {
    const context = useContext(CookiesConsentContext);
    if (!context) {
        throw new Error('useCookiesConsent must be used within a CookiesConsentProvider');
    }
    return context;
};