"use client";

import { useRef, useState } from "react";
import useTranslation from "./hooks/useTranslation";
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import ReadMore, { ReadMoreMore } from "@/app/components/ReadMore";

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
    const [sec9Ref, isSec9Hidden] = useIntersectionHide();
    const [sec10Ref, isSec10Hidden] = useIntersectionHide();
    const [sec11Ref, isSec11Hidden] = useIntersectionHide();
    const [sec12Ref, isSec12Hidden] = useIntersectionHide();
    const [sec13Ref, isSec13Hidden] = useIntersectionHide();
    const [sec14Ref, isSec14Hidden] = useIntersectionHide();
    const [sec15Ref, isSec15Hidden] = useIntersectionHide();

    function renderAccents(text) {
        const parts = text.split(/(\[\[.*?\]\])/g);

        return parts.map((part, idx) => {
            const match = part.match(/^\[\[(.*)\]\]$/);

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
                <div className='services_flex'>
                    <div ref={sec2Ref} className={`open services_title ${isSec2Hidden ? "hidden" : ""}`}>
                        <h1>{t("services_title1")}</h1>
                        <h3>{t("services_text1")}</h3>
                    </div>
                    <div className='services_container_wrapper'>
                        <div ref={sec3Ref} className={`open services_container ${isSec3Hidden ? "hidden" : ""}`}>
                            <img src='/icons/world-www.svg' alt='motion'/>
                            <div className='services_text'>
                                <h2>{t("services_title2")}</h2>
                                <p>{t("services_text2")}</p>
                                <div className="divider"/>
                                <li>{t("services_text3")}</li>
                                <li>{t("services_text4")}</li>
                                <li>{t("services_text5")}</li>
                                <li>{t("services_text6")}</li>
                                <div className='services_link'>
                                    <a href='/projects_page#web'>Zobacz projekty →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec4Ref} className={`open services_container ${isSec4Hidden ? "hidden" : ""}`}>
                            <img src='/icons/sitemap.svg' alt='motion'/>
                            <div className='services_text'>
                                <h2>{t("services_title3")}</h2>
                                <p>{t("services_text7")}</p>
                                <div className="divider"/>
                                <li>{t("services_text8")}</li>
                                <li>{t("services_text9")}</li>
                                <li>{t("services_text10")}</li>
                                <li>{t("services_text11")}</li>
                                <div className='services_link'>
                                    <a href='/projects_page#systems'>Zobacz projekty →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec5Ref} className={`open services_container ${isSec5Hidden ? "hidden" : ""}`}>
                            <img src='/icons/cube-3d-sphere.svg' alt='motion'/>
                            <div className='services_text'>
                                <h2>{t("services_title4")}</h2>
                                <p>{t("services_text12")}</p>
                                <div className="divider"/>
                                <li>{t("services_text13")}</li>
                                <li>{t("services_text14")}</li>
                                <li>{t("services_text15")}</li>
                                <li>{t("services_text16")}</li>
                                <div className='services_link'>
                                    <a href='/projects_page#simulations'>Zobacz projekty →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec6Ref} className={`open services_container ${isSec6Hidden ? "hidden" : ""}`}>
                            <img src='/icons/git-pull-request.svg' alt='motion'/>
                            <div className='services_text'>
                                <h2>{t("services_title5")}</h2>
                                <p>{t("services_text17")}</p>
                                <div className="divider"/>
                                <li>{t("services_text18")}</li>
                                <li>{t("services_text19")}</li>
                                <li>{t("services_text20")}</li>
                                <li>{t("services_text21")}</li>
                                <div className='services_link'>
                                    <a href='/projects_page#vr'>Zobacz projekty →</a>
                                </div>
                            </div>
                        </div>
                        <div ref={sec7Ref} className={`open services_container ${isSec7Hidden ? "hidden" : ""}`}>
                            <img src='/icons/video.svg' alt='motion'/>
                            <div className='services_text'>
                                <h2>{t("services_title6")}</h2>
                                <p>{t("services_text22")}</p>
                                <div className="divider"/>
                                <li>{t("services_text23")}</li>
                                <li>{t("services_text24")}</li>
                                <li>{t("services_text25")}</li>
                                <li>{t("services_text26")}</li>
                                <div className='services_link'>
                                    <a href='/projects_page#studios'>Zobacz projekty →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='how_we_work' id='how_we_work'>
                <div className='how_we_work_container'>
                    <div ref={sec8Ref} className={`open ${isSec8Hidden ? "hidden" : ""}`}>
                        <h2>{renderAccents(t("how_we_work_text1"))}</h2>
                        <p>{renderAccents(t("how_we_work_text2"))}</p>
                        <p>{renderAccents(t("how_we_work_text3"))}</p>
                    </div>
                    <div ref={sec9Ref} className={`open ${isSec9Hidden ? "hidden" : ""}`}>
                        <h3>{renderAccents(t("how_we_work_text4"))}</h3>
                        <p>{renderAccents(t("how_we_work_text5"))}</p>
                        <p>{renderAccents(t("how_we_work_text6"))}</p>
                        <p>{renderAccents(t("how_we_work_text7"))}</p>
                    </div>
                </div>
            </div>
            <div className='technologies' id='technologies'>
                <div className='technologies_container'>
                    <div ref={sec10Ref} className={`open technologies_content ${isSec10Hidden ? "hidden" : ""}`}>
                        <div className='technologies_text'>
                            <h2>{t("technologies_title1")}</h2>
                            <p>{renderAccents(t("technologies_text1"))}</p>
                            <p>{renderAccents(t("technologies_text2"))}</p>
                            <div className="divider"/>
                            <p>{renderAccents(t("technologies_text3"))}</p>
                            <li>{renderAccents(t("technologies_text4"))}</li>
                            <li>{renderAccents(t("technologies_text5"))}</li>
                            <li>{renderAccents(t("technologies_text6"))}</li>
                            <li>{renderAccents(t("technologies_text7"))}</li>
                            <div className="divider"/>
                            <p>{renderAccents(t("technologies_text8"))}</p>
                            <p>{renderAccents(t("technologies_text9"))}</p>
                        </div>
                    </div>
                    <div ref={sec11Ref} className={`open technologies_content ${isSec11Hidden ? "hidden" : ""}`}>
                        <div className='technologies_text'>
                            <ReadMore scrollOffset={90}>
                                <h3>{t("technologies_title2")}</h3>
                                <p>{renderAccents(t("technologies_text10"))}</p>
                                <p>{renderAccents(t("technologies_text11"))}</p>
                                <ReadMoreMore />
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text12"))}</p>
                                <li>{renderAccents(t("technologies_text13"))}</li>
                                <li>{renderAccents(t("technologies_text14"))}</li>
                                <li>{renderAccents(t("technologies_text15"))}</li>
                                <li>{renderAccents(t("technologies_text16"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text17"))}</p>
                                <li>{renderAccents(t("technologies_text18"))}</li>
                                <li>{renderAccents(t("technologies_text19"))}</li>
                                <li>{renderAccents(t("technologies_text20"))}</li>
                                <li>{renderAccents(t("technologies_text21"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text22"))}</p>
                                <li>{renderAccents(t("technologies_text23"))}</li>
                                <li>{renderAccents(t("technologies_text24"))}</li>
                                <li>{renderAccents(t("technologies_text25"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text26"))}</p>
                            </ReadMore>
                        </div>
                        <img src="/assets/web.png" alt="" aria-hidden="true" />
                    </div>
                    <div ref={sec12Ref} className={`open technologies_content ${isSec12Hidden ? "hidden" : ""}`}>
                        <div className='technologies_text'>
                            <ReadMore scrollOffset={90}>
                                <h3>{t("technologies_title3")}</h3>
                                <p>{renderAccents(t("technologies_text27"))}</p>
                                <p>{renderAccents(t("technologies_text28"))}</p>
                                <p>{renderAccents(t("technologies_text29"))}</p>
                                <ReadMoreMore />
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text30"))}</p>
                                <li>{renderAccents(t("technologies_text31"))}</li>
                                <li>{renderAccents(t("technologies_text32"))}</li>
                                <li>{renderAccents(t("technologies_text33"))}</li>
                                <li>{renderAccents(t("technologies_text34"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text35"))}</p>
                                <li>{renderAccents(t("technologies_text36"))}</li>
                                <li>{renderAccents(t("technologies_text37"))}</li>
                                <li>{renderAccents(t("technologies_text38"))}</li>
                                <li>{renderAccents(t("technologies_text39"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text40"))}</p>
                                <li>{renderAccents(t("technologies_text41"))}</li>
                                <li>{renderAccents(t("technologies_text42"))}</li>
                                <li>{renderAccents(t("technologies_text43"))}</li>
                                <li>{renderAccents(t("technologies_text44"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text45"))}</p>
                            </ReadMore>
                        </div>
                        <img src="/assets/systems.png" alt="" aria-hidden="true" />
                    </div>
                    <div ref={sec13Ref} className={`open technologies_content ${isSec13Hidden ? "hidden" : ""}`}>
                        <div className='technologies_text'>
                            <ReadMore scrollOffset={90}>
                                <h3>{t("technologies_title4")}</h3>
                                <p>{renderAccents(t("technologies_text46"))}</p>
                                <p>{renderAccents(t("technologies_text47"))}</p>
                                <ReadMoreMore />
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text48"))}</p>
                                <li>{renderAccents(t("technologies_text49"))}</li>
                                <li>{renderAccents(t("technologies_text50"))}</li>
                                <li>{renderAccents(t("technologies_text51"))}</li>
                                <li>{renderAccents(t("technologies_text52"))}</li>
                                <li>{renderAccents(t("technologies_text53"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text54"))}</p>
                                <li>{renderAccents(t("technologies_text55"))}</li>
                                <li>{renderAccents(t("technologies_text56"))}</li>
                                <li>{renderAccents(t("technologies_text57"))}</li>
                                <li>{renderAccents(t("technologies_text58"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text59"))}</p>
                                <li>{renderAccents(t("technologies_text60"))}</li>
                                <li>{renderAccents(t("technologies_text61"))}</li>
                                <li>{renderAccents(t("technologies_text62"))}</li>
                                <li>{renderAccents(t("technologies_text63"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text64"))}</p>
                            </ReadMore>
                        </div>
                        <img src="/assets/vr.png" alt="" aria-hidden="true" />
                    </div>
                    <div ref={sec14Ref} className={`open technologies_content ${isSec14Hidden ? "hidden" : ""}`}>
                        <div className='technologies_text'>
                            <ReadMore scrollOffset={90}>
                                <h3>{t("technologies_title5")}</h3>
                                <p>{renderAccents(t("technologies_text65"))}</p>
                                <p>{renderAccents(t("technologies_text66"))}</p>
                                <ReadMoreMore />
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text67"))}</p>
                                <li>{renderAccents(t("technologies_text68"))}</li>
                                <li>{renderAccents(t("technologies_text69"))}</li>
                                <li>{renderAccents(t("technologies_text70"))}</li>
                                <li>{renderAccents(t("technologies_text71"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text72"))}</p>
                                <li>{renderAccents(t("technologies_text73"))}</li>
                                <li>{renderAccents(t("technologies_text74"))}</li>
                                <li>{renderAccents(t("technologies_text75"))}</li>
                                <li>{renderAccents(t("technologies_text76"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text77"))}</p>
                                <li>{renderAccents(t("technologies_text78"))}</li>
                                <li>{renderAccents(t("technologies_text79"))}</li>
                                <li>{renderAccents(t("technologies_text80"))}</li>
                                <li>{renderAccents(t("technologies_text81"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text82"))}</p>
                            </ReadMore>
                        </div>
                        <img src="/assets/studios.png" alt="" aria-hidden="true" />
                    </div>
                    <div ref={sec15Ref} className={`open technologies_content ${isSec15Hidden ? "hidden" : ""}`}>
                        <div className='technologies_text'>
                            <ReadMore scrollOffset={90}>
                                <h3>{t("technologies_title6")}</h3>
                                <p>{renderAccents(t("technologies_text83"))}</p>
                                <p>{renderAccents(t("technologies_text84"))}</p>
                                <ReadMoreMore />
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text85"))}</p>
                                <li>{renderAccents(t("technologies_text86"))}</li>
                                <li>{renderAccents(t("technologies_text87"))}</li>
                                <li>{renderAccents(t("technologies_text88"))}</li>
                                <li>{renderAccents(t("technologies_text89"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text90"))}</p>
                                <li>{renderAccents(t("technologies_text91"))}</li>
                                <li>{renderAccents(t("technologies_text92"))}</li>
                                <li>{renderAccents(t("technologies_text93"))}</li>
                                <li>{renderAccents(t("technologies_text94"))}</li>
                                <div className="divider"/>
                                <p>{renderAccents(t("technologies_text95"))}</p>
                            </ReadMore>
                        </div>
                        <img src='/assets/infrastructure.png' alt='motion'/>
                    </div>
                </div>
            </div>
        </section>
    );
}