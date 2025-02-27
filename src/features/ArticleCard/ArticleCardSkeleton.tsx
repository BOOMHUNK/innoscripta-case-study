import { forwardRef } from "react"
import "./style.css";

type ArticleCardSkeletonProps = {
}

const ArticleCardSkeleton = forwardRef<HTMLDivElement, ArticleCardSkeletonProps>(({ }, ref) => {
    return (
        <div className="news-article skeleton" ref={ref}>
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
    )
})

export default ArticleCardSkeleton;