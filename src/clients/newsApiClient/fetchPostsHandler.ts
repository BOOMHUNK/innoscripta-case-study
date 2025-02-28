import axios from "axios";
import { NewsApiPosts_Request, NewsApiPosts_Response } from "./dto";
import { FetchPostsHandler, Tag } from "@/types";



const fetchPostsHandler: FetchPostsHandler = async (
  clientName,
  endpoint,
  apiKey,

  queryString = "",
  pageSize = 10,
  pageNumber = 1,
  filterDateStart,
  filterDateEnd,
  filterCategories = [],
  filterSources = [],
  filterAuthors = [],
) => {
  //   console.log("req data", data);
  const body: NewsApiPosts_Request = {

    action: "getArticles",
    articlesSortBy: "date",
    articlesSortByAsc: false,
    resultType: "articles",
    forceMaxDataTimeWindow: 31,
    includeArticleCategories: true,
    includeArticleImage: true,
    includeArticleAuthors: true,
    lang: ["eng"],
    keywordOper: "or",

    keyword: queryString?.trim()?.split(' ') || "",
    dateStart: filterDateStart,
    dateEnd: filterDateEnd,
    articlesPage: pageNumber,
    articlesCount: pageSize,
    categoryUri: filterCategories,
    sourceUri: filterSources,
    authorUri: filterAuthors,
    apiKey,
  };
  const response = await axios.post<NewsApiPosts_Response>(endpoint, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  //   console.log("raw data", response.data);
  if (!response.data.articles || !Array.isArray(response.data.articles.results)) return [];

  return response.data.articles.results.map((article) => ({
    sourceClient: clientName,
    id: article.uri,
    title: article.title,
    description: article.body?.slice(0, 200) || "",
    content: article.body || "",
    url: article.url,
    imageUrl: article.image || "",
    publishedAt: article.dateTime,

    source: article.source && ({ displayName: article.source?.title, clientsCompatibleValue: { [clientName]: article.source?.uri } } as Tag),
    authors: article.authors?.flatMap(item => ({ displayName: item.name, clientsCompatibleValue: { [clientName]: item.uri } } as Tag)) || [],
    categories: article.categories?.flatMap(item => ({ displayName: item.label, clientsCompatibleValue: { [clientName]: item.uri } } as Tag)) || [],
  }));

};
export default fetchPostsHandler;
