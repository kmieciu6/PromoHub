import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const [mounted, setMounted]   = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() =>
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true),
[]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    let Icon = theme === "dark" ? MdDarkMode : MdLightMode;
    if (!mounted) return null;

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <Icon/>
        </button>
    );
}