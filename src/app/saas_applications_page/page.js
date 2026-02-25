"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function SaasApplicationsPage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='saas_applications_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('saas_applications_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('saas_applications_text1'))}</p>
                        <p>{f(t('saas_applications_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('saas_applications_title2')}</h2>
                        <p>{f(t('saas_applications_text3'))}</p>
                        <ul>
                            <li>{f(t('saas_applications_text4'))}</li>
                            <li>{f(t('saas_applications_text5'))}</li>
                            <li>{f(t('saas_applications_text6'))}</li>
                            <li>{f(t('saas_applications_text7'))}</li>
                            <li>{f(t('saas_applications_text8'))}</li>
                            <li>{f(t('saas_applications_text9'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('saas_applications_title3')}</h2>
                        <p>{f(t('saas_applications_text10'))}</p>
                        <ul>
                            <li>{f(t('saas_applications_text11'))}</li>
                            <li>{f(t('saas_applications_text12'))}</li>
                            <li>{f(t('saas_applications_text13'))}</li>
                            <li>{f(t('saas_applications_text14'))}</li>
                            <li>{t('saas_applications_text15')}</li>
                            <li>{t('saas_applications_text16')}</li>
                            <li>{t('saas_applications_text17')}</li>
                            <li>{t('saas_applications_text18')}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('saas_applications_title4')}</h2>
                        <p>{f(t('saas_applications_text19'))}</p>
                        <ul>
                            <li>{f(t('saas_applications_text20'))}</li>
                            <li>{f(t('saas_applications_text21'))}</li>
                            <li>{f(t('saas_applications_text22'))}</li>
                            <li>{f(t('saas_applications_text23'))}</li>
                            <li>{f(t('saas_applications_text24'))}</li>
                            <li>{f(t('saas_applications_text25'))}</li>
                        </ul>
                        <p>{f(t('saas_applications_text26'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('saas_applications_title5')}</h2>
                        <p>{f(t('saas_applications_text27'))}</p>
                        <ul>
                            <li>{t('saas_applications_text28')}</li>
                            <li>{t('saas_applications_text29')}</li>
                            <li>{t('saas_applications_text30')}</li>
                            <li>{t('saas_applications_text31')}</li>
                            <li>{t('saas_applications_text32')}</li>
                        </ul>
                        <p>{f(t('saas_applications_text33'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('saas_applications_title6')}</h2>
                        <ul>
                            <li>{t('saas_applications_text34')}</li>
                            <li>{t('saas_applications_text35')}</li>
                            <li>{t('saas_applications_text36')}</li>
                            <li>{t('saas_applications_text37')}</li>
                        </ul>
                        <p>{f(t('saas_applications_text38'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}