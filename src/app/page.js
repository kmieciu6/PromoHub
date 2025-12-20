"use client"
import useTranslation from './hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function HomePage() {
    const { t } = useTranslation('common')
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();

    return (
        <section className='home_page page'>
            <div ref={sec1Ref} className={`opening open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('home_title1')}</h1>
            </div>
            <div ref={sec2Ref} className={`home_container open ${isSec2Hidden ? 'hidden' : ''}`}>
                <p>{t('')}</p>
            </div>
        </section>
    );
}