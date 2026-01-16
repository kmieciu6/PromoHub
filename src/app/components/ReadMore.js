"use client";

import React, { useMemo, useRef, useState } from "react";
import useTranslation from "../hooks/useTranslation"; // dopasuj ścieżkę jeśli trzeba
import "../styles/index.scss"

export function ReadMoreMore() {
    return null;
}

export default function ReadMore({
        children,
        moreLabel,
        lessLabel,
        scrollOnClose = true,
        scrollBehavior = "smooth",
        scrollOffset = 0,
    }) {
    const { t } = useTranslation("common");

    const [open, setOpen] = useState(false);

    const rootRef = useRef(null);
    const headingRef = useRef(null);

    const labels = useMemo(() => {
        return {
            more: moreLabel ?? t("read_more"), // klucze z translations
            less: lessLabel ?? t("read_less"),
        };
    }, [moreLabel, lessLabel, t]);

    const { main, more } = useMemo(() => {
        const arr = React.Children.toArray(children);

        const idx = arr.findIndex(
            (child) => React.isValidElement(child) && child.type === ReadMoreMore
        );

        if (idx === -1) return { main: arr, more: [] };

        return {
            main: arr.slice(0, idx),
            more: arr.slice(idx + 1),
        };
    }, [children]);

    const hasMore = more.length > 0;

    const mainWithHeadingRef = useMemo(() => {
        let injected = false;

        return main.map((node) => {
            if (
                !injected &&
                React.isValidElement(node) &&
                typeof node.type === "string" &&
                node.type.toLowerCase() === "h3"
            ) {
                injected = true;
                return React.cloneElement(node, { ref: headingRef });
            }
            return node;
        });
    }, [main]);

    const scrollBack = () => {
        const target = headingRef.current || rootRef.current;
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const top = window.scrollY + rect.top - (scrollOffset || 0);

        window.scrollTo({ top, behavior: scrollBehavior });
    };

    const onToggle = () => {
        setOpen((prev) => {
            const next = !prev;

            if (prev === true && next === false && scrollOnClose) {
                requestAnimationFrame(() => requestAnimationFrame(scrollBack));
            }

            return next;
        });
    };

    return (
        <div className="readMore" ref={rootRef}>
            <div className="readMoreMain">{mainWithHeadingRef}</div>

            {hasMore && (
                <>
                    <div className="readMoreContent" hidden={!open}>
                        {more}
                    </div>
                <div className='readMoreContainer'>

                    <button type="button" className="readMoreToggle" onClick={onToggle}>
                        {open ? labels.less : labels.more}
                    </button>
                </div>
                </>
            )}
        </div>
    );
}