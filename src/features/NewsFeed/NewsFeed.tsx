import { useRef } from "react";
import { useAggregatedNews } from "@/hooks";
import useInfiniteScrollObserver from "./hooks";
import ArticleCard, { ArticleCardSkeleton } from "../ArticleCard";
import "./style.css";

type newsFeedProps = {

}

export default function NewsFeed({ }: newsFeedProps) {
    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetching, // Track if new data is being fetched
    } = useAggregatedNews();


    // We use the useInfiniteScrollObserver custom hook to handle infinite scrolling
    const lastArticleRef = useRef<HTMLAnchorElement | null>(null);
    useInfiniteScrollObserver(lastArticleRef, fetchNextPage, hasNextPage, data);

    return (
        <div className="news-feed">

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
    );
}
