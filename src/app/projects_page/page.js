"use client"
import useTranslation from '../hooks/useTranslation';

export default function ProjectsPage() {
    const { t } = useTranslation('common')

    return (
        <div>
            <h1>{t('projects')}</h1>
        </div>
    );
}