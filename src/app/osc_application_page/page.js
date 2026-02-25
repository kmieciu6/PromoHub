"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function OscApplicationPage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();
    const [sec4Ref, isSec4Hidden] = useIntersectionHide();

    return (
        <section className='osc_application_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('osc_application_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('osc_application_text1'))}</p>
                        <p>{f(t('osc_application_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('osc_application_title2')}</h2>
                        <p>{f(t('osc_application_text3'))}</p>
                        <ul>
                            <li>{f(t('osc_application_text4'))}</li>
                            <li>{f(t('osc_application_text5'))}</li>
                            <li>{f(t('osc_application_text6'))}</li>
                            <li>{f(t('osc_application_text7'))}</li>
                        </ul>
                        <p>{f(t('osc_application_text8'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('osc_application_title3')}</h2>
                        <p>{f(t('osc_application_text9'))}</p>
                        <ul>
                            <li>{f(t('osc_application_text10'))}</li>
                            <li>{f(t('osc_application_text11'))}</li>
                        </ul>
                        <p>{f(t('osc_application_text12'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('osc_application_title4')}</h2>
                        <p>{f(t('osc_application_text13'))}</p>
                        <ul>
                            <li>{f(t('osc_application_text14'))}</li>
                            <li>{f(t('osc_application_text15'))}</li>
                            <li>{f(t('osc_application_text16'))}</li>
                            <li>{f(t('osc_application_text17'))}</li>
                        </ul>
                        <p>{f(t('osc_application_text18'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('osc_application_title5')}</h2>
                        <p>{f(t('osc_application_text19'))}</p>
                        <ul>
                            <li>{f(t('osc_application_text20'))}</li>
                            <li>{f(t('osc_application_text21'))}</li>
                            <li>{f(t('osc_application_text22'))}</li>
                            <li>{f(t('osc_application_text23'))}</li>
                        </ul>
                        <p>{f(t('osc_application_text24'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('osc_application_title6')}</h2>
                        <p>{f(t('osc_application_text25'))}</p>
                        <ul>
                            <li>{f(t('osc_application_text26'))}</li>
                            <li>{f(t('osc_application_text27'))}</li>
                            <li>{f(t('osc_application_text28'))}</li>
                            <li>{f(t('osc_application_text29'))}</li>
                            <li>{f(t('osc_application_text30'))}</li>
                            <li>{f(t('osc_application_text31'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec4Ref} className={`content open ${isSec4Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('osc_application_title7')}</h2>
                        <ul>
                            <li>{f(t('osc_application_text32'))}</li>
                            <li>{f(t('osc_application_text33'))}</li>
                            <li>{f(t('osc_application_text34'))}</li>
                            <li>{f(t('osc_application_text35'))}</li>
                            <li>{f(t('osc_application_text36'))}</li>
                        </ul>
                        <p>{f(t('osc_application_text37'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}