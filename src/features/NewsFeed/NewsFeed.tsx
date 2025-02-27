import { useRef } from "react";
import { useAggregatedNews } from "@/hooks";
import useInfiniteScrollObserver from "./hooks";
import "./style.css";
import ArticleCard, { ArticleCardSkeleton } from "../ArticleCard";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";




type newsFeedProps = {

}

export default function NewsFeed({ }: newsFeedProps) {
    // Get the clients set from Redux state
    const clients = useSelector((state: RootState) => state.news.clients);

    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetching, // Track if new data is being fetched
    } = useAggregatedNews(clients);


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
