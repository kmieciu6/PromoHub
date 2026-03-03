function scrollToSibling(wrapRef, dir) {
    const wrap = wrapRef?.current;
    if (!wrap) return;

    // Bierzemy tylko sekcje najwyższego poziomu
    const sections = Array.from(
        document.querySelectorAll("section[id], div[id]")
    ).filter((el) => el.offsetParent !== null); // tylko widoczne

    const i = sections.findIndex((n) => n === wrap);
    if (i === -1) return;

    const target = sections[i + dir];
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ProjectsEscapeButtonBack({ wrapRef }) {
    return (
        <button
            type="button"
            className="projects_escapeBtn up"
            onClick={() => scrollToSibling(wrapRef, -1)}
            aria-label="Previous section"
        >
            ↑
        </button>
    );
}

export function ProjectsEscapeButtonNext({ wrapRef }) {
    return (
        <button
            type="button"
            className="projects_escapeBtn down"
            onClick={() => scrollToSibling(wrapRef, +1)}
            aria-label="Next section"
        >
            ↓
        </button>
    );
}