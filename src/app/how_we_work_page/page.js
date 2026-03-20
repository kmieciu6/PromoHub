"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function HowWeWorkPage() {
    const { t } = useTranslation('common');
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();
    const [sec4Ref, isSec4Hidden] = useIntersectionHide();

    return (
        <section className='how_we_work_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('how_we_work_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('how_we_work_text1'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('how_we_work_title2')}</h2>
                        <p>{f(t('how_we_work_text2'))}</p>
                        <ul>
                            <li>{f(t('how_we_work_text3'))}</li>
                            <li>{f(t('how_we_work_text4'))}</li>
                            <li>{f(t('how_we_work_text5'))}</li>
                            <li>{f(t('how_we_work_text6'))}</li>
                        </ul>
                            <p>{f(t('how_we_work_text7'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('how_we_work_title3')}</h2>
                        <p>{f(t('how_we_work_text8'))}</p>
                        <ul>
                            <li>{f(t('how_we_work_text9'))}</li>
                            <li>{f(t('how_we_work_text10'))}</li>
                            <li>{f(t('how_we_work_text11'))}</li>
                            <li>{f(t('how_we_work_text12'))}</li>
                        </ul>
                            <p>{f(t('how_we_work_text13'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('how_we_work_title4')}</h2>
                        <p>{f(t('how_we_work_text14'))}</p>
                        <ul>
                            <li>{f(t('how_we_work_text15'))}</li>
                            <li>{f(t('how_we_work_text16'))}</li>
                            <li>{f(t('how_we_work_text17'))}</li>
                            <li>{f(t('how_we_work_text18'))}</li>
                        </ul>
                        <p>{f(t('how_we_work_text19'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('how_we_work_title5')}</h2>
                        <p>{f(t('how_we_work_text20'))}</p>
                        <ul>
                            <li>{f(t('how_we_work_text21'))}</li>
                            <li>{f(t('how_we_work_text22'))}</li>
                            <li>{f(t('how_we_work_text23'))}</li>
                            <li>{f(t('how_we_work_text24'))}</li>
                        </ul>
                        <p>{f(t('how_we_work_text25'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('how_we_work_title6')}</h2>
                        <p>{f(t('how_we_work_text26'))}</p>
                        <ul>
                            <li>{f(t('how_we_work_text27'))}</li>
                            <li>{f(t('how_we_work_text28'))}</li>
                            <li>{f(t('how_we_work_text29'))}</li>
                            <li>{f(t('how_we_work_text30'))}</li>
                        </ul>
                        <p>{f(t('how_we_work_text31'))}</p>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec4Ref} className={`content open ${isSec4Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('how_we_work_title7')}</h2>
                        <p>{f(t('how_we_work_text32'))}</p>
                        <ul>
                            <li>{f(t('how_we_work_text33'))}</li>
                            <li>{f(t('how_we_work_text34'))}</li>
                            <li>{f(t('how_we_work_text35'))}</li>
                            <li>{f(t('how_we_work_text36'))}</li>
                            <li>{f(t('how_we_work_text37'))}</li>
                        </ul>
                        <p>{f(t('how_we_work_text38'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}