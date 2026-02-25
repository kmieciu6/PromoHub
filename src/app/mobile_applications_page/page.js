"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function MobileApplicationsPage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='mobile_applications_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('mobile_applications_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('mobile_applications_text1'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('mobile_applications_title2')}</h2>
                        <p>{f(t('mobile_applications_text2'))}</p>
                        <ul>
                            <li>{f(t('mobile_applications_text3'))}</li>
                            <li>{f(t('mobile_applications_text4'))}</li>
                            <li>{f(t('mobile_applications_text5'))}</li>
                            <li>{f(t('mobile_applications_text6'))}</li>
                            <li>{f(t('mobile_applications_text7'))}</li>
                        </ul>
                        <p>{f(t('mobile_applications_text8'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('mobile_applications_title3')}</h2>
                        <p>{f(t('mobile_applications_text9'))}</p>
                        <ul>
                            <li>{t('mobile_applications_text10')}</li>
                            <li>{t('mobile_applications_text11')}</li>
                            <li>{t('mobile_applications_text12')}</li>
                            <li>{t('mobile_applications_text13')}</li>
                            <li>{t('mobile_applications_text14')}</li>
                            <li>{t('mobile_applications_text15')}</li>
                            <li>{t('mobile_applications_text16')}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('mobile_applications_title4')}</h2>
                        <p>{f(t('mobile_applications_text17'))}</p>
                        <ul>
                            <li>{f(t('mobile_applications_text18'))}</li>
                            <li>{f(t('mobile_applications_text19'))}</li>
                            <li>{f(t('mobile_applications_text20'))}</li>
                            <li>{t('mobile_applications_text21')}</li>
                            <li>{t('mobile_applications_text22')}</li>
                        </ul>
                        <p>{f(t('mobile_applications_text23'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('mobile_applications_title5')}</h2>
                        <p>{f(t('mobile_applications_text24'))}</p>
                        <ul>
                            <li>{t('mobile_applications_text25')}</li>
                            <li>{t('mobile_applications_text26')}</li>
                            <li>{t('mobile_applications_text27')}</li>
                            <li>{t('mobile_applications_text28')}</li>
                        </ul>
                        <p>{f(t('mobile_applications_text29'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('mobile_applications_title6')}</h2>
                        <ul>
                            <li>{t('mobile_applications_text30')}</li>
                            <li>{t('mobile_applications_text31')}</li>
                            <li>{t('mobile_applications_text32')}</li>
                            <li>{t('mobile_applications_text33')}</li>
                        </ul>
                        <p>{f(t('mobile_applications_text34'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}