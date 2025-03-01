// extracted types based on the api docs at https://newsapi.org/docs/

export type NewsApiOrgPosts_Request = {
  q?: string;
  sources?: string;
  category?: "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";
  searchIn?: "title" | "description" | "content";
  domains?: string;
  from?: string;        // in ISO 8601 format
  to?: string;          // in ISO 8601 format
  language?: "ar" | "de" | "en" | "es" | "fr" | "he" | "it" | "nl" | "no" | "pt" | "ru" | "sv" | "ud" | "zh";
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  page?: number;
  pageSize?: number;   // Max: 100
}

export type NewsApiOrgHeadlines_Request = {
  q?: string;
  sources?: string;
  category?: "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";
  language?: "ar" | "de" | "en" | "es" | "fr" | "he" | "it" | "nl" | "no" | "pt" | "ru" | "sv" | "ud" | "zh";
  sortBy?: "relevancy" | "popularity" | "publishedAt";
  searchIn?: "title" | "description" | "content";
  page?: number;
  pageSize?: number;   // Max: 100
}

export type NewsApiOrgPosts_Response = {
  articles: {
    source: {
      id: string;
      name: string;
    },
    author?: string;
    title: string;
    description?: string;
    url: string;
    urlToImage?: string;
    publishedAt: string;
    content?: string;
  }[];
  status: "ok";
  totalResults: number;
} | {
  status: "error";
  code?: string;
  message?: string;
}


export type NewsApiOrgSources_Response = {
  status: "ok";
  sources: {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
  }[],
} | {
  status: "error";
  code?: string;
  message?: string;
}
