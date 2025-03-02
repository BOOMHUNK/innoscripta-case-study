import axios from "axios";
import { NewsApiPosts_Request, NewsApiPosts_Response } from "./dto";
import { FetchPostsHandler, Tag } from "@/types";
import { convertCategoryLabelToDisplayName } from "../utils";
import {  MakeTagsArrayUnique } from "@/utils";
import { EachApiPageSize } from "@/configs";




const fetchPostsHandler: FetchPostsHandler = async (
  clientName,
  baseUrl,
  endpoint,
  apiKey,

  queryString = "",
  pageSize = EachApiPageSize,
  pageNumber = 1,
  filterDateStart,
  filterDateEnd,
  filterCategories = [],
  filterSources = [],
  filterAuthors = [],
) => {
  let Categories = filterCategories.flatMap(item => item.clientsCompatibleValues[clientName] ?? [])
  if (Categories.length == 0) Categories = Categories.concat(filterCategories.flatMap(item => item.displayName) ?? []);

  let Sources = filterSources.flatMap(item => item.clientsCompatibleValues[clientName] ?? [])
  if (Sources.length == 0) Sources = Sources.concat(filterSources.flatMap(item => item.displayName) ?? []);

  let Authors = filterAuthors.flatMap(item => item.clientsCompatibleValues[clientName] ?? [])
  if (Authors.length == 0) Authors = Authors.concat(filterAuthors.flatMap(item => item.displayName) ?? []);

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
    categoryUri: Categories,
    sourceUri: Sources,
    authorUri: Authors,
    apiKey,
  };
  const response = await axios.post<NewsApiPosts_Response>(baseUrl + endpoint, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!response.data.articles || !Array.isArray(response.data.articles.results)) return [];

  return response.data.articles.results.map((article) => {
    const categories = article.categories?.flatMap(item => ({ displayName: convertCategoryLabelToDisplayName(item.label), clientsCompatibleValues: { [clientName]: [item.uri] } } as Tag)) || [];

    const authors = article.authors?.flatMap(item => ({ displayName: item.name, clientsCompatibleValues: { [clientName]: [item.uri] } } as Tag)) || [];

    const source = article.source && ({ displayName: article.source?.title, clientsCompatibleValues: { [clientName]: [article.source?.uri] } } as Tag);

    return ({
      sourceClient: clientName,
      id: article.uri,
      title: article.title,
      description: article.body?.slice(0, 200) || "",
      content: article.body || "",
      url: article.url,
      imageUrl: article.image || "",
      publishedAt: article.dateTimePub,

      categories: MakeTagsArrayUnique(categories),
      authors: authors,
      source: source,
    })
  });

};
export default fetchPostsHandler;
