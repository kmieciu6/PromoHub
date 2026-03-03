import { useEffect, useRef } from "react";

export function useProjectsScrollLock({
    isEnabled,                // boolean: !isTouch (i mounted)
    swiperRef,                // ref do Swipera
    projectsWrapRef,          // ref do wrappera sekcji (id="projects")
    projectsLayoutRef,        // ref do layoutu (obszar który łapie wheel)
    projectsDisabledRef,      // ref boolean (opcjonalnie) do wyłączania logiki
    headerOffset = 90,

    // tuning:
    deltaThreshold = 180,
    cooldownMs = 1200,
    resetGapMs = 180,
    centerTop = 0.15,
    centerBot = 0.85,
    snapEnterTop = 0.4,
    snapEnterBot = 0.6,
}) {
    // trzymamy stan między eventami bez re-renderów
    const stateRef = useRef({
        acc: 0,
        lastT: 0,
        cooldownUntil: 0,
        snappedOnce: false,
    });

    useEffect(() => {
        if (!isEnabled) return;

        const el = projectsLayoutRef?.current;
        if (!el) return;

        const inProjectsCenter = () => {
            const wrap = projectsWrapRef?.current;
            if (!wrap) return false;
            const r = wrap.getBoundingClientRect();
            const vh = window.innerHeight;
            return r.top < vh * centerTop && r.bottom > vh * centerBot;
        };

        const onWheel = (e) => {
            if (projectsDisabledRef?.current) return;

            const swiper = swiperRef?.current;
            if (!swiper) return;
            if (!inProjectsCenter()) return;

            const s = stateRef.current;
            const now = performance.now();
            const rawDir = e.deltaY > 0 ? 1 : -1;

            const atStart = swiper.isBeginning;
            const atEnd = swiper.isEnd;

            // ✅ release on edges: jeśli jesteś na początku/końcu i jedziesz dalej -> nie blokuj strony
            if ((rawDir < 0 && atStart) || (rawDir > 0 && atEnd)) {
                s.acc = 0;
                return; // brak preventDefault => normalny scroll strony (ucieczka)
            }

            e.preventDefault();

            if (now < s.cooldownUntil) return;

            if (now - s.lastT > resetGapMs) s.acc = 0;
            s.lastT = now;

            s.acc += e.deltaY;

            if (Math.abs(s.acc) < deltaThreshold) return;

            const dir = s.acc > 0 ? 1 : -1;
            s.acc = 0;
            s.cooldownUntil = now + cooldownMs;

            if (dir > 0) swiper.slideNext();
            else swiper.slidePrev();
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, [
        isEnabled,
        swiperRef,
        projectsWrapRef,
        projectsLayoutRef,
        projectsDisabledRef,
        deltaThreshold,
        cooldownMs,
        resetGapMs,
        centerTop,
        centerBot,
    ]);

    useEffect(() => {
        if (!isEnabled) return;

        const el = projectsWrapRef?.current;
        if (!el) return;

        const onScroll = () => {
            if (projectsDisabledRef?.current) return;

            const s = stateRef.current;
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;

            const entering = r.top <= vh * snapEnterTop && r.bottom >= vh * snapEnterBot;

            if (entering && !s.snappedOnce) {
                s.snappedOnce = true;

                const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top, behavior: "smooth" });
            }

            // reset dopiero jak całkiem poza ekranem
            const fullyOut = r.bottom < -vh * 0.5 || r.top > vh * 1.5;
            if (fullyOut) s.snappedOnce = false;
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [isEnabled, projectsWrapRef, projectsDisabledRef, headerOffset, snapEnterTop, snapEnterBot]);
}