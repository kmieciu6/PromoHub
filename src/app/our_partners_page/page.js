"use client"
import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function OurPartnersPage() {
    const { t } = useTranslation('common')
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();

    return (
        <section className='our_partners_page page'>
            <div ref={sec1Ref} className={`our_partners_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('our_partners')}</h1>
            </div>
        </section>
    );
}