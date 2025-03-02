import { forwardRef } from "react"
import "./style.css";

type ArticleCardSkeletonProps = {
}
/**
 * The `ArticleCardSkeleton` component renders a skeleton UI for an article card.
 * - It is used to provide a loading state for the article card before the actual content is available.
 */
const ArticleCardSkeleton = forwardRef<HTMLDivElement, ArticleCardSkeletonProps>(({ }, ref) => {
    return (
        <div className="news-article skeleton" ref={ref}>
            <div className="image skeleton"></div>
            <div className="content">
                <h2 className="title skeleton"></h2>
                <p className="desc skeleton"></p>
                <span className="source skeleton"></span>
                <div className="dateAndAuthor">
                    <span className="date skeleton"></span>
                    <span className="author skeleton"></span>
                </div>
            </div>
        </div>
    )
})

export default ArticleCardSkeleton;