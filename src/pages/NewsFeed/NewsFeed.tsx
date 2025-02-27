import { useDispatch } from "react-redux";
import {
    setQueryString,
    setCategories,
    setSources,
    setAuthors,
    setStartDate,
    setEndDate,
} from "../../store/newsSlice";

import "./style.css";
import { NewsApiClient } from "../../clients";
import { useAggregatedNews } from "../../hooks";
import { useEffect, useRef } from "react";
import timeAgo from "../../utils/timeAgo";

export default function NewsFeed() {
    const dispatch = useDispatch();
    const clients = [NewsApiClient]; // We can add more clients here later

    const {
        data,
        hasNextPage,
        fetchNextPage,
        isFetching, // 🚀 Track if new data is being fetched
    } = useAggregatedNews(clients);

    const observer = useRef<IntersectionObserver | null>(null);
    const lastArticleRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if (!lastArticleRef.current || !hasNextPage) return;
        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                console.log("Fetching next page...");
                fetchNextPage();
            }
        });
        observer.current.observe(lastArticleRef.current);
        return () => observer.current?.disconnect();
    }, [fetchNextPage, hasNextPage, data]);

    return (
        <div className="news-feed">
            <h1 style={{ letterSpacing: "-0.19em" }}>NF</h1>

            {/* Filter Inputs */}
            <div className="filters">
                <input type="text" placeholder="Search by keyword" onChange={(e) => dispatch(setQueryString(e.target.value))} />
                <input type="text" placeholder="Filter by categories" onChange={(e) => dispatch(setCategories(e.target.value.split(",")))} />
                <input type="text" placeholder="Filter by sources" onChange={(e) => dispatch(setSources(e.target.value.split(",")))} />
                <input type="text" placeholder="Filter by authors" onChange={(e) => dispatch(setAuthors(e.target.value.split(",")))} />
                <input type="date" placeholder="Start Date" onChange={(e) => dispatch(setStartDate(e.target.value))} />
                <input type="date" placeholder="End Date" onChange={(e) => dispatch(setEndDate(e.target.value))} />
            </div>

            {/* News Articles */}
            <div className="container">
                {data?.pages.map((page) =>
                    page.map((article, index) => (
                        <a className="news-article" href={article.url} target="_blank" rel="noopener noreferrer" key={article.id} ref={index === page.length - 1 ? lastArticleRef : null}>
                            <img onError={(e) => e.currentTarget.src = "/images/fallback-img.jpg"} src={article.imageUrl || ""} alt={article.title} className={`image ${!article.imageUrl ? "skeleton" : ""}`} />

                            <div className="content">
                                <h2 className={`title ${!article.title ? "skeleton" : ""}`}>{article.title || ""}</h2>
                                <p className={`desc ${!article.description ? "skeleton" : ""}`}>{article.description || ""}</p>
                                <span className="source"> {article.source}</span>
                                <div className="dateAndAuthor">
                                    <span className={`date ${!article.publishedAt ? "skeleton" : ""}`}> {article.publishedAt && timeAgo(article.publishedAt)}</span>
                                    <span className={`author ${!article.authors ? "skeleton" : ""}`}>
                                        <img src="/images/author.png" width={20} height={20} /> {article.authors && article.authors.length > 0 ? article.authors.join(", ") : "Unknown"}
                                    </span>
                                </div>
                            </div>
                            <span className="separator"></span>
                            {
                                article.category && article.category.length > 0 && <span className="category-container">
                                    {
                                        article.category.map((category, index) => (
                                            index < 4 && category !== "dmoz" && (
                                                <button key={category} onClick={(e) => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                }}
                                                    className="category">{category}
                                                </button>
                                            )
                                        ))
                                    }
                                </span>
                            }
                        </a>
                    ))
                )}

                {/*  Optimistic UI: Skeleton Placeholders When Fetching New Data */}
                {isFetching && Array.from({ length: 10 }).map((_, i) => (
                    <div className="news-article skeleton" key={`skeleton-${i}`}>
                        <div className="image skeleton"></div>
                        <div className="content">
                            <h2 className="title skeleton"></h2>
                            <p className="desc skeleton"></p>
                            <span className="source"></span>
                            <div className="dateAndAuthor">
                                <span className="date skeleton"></span>
                                <span className="author skeleton"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
