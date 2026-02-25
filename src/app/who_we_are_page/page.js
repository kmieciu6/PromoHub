"use client"
import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function WhoWeArePage() {
    const { t } = useTranslation('common')
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();

    return (
        <section className='who_we_are_page page'>
            <div ref={sec1Ref} className={`who_we_are_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('who_we_are')}</h1>
            </div>
        </section>
    );
}