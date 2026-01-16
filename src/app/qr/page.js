'use client'
import useTranslation from "@/app/hooks/useTranslation";

export default function QRRedirectPage() {
    const { t } = useTranslation('common')
    return (
        <html>
            <head>
                <meta httpEquiv="refresh" content="0; url=https://promohub.netlify.app" />
                <title>{t("redirects")}...</title>
            </head>
            <body>
                <p>{t("redirects")}...</p>
            </body>
        </html>
    );
}  