import axios, { AxiosResponse } from "axios";
import { NewsApiOrgHeadlines_Request, NewsApiOrgPosts_Request, NewsApiOrgPosts_Response } from "./dto";
import { FetchPostsHandler, Tag } from "@/types";
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
  // first we try to put in compatible id of tags
  let Categories = filterCategories.flatMap(item => item.clientsCompatibleValues[clientName] ?? [])
  // if there's not any, then we just put the display name so it may resolve to a result and if not, it doesnt return irrelevant results.
  if (Categories.length == 0) Categories = Categories.concat(filterCategories.flatMap(item => item.displayName) ?? []);

  let Sources = filterSources.flatMap(item => item.clientsCompatibleValues[clientName] ?? [])
  if (Sources.length == 0) Sources = Sources.concat(filterSources.flatMap(item => item.displayName) ?? []);

  let Authors = filterAuthors.flatMap(item => item.clientsCompatibleValues[clientName] ?? [])
  if (Authors.length == 0) Authors = Authors.concat(filterAuthors.flatMap(item => item.displayName) ?? []);

  if (Authors.length > 0) return []; // this api doesn't support filtering by author
  let response: AxiosResponse<NewsApiOrgPosts_Response, any>;
  const headers = {
    Accept: "application/json",
    ["X-Api-Key"]: apiKey
  };

  // if sources or q was available use default endpoint
  // if there was no date filter provided use /top-headlines endpoint else return []  
  if ((Sources.length > 0 || queryString?.trim()) && Categories?.length == 0) {
    // if ((queryString?.trim() || "") == "") return [];
    // build request data
    const reqData: NewsApiOrgPosts_Request = {
      ...((queryString?.trim() || "") && { q: queryString }),
      pageSize: pageSize,
      page: pageNumber,
      sortBy: "publishedAt",
      searchIn: "title",
      language: "en",
      ...(filterDateStart && { from: filterDateStart }),
      ...(filterDateEnd && { to: filterDateEnd }),
      ...(Sources.length > 0 && { sources: Sources.join(",") }),
    }
    const params = new URLSearchParams({
      ...reqData,
      pageSize: String(pageSize),
      page: String(pageNumber),
    });

    const url = `${baseUrl + endpoint}?${params.toString()}`;

    response = await axios.get<NewsApiOrgPosts_Response>(url, {
      headers,
    });
  } else {
    if (filterDateStart || filterDateEnd) {
      return []; // This endpoint doesn't support filtering by date
    } else {

      if (Sources.length > 0 && Sources.length > 0) return [];  // can't use both categories and sources in this api
      // use headlines endpoint
      // build headlines request data
      const reqData: NewsApiOrgHeadlines_Request = {
        q: queryString || "",
        pageSize: pageSize,
        page: pageNumber,
        language: "en",
        sortBy: "popularity",
        searchIn: "title",
        ...(Categories?.length > 0 && { category: Categories[0] as keyof NewsApiOrgHeadlines_Request["category"] }), // can't filter based on multiple categories in this api
        ...(Sources.length > 0 && { sources: Sources.join(",") }),
      }
      const params = new URLSearchParams({
        ...reqData,
        pageSize: String(pageSize),
        page: String(pageNumber),
      });

      const url = `${baseUrl + "/top-headlines"}?${params.toString()}`;

      response = await axios.get<NewsApiOrgPosts_Response>(url, {
        headers,
      });
    }
  }

  if (response.data.status != "ok") return [];

  if (!response.data.articles || !Array.isArray(response.data.articles)) return [];

  return response.data.articles.map((article) => {
    const authors = (article.author && ([{ displayName: article.author, clientsCompatibleValues: { [clientName]: [article.author] } }] as Tag[])) || [];
    const source = (article.source && ({ displayName: article.source.name, clientsCompatibleValues: { [clientName]: [article.source.id || article.source.name] } } as Tag)) || {};

    // return the transformed result (array of articles)
    return ({
      sourceClient: clientName,
      id: article.url,
      title: article.title,
      description: article.description?.slice(0, 200) || "",
      content: article.content || "",
      url: article.url,
      imageUrl: article.urlToImage || "",
      publishedAt: article.publishedAt,

      categories: [] as Tag[],
      authors: authors,
      source: source,
    })
  });

}; export default fetchPostsHandler;
