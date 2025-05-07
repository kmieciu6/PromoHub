"use client"
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
    const { t } = useTranslation('common')

    return (
        <div>
            <h1>{t('aaa')}</h1>
        </div>
    );
}