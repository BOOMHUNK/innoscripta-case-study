export default class ClientFactory<ResponseType> {
  private apiToken: string;
  private baseUrl: string;
  private getManyEndpoint: string;

  private getManyHandler: GetManyHandler<ResponseType>;
  private transformer: (data: ResponseType) => Article[];

  constructor(
    baseUrl: string,
    apiToken: string,
    getManyEndpoint: string,
    getManyHandler: GetManyHandler<ResponseType>,
    transformer: (data: ResponseType) => Article[]
  ) {
    this.apiToken = apiToken;
    this.baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl; // make sure the baseUrl doesn't end with a slash
    this.getManyEndpoint = getManyEndpoint.startsWith("/")
      ? getManyEndpoint
      : `/${getManyEndpoint}`; // make sure the endpoint starts with a slash

    this.getManyHandler = getManyHandler;
    this.transformer = transformer;
  }

  async getMany(
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
      const response: ResponseType = await this.getManyHandler(
        this.baseUrl + this.getManyEndpoint,
        this.apiToken,
        queryString,
        pageSize,
        pageNumber,
        filterCategories,
        filterSources,
        filterAuthors,
        filterDateStart,
        filterDateEnd
      );
      return this.transformer(response);
    } catch (error) {
      console.error(
        `API Request failed: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
      throw new Error(
        `Failed to fetch data from ${this.baseUrl + this.getManyEndpoint}`
      );
    }
  }
}

