'use client';

import useTranslation from './hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";

const NotFoundPage = () => {
    const { t } = useTranslation('common')
    const [secRef, isSecHidden] = useIntersectionHide();

    return (
        <section className='not_found_page'>
            <div ref={secRef} className={`open ${isSecHidden ? 'hidden' : ''}`}>
                <div className="glitch glitch--big" data-text="Error 404">
                    Error 404
                </div>
                <h3 className="glitch glitch--small" data-text={t('not_found_page')}>
                    {t('not_found_page')}
                </h3>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href='/'><button>{t('home')}</button></a>
            </div>
        </section>
    );
}

export default NotFoundPage;