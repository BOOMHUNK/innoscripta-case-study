import ClientFactory from "../clientFactory";
import fetchAuthorsHandler from "./fetchAuthorsHandler";
import fetchCategoriesHandler from "./fetchCategoriesHandler";
import fetchPostsHandler from "./fetchPostsHandler";
import fetchSourcesHandler from "./fetchSourcesHandler";


// Create an API client for Event Registry using the improved structure
const client = new ClientFactory(
  "newsApi",
  "https://eventregistry.org/api/v1",
  import.meta.env.VITE_NEWS_API_KEY as string,
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
