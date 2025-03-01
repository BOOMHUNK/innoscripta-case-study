import { ClientFactory } from "@/clients";
import { EachApiPageSize } from "@/configs";
import { Article, Tag } from "@/types";


/**
 * Aggregates articles from multiple APIs using the provided clients and filters stored in redux states.
 */
const fetchAggregatedPosts = async (
  clients: ClientFactory[], // List of API clients
  queryString?: string,
  pageSize = EachApiPageSize,
  pageNum = 1,
  startDate?: string,
  endDate?: string,
  categories: Tag[] = [],
  sources: Tag[] = [],
  authors: Tag[] = []
): Promise<Article[]> => {

  // Create fetch promises for each client
  const fetchPromises = clients.map((client) =>
    client.getPosts(
      queryString,
      pageSize,
      pageNum,
      startDate,
      endDate,
      // Transform tags(categories, sources and authors) to clients-compatible values
      categories.map(item => item.clientsCompatibleValues[client.name]).flat() || [],
      sources.map(item => item.clientsCompatibleValues[client.name]).flat() || [],
      authors.map(item => item.clientsCompatibleValues[client.name]).flat() || [],
    )
  );

  // Wait for all clients to return results
  const results = await Promise.all(fetchPromises);

  // Flatten the array and sort by date
  const allArticles = results
    .flat()
    .sort((a, b) => {
      const aTime = new Date(a.publishedAt).getTime();
      const bTime = new Date(b.publishedAt).getTime();
      console.log("Comparing", aTime, bTime);
      return bTime - aTime;
    });

  return allArticles;
};
export default fetchAggregatedPosts;