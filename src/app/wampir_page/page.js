"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function WampirPage() {
    const { t } = useTranslation('common');
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();
    const [sec4Ref, isSec4Hidden] = useIntersectionHide();

    return (
        <section className='wampir_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('wampir_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('wampir_text1'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('wampir_title2')}</h2>
                        <p>{f(t('wampir_text2'))}</p>
                        <ul>
                            <li>{f(t('wampir_text3'))}</li>
                            <li>{f(t('wampir_text4'))}</li>
                            <li>{f(t('wampir_text5'))}</li>
                        </ul>
                        <p>{f(t('wampir_text6'))}</p>
                        <ul>
                            <li>{f(t('wampir_text7'))}</li>
                            <li>{f(t('wampir_text8'))}</li>
                            <li>{f(t('wampir_text9'))}</li>
                            <li>{f(t('wampir_text10'))}</li>
                        </ul>
                        <p>{f(t('wampir_text11'))}</p>
                        <ul>
                            <li>{f(t('wampir_text12'))}</li>
                            <li>{f(t('wampir_text13'))}</li>
                            <li>{f(t('wampir_text14'))}</li>
                            <li>{f(t('wampir_text15'))}</li>
                            <li>{f(t('wampir_text16'))}</li>
                            <li>{f(t('wampir_text17'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('wampir_title3')}</h2>
                        <p>{f(t('wampir_text18'))}</p>
                        <ul>
                            <li>{f(t('wampir_text19'))}</li>
                            <li>{f(t('wampir_text20'))}</li>
                            <li>{f(t('wampir_text21'))}</li>
                            <li>{f(t('wampir_text22'))}</li>
                            <li>{f(t('wampir_text23'))}</li>
                        </ul>
                            <p>{t('wampir_text24')}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('wampir_title4')}</h2>
                        <p>{f(t('wampir_text25'))}</p>
                        <ul>
                            <li>{f(t('wampir_text26'))}</li>
                            <li>{f(t('wampir_text27'))}</li>
                            <li>{f(t('wampir_text28'))}</li>
                            <li>{f(t('wampir_text29'))}</li>
                            <li>{f(t('wampir_text30'))}</li>
                        </ul>
                        <p>{t('wampir_text31')}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('wampir_title5')}</h2>
                        <h3>{f(t('wampir_text32'))}</h3>
                        <p>{f(t('wampir_text33'))}</p>
                        <h3>{f(t('wampir_text34'))}</h3>
                        <p>{f(t('wampir_text35'))}</p>
                        <ul>
                            <li>{t('wampir_text36')}</li>
                            <li>{t('wampir_text37')}</li>
                            <li>{t('wampir_text38')}</li>
                        </ul>
                        <h3>{f(t('wampir_text39'))}</h3>
                        <p>{f(t('wampir_text40'))}</p>
                        <ul>
                            <li>{t('wampir_text41')}</li>
                            <li>{t('wampir_text42')}</li>
                            <li>{t('wampir_text43')}</li>
                        </ul>
                        <h3>{f(t('wampir_text44'))}</h3>
                        <p>{f(t('wampir_text45'))}</p>
                        <ul>
                            <li>{t('wampir_text46')}</li>
                            <li>{t('wampir_text47')}</li>
                            <li>{t('wampir_text48')}</li>
                            <li>{t('wampir_text49')}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec4Ref} className={`content open ${isSec4Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('wampir_title6')}</h2>
                        <p>{f(t('wampir_text50'))}</p>
                        <ul>
                            <li>{t('wampir_text51')}</li>
                            <li>{t('wampir_text52')}</li>
                            <li>{t('wampir_text53')}</li>
                            <li>{t('wampir_text54')}</li>
                            <li>{t('wampir_text55')}</li>
                            <li>{t('wampir_text56')}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('wampir_title7')}</h2>
                        <ul>
                            <li>{t('wampir_text57')}</li>
                            <li>{t('wampir_text58')}</li>
                            <li>{t('wampir_text59')}</li>
                            <li>{t('wampir_text60')}</li>
                            <li>{t('wampir_text61')}</li>
                            <li>{t('wampir_text62')}</li>
                        </ul>
                        <p>{f(t('wampir_text63'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}