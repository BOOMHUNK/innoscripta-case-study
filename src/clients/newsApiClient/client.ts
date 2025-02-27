import ClientFactory from "../clientFactory";
import { NewsApiResponse } from "./dto";
import getManyhandler from "./getManyhandler";
import transformer from "./transformer";

// Create an API client for Event Registry using the improved structure
const client = new ClientFactory<NewsApiResponse>(
  "https://eventregistry.org/api/v1",
  import.meta.env.VITE_NEWS_API_KEY as string,
  "/article/getArticles",
  getManyhandler,
  transformer
);

export default client;
