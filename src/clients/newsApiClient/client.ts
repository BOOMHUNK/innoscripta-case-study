import ClientFactory from "../clientFactory";
import fetchCategoriesHandler from "./fetchCategoriesHandler";
import fetchPostsHandler from "./fetchPostsHandler";


// Create an API client for Event Registry using the improved structure
const client = new ClientFactory(
  "newsApi",
  "https://eventregistry.org/api/v1",
  import.meta.env.VITE_NEWS_API_KEY as string,
  "/article/getArticles",
  fetchPostsHandler,
  "/suggestCategoriesFast",
  fetchCategoriesHandler

  //  ToDo: add other tags handlers
);

export default client;
