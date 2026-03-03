"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function DeepLocustPage() {
    const { t } = useTranslation('common');
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();
    const [sec4Ref, isSec4Hidden] = useIntersectionHide();

    return (
        <section className='deep_locust_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('deep_locust_title1')}</h1>
                    <div className='text'>
                        <h3>{f(t('deep_locust_title2'))}</h3>
                        <p>{f(t('deep_locust_text1'))}</p>
                        <p>{f(t('deep_locust_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('deep_locust_title3')}</h2>
                        <p>{f(t('deep_locust_text3'))}</p>
                        <ul>
                            <li>{f(t('deep_locust_text4'))}</li>
                            <li>{f(t('deep_locust_text5'))}</li>
                            <li>{f(t('deep_locust_text6'))}</li>
                            <li>{f(t('deep_locust_text7'))}</li>
                            <li>{f(t('deep_locust_text8'))}</li>
                        </ul>
                        <p>{f(t('deep_locust_text9'))}</p>
                        <ul>
                            <li>{f(t('deep_locust_text10'))}</li>
                            <li>{f(t('deep_locust_text11'))}</li>
                            <li>{f(t('deep_locust_text12'))}</li>
                            <li>{f(t('deep_locust_text13'))}</li>
                            <li>{f(t('deep_locust_text14'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('deep_locust_title4')}</h2>
                        <p>{f(t('deep_locust_text15'))}</p>
                        <p>{f(t('deep_locust_text16'))}</p>
                        <ul>
                            <li>{f(t('deep_locust_text17'))}</li>
                            <li>{f(t('deep_locust_text18'))}</li>
                            <li>{f(t('deep_locust_text19'))}</li>
                            <li>{f(t('deep_locust_text20'))}</li>
                            <li>{f(t('deep_locust_text21'))}</li>
                        </ul>
                            <p>{f(t('deep_locust_text22'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('deep_locust_title5')}</h2>
                        <p>{f(t('deep_locust_text23'))}</p>
                        <ul>
                            <li>{f(t('deep_locust_text24'))}</li>
                            <li>{f(t('deep_locust_text25'))}</li>
                            <li>{f(t('deep_locust_text26'))}</li>
                            <li>{f(t('deep_locust_text27'))}</li>
                        </ul>
                        <p>{f(t('deep_locust_text28'))}</p>
                        <ul>
                            <li>{f(t('deep_locust_text29'))}</li>
                            <li>{f(t('deep_locust_text30'))}</li>
                            <li>{f(t('deep_locust_text31'))}</li>
                            <li>{f(t('deep_locust_text32'))}</li>
                            <li>{f(t('deep_locust_text33'))}</li>
                        </ul>
                        <p>{f(t('deep_locust_text34'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('deep_locust_title6')}</h2>
                        <p>{f(t('deep_locust_text35'))}</p>
                        <ul>
                            <li>{t('deep_locust_text36')}</li>
                            <li>{t('deep_locust_text37')}</li>
                            <li>{t('deep_locust_text38')}</li>
                            <li>{t('deep_locust_text39')}</li>
                        </ul>
                        <p>{f(t('deep_locust_text40'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('deep_locust_title7')}</h2>
                        <p>{f(t('deep_locust_text41'))}</p>
                        <ul>
                            <li>{t('deep_locust_text42')}</li>
                            <li>{t('deep_locust_text43')}</li>
                            <li>{t('deep_locust_text44')}</li>
                            <li>{t('deep_locust_text45')}</li>
                            <li>{t('deep_locust_text46')}</li>
                            <li>{t('deep_locust_text47')}</li>
                        </ul>
                        <p>{f(t('deep_locust_text48'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec4Ref} className={`content open ${isSec4Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('deep_locust_title8')}</h2>
                        <p>{f(t('deep_locust_text49'))}</p>
                        <ul>
                            <li>{t('deep_locust_text50')}</li>
                            <li>{t('deep_locust_text51')}</li>
                            <li>{t('deep_locust_text52')}</li>
                            <li>{t('deep_locust_text53')}</li>
                        </ul>
                        <p>{f(t('deep_locust_text54'))}</p>
                        <ul>
                            <li>{t('deep_locust_text55')}</li>
                            <li>{t('deep_locust_text56')}</li>
                            <li>{t('deep_locust_text57')}</li>
                            <li>{t('deep_locust_text58')}</li>
                        </ul>
                        <p>{f(t('deep_locust_text59'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('deep_locust_title9')}</h2>
                        <p>{f(t('deep_locust_text60'))}</p>
                        <ul>
                            <li>{t('deep_locust_text61')}</li>
                            <li>{t('deep_locust_text62')}</li>
                            <li>{t('deep_locust_text63')}</li>
                            <li>{t('deep_locust_text64')}</li>
                            <li>{t('deep_locust_text65')}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('deep_locust_title10')}</h2>
                        <ul>
                            <li>{t('deep_locust_text66')}</li>
                            <li>{t('deep_locust_text67')}</li>
                            <li>{t('deep_locust_text68')}</li>
                            <li>{t('deep_locust_text69')}</li>
                            <li>{t('deep_locust_text70')}</li>
                            <li>{t('deep_locust_text71')}</li>
                            <li>{t('deep_locust_text72')}</li>
                        </ul>
                        <p>{f(t('deep_locust_text73'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}