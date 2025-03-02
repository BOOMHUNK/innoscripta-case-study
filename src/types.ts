import { AvailableClients } from "./configs";


/**
 * Represents a tag that can be associated with an article.
 * Categories, Sources,, and Authors are all examples of tags.
 * The `displayName` property holds the human-readable name of the tag.
 * The `clientsCompatibleValues` property is an object that maps each available client to an array of compatible string values for that client.
 * These are used for filtering and displaying the tag in the UI.
 */
export type Tag = {
  displayName: string;
  clientsCompatibleValues: {
    [clientName in keyof typeof AvailableClients]: string[];
  }
}

/**
 * Represents an article that has been fetched transfored from a news API and can be displayed in the application.
 * The `sourceClient` property indicates which client the article was fetched from.
 * The `id` property is a unique identifier for the article.
 * The `title`, `description`, `content`, `url`, and `imageUrl` properties contain the article's content.
 * The `publishedAt` property indicates when the article was published.
 * The `source`, `authors`, and `categories` properties contain tags associated with the article.
 */
export type Article = {
  sourceClient: keyof typeof AvailableClients;
  id: string;
  title: string;
  description?: string;
  content: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
  source?: Tag;
  authors?: Tag[];
  categories?: Tag[];
}


/**
 * Represents a handler for fetching articles from a news API.
 * It's used for defining handlers for different news API clients.
 * The function takes various parameters to configure the API request, such as the client name, base URL, endpoint, API token, and various filtering options.
 * It returns a Promise that resolves to an array of `Article` objects.
 */
export type FetchPostsHandler = (
  clientName: keyof typeof AvailableClients,
  baseUrl: string,
  endpoint: string,
  apiToken: string,

  queryString?: string,
  pageSize?: number,
  pageNumber?: number,
  filterDateStart?: string,
  filterDateEnd?: string,
  filterCategories?: Tag[],
  filterSources?: Tag[],
  filterAuthors?: Tag[],
) => Promise<Article[]>;


/**
 * Represents a handler for fetching tags from a news API.
 * It's used for defining handlers for fetching different types of tags (categories, sources, authors) when instanciating different news API clients.
 * The function takes various parameters to configure the API request, such as the client name, base URL, endpoint, API token, and a prefix for the tag type.
 * It returns a Promise that resolves to an array of `Tag` objects.
 */
export type FetchTagsHandler = (
  clientName: keyof typeof AvailableClients,
  baseUrl: string,
  endpoint: string,
  apiToken: string,

  prefix: string,
) => Promise<Tag[]>;



/**
 * Represents a factory for creating news API client instances.
 * the ClientFactory class implemennts the IClientFactory interface and provides methods for creating instances of different news API clients.
 * This interface defines the methods that a news API client factory should implement.
 */
export interface IClientFactory {
  name: string;
  // Client methods are responsible for calling the fetch handlers and returning the data in our prefered types.
  getPosts: (
    queryString?: string,
    pageSize?: number,
    pageNumber?: number,
    filterDateStart?: string,
    filterDateEnd?: string,
    filterCategories?: Tag[],
    filterSources?: Tag[],
    filterAuthors?: Tag[]
  ) => Promise<Article[]>;
  getCategories?: (prefix: string) => Promise<Tag[]>;
  getSources?: (prefix: string) => Promise<Tag[]>;
  getAuthors?: (prefix: string) => Promise<Tag[]>;
}