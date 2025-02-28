import { Article, FetchPostsHandler, FetchTagsHandler, IClientFactory, Tag } from "@/types";

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
    filterCategories?: string[],
    filterSources?: string[],
    filterAuthors?: string[]
  ): Promise<Article[]> {
    try {
      return await this.fetchPostsHandler(
        this.name as keyof Tag["clientsCompatibleValue"],
        this.baseUrl + this.postsEndpoint,
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
      throw new Error(
        `Failed to fetch data from ${this.baseUrl + this.postsEndpoint}`
      );
    }
  }

  public async getCategories(prefix: string): Promise<Tag[]> {
    if (!this.fetchCategoriesHandler || !this.categoriesEndpoint) {
      return Promise.resolve([]);
    }
    try {
      return await this.fetchCategoriesHandler(
        this.name as keyof Tag["clientsCompatibleValue"],
        this.baseUrl + this.categoriesEndpoint,
        this.apiToken,
        prefix,
      );
    } catch (error) {
      console.error(
        `GetCategories request failed: ${error instanceof Error ? error.message : String(error)
        }`
      );
      throw new Error(
        `Failed to fetch data from ${this.baseUrl + this.postsEndpoint}`
      );
    }
  }


  public async getSources(prefix: string): Promise<Tag[]> {
    // ToDo: implement this
    return Promise.resolve([]);
  }
  public async getAuthors(prefix: string): Promise<Tag[]> {
    // ToDo: implement this
    return Promise.resolve([]);
  }
}

