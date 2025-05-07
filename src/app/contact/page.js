"use client"
import { useTranslation } from '../hooks/useTranslation';

export default function ContactPage() {
    const { t } = useTranslation('common')

    return (
        <div>
            <h1>{t('contact')}</h1>
        </div>
    );
}