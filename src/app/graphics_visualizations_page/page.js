"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function GraphicsVisualizationsPage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='graphics_visualizations_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('graphics_visualizations_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('graphics_visualizations_text1'))}</p>
                        <p>{f(t('graphics_visualizations_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('graphics_visualizations_title2')}</h2>
                        <p>{f(t('graphics_visualizations_text3'))}</p>
                        <ul>
                            <li>{f(t('graphics_visualizations_text4'))}</li>
                            <li>{f(t('graphics_visualizations_text5'))}</li>
                            <li>{f(t('graphics_visualizations_text6'))}</li>
                            <li>{f(t('graphics_visualizations_text7'))}</li>
                            <li>{f(t('graphics_visualizations_text9'))}</li>
                            <li>{f(t('graphics_visualizations_text8'))}</li>
                            <li>{f(t('graphics_visualizations_text10'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec2Ref} className={`content open ${isSec2Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('graphics_visualizations_title3')}</h2>
                        <p>{f(t('graphics_visualizations_text11'))}</p>
                        <ul>
                            <li>{f(t('graphics_visualizations_text12'))}</li>
                            <li>{f(t('graphics_visualizations_text13'))}</li>
                            <li>{f(t('graphics_visualizations_text14'))}</li>
                            <li>{f(t('graphics_visualizations_text15'))}</li>
                            <li>{f(t('graphics_visualizations_text16'))}</li>
                            <li>{f(t('graphics_visualizations_text17'))}</li>
                            <li>{f(t('graphics_visualizations_text18'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('graphics_visualizations_title4')}</h2>
                        <p>{f(t('graphics_visualizations_text19'))}</p>
                        <ul>
                            <li>{f(t('graphics_visualizations_text20'))}</li>
                            <li>{f(t('graphics_visualizations_text21'))}</li>
                            <li>{f(t('graphics_visualizations_text22'))}</li>
                            <li>{f(t('graphics_visualizations_text23'))}</li>
                            <li>{f(t('graphics_visualizations_text24'))}</li>
                            <li>{f(t('graphics_visualizations_text25'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
                <div ref={sec3Ref} className={`content open ${isSec3Hidden ? 'hidden' : ''}`}>
                    <div className='text'>
                        <h2>{t('graphics_visualizations_title5')}</h2>
                        <p>{f(t('graphics_visualizations_text26'))}</p>
                        <ul>
                            <li>{t('graphics_visualizations_text27')}</li>
                            <li>{t('graphics_visualizations_text28')}</li>
                            <li>{t('graphics_visualizations_text29')}</li>
                            <li>{t('graphics_visualizations_text30')}</li>
                            <li>{t('graphics_visualizations_text31')}</li>
                        </ul>
                        <p>{f(t('graphics_visualizations_text32'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('graphics_visualizations_title6')}</h2>
                        <ul>
                            <li>{t('graphics_visualizations_text33')}</li>
                            <li>{t('graphics_visualizations_text34')}</li>
                            <li>{t('graphics_visualizations_text35')}</li>
                            <li>{t('graphics_visualizations_text36')}</li>
                        </ul>
                        <p>{f(t('graphics_visualizations_text37'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}