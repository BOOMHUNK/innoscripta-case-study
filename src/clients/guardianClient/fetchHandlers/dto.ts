// extracted types based on the api docs at https://newsapi.org/docs/

export type GuardianPosts_Request = {
  "api-key": "test" | string;
  q?: string;
  section?: string;  // multiple values joined by "|" character for OR op and by "," character for AND op

  'from-date'?: string;
  'to-date'?: string;  // accepted format: yyyy-mm-dd

  'show-references'?: "author";
  'show-fields'?: "trailText,thumbnail,short-url";
  "order-by"?: "newest" | "oldest" | "relevance";  // defaults to newst

  page?: number;
  "page-size"?: number;   // Max: 50
}


export type GuardianPosts_Response = {
  response: {
    status: "ok";
    currentPage: number;
    pageSize: number;
    pages: number;
    startIndex: number,
    total: number;
    orderBy?: "newest" | "oldest" | "relevance";

    results: {
      id: string;
      sectionId: string;
      sectionName: string;
      webPublicationDate: string;    // example 2022-10-21T14:06:14Z
      webUrl: string;
      apiUrl: string;
      webTitle: string;
      fields?: {
        trailText: string;
        thumbnail: string;
        shortUrl: string;
      }
      references?: {
        id: string; // example "author/robert-louis-stevenson"
        type?: "author";
      }[]
    }[]
  }
};




export type GuardianCategories_Request = {
  "api-key": "test" | string;
  q?: string;
}


export type GuardianCategories_Response = {
  response: {
    status: "ok";
    total: number;
    results: {
      webUrl: string;
      apiUrl: string;
      webTitle: string;
      id: string;
    }[],
  }
}