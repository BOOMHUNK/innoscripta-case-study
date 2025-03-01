import { guardian_baseUrl, guardian_key, newsApiOrg_baseUrl, newsApiOrg_key } from "@/configs";
import ClientFactory from "../clientFactory";
import { fetchCategoriesHandler, fetchPostsHandler, fetchSourcesHandler } from "./fetchHandlers";


// Create an API client for Event Registry using the improved structure
const client = new ClientFactory(
  "guardian",
  guardian_baseUrl,
  guardian_key,
  "/search",
  fetchPostsHandler,

  "/sections",
  fetchCategoriesHandler,
);

export default client;