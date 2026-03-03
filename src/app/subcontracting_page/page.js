"use client"

import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import {useFormattedText} from "@/app/hooks/useFormattedText";

export default function SubcontractingPage() {
    const { t } = useTranslation('common')
    const { f } = useFormattedText();
    const [sec1Ref, isSec1Hidden] = useIntersectionHide();
    const [sec2Ref, isSec2Hidden] = useIntersectionHide();
    const [sec3Ref, isSec3Hidden] = useIntersectionHide();

    return (
        <section className='subcontracting_page page sub_page'>
            <div ref={sec1Ref} className={`subcontracting_container open ${isSec1Hidden ? 'hidden' : ''}`}>
                <h1>{t('subcontracting')}</h1>
            </div>
        </section>
    );
}