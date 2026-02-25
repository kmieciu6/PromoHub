"use client";
import { useRef, useState, useEffect } from "react";

const DEFAULT_DESKTOP = { threshold: 0.2, rootMargin: "-100px" };
const DEFAULT_MOBILE = { threshold: 0.2, rootMargin: "0px" };

const useIntersectionHide = (
    desktopOptions = DEFAULT_DESKTOP,
    mobileOptions = DEFAULT_MOBILE,
    onReveal
) => {
    const ref = useRef(null);
    const [isHidden, setIsHidden] = useState(true);
    const firedRef = useRef(false);

    // ✅ trzymamy referencję do aktualnie obserwowanego elementu
    const observedElRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // sprzątanie poprzedniego observera (gdy zmieniają się opcje / callback)
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = null;
        }

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const observerOptions = isMobile ? mobileOptions : desktopOptions;

        const observer = new IntersectionObserver((entries, obs) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    setIsHidden(false);

                    if (!firedRef.current) {
                        firedRef.current = true;
                        if (typeof onReveal === "function") onReveal();
                    }

                    obs.unobserve(entry.target);
                }
            }
        }, observerOptions);

        observerRef.current = observer;

        return () => {
            observer.disconnect();
            observerRef.current = null;
            observedElRef.current = null;
        };
    }, [desktopOptions, mobileOptions, onReveal]);

    // ✅ ten efekt “dopina” observer do elementu, nawet jeśli ref zmieni się po czasie
    useEffect(() => {
        if (typeof window === "undefined") return;

        let raf = 0;

        const attach = () => {
            const el = ref.current;
            const observer = observerRef.current;

            if (!el || !observer) return;

            // jeśli obserwujemy już ten element, nic nie rób
            if (observedElRef.current === el) return;

            // jeśli wcześniej obserwowaliśmy inny element — odpinamy
            if (observedElRef.current) {
                observer.unobserve(observedElRef.current);
            }

            observedElRef.current = el;
            observer.observe(el);
        };

        // rAF daje gwarancję, że DOM już jest po ewentualnym przełączeniu gałęzi (touch/desktop)
        raf = requestAnimationFrame(attach);

        return () => cancelAnimationFrame(raf);
    });

    return [ref, isHidden];
};

export default useIntersectionHide;