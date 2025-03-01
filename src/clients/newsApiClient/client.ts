import { newsApi_baseUrl, newsApi_key } from "@/configs";
import ClientFactory from "../clientFactory";
import { fetchAuthorsHandler, fetchCategoriesHandler, fetchPostsHandler, fetchSourcesHandler } from "./fetchHandlers";



// Create an API client for Event Registry using the improved structure
const client = new ClientFactory(
  "newsApi",
  newsApi_baseUrl,
  newsApi_key,
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
