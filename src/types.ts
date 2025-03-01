import { AvailableClients } from "./configs";


export type Tag = {
  displayName: string;
  clientsCompatibleValues: {
    [clientName in keyof typeof AvailableClients]: string[];
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


export type FetchTagsHandler = (
  clientName: keyof typeof AvailableClients,
  baseUrl: string,
  endpoint: string,
  apiToken: string,

  prefix: string,
) => Promise<Tag[]>;



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