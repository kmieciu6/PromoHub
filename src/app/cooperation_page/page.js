"use client"
import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function CooperationPage() {
    const { t } = useTranslation('common')
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();

    return (
        <section className='cooperation_page page sub_page'>
            <div ref={sec1Ref} className={`cooperation_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('cooperation')}</h1>
            </div>
        </section>
    );
}