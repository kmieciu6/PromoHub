import { ThemeProvider } from "next-themes";
import "./globals.scss";
import Loader from "./components/Loader";
import { CookiesConsentProvider } from "@/app/context/CookiesConsentContext";
import CookieBanner from "@/app/components/CookieBanner";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Contact from "@/app/components/Contact";
import { Outfit } from "next/font/google";

export const metadata = {
    title: "Slase Systems",
    description: "We design and build advanced software systems, simulations, and digital solutions for industry and technology."
};

const outfit = Outfit({
    subsets: ["latin", "latin-ext"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    preload: true,
    variable: "--font-outfit"
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={outfit.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    <CookiesConsentProvider>
                        <Loader>
                            <Header/>
                            <CookieBanner/>
                            <main>
                               {children}
                            </main>
                            <Contact/>
                            <Footer/>
                        </Loader>
                    </CookiesConsentProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}