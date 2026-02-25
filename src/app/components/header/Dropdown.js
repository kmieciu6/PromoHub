import { useEffect, useId, useMemo, useRef, useState } from 'react';

function useIsTouchDevice() {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia?.('(hover: none) and (pointer: coarse)');
        const update = () => setIsTouch(!!mq?.matches);
        update();
        mq?.addEventListener?.('change', update);
        return () => mq?.removeEventListener?.('change', update);
    }, []);

    return isTouch;
}

export default function Dropdown({
    label,                  // string albo JSX
    items = [],             // [{ id, label, onSelect, href, disabled }]
    closeOnSelect = true,
    closeOnOutsideClick = true,
    closeOnEsc = true,
    autoCloseMs = 0,        // 0 = wyłączone
    forceClose,             // zmiana wartości => zamknij (np. z headera)
    className = '',
    menuClassName = '',
    buttonClassName = '',
    isMobileOnlyClick = true, // true => na dotyk/telefon klik; na desktop hover
    onAfterSelect
}) {
    const uid = useId();
    const rootRef = useRef(null);
    const closeTimerRef = useRef(null);
    const autoCloseRef = useRef(null);

    const isTouch = useIsTouchDevice();
    const hoverEnabled = useMemo(() => {
        if (!isMobileOnlyClick) return false;
        return !isTouch;
    }, [isMobileOnlyClick, isTouch]);

    const [open, setOpen] = useState(false);

    // const safeClose = () => setOpen(false);
    const safeOpen = () => setOpen(true);

    const scheduleClose = (delay = 120) => {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = setTimeout(() => setOpen(false), delay);
    };

    const cancelScheduledClose = () => {
        clearTimeout(closeTimerRef.current);
    };

    // Outside click
    useEffect(() => {
        if (!closeOnOutsideClick) return;

        const onDown = (e) => {
            if (!rootRef.current) return;
            if (!rootRef.current.contains(e.target)) setOpen(false);
        };

        document.addEventListener('mousedown', onDown);
        document.addEventListener('touchstart', onDown);
        return () => {
            document.removeEventListener('mousedown', onDown);
            document.removeEventListener('touchstart', onDown);
        };
    }, [closeOnOutsideClick]);

    // ESC
    useEffect(() => {
        if (!closeOnEsc) return;

        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [closeOnEsc]);

    // Auto close
    useEffect(() => {
        clearTimeout(autoCloseRef.current);
        if (open && autoCloseMs > 0) {
            autoCloseRef.current = setTimeout(() => setOpen(false), autoCloseMs);
        }
        return () => clearTimeout(autoCloseRef.current);
    }, [open, autoCloseMs]);

    // Force close (np. z Headera na mobilkach)
    useEffect(() => {
        setOpen(false);
         
    }, [forceClose]);

    const onTriggerClick = () => {
        if (!hoverEnabled) setOpen((v) => !v);
    };

    const onItemSelect = async (item, e) => {
        if (item.disabled) return;

        // 1) NAJPIERW onSelect (jeśli jest)
        if (typeof item.onSelect === 'function') {
            await item.onSelect(e, item);
            if (closeOnSelect) setOpen(false);
            if (typeof onAfterSelect === "function") onAfterSelect();
            return; // <- klucz: nie idź dalej do href
        }

        // 2) dopiero fallback na href
        if (item.href) {
            // eslint-disable-next-line react-hooks/immutability
            window.location.href = item.href;
        }

        if (closeOnSelect) setOpen(false);
        if (typeof onAfterSelect === "function") onAfterSelect();
    };

    return (
        <div
            ref={rootRef}
            className={`dropdown ${className}`}
            onMouseEnter={hoverEnabled ? () => { cancelScheduledClose(); safeOpen(); } : undefined}
            onMouseLeave={hoverEnabled ? () => scheduleClose(140) : undefined}
        >
            <button
                type="button"
                className={`dropdown__toggle ${buttonClassName}`}
                onClick={onTriggerClick}
                aria-expanded={open}
                aria-controls={`dropdown-menu-${uid}`}
            >
                {label}
            </button>

            <div
                id={`dropdown-menu-${uid}`}
                className={`dropdown__menu ${menuClassName} ${open ? 'is-open' : ''}`}
            >
                <ul className="dropdown__list">
                    {items.map((item) => (
                        <li key={item.id} className="dropdown__item" >
                            <button
                                type="button"
                                className={`dropdown__option ${item.disabled ? 'is-disabled' : ''}`}
                                onClick={(e) => onItemSelect(item, e)}
                                disabled={item.disabled}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}