import { useEffect, useRef } from "react";



export default function useInfiniteScrollObserver(lastArticleRef: React.MutableRefObject<HTMLAnchorElement | null>, fetchNextPage: (...args: any[]) => any, hasNextPage: boolean | undefined, data: any) {

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (!lastArticleRef.current || !hasNextPage) return;
        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                fetchNextPage();
            }
        });
        observer.current.observe(lastArticleRef.current);
        return () => observer.current?.disconnect();
    }, [fetchNextPage, hasNextPage, data, lastArticleRef]);
    return observer.current;
}