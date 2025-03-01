import { Article, FetchPostsHandler, FetchTagsHandler, IClientFactory, Tag } from "@/types";

/**
 * Implements the `IClientFactory` interface to create client instances for interacting with a news API.
 * The `ClientFactory` class provides a standardized way to configure and instantiate API clients with common functionalities 
 * such as data fetching, filtering, and transforming into our app's readable type and format.
 */
export default class ClientFactory implements IClientFactory {

  public name: string;
  protected apiToken: string;
  protected baseUrl: string;

  protected postsEndpoint: string;
  protected categoriesEndpoint?: string;
  protected sourcesEndpoint?: string;
  protected authorsEndpoint?: string;

  // Fetch handlers are responsible for retrieving data from the api 
  // and transforming it into an array of Article objects (readable by our components)
  // these are given to the constructor so they get called internally in client methods.
  protected fetchPostsHandler: FetchPostsHandler;
  protected fetchCategoriesHandler?: FetchTagsHandler;
  protected fetchSourcesHandler?: FetchTagsHandler;
  protected fetchAuthorsHandler?: FetchTagsHandler;


  constructor(
    name: string,
    baseUrl: string,
    apiToken: string,
    getPostsEndpoint: string,
    fetchManyHandler: FetchPostsHandler,

    categoriesEndpoint?: string,
    fetchCategoriesHandler?: FetchTagsHandler,

    sourcesEndpoint?: string,
    fetchSourcesHandler?: FetchTagsHandler,

    authorsEndpoint?: string,
    fetchAuthorsHandler?: FetchTagsHandler,
  ) {

    this.name = name;
    this.apiToken = apiToken;
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl; // make sure the baseUrl doesn't end with a slash (for ease of use)
    this.postsEndpoint = getPostsEndpoint.startsWith("/")
      ? getPostsEndpoint
      : `/${getPostsEndpoint}`; // make sure the endpoint starts with a slash (for ease of use)
    this.fetchPostsHandler = fetchManyHandler;


    if (categoriesEndpoint) this.categoriesEndpoint = categoriesEndpoint.startsWith("/")
      ? categoriesEndpoint
      : `/${categoriesEndpoint}`;
    this.fetchCategoriesHandler = fetchCategoriesHandler;

    if (sourcesEndpoint) this.sourcesEndpoint = sourcesEndpoint.startsWith("/")
      ? sourcesEndpoint
      : `/${sourcesEndpoint}`;
    this.fetchSourcesHandler = fetchSourcesHandler;

    if (authorsEndpoint) this.authorsEndpoint = authorsEndpoint.startsWith("/")
      ? authorsEndpoint
      : `/${authorsEndpoint}`;
    this.fetchAuthorsHandler = fetchAuthorsHandler;

  }

  public async getPosts(
    queryString?: string,
    pageSize?: number,
    pageNumber?: number,
    filterDateStart?: string,
    filterDateEnd?: string,
    filterCategories?: Tag[],
    filterSources?: Tag[],
    filterAuthors?: Tag[]
  ): Promise<Article[]> {
    try {
      return await this.fetchPostsHandler(
        this.name,
        this.baseUrl,
        this.postsEndpoint,
        this.apiToken,
        queryString,
        pageSize,
        pageNumber,
        filterDateStart,
        filterDateEnd,
        filterCategories,
        filterSources,
        filterAuthors,
      );
    } catch (error) {
      console.error(
        `API Request failed: ${error instanceof Error ? error.message : String(error)
        }`
      );
      return Promise.resolve([]);
    }
  }

  public async getCategories(prefix: string): Promise<Tag[]> {
    if (!this.fetchCategoriesHandler) {
      return Promise.resolve([]);
    }
    try {
      return await this.fetchCategoriesHandler(
        this.name,
        this.baseUrl,
        (this.categoriesEndpoint || ""),
        this.apiToken,
        prefix,
      );
    } catch (error) {
      console.error(
        `GetCategories request failed: ${error instanceof Error ? error.message : String(error)
        }`
      );
      return Promise.resolve([]);
    }
  }


  public async getSources(prefix: string): Promise<Tag[]> {
    if (!this.fetchSourcesHandler) {
      return Promise.resolve([]);
    }
    try {
      return await this.fetchSourcesHandler(
        this.name,
        this.baseUrl,
        (this.sourcesEndpoint || ""),
        this.apiToken,
        prefix,
      );
    } catch (error) {
      console.error(
        `GetSources request failed: ${error instanceof Error ? error.message : String(error)
        }`
      );
      return Promise.resolve([]);
    }
  }

  public async getAuthors(prefix: string): Promise<Tag[]> {
    if (!this.fetchAuthorsHandler) {
      return Promise.resolve([]);
    }
    try {
      return await this.fetchAuthorsHandler(
        this.name,
        this.baseUrl,
        (this.authorsEndpoint || ""),
        this.apiToken,
        prefix,
      );
    } catch (error) {
      console.error(
        `GetAuthors request failed: ${error instanceof Error ? error.message : String(error)
        }`
      );
      return Promise.resolve([]);
    }
  }
}

