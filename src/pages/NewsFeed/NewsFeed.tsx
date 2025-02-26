
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
import { useEffect, useRef, useState } from "react";
import { clientMock } from "../../clients/newsApiClient";

type NewsFeedProps = {}

export default function NewsFeed({ }: NewsFeedProps) {
    const dispatch = useDispatch();
    // const clients = [NewsApiClient]; // We can add more clients here later
    // const { data,
    //     // isLoading,
    //     // isError,
    //     // isFetching,
    //     hasNextPage,
    //     fetchNextPage }
    //     = useAggregatedNews(clients);


    // const observer = useRef<IntersectionObserver | null>(null);
    // const lastArticleRef = useRef<HTMLDivElement | null>(null);
    // useEffect(() => {
    //     if (!lastArticleRef.current || !hasNextPage) return;
    //     observer.current = new IntersectionObserver(([entry]) => {
    //         if (entry.isIntersecting) {
    //             fetchNextPage();
    //         }
    //     });
    //     observer.current.observe(lastArticleRef.current);
    //     return () => observer.current?.disconnect();
    // }, [fetchNextPage, hasNextPage, data]);

    const [mockNews, setMockNews] = useState<Article[]>([]);

    const fetchNews = async () => {
        try {
            const articles: Article[] = (await clientMock()) as Article[];
            console.log("Fetched Articles:", articles);
            setMockNews(articles);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };
    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="news-feed">
            <h1 style={{ letterSpacing: "-0.19em", backgroundColor: "" }}>NF</h1>

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
                {/* {mockNews?.pages.map((page, pageIndex) =>
                    page.map((article, index) => (
                        <div key={article.id} ref={index === page.length - 1 ? lastArticleRef : null}>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </div>
                    ))
                )} */}

                {
                    mockNews.map((article, index) => (
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-article" key={article.id}>
                            <h2 className="title">{article.title}</h2>
                            <img src={article.imageUrl || ""} alt={article.title} className="image" />
                            <p className="desc">{article.description}</p>
                            <span className="link">
                                Read More
                            </span>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}