import axios from "axios";
import { FetchPostsHandler, Tag } from "@/types";
import { EachApiPageSize } from "@/configs";
import { GuardianPosts_Request, GuardianPosts_Response } from "./dto";

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

  if (filterAuthors.length > 0) return []; // this api doesn't support filtering by author
  if (filterSources?.length > 0 && !filterSources.some(source => source.displayName.toLowerCase() == "the guardian")) return []; // this api is for the guardian as a source only

  const headers = {
    Accept: "application/json",
  };

  // build request data
  const reqData: GuardianPosts_Request = {
    ...((queryString?.trim() || "") && ({ q: queryString })),
    page: pageNumber,
    "page-size": pageSize,

    ...(filterDateStart && ({ "from-date": filterDateStart })),
    ...(filterDateEnd && ({ "to-date": filterDateEnd })),
    ...(Categories.length > 0 && ({ section: Categories.join("|") })),

    "order-by": "newest",
    "show-fields": "trailText,thumbnail,short-url",
    "show-references": "author",
    "api-key": (apiKey || "test"),
  }

  const params = new URLSearchParams({
    ...reqData,
    "page-size": String(pageSize),
    page: String(pageNumber),
  });


  const url = `${baseUrl + endpoint}?${params.toString()}`;
  const response = await axios.get<GuardianPosts_Response>(url, { headers });
  if (!Array.isArray(response.data?.response.results)) return [];

  const transformedResults = response.data.response.results.map((article) => {
    const authors = (article.references && article.references.length > 0 && ([{ displayName: article.references[0].id.split("/")[1], clientsCompatibleValues: { [clientName]: [article.references[0].id] } }] as Tag[])) || [];
    // we used sectionName as category for this api we could use tags also
    const categories = (article.sectionName && [{ displayName: article.sectionName, clientsCompatibleValues: { [clientName]: [article.sectionId] } }] || []);
    const source = { displayName: "The Guardian", clientsCompatibleValues: { [clientName]: ["the guardian"] } } as Tag;

    return ({
      sourceClient: clientName,
      id: article.id,
      title: article.webTitle,
      description: article.fields?.trailText?.slice(0, 200) || "",
      content: article.fields?.trailText || "",
      url: article.webUrl,
      imageUrl: article.fields?.thumbnail || "",
      publishedAt: article.webPublicationDate,

      categories: categories,
      authors: authors,
      source: source,
    })
  });


  return transformedResults;

}; export default fetchPostsHandler;
