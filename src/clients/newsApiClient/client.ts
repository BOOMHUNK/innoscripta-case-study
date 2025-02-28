
import { newsApiBaseUrl, newsApiKey } from "@/utils";
import ClientFactory from "../clientFactory";
import { fetchAuthorsHandler, fetchCategoriesHandler, fetchPostsHandler, fetchSourcesHandler } from "./fetchHandlers";



// Create an API client for Event Registry using the improved structure
const client = new ClientFactory(
  "newsApi",
  newsApiBaseUrl,
  newsApiKey,
  "/article/getArticles",
  fetchPostsHandler,
  "/suggestCategoriesFast",
  fetchCategoriesHandler,
  "/suggestSourcesFast",
  fetchSourcesHandler,
  "/suggestAuthorsFast",
  fetchAuthorsHandler
);

export default client;
