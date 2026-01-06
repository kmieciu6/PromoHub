import { ThemeProvider } from "next-themes";
import "./globals.scss";
import Loader from "./components/Loader";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { CookiesConsentProvider } from "@/app/context/CookiesConsentContext";
import CookieBanner from "@/app/components/CookieBanner";

export const metadata = {
    title: "PromoHub",
    description: "Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <CookiesConsentProvider>
                        <Loader>
                            <Header/>
                            <CookieBanner/>
                            <main>
                               {children}
                            </main>
                            <Footer/>
                        </Loader>
                    </CookiesConsentProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}