// extracted types based on the api docs at https://newsapi.ai/documentation

export interface NewsApiPosts_Request {
  action: "getArticles";
  keyword?: string | string[];
  keywordOper?: "and" | "or";
  lang?: string[];
  ignoreKeyword?: string | string[];
  categoryUri?: string | string[];
  sourceUri?: string | string[];
  authorUri?: string | string[];
  dateStart?: string; // for example 2018-01-03
  dateEnd?: string;
  articlesPage?: number;
  articlesCount?: number;
  articlesSortBy?:
  | "date"
  | "rel"
  | "sourceImportance"
  | "sourceAlexaGlobalRank"
  | "sourceAlexaCountryRank"
  | "socialScore"
  | "facebookShares";
  articlesSortByAsc?: boolean;
  articleBodyLen?: number;
  resultType?: "articles";
  forceMaxDataTimeWindow?: number;
  includeArticleConcepts?: boolean;
  includeArticleCategories?: boolean;
  includeArticleImage?: boolean;
  includeArticleSocialScore?: boolean;
  includeArticleLocation?: boolean;
  includeArticleAuthors?: boolean;
  apiKey?: string;
}

export interface NewsApiPosts_Response {
  articles: {
    results: {
      uri: string;
      lang: string;
      dateTime: string;
      dateTimePub: string;
      url: string;
      title: string;
      body?: string;
      source: {
        uri: string;
        title: string;
        [key: string]: any;
      };
      authors?: {
        uri: string;
        name: string;
        [key: string]: any
      }[];
      concepts?: {
        uri: string;
        label: { eng: string };
        [key: string]: any;
      }[];
      categories?: {
        uri: string;
        label: string;
        wgt?: number;
        [key: string]: any;
      }[];
      image?: string;
      [key: string]: any;
    }[];
    totalResults: number;
    page: number;
    count: number;
    pages: number;
  };
}

export interface NewsApiCategories_Request {
  prefix: string,
  page: number,
  count: number,
  articleBodyLen: number,
  apiKey?: string;
}

export type NewsApiCategories_Response = {
  uri: string,
  label: string,
  parentUri: string
}[]


export interface NewsApiSources_Request {
  prefix: string,
  apiKey?: string;
}

export type NewsApiSources_Response = {
  uri: string,
  title: string,
  dataType: string,
  score: number
}[]


export interface NewsApiAuthors_Request {
  prefix: string,
  apiKey?: string;
}

export type NewsApiAuthors_Response = {
  uri: string,
  name: string,
  type: string,
  isAgency: boolean
}[]
