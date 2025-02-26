import axios from "axios";
import { NewsApiRequest, NewsApiResponse } from "./dto";
// const articles = await NewsApiClient.getMany(
//   "/article/getArticles",
//   {
//     action: "getArticles",
//     keyword: ["Tesla Inc"],
//     // keywordOper: "and",
//     lang: ["eng"],
//     // categoryUri: ["dmoz/Business"],
//     // sourceUri: ["bbc.co.uk"],
//     // authorUri: ["mark_mazzetti@nytimes.com"],

//     articlesSortBy: "date",
//     articlesSortByAsc: false,
//     resultType: "articles",
//     forceMaxDataTimeWindow: 31,
//     includeArticleCategories: true,
//     includeArticleImage: true,
//     includeArticleAuthors: true,

//     includeArticleConcepts: false,
//     includeArticleSocialScore: false,
//     includeArticleLocation: false,
//   },
//   10,
//   1,
// );

const fetcher: GetManyHandler<NewsApiResponse> = async (
  endpoint,
  apiKey,
  queryString = "",
  pageSize = 10,
  pageNumber = 1,
  filterCategories = [],
  filterSources = [],
  filterAuthors = [],
  filterDateStart,
  filterDateEnd
): Promise<NewsApiResponse> => {
  //   console.log("req data", data);
  const body: NewsApiRequest = {
   
    action: "getArticles",
    articlesSortBy: "date",
    articlesSortByAsc: false,
    resultType: "articles",
    forceMaxDataTimeWindow: 31,
    includeArticleCategories: true,
    includeArticleImage: true,
    includeArticleAuthors: true,
    lang: ["eng"],

    keyword: queryString,
    dateStart: filterDateStart,
    dateEnd: filterDateEnd,
    articlesPage: pageNumber,
    articlesCount: pageSize,
    categoryUri: filterCategories,
    sourceUri: filterSources,
    authorUri: filterAuthors,
    apiKey,
  };
  const response = await axios.post<NewsApiResponse>(endpoint, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  //   console.log("raw data", response.data);

  return response.data;
};
export default fetcher;
