'use client'
import useTranslation from "@/app/hooks/useTranslation";
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function PrivacyPolicyPage() {
    const { t } = useTranslation('common')
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();

    return (
        <section className='privacy_policy_page page'>
            <div ref={sec1Ref} className={`privacy_policy_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('privacy_policy')}</h1>
            </div>
        </section>
    )
}