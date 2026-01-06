"use client";

import { useRef, useState } from "react";
import useTranslation from "./hooks/useTranslation";
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import services_photo from "../../public/assets/opening.png";

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
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();
    const [sec4Ref, isSec4Hidden] = useIntersectionHide();
    const [sec5Ref, isSec5Hidden] = useIntersectionHide();
    const [sec6Ref, isSec6Hidden] = useIntersectionHide();
    const [sec7Ref, isSec7Hidden] = useIntersectionHide();
    const [sec8Ref, isSec8Hidden] = useIntersectionHide();

    return (
        <section className="home_page page">
            <div className="opening">
                <div ref={sec1Ref} className={`open ${isSec1Hidden ? "hidden" : ""}`}>
                    <h1>{t("opening_title1")}</h1>
                    <h2>{t("opening_title2")}</h2>
                    <div className={`hero_points ${wordsReady ? "run" : ""}`}>
                        <h3 className="point">{t("hero_web")}</h3>
                        <h3 className="point">{t("hero_systems")}</h3>
                        <h3 className="point">{t("hero_3d")}</h3>
                        <h3 className="point">{t("hero_simulators")}</h3>
                        <h3 className="point">{t("hero_virtual_studios")}</h3>
                    </div>
                </div>
            </div>
            <div className='services' id='services'>
                <div ref={sec2Ref} className={`open ${isSec2Hidden ? "hidden" : ""}`}>
                    <h1>{t("services_title1")}</h1>
                    <h3>{t("services_text1")}</h3>
                    <div className='services_container'>
                        <div className='services_text'>
                            <h2>{t("services_title2")}</h2>
                            <p>{t("services_text2")}</p>
                            <li>{t("services_text3")}</li>
                            <li>{t("services_text4")}</li>
                            <li>{t("services_text5")}</li>
                            <li>{t("services_text6")}</li>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={services_photo.src} alt='motion'/>
                    </div>
                </div>
                <div ref={sec3Ref} className={`open services_container ${isSec3Hidden ? "hidden" : ""}`}>
                    <div className='services_text'>
                        <h2>{t("services_title3")}</h2>
                        <p>{t("services_text7")}</p>
                        <li>{t("services_text8")}</li>
                        <li>{t("services_text9")}</li>
                        <li>{t("services_text10")}</li>
                        <li>{t("services_text11")}</li>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={services_photo.src} alt='motion'/>
                </div>
                <div ref={sec4Ref} className={`open services_container ${isSec4Hidden ? "hidden" : ""}`}>
                    <div className='services_text'>
                        <h2>{t("services_title4")}</h2>
                        <p>{t("services_text12")}</p>
                        <li>{t("services_text13")}</li>
                        <li>{t("services_text14")}</li>
                        <li>{t("services_text15")}</li>
                        <li>{t("services_text16")}</li>
                        <a href='/projects_page#simulations'>Zobacz projekty →</a>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={services_photo.src} alt='motion'/>
                </div>
                <div ref={sec5Ref} className={`open services_container ${isSec5Hidden ? "hidden" : ""}`}>
                    <div className='services_text'>
                        <h2>{t("services_title5")}</h2>
                        <p>{t("services_text17")}</p>
                        <li>{t("services_text18")}</li>
                        <li>{t("services_text19")}</li>
                        <li>{t("services_text20")}</li>
                        <li>{t("services_text21")}</li>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={services_photo.src} alt='motion'/>
                </div>
                <div ref={sec6Ref} className={`open services_container ${isSec6Hidden ? "hidden" : ""}`}>
                    <div className='services_text'>
                        <h2>{t("services_title6")}</h2>
                        <p>{t("services_text22")}</p>
                        <li>{t("services_text23")}</li>
                        <li>{t("services_text24")}</li>
                        <li>{t("services_text25")}</li>
                        <li>{t("services_text26")}</li>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={services_photo.src} alt='motion'/>
                </div>
            </div>
            <div className='why_us' id='why_us'>
                <div ref={sec7Ref} className={`open ${isSec7Hidden ? "hidden" : ""}`}>
                    <h2>{t("why_us_title1")}</h2>
                </div>
            </div>
            <div className='technologies' id='technologies'>
                <div ref={sec8Ref} className={`open ${isSec8Hidden ? "hidden" : ""}`}>
                    <h2>{t("technologies_title1")}</h2>
                </div>
            </div>
        </section>
    );
}