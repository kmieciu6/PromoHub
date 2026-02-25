"use client";
import React, {useState, useRef, useEffect} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useTranslation from "@/app/hooks/useTranslation";
import { useCookiesConsent } from "../context/CookiesConsentContext";
import ConsentPlaceholder from "./ConsentPlaceholder";
import useIntersectionHide from "@/app/hooks/useIntersectionHide";
import Image from "next/image";
import user from "../../../public/icons/user.svg";
import mail from "../../../public/icons/at.svg";
import phone from "../../../public/icons/phone.svg";
import message from "../../../public/icons/mail.svg";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const Contact = () => {
    const { t } = useTranslation("common");
    const { isAccepted, acceptCookies } = useCookiesConsent();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
    });

    const [errors, setError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [secRef, isSecHidden] = useIntersectionHide();
    const recaptchaRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const el = contactRef.current;
        if (!el) return;

        const isTouch =
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0;

        if (isTouch) return; // nie ruszamy na mobile

        let raf = 0;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const MAX = 14; // px – amplituda ruchu (mała = premium)
        const SPEED = 0.12; // easing (0.08–0.18)

        const animate = () => {
            currentX += (targetX - currentX) * SPEED;
            currentY += (targetY - currentY) * SPEED;

            el.style.setProperty("--bg-x", `${currentX.toFixed(2)}px`);
            el.style.setProperty("--bg-y", `${currentY.toFixed(2)}px`);

            raf = requestAnimationFrame(animate);
        };

        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            // -1..1
            const dx = (e.clientX - cx) / (rect.width / 2);
            const dy = (e.clientY - cy) / (rect.height / 2);

            targetX = Math.max(-1, Math.min(1, dx)) * MAX;
            targetY = Math.max(-1, Math.min(1, dy)) * MAX;
        };

        const onLeave = () => {
            targetX = 0;
            targetY = 0;
        };

        raf = requestAnimationFrame(animate);
        window.addEventListener("mousemove", onMove, { passive: true });
        el.addEventListener("mouseleave", onLeave);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
            el.style.removeProperty("--bg-x");
            el.style.removeProperty("--bg-y");
        };
    }, []);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        if (submitted) {
            setError((prevErrors) => ({
                ...prevErrors,
                [name]: "",
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm(formData, recaptchaToken);
        if (Object.keys(validationErrors).length !== 0) {
            setError(validationErrors);
            setSubmitted(false);
            return;
        }

        setIsSending(true);
        setError({});
        setSubmitted(false);
        setShowSuccessMessage(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            });

            if (res.ok) {
                setSubmitted(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    consent: false,
                });
                setShowSuccessMessage(true);
                setTimeout(() => setShowSuccessMessage(false), 5000);
            } else {
                const data = await res.json().catch(() => null);

                setError((prev) => ({
                    ...prev,
                    server:
                        t("form_submit_error")
                }));

                console.error("Błąd serwera:", data?.error || res.statusText);
            }
        } catch (err) {
            setError((prev) => ({
                ...prev,
                server:
                    t("network_error")
            }));
            console.error("Błąd sieci:", err);
        } finally {
            setIsSending(false);
            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
            setRecaptchaToken("");
        }
    };

    const validateForm = (data, recaptchaToken) => {
        const errors = {};

        if (!data.name.trim()) {
            errors.name = t("field_required");
        } else if (data.name.trim().length < 2) {
            errors.name = t("must_contain_two_letters");
        }

        if (!data.message.trim()) {
            errors.message = t("field_required");
        } else if (data.message.trim().length <= 20) {
            errors.message = t("must_contain");
        }

        if (!data.email.trim()) {
            errors.email = t("field_required");
        } else if (!isValidEmail(data.email)) {
            errors.email = t("invalid_email");
        }

        if (!data.consent) {
            errors.consent = t("consent");
        }

        if (!recaptchaToken) {
            errors.recaptcha = t("verify_recaptcha");
        }

        return errors;
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <div className='contact' id='contact' ref={contactRef}>
            <div ref={secRef} className={`contact_container open ${isSecHidden ? 'hidden' : ''}`}>
                <h1>
                    {t('contact')}
                </h1>

                {showSuccessMessage && (
                    <p className="success">{t("form_submitted_successfully")}</p>
                )}

                {errors.server && <p className="error">{errors.server}</p>}

                <form
                    autoComplete="on"
                    onSubmit={handleSubmit}
                    noValidate
                    className="form"
                >
                    <div className='label'>
                        <Image src={user} alt='motion'/>
                        <p>{t("name")}</p>
                    </div>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.name && <span className="error">{errors.name}</span>}

                    <div className='label'>
                        <Image src={mail} alt='motion'/>
                        <p>{t("email")}</p>
                    </div>
                    <label htmlFor="email">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.email && <span className="error">{errors.email}</span>}

                    <div className='label'>
                        <Image src={phone} alt='motion'/>
                        <p>{t("phone")}</p>
                    </div>
                    <label htmlFor="phone">
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="input"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </label>
                    <div className='label'>
                        <Image src={message} alt='motion'/>
                        <p>{t("message")}</p>
                    </div>
                    <label htmlFor="message">
                        <textarea
                            id="message"
                            name="message"
                            className="input"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                        />
                    </label>
                    {errors.message && <span className="error">{errors.message}</span>}

                    <div className="checkbox_container">
                        <label htmlFor="consent" className="checkbox">
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                            />
                            <span className="checkmark" />
                            <p>
                                {`${t("consent_text")} `}
                                <a href="/privacy_policy_page"
                                      className="link"
                                >
                                    {`${t("privacy_policy")}.`}
                                </a>
                            </p>
                        </label>
                    </div>
                    {errors.consent && (
                        <span className="error">{errors.consent}</span>
                    )}

                    {/* reCAPTCHA + cookies */}
                    <div className="recaptcha">
                        {isAccepted ? (
                            <ReCAPTCHA
                                sitekey={RECAPTCHA_SITE_KEY}
                                ref={recaptchaRef}
                                onChange={(token) => setRecaptchaToken(token || "")}
                                theme="light"
                            />
                        ) : (
                            <ConsentPlaceholder
                                text={t("accept_cookies_to_use_recaptcha")}
                                onAccept={acceptCookies}
                                className='consent_placeholder'
                            >
                                <button onClick={acceptCookies}>{t("accept")}</button>
                            </ConsentPlaceholder>
                        )}
                    </div>
                    {errors.recaptcha && (
                        <span className="error">{errors.recaptcha}</span>
                    )}

                    <div className="button">
                        <button type="submit" disabled={isSending}>
                            <div className="icon_send" />
                            {isSending ? t("sending") : t("send")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
