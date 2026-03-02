"use client"
import {usePathname, useRouter} from "next/navigation";
import useTranslation from '../hooks/useTranslation';
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import Image from "next/image";
import linkedin from '../../../public/icons/linkedin.svg';
import github from '../../../public/icons/github.svg';
import logo from '../../../public/logos/logo.png';
import slase_logo from '../../../public/logos/slase_logo_light.png';

export default function Footer() {
    const pathname = usePathname();
    const { t } = useTranslation('common')
    const router = useRouter();

    const [secRef, isSecHidden] = useIntersectionHide();

    const smartNavigate = (e, href) => {

        const goHomeAndScroll = (id) => {
            if (!id) return;

            // zapamiętaj tylko na jedną nawigację
            sessionStorage.setItem("scrollToIdOnce", id);

            // przejdź na / bez #hash
            router.push("/");
        };

        if (!href) return;

        if (href.startsWith("#")) {
            e?.preventDefault?.();

            const id = href.slice(1);

            // ✅ zawsze wyłącz Projects na czas programowego scrolla
            sessionStorage.setItem("ignoreProjectsOnce", "1");
            // ✅ zawsze wykonuj scroll w HomePage (jedna ścieżka)
            sessionStorage.setItem("scrollToIdOnce", id);

            // jeśli jesteś na home – nie nawiguj, tylko odpal efekt w HomePage
            if (pathname === "/") {
                // “ping” żeby HomePage effect odpalił (bez zmiany URL)
                window.dispatchEvent(new Event("app:scrollToIdOnce")); // opcjonalne, patrz niżej
            } else {
                router.push("/");
            }

            return;
        }

        // obsłuż #id i /#id
        if (href.includes("#")) {
            e?.preventDefault?.();

            const hash = href.split("#")[1];
            if (!hash) return;

            const el = document.getElementById(hash);
            if (el) {
                sessionStorage.setItem("ignoreProjectsOnce", "1");
                sessionStorage.setItem("scrollToIdOnce", hash);
                window.dispatchEvent(new Event("app:scrollToIdOnce"));
                return;
            }

            sessionStorage.setItem("ignoreProjectsOnce", "1");

            goHomeAndScroll(hash);
        }
    };

    return (
        <footer>
            <div ref={secRef} className={`open footer_container ${isSecHidden ? "hidden" : ""}`}>
                <div className='footer_content'>
                    <div className='nav-logo'>
                        <a
                            type="button"
                            className="images"
                            onClick={(e) => smartNavigate(e,"#home")}
                        >
                            <Image src={logo} alt='logo' className='img' />
                            <Image src={slase_logo} alt='logo' className='logo_light' />
                        </a>
                        <p>{t('footer_text1')}</p>
                    </div>

                    <div className='contact_info'>
                        <div className='contact_info_links'>
                            <p>{t('footer_text2')}</p>
                            <a href="mailto:sebastian.larma@slasesystems.com"><p>sebastian.larma@slasesystems.com</p></a>
                        </div>
                        <div className='contact_info_links'>
                            <p>{t('footer_text3')}</p>
                            <a href="tel:+48600340928"><p>+48 600 340 928</p></a>
                        </div>
                        <div className='social_logos'>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                <Image src={linkedin} alt='linkedin' className='img' />
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noreferrer">
                                <Image src={github} alt='github' className='img' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='coppy_right'>
                    <p>© 2026 Slase Systems</p>
                </div>
            </div>
        </footer>
    );
}