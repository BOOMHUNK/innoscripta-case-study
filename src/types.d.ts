import { AvailableClients } from "./clients";

export type Tag = {
  displayName: string;
  clientsCompatibleValue: {
    [clientName in keyof typeof AvailableClients]: string
  }
}

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


export type FetchPostsHandler = (
  clientName: keyof Tag["clientsCompatibleValue"],
  fullEndpointAddress: string,
  apiToken: string,

  queryString?: string,
  pageSize?: number,
  pageNumber?: number,
  filterDateStart?: string,
  filterDateEnd?: string,
  filterCategories?: string[],
  filterSources?: string[],
  filterAuthors?: string[],
) => Promise<Article[]>;


export type FetchTagsHandler = (
  clientName: keyof Tag["clientsCompatibleValue"],
  fullEndpointAddress: string,
  apiToken: string,

  prefix: string,
) => Promise<Tag[]>;



export interface IClientFactory {
  public name: string;
  // Client methods are responsible for calling the fetch handlers and returning the data in our prefered types.
  public async getPosts: (
    queryString?: string,
    pageSize?: number,
    pageNumber?: number,
    filterDateStart?: string,
    filterDateEnd?: string,
    filterCategories?: string[],
    filterSources?: string[],
    filterAuthors?: string[]
  ) => Promise<Article[]>;
  public async getCategories?: (prefix: string) => Promise<Tag[]>;
  public async getSources?: (prefix: string) => Promise<Tag[]>;
  public async getAuthors?: (prefix: string) => Promise<Tag[]>;
}