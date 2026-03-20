"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function SoundEngineeringPage() {
    const { t } = useTranslation('common');
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    // const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    // const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='sound_engineering_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('sound_engineering_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('sound_engineering_text1'))}</p>
                        <p>{f(t('sound_engineering_text2'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <h2>{t('sound_engineering_title2')}</h2>
                        <p>{f(t('sound_engineering_text3'))}</p>
                        <ul>
                            <li>{f(t('sound_engineering_text4'))}</li>
                            <li>{f(t('sound_engineering_text5'))}</li>
                            <li>{f(t('sound_engineering_text6'))}</li>
                            <li>{f(t('sound_engineering_text7'))}</li>
                            <li>{f(t('sound_engineering_text8'))}</li>
                            <li>{f(t('sound_engineering_text9'))}</li>
                        </ul>
                        <p>{f(t('sound_engineering_text10'))}</p>
                        <ul>
                            <li>{f(t('sound_engineering_text11'))}</li>
                            <li>{f(t('sound_engineering_text12'))}</li>
                            <li>{f(t('sound_engineering_text13'))}</li>
                            <li>{f(t('sound_engineering_text14'))}</li>
                        </ul>
                    </div>
                    <div className="divider"/>
                </div>
            </div>
        </section>
    );
}