export interface NewsApiRequest {
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

export interface NewsApiResponse {
  articles: {
    results: {
      uri: string;
      lang: string;
      dateTime: string;
      url: string;
      title: string;
      body?: string;
      source: {
        uri: string;
        title: string;
        [key: string]: any;
      };
      authors?: { name: string; [key: string]: any }[];
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
