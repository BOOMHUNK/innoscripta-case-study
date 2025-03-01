import { useRef, useState } from "react";
import { useAggregatedNews, useIsAnyFilterActive } from "@/hooks";
import useInfiniteScrollObserver from "./hooks";
import ArticleCard, { ArticleCardSkeleton } from "../ArticleCard";
import "./style.css";
import { LuSettings2 } from "react-icons/lu";
import ModalFilters from "../ModalFilters";

type newsFeedProps = {

}

export default function NewsFeed({ }: newsFeedProps) {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetching, // Track if new data is being fetched
    } = useAggregatedNews();

    const isAnyFiltersActive = useIsAnyFilterActive();
    // We use the useInfiniteScrollObserver custom hook to handle infinite scrolling
    const lastArticleRef = useRef<HTMLAnchorElement | null>(null);
    useInfiniteScrollObserver(lastArticleRef, fetchNextPage, hasNextPage, data);

    return (
        <>
            <div className="news-feed">
                <div className="your-highlights" style={{ opacity: isAnyFiltersActive ? 0 : 1, pointerEvents: isAnyFiltersActive ? "none" : "initial" }}>
                    <h2>Your Highlights</h2>
                    <LuSettings2 onClick={() => setIsFiltersOpen(true)} className="preferences-button" />
                </div>
                {/* News Articles */}
                <div className="container">
                    {data?.pages.map((page) =>
                        page.map((article, index) => (
                            <ArticleCard key={article.id} article={article} ref={index === page.length - 1 ? lastArticleRef : null} />
                        ))
                    )}

                    {/* Skeleton Placeholders When Fetching New Data */}
                    {isFetching && Array.from({ length: 10 }).map((_, i) => (
                        <ArticleCardSkeleton key={`skeleton-${i}`} />
                    ))}
                </div>
            </div>
            <ModalFilters isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} isPreferencesMenu />
        </>
    );
}
