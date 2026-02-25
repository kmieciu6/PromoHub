

import {useCallback} from "react";

export function useFormattedText() {
    const f = useCallback((text) => {
        if (!text) return null;

        const regex = /<b>(.*?)<\/b>|<accent>(.*?)<\/accent>/g;

        const out = [];
        let last = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > last) {
                out.push(text.slice(last, match.index));
            }

            if (match[1]) {
                out.push(
                    <strong key={match.index}>
                        {match[1]}
                    </strong>
                );
            } else if (match[2]) {
                out.push(
                    <span key={match.index} className="accent">
                        {match[2]}
                    </span>
                );
            }

            last = regex.lastIndex;
        }

        if (last < text.length) {
            out.push(text.slice(last));
        }

        return out;
    }, []);

    return { f };
}