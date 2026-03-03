"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function SoundEngineeringPage() {
    const { t } = useTranslation('common');
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='sound_engineering_page page sub_page'>
            <div ref={sec1Ref} className={`sound_engineering_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('sound_engineering')}</h1>
            </div>
        </section>
    );
}