"use client";

import { useRef, useState } from "react";
import useTranslation from "./hooks/useTranslation";
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function HomePage() {
    const { t } = useTranslation("common");

    const [wordsReady, setWordsReady] = useState(false);
    const timerRef = useRef(null);

    const onSec1Reveal = () => {
        // startujemy tylko raz
        if (timerRef.current) return;

        timerRef.current = setTimeout(() => {
            setWordsReady(true);
        }, 1000); // ⏱️ timeout po zadzaiłaniu hooka
    };

    const [sec1Ref, isSec1Hidden] = useIntersectionHide(undefined, undefined, onSec1Reveal);
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();

    return (
        <section className="home_page page">
            <div className="opening">
                <div ref={sec1Ref} className={`open ${isSec1Hidden ? "hidden" : ""}`}>
                    <h1>{t("opening_title1")}</h1>
                    <h2>{t("opening_title2")}</h2>

                    <div className={`hero_points ${wordsReady ? "run" : ""}`}>
                        <p className="point">{t("hero_web")}</p>
                        <p className="point">{t("hero_systems")}</p>
                        <p className="point">{t("hero_3d")}</p>
                        <p className="point">{t("hero_simulators")}</p>
                        <p className="point">{t("hero_virtual_studios")}</p>
                    </div>
                </div>
            </div>

            <div ref={sec2Ref} className={`home_container open ${isSec2Hidden ? "hidden" : ""}`}>
                <p>{t("")}</p>
            </div>
        </section>
    );
}