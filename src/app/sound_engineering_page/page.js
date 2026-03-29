"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function SoundEngineeringPage() {
    const { t } = useTranslation('common');
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='sound_engineering_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('sound_engineering_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('sound_engineering_text1'))}</p>
                        <p>{f(t('sound_engineering_text2'))}</p>
                        <ul>
                            <li>{f(t('sound_engineering_text3'))}</li>
                            <li>{f(t('sound_engineering_text4'))}</li>
                            <li>{f(t('sound_engineering_text5'))}</li>
                            <li>{f(t('sound_engineering_text6'))}</li>
                            <li>{f(t('sound_engineering_text7'))}</li>
                        </ul>
                        <p>{f(t('sound_engineering_text8'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('sound_engineering_title2')}</h2>
                        <p>{f(t('sound_engineering_text9'))}</p>
                        <ul>
                            <li>{f(t('sound_engineering_text10'))}</li>
                            <li>{f(t('sound_engineering_text11'))}</li>
                            <li>{f(t('sound_engineering_text12'))}</li>
                            <li>{f(t('sound_engineering_text13'))}</li>
                            <li>{f(t('sound_engineering_text14'))}</li>
                            <li>{f(t('sound_engineering_text15'))}</li>
                        </ul>
                        <p>{f(t('sound_engineering_text16'))}</p>
                        <ul>
                            <li>{f(t('sound_engineering_text17'))}</li>
                            <li>{f(t('sound_engineering_text18'))}</li>
                            <li>{f(t('sound_engineering_text19'))}</li>
                            <li>{f(t('sound_engineering_text20'))}</li>
                            <li>{f(t('sound_engineering_text21'))}</li>
                            <li>{f(t('sound_engineering_text22'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('sound_engineering_title3')}</h2>
                        <p>{f(t('sound_engineering_text23'))}</p>
                        <ul>
                            <li>{f(t('sound_engineering_text24'))}</li>
                            <li>{f(t('sound_engineering_text25'))}</li>
                            <li>{f(t('sound_engineering_text26'))}</li>
                            <li>{f(t('sound_engineering_text27'))}</li>
                            <li>{f(t('sound_engineering_text28'))}</li>
                        </ul>
                        <p>{f(t('sound_engineering_text29'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('sound_engineering_title4')}</h2>
                        <p>{f(t('sound_engineering_text30'))}</p>
                        <ul>
                            <li>{f(t('sound_engineering_text31'))}</li>
                            <li>{f(t('sound_engineering_text32'))}</li>
                            <li>{f(t('sound_engineering_text33'))}</li>
                            <li>{f(t('sound_engineering_text34'))}</li>
                            <li>{f(t('sound_engineering_text35'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('sound_engineering_title5')}</h2>
                        <p>{f(t('sound_engineering_text36'))}</p>
                        <ul>
                            <li>{f(t('sound_engineering_text37'))}</li>
                            <li>{f(t('sound_engineering_text38'))}</li>
                            <li>{f(t('sound_engineering_text39'))}</li>
                            <li>{f(t('sound_engineering_text40'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('sound_engineering_title6')}</h2>
                        <ul>
                            <li>{f(t('sound_engineering_text41'))}</li>
                            <li>{f(t('sound_engineering_text42'))}</li>
                            <li>{f(t('sound_engineering_text43'))}</li>
                            <li>{f(t('sound_engineering_text44'))}</li>
                            <li>{f(t('sound_engineering_text45'))}</li>
                        </ul>
                        <p>{f(t('sound_engineering_text46'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}