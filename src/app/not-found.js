'use client';
import useTranslation from './hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
// import Image from 'next/image';

const NotFoundPage = () => {
    const { t } = useTranslation('common')
    const [secRef, isSecHidden] = useIntersectionHide();

    return (
        <section className='not_found_page'>
            <div ref={secRef} className={`open ${isSecHidden ? 'hidden' : ''}`}>
                <h1>Error 404</h1>
                <p>
                    {t('not_found_page')}
                </p>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href='/'><button>{t('home')}</button></a>
                {/*<Image*/}
                {/*    src="/images/page_not_found.jpg"*/}
                {/*    alt="not found"*/}
                {/*    width={800}*/}
                {/*    height={800}*/}
                {/*    priority*/}
                {/*/>*/}
            </div>
        </section>
    );
}

export default NotFoundPage;