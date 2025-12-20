"use client"
import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function ProjectsPage() {
    const { t } = useTranslation('common')
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();


    return (
        <section className='projects_page page'>
            <div ref={sec1Ref} className={`projects_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('projects')}</h1>
            </div>
        </section>
    );
}