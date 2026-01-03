"use client";
import { useRef, useState, useEffect } from 'react';

const DEFAULT_DESKTOP = { threshold: 0.2, rootMargin: "100px" }
const DEFAULT_MOBILE = { threshold: 0.2, rootMargin: "0px" }

const useIntersectionHide = (
    desktopOptions = DEFAULT_DESKTOP,
    mobileOptions = DEFAULT_MOBILE,
    onReveal
) => {
    const ref = useRef(null);
    const [isHidden, setIsHidden] = useState(true);
    const firedRef = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const el = ref.current;
        if (!el) return;

        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const observerOptions = isMobile ? mobileOptions : desktopOptions;

        const observer = new IntersectionObserver((entries, obs) => {
            // entries.forEach((entry) => {
            //   // console.log("Observed:", entry.target, "isIntersecting:", entry.isIntersecting); // Debug
            //     if (entry.isIntersecting) {
            //         setIsHidden(false);
            //         obs.unobserve(entry.target);
            //     }
            // });
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    setIsHidden(false);

                    // ⬇️ TU jest moment “hook zadziałał”
                    if (!firedRef.current) {
                        firedRef.current = true;
                        if (typeof onReveal === "function") onReveal();
                    }

                    obs.unobserve(entry.target);
                }
            }
        }, observerOptions);

        observer.observe(el);

        // const el = ref.current;
        // if (el) observer.observe(el);

        return () => {
            // if (el) observer.unobserve(el);
            observer.disconnect();
        };
    }, [desktopOptions, mobileOptions, onReveal]);
    
    return [ref, isHidden];
}

export default useIntersectionHide;