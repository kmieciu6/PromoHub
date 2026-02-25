"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function ConsultingPage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='consulting_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('consulting_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('consulting_text1'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('consulting_title2')}</h2>
                        <p>{f(t('consulting_text2'))}</p>
                        <ul>
                            <li>{f(t('consulting_text3'))}</li>
                            <li>{f(t('consulting_text4'))}</li>
                            <li>{f(t('consulting_text5'))}</li>
                            <li>{f(t('consulting_text6'))}</li>
                            <li>{f(t('consulting_text7'))}</li>
                            <li>{f(t('consulting_text8'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('consulting_title3')}</h2>
                        <p>{f(t('consulting_text9'))}</p>
                        <ul>
                            <li>{t('consulting_text10')}</li>
                            <li>{t('consulting_text11')}</li>
                            <li>{t('consulting_text12')}</li>
                            <li>{t('consulting_text13')}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('consulting_title4')}</h2>
                        <p>{f(t('consulting_text14'))}</p>
                        <ul>
                            <li>{t('consulting_text15')}</li>
                            <li>{t('consulting_text16')}</li>
                            <li>{t('consulting_text17')}</li>
                            <li>{t('consulting_text18')}</li>
                            <li>{t('consulting_text19')}</li>
                            <li>{t('consulting_text20')}</li>
                            <li>{t('consulting_text21')}</li>
                        </ul>
                        <p>{f(t('consulting_text22'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('consulting_title5')}</h2>
                        <ul>
                            <li>{t('consulting_text23')}</li>
                            <li>{t('consulting_text24')}</li>
                            <li>{t('consulting_text25')}</li>
                            <li>{t('consulting_text26')}</li>
                        </ul>
                        <p>{f(t('consulting_text27'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}