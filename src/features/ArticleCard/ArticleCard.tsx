import timeAgo from "@/utils/timeAgo";
import { forwardRef } from "react"
import "./style.css";
import { Tagchip } from "@/components";
import { useDispatch } from "react-redux";
import { setCategories } from "@/store/newsSlice";

type ArticleCardProps = {
    article: Article;
}

const ArticleCard = forwardRef<HTMLAnchorElement, ArticleCardProps>(({ article }, ref) => {
    const dispatch = useDispatch();

    return (
        <a className="news-article" href={article.url} target="_blank" rel="noopener noreferrer" ref={ref}>
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
                                <Tagchip key={category} value={category} onClick={() => dispatch(setCategories([category]))} />
                            )
                        ))
                    }
                </span>
            }
        </a>
    )
})

export default ArticleCard;