"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function CybersecurityPage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='cybersecurity_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('cybersecurity_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('cybersecurity_text1'))}</p>
                        <p>{f(t('cybersecurity_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('cybersecurity_title2')}</h2>
                        <p>{f(t('cybersecurity_text3'))}</p>
                        <ul>
                            <li>{f(t('cybersecurity_text4'))}</li>
                            <li>{f(t('cybersecurity_text5'))}</li>
                            <li>{f(t('cybersecurity_text6'))}</li>
                            <li>{f(t('cybersecurity_text7'))}</li>
                            <li>{f(t('cybersecurity_text9'))}</li>
                            <li>{f(t('cybersecurity_text8'))}</li>
                            <li>{f(t('cybersecurity_text10'))}</li>
                            <li>{f(t('cybersecurity_text11'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('cybersecurity_title3')}</h2>
                        <p>{f(t('cybersecurity_text12'))}</p>
                        <ul>
                            <li>{f(t('cybersecurity_text13'))}</li>
                            <li>{f(t('cybersecurity_text14'))}</li>
                            <li>{f(t('cybersecurity_text15'))}</li>
                            <li>{f(t('cybersecurity_text16'))}</li>
                        </ul>
                        <p>{t('cybersecurity_text17')}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('cybersecurity_title4')}</h2>
                        <p>{f(t('cybersecurity_text18'))}</p>
                        <ul>
                            <li>{f(t('cybersecurity_text19'))}</li>
                            <li>{f(t('cybersecurity_text20'))}</li>
                            <li>{f(t('cybersecurity_text21'))}</li>
                            <li>{f(t('cybersecurity_text22'))}</li>
                            <li>{f(t('cybersecurity_text23'))}</li>
                        </ul>
                        <p>{f(t('cybersecurity_text24'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('cybersecurity_title5')}</h2>
                        <ul>
                            <li>{t('cybersecurity_text25')}</li>
                            <li>{t('cybersecurity_text26')}</li>
                            <li>{t('cybersecurity_text27')}</li>
                            <li>{t('cybersecurity_text28')}</li>
                        </ul>
                        <p>{f(t('cybersecurity_text29'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}