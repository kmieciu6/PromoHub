'use client';
import { useEffect, useRef, useState } from 'react';
import useTranslation from '../hooks/useTranslation';

const languages = [
    { code: 'pl', label: 'PL' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
];

export default function LanguageDropdown({ forceClose }) {
    const { local, changeLanguage } = useTranslation('common');
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timerRef = useRef(null);

    const current = languages.find((lang) => lang.code === local);
    const available = languages.filter((lang) => lang.code !== local);
    
    const handleChange = (code) => {
        changeLanguage(code);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
        
    // Zamykanie po 10 sekundach
    useEffect(() => {
        if (open) {
            timerRef.current = setTimeout(() => setOpen(false), 10000);
        }
        return () => clearTimeout(timerRef.current);
    }, [open]);
        
    // Zamykanie wymuszone z Headera (mobile)
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOpen(false);
    }, [forceClose]);

    return (
        <div className="language-dropdown" ref={dropdownRef}>
            <button className="language-toggle" onClick={() => setOpen(!open)}>
                <h5>{current?.label || 'EN'} ▼ </h5>
            </button>

            {open && (
                <ul className="language-menu">
                    {available.map(({ code, label }) => (
                        <li key={code}>
                        <button
                            className={`language-option`}
                            onClick={() => handleChange(code)}
                        >
                            <h5>{label}</h5>
                        </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}