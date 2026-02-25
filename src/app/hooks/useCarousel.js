import {useEffect, useState} from "react";

export function useCarousel(slidesLength, intervalMs = 5000, isActive = true) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [resetTimer, setResetTimer] = useState(false);

    useEffect(() => {
        if (!isActive) return;
        if (slidesLength <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % slidesLength);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [slidesLength, intervalMs, resetTimer, isActive]);

    const next = () => {
        setCurrentIndex((i) => (i + 1) % slidesLength);
        setResetTimer((v) => !v);
    };

    const prev = () => {
        setCurrentIndex((i) => (i - 1 + slidesLength) % slidesLength);
        setResetTimer((v) => !v);
    };

    return { currentIndex, next, prev };
}