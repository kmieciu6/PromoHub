'use client'
import useTranslation from "@/app/hooks/useTranslation";
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

export default function PrivacyPolicyPage() {
    const { t } = useTranslation('common')
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='privacy_policy_page page'>
            <div ref={sec1Ref} className={`privacy_policy_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('privacy_policy')}</h1>
                <div>
                    <h2>{t('privacy_policy_title1')}</h2>
                    <p>{t('privacy_policy_text1')}</p>
                    <p>{t('privacy_policy_text2')}</p>
                </div>
                <div>
                    <h2>{t('privacy_policy_title2')}</h2>
                    <p>{t('privacy_policy_text3')}</p>
                    <ul>
                        <li>{t('privacy_policy_text4')}</li>
                        <li>{t('privacy_policy_text5')}</li>
                        <li>{t('privacy_policy_text6')}</li>
                    </ul>
                </div>
                <div>
                    <h2>{t('privacy_policy_title3')}</h2>
                    <p>{t('privacy_policy_text7')}</p>
                    <ul>
                        <li>{t('privacy_policy_text8')}</li>
                        <li>{t('privacy_policy_text9')}</li>
                    </ul>
                    <p>{t('privacy_policy_text10')}</p>
                </div>
            </div>
            <div ref={sec2Ref} className={`privacy_policy_container open ${isSec2Hidden ? 'hidden' : ''}`}>
                <div>
                    <h2>{t('privacy_policy_title4')}</h2>
                    <p>{t('privacy_policy_text11')}</p>
                    <p>{t('privacy_policy_text12')}</p>
                    <ul>
                        <li>{t('privacy_policy_text13')}</li>
                        <li>{t('privacy_policy_text14')}</li>
                        <li>{t('privacy_policy_text15')}</li>
                    </ul>
                    <p>{t('privacy_policy_text16')}</p>
                </div>
                <div>
                    <h2>{t('privacy_policy_title5')}</h2>
                    <p>{t('privacy_policy_text17')}</p>
                    <p>{t('privacy_policy_text18')}</p>
                    <p>{t('privacy_policy_text19')}</p>
                </div>
                <div>
                    <h2>{t('privacy_policy_title6')}</h2>
                    <p>{t('privacy_policy_text20')}</p>
                    <ul>
                        <li>{t('privacy_policy_text21')}</li>
                        <li>{t('privacy_policy_text22')}</li>
                        <li>{t('privacy_policy_text23')}</li>
                    </ul>
                    <p>{t('privacy_policy_text24')}</p>
                </div>
            </div>
            <div ref={sec3Ref} className={`privacy_policy_container open ${isSec3Hidden ? 'hidden' : ''}`}>
                <div>
                    <h2>{t('privacy_policy_title7')}</h2>
                    <p>{t('privacy_policy_text25')}</p>
                    <p>{t('privacy_policy_text26')}</p>
                </div>
                <div>
                    <h2>{t('privacy_policy_title8')}</h2>
                    <p>{t('privacy_policy_text27')}</p>
                    <ul>
                        <li>{t('privacy_policy_text28')}</li>
                        <li>{t('privacy_policy_text29')}</li>
                        <li>{t('privacy_policy_text30')}</li>
                        <li>{t('privacy_policy_text31')}</li>
                        <li>{t('privacy_policy_text32')}</li>
                        <li>{t('privacy_policy_text33')}</li>
                    </ul>
                </div>
                <div>
                    <h2>{t('privacy_policy_title9')}</h2>
                    <p>{t('privacy_policy_text34')}</p>
                </div>
            </div>
        </section>
    )
}