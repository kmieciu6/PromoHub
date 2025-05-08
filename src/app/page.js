"use client"
import { useTranslation } from './hooks/useTranslation';

export default function HomePage() {
    const { t } = useTranslation('common')

    return (
        <section className='home-page page'>
            <div className='opening'>
                <h1>{t('welcome')}</h1>
            </div>
        </section>
    );
}