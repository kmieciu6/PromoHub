"use client";

import { useTheme } from "next-themes";
import { MdOutlineBrightnessAuto, MdLightMode, MdDarkMode } from "react-icons/md";
import {useEffect, useState} from "react";

export default function ThemeToggle() {
    const [mounted, setMounted]   = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() =>
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true),
[]);

    const modes = ["system", "light", "dark"];
    const toggleTheme = () => {
        const idx = (modes.indexOf(theme) + 1) % modes.length;
        setTheme(modes[idx]);
    };

    let Icon = null;
    if (mounted) {
        Icon = {
            system: MdOutlineBrightnessAuto,
            light: MdLightMode,
            dark: MdDarkMode,
        }[theme];
    }

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {mounted && Icon && <Icon/>}
        </button>
    );
}