"use client";

import useTranslation from "./hooks/useTranslation";
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useEffect, useMemo, useRef, useState} from "react";
import cosmos1 from "../../public/cosmos/Ziemia 02.png";
import cosmos2 from "../../public/cosmos/Wenus 03.png";
import cosmos3 from "../../public/cosmos/Ziemia 10.png";
import cosmos4 from "../../public/cosmos/IMG_6598.jpg";
import cosmos5 from "../../public/cosmos/IMG_6596.jpg";
import cosmos6 from "../../public/cosmos/IMG_6600.jpg";
import cosmos7 from "../../public/cosmos/IMG_6601.jpg";
import cosmos8 from "../../public/cosmos/Ziemia 07.png";
import cosmos9 from "../../public/cosmos/Wenus 02.png";
import cosmos10 from "../../public/cosmos/Ziemia 09.png";
import osc1 from "../../public/OSC/OSC02.jpg";
import osc2 from "../../public/OSC/IMG_6592.jpg";
import osc3 from "../../public/OSC/IMG_6593.jpg";
import osc4 from "../../public/OSC/IMG_6594.jpg";
import osc5 from "../../public/OSC/IMG_6589.jpg";
import photo1 from "../../public/assets/web.png";
import photo2 from "../../public/assets/infrastructure.png";
import photo3 from "../../public/assets/studios.png";
import photo4 from "../../public/assets/vr.png";
import photo5 from "../../public/assets/systems.png";
import Carousel from "@/app/components/Carousel";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper/modules";
import "swiper/css";
import { useSyncExternalStore } from "react";
import Image from "next/image";
import consulting from '../../public/icons/load-balancer.svg';
import mobile from '../../public/icons/device-mobile.svg';
import desktop from '../../public/icons/app-window.svg';
import web from '../../public/icons/world-www.svg';
import cube from '../../public/icons/cube-3d-sphere.svg';
import sitemap from '../../public/icons/sitemap.svg';
import video from '../../public/icons/video.svg';
import lock from '../../public/icons/lock.svg';
import sound from '../../public/icons/wave-sine.svg';
import {useProjectsScrollLock} from "@/app/hooks/useProjectsScrollLock";
import {ProjectsEscapeButtonBack, ProjectsEscapeButtonNext} from "@/app/components/ProjectsEscapeButtons";

function useMounted() {
    return useSyncExternalStore(
        () => () => {},      // subscribe (no-op)
        () => true,          // client snapshot
        () => false          // server snapshot
    );
}

function getIsTouchDevice() {
    if (typeof window === "undefined") return false;

    return (
        "ontouchstart" in window ||
        (navigator && navigator.maxTouchPoints > 0) ||
        (navigator && navigator.msMaxTouchPoints > 0) ||
        window.matchMedia("(pointer: coarse)").matches
    );
}

function useIsTouchDevice() {
    const [isTouch, setIsTouch] = useState(false); // ✅ zawsze false na SSR i 1. renderze klienta

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            setIsTouch(getIsTouchDevice());
        });
        return () => cancelAnimationFrame(id);
    }, []);

    return isTouch;
}

export default function HomePage() {
    const { t, local } = useTranslation("common");
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();
    const [sec4Ref, isSec4Hidden] = useIntersectionHide();
    const [sec5Ref, isSec5Hidden] = useIntersectionHide();
    const [sec6Ref, isSec6Hidden] = useIntersectionHide();
    const [sec7Ref, isSec7Hidden] = useIntersectionHide();
    const [sec8Ref, isSec8Hidden] = useIntersectionHide();
    const [sec9Ref, isSec9Hidden] = useIntersectionHide();
    const [sec10Ref, isSec10Hidden] = useIntersectionHide();
    const [sec11Ref, isSec11Hidden] = useIntersectionHide();
    const [sec12Ref, isSec12Hidden] = useIntersectionHide();
    const [sec13Ref, isSec13Hidden] = useIntersectionHide();
    const [sec14Ref, isSec14Hidden] = useIntersectionHide();
    const [sec15Ref, isSec15Hidden] = useIntersectionHide();
    const [sec16Ref, isSec16Hidden] = useIntersectionHide();
    const [sec17Ref, isSec17Hidden] = useIntersectionHide();
    const [sec18Ref, isSec18Hidden] = useIntersectionHide();
    const [sec19Ref, isSec19Hidden] = useIntersectionHide();
    const projectsDisabledRef = useRef(false);
    const smoothScrollRef = useRef(null);

    useEffect(() => {
        smoothScrollRef.current = (targetEl) => {
            if (!targetEl) return;

            // wyłącz projects całkiem na czas scrolla
            projectsDisabledRef.current = true;

            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

            let timeoutId = null;

            const onScroll = () => {
                if (timeoutId) clearTimeout(timeoutId);

                timeoutId = setTimeout(() => {
                    projectsDisabledRef.current = false;
                    window.removeEventListener("scroll", onScroll);
                    if (timeoutId) clearTimeout(timeoutId);
                }, 140);
            };

            window.addEventListener("scroll", onScroll, { passive: true });

            // zabezpieczenie: gdyby scroll event nie poleciał (rzadkie), odblokuj po czasie
            timeoutId = setTimeout(() => {
                projectsDisabledRef.current = false;
                window.removeEventListener("scroll", onScroll);
            }, 2500);
        };
    }, []);

    const runScrollToIdOnce = () => {
        const id = sessionStorage.getItem("scrollToIdOnce");
        const ignoreOnce = sessionStorage.getItem("ignoreProjectsOnce");
        if (!id && !ignoreOnce) return;

        if (id) sessionStorage.removeItem("scrollToIdOnce");
        if (ignoreOnce) sessionStorage.removeItem("ignoreProjectsOnce");

        if (!id) return;

        let tries = 0;
        const tick = () => {
            const el = document.getElementById(id);
            if (el) {
                smoothScrollRef.current?.(el);
                return;
            }
            tries += 1;
            if (tries < 20) setTimeout(tick, 50);
        };

        tick();
    };

    useEffect(() => {
        runScrollToIdOnce(); // na mount

        const onEvt = () => runScrollToIdOnce();
        window.addEventListener("app:scrollToIdOnce", onEvt);

        return () => window.removeEventListener("app:scrollToIdOnce", onEvt);
    }, []);

    const slides = useMemo(() => [
            { h2: t("opening_title2") },
            { h2: t("opening_title3") },
            { h2: t("opening_title4") },
            { h2: t("opening_title5") },
        ],
        [t]
    );

    const [index, setIndex] = useState(0);
    const [animKey, setAnimKey] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;

        const id = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
            setAnimKey((k) => k + 1);
        }, 3500);

        return () => clearInterval(id);
    }, [slides.length]);

    // const current = slides[index]

    function renderAccents(text) {
        const parts = text.split(/(\[\[.*?]])/g);

        return parts.map((part, idx) => {
            const match = part.match(/^\[\[(.*)]]$/);

            if (match) {
                return (
                    <span key={idx} className="accent">
                        {match[1]}
                    </span>
                );
            }

            const lines = part.split("\n");

            return lines.map((line, lineIdx) => (
                <span key={`${idx}-${lineIdx}`}>
                    {line}
                    {lineIdx < lines.length - 1 && <br />}
                </span>
            ));
        });
    }

    const carousels = useMemo(() => ({
        cosmos: {
            interval: 5000,
            slides: [
                {type: 'image', src: cosmos1},
                {type: 'image', src: cosmos2},
                {type: 'image', src: cosmos3},
                {type: 'image', src: cosmos4},
                {type: 'image', src: cosmos5},
                {type: 'image', src: cosmos6},
                {type: 'image', src: cosmos7},
                {type: 'image', src: cosmos8},
                {type: 'image', src: cosmos9},
                {type: 'image', src: cosmos10},
            ]
        },
        virtual_studio: {
            interval: 5000,
            slides: [
                {type: 'image', src: photo1},
                {type: 'image', src: photo2},
                {type: 'image', src: photo3},
                {type: 'image', src: photo4},
                {type: 'image', src: photo5},
            ]
        },
        wind_turbine_game: {
            interval: 5000,
            slides: [
                {type: 'image', src: photo1},
                {type: 'image', src: photo2},
                {type: 'image', src: photo3},
                {type: 'image', src: photo4},
                {type: 'image', src: photo5},
            ]
        },
        simulation_environment: {
            interval: 5000,
            slides: [
                {type: 'image', src: osc1},
                {type: 'image', src: osc2},
                {type: 'image', src: osc3},
                {type: 'image', src: osc4},
                {type: 'image', src: osc5},
            ]
        },
        wampir: {
            interval: 5000,
            slides: [
                {type: 'image', src: photo1},
                {type: 'image', src: photo2},
                {type: 'image', src: photo3},
                {type: 'image', src: photo4},
                {type: 'image', src: photo5},
            ]
        },
        deep_locust: {
            interval: 5000,
            slides: [
                {type: 'image', src: photo1},
                {type: 'image', src: photo2},
                {type: 'image', src: photo3},
                {type: 'image', src: photo4},
                {type: 'image', src: photo5},
            ]
        },
        web_applications: {
            interval: 5000,
            slides: [
                {type: 'image', src: photo1},
                {type: 'image', src: photo2},
                {type: 'image', src: photo3},
                {type: 'image', src: photo4},
                {type: 'image', src: photo5},
            ]
        },
        // { type: "video", src: video1 },
    }), []);

    const projects = useMemo(() => ([
        { key: "cosmos", titleKey: "projects_title2", text1:"projects_text1", text2:"projects_text2", seeHref: "https://cosmos.slasesystems.com/", carousel: carousels.cosmos },
        { key: "virtual_studio", titleKey: "projects_title3", text1:"projects_text3", text2:"projects_text4", seeHref: "", carousel: carousels.virtual_studio },
        { key: "wind_turbine_game", titleKey: "projects_title4", text1:"projects_text5", text2:"projects_text6", seeHref: "/educational_simulation_game_page", carousel: carousels.wind_turbine_game },
        { key: "simulation_environment", titleKey: "projects_title5", text1:"projects_text7", text2:"projects_text8", seeHref: "/osc_application_page", carousel: carousels.simulation_environment },
        { key: "wampir", titleKey: "projects_title6", text1:"projects_text9", text2:"projects_text10", seeHref: "/wampir_page", carousel: carousels.wampir },
        { key: "deep_locust", titleKey: "projects_title7", text1:"projects_text11", text2:"projects_text12", seeHref: "/deep_locust_page", carousel: carousels.deep_locust },
        { key: "web_applications", titleKey: "projects_title8", text1:"projects_text13", text2:"projects_text14", seeHref: "", carousel: carousels.web_applications },
    ]), [carousels]);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const id = sessionStorage.getItem("scrollToIdOnce");
        const ignoreOnce = sessionStorage.getItem("ignoreProjectsOnce");

        if (!id && !ignoreOnce) return;

        if (ignoreOnce) sessionStorage.removeItem("ignoreProjectsOnce");

        if (id) sessionStorage.removeItem("scrollToIdOnce");
        if (ignoreOnce) sessionStorage.removeItem("ignoreProjectsOnce");

        if (!id) return;

        let cancelled = false;
        let timeoutId = null;

        let tries = 0;
        const tick = () => {
            if (cancelled) return;

            const el = document.getElementById(id);
            if (el) {
                smoothScrollRef.current?.(el);
                return;
            }
            tries += 1;
            if (tries < 20) setTimeout(tick, 50);
        };

        tick();
        return () => {
            cancelled = true;
            if (timeoutId) clearTimeout(timeoutId);
        }
    }, []);

    const swiperRef = useRef(null);
    const projectsWrapRef = useRef(null);
    const projectsLayoutRef = useRef(null);
    const mounted = useMounted();
    const isTouchDevice = useIsTouchDevice();
    const isTouch = mounted && isTouchDevice;

    useProjectsScrollLock({
        isEnabled: !isTouch,
        swiperRef,
        projectsWrapRef,
        projectsLayoutRef,
        projectsDisabledRef,
        headerOffset: 90,
    });

    const logos = [
        {
            logo: "/logos/Squadron_logo.png",
            link: "https://squadron.pl"
        },
        {
            logo: "/logos/stamax_logo.png",
            link: "",
        },
        {
            logo: "/logos/uw_logo.png",
            link: "https://uwr.edu.pl"
        },
        {
            logo: "/logos/ocean_connnect_logo.png",
            link: "https://www.oceanconnectenergy.com"
        },
        {
            logo: "/logos/LKK_logo.png",
            link: "https://lkk.pl/"
        },
        {
            logo: "/logos/geotronics_logo.png",
            link: "https://geotronics.com.pl"
        },
        {
            logo: "/logos/gdansk_pl_logo.png",
            link: "https://www.gdansk.pl"
        },
        {
            logo: "/logos/Flint_systems.png",
            link: "https://flint.systems/pl"
        },
        {
            logo: "/logos/rpasar.png",
            link: ""
        },
        // {
        //     logo: "/logos/",
        //     link: ""
        // },
    ];

    const allLogos = [...logos, ...logos];

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.muted = true;
        video.playsInline = true;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                console.log("Autoplay blocked by Safari");
            });
        }
    }, [local]);

    const videoSrc = useMemo(() => {
        return `/videos/opening-${local}.mp4`
    }, [local])

    const posterSrc = useMemo(() => {
        return `/videos/opening-poster-${local}.webp`
    }, [local])

    return (
        <section className="home_page page" id='home'>
            <div className="opening">
                <div ref={sec1Ref} className={`open ${isSec1Hidden ? "hidden" : ""}`}>
                    <video
                        ref={videoRef}
                        key={local}
                        className="opening_video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster={posterSrc}
                        // fetchPriority="high"
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                    {/*<div className="opening_text">*/}
                    {/*    <h1>{t("opening_title1")}</h1>*/}
                    {/*    <div key={animKey}>*/}
                    {/*        <h2>{current.h2}</h2>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className='services' id='services'>
                <div className='services_flex'>
                    <div ref={sec2Ref} className={`open services_title ${isSec2Hidden ? "hidden" : ""}`}>
                        <h1>{t("services_title1")}</h1>
                    </div>
                    <div className='services_container_wrapper'>
                        <div ref={sec3Ref} className={`open services_container ${isSec3Hidden ? "hidden" : ""}`}>
                            <Image src={consulting} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title2")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text1")}</p>
                                <div className='services_link'>
                                    <a href='/consulting_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec4Ref} className={`open services_container ${isSec4Hidden ? "hidden" : ""}`}>
                            <Image src={mobile} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title3")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text2")}</p>
                                <div className='services_link'>
                                    <a href='/mobile_applications_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec5Ref} className={`open services_container ${isSec5Hidden ? "hidden" : ""}`}>
                            <Image src={desktop} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title4")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text3")}</p>
                                <div className='services_link'>
                                    <a href='/desktop_applications_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec6Ref} className={`open services_container ${isSec6Hidden ? "hidden" : ""}`}>
                            <Image src={web} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title5")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text4")}</p>
                                <div className='services_link'>
                                    <a href='/web_applications_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec7Ref} className={`open services_container ${isSec7Hidden ? "hidden" : ""}`}>
                            <Image src={cube} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title6")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text5")}</p>
                                <div className='services_link'>
                                    <a href='/simulators_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec8Ref} className={`open services_container ${isSec8Hidden ? "hidden" : ""}`}>
                            <Image src={sitemap} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title7")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text6")}</p>
                                <div className='services_link'>
                                    <a href='/saas_applications_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec9Ref} className={`open services_container ${isSec9Hidden ? "hidden" : ""}`}>
                            <Image src={video} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title8")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text7")}</p>
                                <div className='services_link'>
                                    <a href='/graphics_visualizations_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec10Ref} className={`open services_container ${isSec10Hidden ? "hidden" : ""}`}>
                            <Image src={lock} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title9")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text8")}</p>
                                <div className='services_link'>
                                    <a href='/cybersecurity_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec11Ref} className={`open services_container ${isSec11Hidden ? "hidden" : ""}`}>
                            <Image src={sound} alt='motion' className='img'/>
                            <div className='services_text'>
                                <h2>{t("services_title10")}</h2>
                                <div className="divider"/>
                                <p>{t("services_text9")}</p>
                                <div className='services_link'>
                                    <a href='/sound_engineering_page'>{t('more')} →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`projects ${isTouch ? "is-touch" : "is-desktop"}`} id="projects" ref={projectsWrapRef}>
                <div className="projects_bg" aria-hidden="true" />
                {isTouch ? (
                    <>
                        <div className='projects_container'>
                            <div ref={sec11Ref} className={`open ${isSec11Hidden ? "hidden" : ""}`}>
                                <h1>{t("projects_title1")}</h1>
                            </div>
                            {/*Cosmos*/}
                            <div ref={sec12Ref} className={`open projects_content ${isSec12Hidden ? "hidden" : ""}`}>
                                <div className='projects_text'>
                                    <h2>{t("projects_title2")}</h2>
                                    <p>{renderAccents(t("projects_text1"))}</p>
                                    <div className="divider"/>
                                    <p>{renderAccents(t("projects_text2"))}</p>
                                    <div className='projects_link'>
                                        {/*<a href='/'>{t('see_project')} →</a>*/}
                                    </div>
                                </div>
                                <Carousel slides={carousels.cosmos.slides} interval={carousels.cosmos.interval} />
                            </div>
                            {/*Virtual Studio*/}
                            <div ref={sec13Ref} className={`open projects_content ${isSec13Hidden ? "hidden" : ""}`}>
                                <div className='projects_text'>
                                    <h3>{t("projects_title3")}</h3>
                                    <p>{renderAccents(t("projects_text3"))}</p>
                                    <div className="divider"/>
                                    <p>{renderAccents(t("projects_text4"))}</p>
                                    <div className='projects_link'>
                                        {/*<a href='/'>{t('see_project')} →</a>*/}
                                    </div>
                                </div>
                                <Carousel slides={carousels.virtual_studio.slides} interval={carousels.virtual_studio.interval} />
                            </div>
                            {/*Wind Turbine Game*/}
                            <div ref={sec14Ref} className={`open projects_content ${isSec14Hidden ? "hidden" : ""}`}>
                                <div className='projects_text'>
                                    <h3>{t("projects_title4")}</h3>
                                    <p>{renderAccents(t("projects_text5"))}</p>
                                    <div className="divider"/>
                                    <p>{renderAccents(t("projects_text6"))}</p>
                                    <div className='projects_link'>
                                        <a href='/educational_simulation_game_page'>{t('see_project')} →</a>
                                    </div>
                                </div>
                                <Carousel slides={carousels.wind_turbine_game.slides} interval={carousels.wind_turbine_game.interval} />
                            </div>
                            {/*Application for managing the simulation environment*/}
                            <div ref={sec15Ref} className={`open projects_content ${isSec15Hidden ? "hidden" : ""}`}>
                                <div className='projects_text'>
                                    <h3>{t("projects_title5")}</h3>
                                    <p>{renderAccents(t("projects_text7"))}</p>
                                    <div className="divider"/>
                                    <p>{renderAccents(t("projects_text8"))}</p>
                                    <div className='projects_link'>
                                        <a href='/osc_application_page'>{t('see_project')} →</a>
                                    </div>
                                </div>
                                <Carousel slides={carousels.simulation_environment.slides} interval={carousels.simulation_environment.interval} />
                            </div>
                            {/*Wampir*/}
                            <div ref={sec16Ref} className={`open projects_content ${isSec16Hidden ? "hidden" : ""}`}>
                                <div className='projects_text'>
                                    <h3>{t("projects_title6")}</h3>
                                    <p>{renderAccents(t("projects_text9"))}</p>
                                    <div className="divider"/>
                                    <p>{renderAccents(t("projects_text10"))}</p>
                                    <div className='projects_link'>
                                        <a href='/wampir_page'>{t('see_project')} →</a>
                                    </div>
                                </div>
                                <Carousel slides={carousels.wampir.slides} interval={carousels.wampir.interval} />
                            </div>
                            {/*Deep Locust*/}
                            <div ref={sec17Ref} className={`open projects_content ${isSec17Hidden ? "hidden" : ""}`}>
                                <div className='projects_text'>
                                    <h3>{t("projects_title7")}</h3>
                                    <p>{renderAccents(t("projects_text11"))}</p>
                                    <div className="divider"/>
                                    <p>{renderAccents(t("projects_text12"))}</p>
                                    <div className='projects_link'>
                                        <a href='/deep_locust_page'>{t('see_project')} →</a>
                                    </div>
                                </div>
                                <Carousel slides={carousels.deep_locust.slides} interval={carousels.deep_locust.interval} />
                            </div>
                            {/*Web applications*/}
                            <div ref={sec18Ref} className={`open projects_content ${isSec18Hidden ? "hidden" : ""}`}>
                                <div className='projects_text'>
                                    <h3>{t("projects_title9")}</h3>
                                    <p>{renderAccents(t("projects_text13"))}</p>
                                    <div className="divider"/>
                                    <p>{renderAccents(t("projects_text14"))}</p>
                                    <div className='projects_link'>
                                        {/*<a href='/'>{t('see_project')} →</a>*/}
                                    </div>
                                </div>
                                <Carousel slides={carousels.web_applications.slides} interval={carousels.web_applications.interval} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h1>{t("projects_title1")}</h1>
                        <div className="projects_layout" ref={projectsLayoutRef}>
                            <div className="projects_layoutInner">
                                {/* LEWA STRONA – SLIDY */}
                                <Swiper
                                    onSwiper={(sw) => (swiperRef.current = sw)}
                                    onSlideChange={(sw) => setActiveIndex(sw.activeIndex)}
                                    direction="vertical"
                                    slidesPerView={1}
                                    modules={[Mousewheel]}
                                    speed={800}
                                    allowTouchMove={isTouch}
                                    mousewheel={false}
                                    className="projects_swiper only-active-visible"
                                >
                                    {projects.map((p, i) => (
                                        <SwiperSlide key={p.key}>
                                            <div className="projects_slide">
                                                <div className="projects_card">
                                                    <div className="projects_text">
                                                        <h2>{t(p.titleKey)}</h2>
                                                        <div>
                                                            <p>{renderAccents(t(p.text1))}</p>
                                                            <div className="divider"/>
                                                            <p>{renderAccents(t(p.text2))}</p>
                                                        </div>
                                                        {p.seeHref && (
                                                            <div className="projects_link">
                                                                <a href={p.seeHref}>{t("see_project")} →</a>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <Carousel
                                                        slides={p.carousel.slides}
                                                        interval={p.carousel.interval}
                                                        isActive={i === activeIndex}
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* PRAWA STRONA – NAV (STAŁY) */}
                                <aside className="projects_nav">
                                    <ProjectsEscapeButtonBack wrapRef={projectsWrapRef}/>
                                    <h3>
                                        {t("projects_nav_title")}
                                    </h3>

                                    <div className="projects_navButtons">
                                        {projects.map((p, i) => (
                                            <button
                                                key={p.key}
                                                type="button"
                                                onClick={() => swiperRef.current?.slideTo(i)}
                                                className={`projects_navBtn ${i === activeIndex ? "is-active" : ""}`}
                                            >
                                                <span className="projects_navDot" />
                                                {t(p.titleKey)}
                                            </button>
                                        ))}
                                    </div>
                                    <ProjectsEscapeButtonNext wrapRef={projectsWrapRef}/>
                                </aside>
                            </div>
                        </div>
                        <div className="projects_spacer" />
                    </>
                )}
            </div>

            <div className='our_partners' id='our_partners'>
                <div ref={sec19Ref} className={`open ${isSec19Hidden ? "hidden" : ""}`}>
                    <h1>
                        {t("our_partners")}
                    </h1>
                    <div className="logo_slider">
                        <div className="logo_slider-track">
                            {allLogos.map((item, index) => (
                                <div className="logo_slide" key={index}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <div className="logo_image">
                                            <Image src={item.logo} alt={`partner-${index % logos.length}`} fill sizes="(max-width: 768px) 120px, 200px" className='img'/>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}