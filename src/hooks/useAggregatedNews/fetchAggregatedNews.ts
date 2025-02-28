import { ClientFactory } from "@/clients";

/**
 * Fetches articles from multiple APIs using the provided clients and Redux filters.
 */
export const fetchAggregatedNews = async (
  clients: ClientFactory<any>[], // List of API clients
  queryString?: string,
  pageSize = 10,
  pageNum = 1,
  startDate?: string,
  endDate?: string,
  categories: string[] = [],
  sources: string[] = [],
  authors: string[] = []
): Promise<Article[]> => {
  // Create fetch promises for each client
  const fetchPromises = clients.map((client) =>
    client.getMany(
      queryString,
      pageSize,
      pageNum,
      startDate,
      endDate,
      categories,
      sources,
      authors
    )
  );

  // Wait for all clients to return results
  const results = await Promise.all(fetchPromises);

  // Flatten the array and sort by date
  const allArticles = results
    .flat()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return allArticles;
};
