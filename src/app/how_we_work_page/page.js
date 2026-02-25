"use client"
import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function HowWeWorkPage() {
    const { t } = useTranslation('common')
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();

    return (
        <section className='how_we_work_page page'>
            <div ref={sec1Ref} className={`how_we_work_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('how_we_work')}</h1>
            </div>
        </section>
    );
}