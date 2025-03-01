import { ClientFactory } from "@/clients";
import { EachApiPageSize } from "@/configs";
import { Article, Tag } from "@/types";

/**
 * Aggregates articles from multiple APIs for a single day.
 *
 * @param clients - List of API clients.
 * @param dayCursor - The day (in "YYYY-MM-DD" format) for which to fetch articles.
 * @param queryString - Search query.
 * @param pageSize - Number of articles to fetch per API.
 * @param _startDate - Optional filter: only fetch articles published on/after this day.
 * @param _endDate - Optional filter: only fetch articles published on/before this day (should equal dayCursor initially).
 * @param categories, sources, authors - Arrays of Tags for filtering.
 */
const fetchAggregatedPosts = async (
  clients: ClientFactory[],
  dayCursor: string,
  queryString?: string,
  pageSize = EachApiPageSize,
  _startDate?: string,
  _endDate?: string,
  categories: Tag[] = [],
  sources: Tag[] = [],
  authors: Tag[] = []
): Promise<Article[]> => {
  // For a single day, we pass the same day for both startDate and endDate.
  const targetDay = dayCursor;

  // Create fetch promises for each client.
  const fetchPromises = clients.map((client) =>
    client.getPosts(
      queryString,
      pageSize,
      1, // Always use 1 because we made sure all posts in that response come from the same day.
      targetDay, // startDate
      targetDay, // endDate
      // Transform tags to clients-compatible values.
      categories.map(item => item.clientsCompatibleValues[client.name]).flat() || [],
      sources.map(item => item.clientsCompatibleValues[client.name]).flat() || [],
      authors.map(item => item.clientsCompatibleValues[client.name]).flat() || []
    )
  );

  // Wait for all clients to return results.
  const results = await Promise.all(fetchPromises);

  // Flatten and sort the aggregated articles by publishedAt (descending: newest first).
  const allArticles = results
    .flat()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return allArticles;
};

export default fetchAggregatedPosts;
