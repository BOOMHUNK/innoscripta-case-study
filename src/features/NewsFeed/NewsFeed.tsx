import { useState, useEffect, useRef } from "react";
import { useAggregatedNews, useIsAnyFilterActive } from "@/hooks";
import ArticleCard, { ArticleCardSkeleton } from "../ArticleCard";
import "./style.css";
import { LuSettings2 } from "react-icons/lu";
import ModalFilters from "../ModalFilters";
import { useWindowVirtualizer } from "@tanstack/react-virtual";

type NewsFeedProps = {};

export default function NewsFeed({ }: NewsFeedProps) {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const { data, hasNextPage, fetchNextPage, isFetching } = useAggregatedNews();
    const isAnyFiltersActive = useIsAnyFilterActive();

    // Flatten paginated data into a single articles array
    const articles = data?.pages.flat() || [];

    const ITEM_HEIGHT = 760; // fixed height per ArticleCard (including margin)
    const BUFFER = 5; // number of extra items above and below the viewport

    // Setup window virtualizer based on window scroll
    const virtualizer = useWindowVirtualizer({
        count: articles.length,
        estimateSize: () => ITEM_HEIGHT,
        overscan: BUFFER,
    });

    // Sentinel ref for triggering infinite scroll when near the bottom
    const sentinelRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!sentinelRef.current) return;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (hasNextPage && !isFetching) {
                    fetchNextPage();
                }
            }
        });
        observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, [hasNextPage, isFetching, fetchNextPage]);

    return (
        <>
            <div className="news-feed">
                <div
                    className="your-highlights"
                    style={{
                        opacity: isAnyFiltersActive ? 0 : 1,
                        pointerEvents: isAnyFiltersActive ? "none" : "initial",
                    }}
                >
                    <h2>Your Highlights</h2>
                    <LuSettings2
                        onClick={() => setIsFiltersOpen(true)}
                        className="preferences-button"
                    />
                </div>
                {/* Spacer container with your custom "container" class */}
                <div
                    className="container"
                    style={{
                        height: virtualizer.getTotalSize(),
                        position: "relative",
                        width: "100%",
                        maxWidth: "1200px"
                    }}
                >
                    {virtualizer.getVirtualItems().map((virtualItem) => (
                        <div
                            key={virtualItem.key}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                transform: `translateY(${virtualItem.start}px)`,
                            }}
                        >
                            <ArticleCard article={articles[virtualItem.index]} />
                        </div>
                    ))}
                    {/* Sentinel element for infinite scroll */}
                    <div
                        ref={sentinelRef}
                        style={{
                            position: "absolute",
                            top: virtualizer.getTotalSize(),
                            height: "1px",
                            width: "100%",
                        }}
                    />
                </div>
                {/* Skeleton Placeholders rendered below the virtualized content */}
                {isFetching && (
                    <div className="skeleton-container">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <ArticleCardSkeleton key={`skeleton-${i}`} />
                        ))}
                    </div>
                )}
            </div>
            <ModalFilters
                isFiltersOpen={isFiltersOpen}
                setIsFiltersOpen={setIsFiltersOpen}
                isPreferencesMenu
            />
        </>
    );
}
