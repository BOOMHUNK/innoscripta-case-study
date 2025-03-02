import { Article, Tag } from "@/types";
import { forwardRef, memo, useCallback } from "react";
import { Tagchip } from "@/components";
import { useDispatch } from "react-redux";
import { setCategories } from "@/store/filtersSlice";
import { calculateTimeAgo } from "@/utils";
import "./style.css";

type ArticleCardProps = {
    article: Article;
};



/**
 * The `ArticleCard` component is the main component responsible for rendering a card-like UI element for displaying each news article. 
 * - It takes an `article` prop of type `Article` and renders the article's title, description, source, publication date, authors, and categories (if any).
 * - The component also handles cases where certain article data is missing by rendering placeholder content.
 */
const ArticleCard = forwardRef<HTMLAnchorElement, ArticleCardProps>(
    ({ article }, ref) => {
        const dispatch = useDispatch();

        // Stable callback for image error handling
        const handleImageError = useCallback(
            (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src = "/images/fallback-img.jpg";
            },
            []
        );

        // Stable callback for Tagchip click event
        const handleTagClick = useCallback(
            (category: Tag) => {
                dispatch(setCategories([category]));
            },
            [dispatch]
        );

        return (
            <a
                title={article.title}
                aria-label={article.title}
                aria-description={article.description}
                className="news-article"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                ref={ref}
            >
                <img
                    loading="lazy"
                    onError={handleImageError}
                    src={article.imageUrl || ""}
                    alt={article.title}
                    className={`image ${!article.imageUrl ? "skeleton" : ""}`}
                />

                <div className="content">
                    <h2 className={`title ${!article.title ? "skeleton" : ""}`}>
                        {article.title || ""}
                    </h2>
                    <p className={`desc ${!article.description ? "skeleton" : ""}`}>
                        {article.description || ""}
                    </p>
                    <span className="source">{article.source?.displayName}</span>
                    <div className="dateAndAuthor">
                        <span className={`date ${!article.publishedAt ? "skeleton" : ""}`}>
                            {article.publishedAt && calculateTimeAgo(article.publishedAt)}
                        </span>
                        <span className={`author ${!article.authors ? "skeleton" : ""}`}>
                            <img src="/images/author.png" width={20} height={20} />{" "}
                            {article.authors && article.authors.length > 0
                                ? article.authors.map((a) => a.displayName).join(", ")
                                : "Unknown"}
                        </span>
                    </div>
                </div>
                <span className="separator"></span>
                {article.categories && article.categories.length > 0 && (
                    <span className="category-container hidden-scrollbar">
                        {article.categories.slice(0, 4).map((category) => (
                            <Tagchip
                                key={category.displayName}
                                value={category}
                                onClick={() => handleTagClick(category)}
                            />
                        ))}
                    </span>
                )}
            </a>
        );
    }
);

export default memo(ArticleCard);
