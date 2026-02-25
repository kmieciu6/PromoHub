"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function SimulatorsPage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='simulators_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('simulators_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('simulators_text1'))}</p>
                        <p>{f(t('simulators_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('simulators_title2')}</h2>
                        <p>{f(t('simulators_text3'))}</p>
                        <ul>
                            <li>{f(t('simulators_text4'))}</li>
                            <li>{f(t('simulators_text5'))}</li>
                            <li>{f(t('simulators_text6'))}</li>
                            <li>{f(t('simulators_text7'))}</li>
                            <li>{f(t('simulators_text8'))}</li>
                            <li>{f(t('simulators_text9'))}</li>
                        </ul>
                        <p>{f(t('simulators_text10'))}</p>
                        <ul>
                            <li>{f(t('simulators_text11'))}</li>
                            <li>{f(t('simulators_text12'))}</li>
                            <li>{f(t('simulators_text13'))}</li>
                            <li>{f(t('simulators_text14'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('simulators_title3')}</h2>
                        <p>{f(t('simulators_text15'))}</p>
                        <ul>
                            <li>{t('simulators_text16')}</li>
                            <li>{t('simulators_text17')}</li>
                            <li>{t('simulators_text18')}</li>
                            <li>{t('simulators_text19')}</li>
                            <li>{t('simulators_text20')}</li>
                            <li>{t('simulators_text21')}</li>
                            <li>{t('simulators_text22')}</li>
                            <li>{t('simulators_text23')}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('simulators_title4')}</h2>
                        <p>{f(t('simulators_text24'))}</p>
                        <ul>
                            <li>{f(t('simulators_text25'))}</li>
                            <li>{f(t('simulators_text26'))}</li>
                            <li>{f(t('simulators_text27'))}</li>
                            <li>{t('simulators_text28')}</li>
                            <li>{t('simulators_text29')}</li>
                            <li>{t('simulators_text30')}</li>
                        </ul>
                        <p>{f(t('simulators_text31'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('simulators_title5')}</h2>
                        <p>{f(t('simulators_text32'))}</p>
                        <ul>
                            <li>{t('simulators_text33')}</li>
                            <li>{t('simulators_text34')}</li>
                            <li>{t('simulators_text35')}</li>
                            <li>{t('simulators_text36')}</li>
                            <li>{t('simulators_text37')}</li>
                        </ul>
                        <p>{f(t('simulators_text38'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('simulators_title6')}</h2>
                        <ul>
                            <li>{t('simulators_text39')}</li>
                            <li>{t('simulators_text40')}</li>
                            <li>{t('simulators_text41')}</li>
                            <li>{t('simulators_text42')}</li>
                        </ul>
                        <p>{f(t('simulators_text43'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}