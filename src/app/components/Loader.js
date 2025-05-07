"use client";
import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            const handleLoad = () => setIsLoading(false);
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (!isLoading) return null;

    return (
        <div className="loaderWrapper">
            <div className="loader"></div>
        </div>
    );
}