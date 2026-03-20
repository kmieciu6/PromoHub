"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function CooperationPage() {
    const { t } = useTranslation('common');
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();

    return (
        <section className='cooperation_page page sub_page'>
            <div className='container'>
                <div ref={sec1Ref} className={`content open ${isSec1Hidden ? 'hidden' : ''}`}>
                    <h1>{t('cooperation_title1')}</h1>
                    <div className='text'>
                        <p>{f(t('cooperation_text1'))}</p>
                    </div>
                    <div className="divider"/>
                    <div className='text'>
                        <p>{f(t('cooperation_text2'))}</p>
                        <ul>
                            <li>{f(t('cooperation_text3'))}</li>
                            <li>{f(t('cooperation_text4'))}</li>
                            <li>{f(t('cooperation_text5'))}</li>
                            <li>{f(t('cooperation_text6'))}</li>
                            <li>{f(t('cooperation_text7'))}</li>
                        </ul>
                        <p>{f(t('cooperation_text8'))}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}