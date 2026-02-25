'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Loader = ({ children }) => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);

        const t = setTimeout(() => setLoading(false), 350);

       return () => clearTimeout(t);
    }, [pathname]);

    return (
        <>
            {loading && (
                <div className="overlay">
                    <div className="loading-spinner" />
                </div>
            )}
            {children}
        </>
    );
};

export default Loader;