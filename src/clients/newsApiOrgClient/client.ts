import { newsApiOrgBaseUrl, newsApiOrgKey } from "@/configs";
import ClientFactory from "../clientFactory";
import { fetchCategoriesHandler, fetchPostsHandler, fetchSourcesHandler } from "./fetchHandlers";


// Create an API client for Event Registry using the improved structure
const client = new ClientFactory(
  "newsApiOrg",
  newsApiOrgBaseUrl,
  newsApiOrgKey,
  "/everything",
  fetchPostsHandler,

  undefined,
  fetchCategoriesHandler,

  "/top-headlines/sources",
  fetchSourcesHandler,
);

export default client;