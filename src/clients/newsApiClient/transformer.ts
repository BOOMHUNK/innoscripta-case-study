import { NewsApiResponse } from "./dto";

// Transformer function to map API response to our Article type
const transformer: TransformerFunction<NewsApiResponse> = (data) => {
  if (!data.articles || !Array.isArray(data.articles.results)) return [];

  return data.articles.results.map((article) => ({
    id: article.uri,
    title: article.title,
    description: article.body?.slice(0, 200) || "",
    content: article.body || "",
    url: article.url,
    imageUrl: article.image || "",
    source: article.source?.title || "Unknown",
    author: article.authors?.map((a) => a.name).join(", ") || "Unknown",
    publishedAt: article.dateTime,
    category: article.categories?.map((c) => c.label) || [],
  }));
};

export default transformer;
