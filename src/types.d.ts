interface Article {
  id: string;
  title: string;
  description?: string;
  content: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
  source: string;
  authors?: string[];
  category?: string[];
}

type GetManyHandler<ResType> = (
  endpoint: string,
  apiToken: string,

  queryString?: string,
  pageSize?: number,
  pageNumber?: number,
  filterCategories?: string[],
  filterSources?: string[],
  filterAuthors?: string[],
  filterDateStart?: string,
  filterDateEnd?: string
) => Promise<ResType>;

type TransformerFunction<ResType> = (data: ResType) => Article[];
