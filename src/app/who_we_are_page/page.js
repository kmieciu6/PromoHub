"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function WhoWeArePage() {
    const { t } = useTranslation('common');
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='who_we_are_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('who_we_are_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('who_we_are_text1'))}</p>
                        <p>{f(t('who_we_are_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('who_we_are_title2')}</h2>
                        <p>{f(t('who_we_are_text3'))}</p>
                        <p>{f(t('who_we_are_text4'))}</p>
                        <ul>
                            <li>{f(t('who_we_are_text5'))}</li>
                            <li>{f(t('who_we_are_text6'))}</li>
                            <li>{f(t('who_we_are_text7'))}</li>
                            <li>{f(t('who_we_are_text8'))}</li>
                            <li>{f(t('who_we_are_text9'))}</li>
                            <li>{f(t('who_we_are_text10'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('who_we_are_title3')}</h2>
                        <p>{f(t('who_we_are_text11'))}</p>
                        <ul>
                            <li>{f(t('who_we_are_text12'))}</li>
                            <li>{f(t('who_we_are_text13'))}</li>
                            <li>{f(t('who_we_are_text14'))}</li>
                            <li>{f(t('who_we_are_text15'))}</li>
                            <li>{f(t('who_we_are_text16'))}</li>
                        </ul>
                        <p>{f(t('who_we_are_text17'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('who_we_are_title4')}</h2>
                        <p>{f(t('who_we_are_text18'))}</p>
                        <p>{f(t('who_we_are_text19'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{f(t('who_we_are_title5'))}</h2>
                        <p>{f(t('who_we_are_text20'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{f(t('who_we_are_title6'))}</h2>
                        <p>{f(t('who_we_are_text21'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{f(t('who_we_are_title7'))}</h2>
                        <p>{f(t('who_we_are_text22'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}