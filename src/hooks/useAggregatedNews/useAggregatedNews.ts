import { useSelector } from "react-redux";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ClientFactory } from "@/clients";
import { RootState } from "@/store/store";
import useSelectedClients from "../useSelectedClients";
import { fetchAggregatedPosts, subtractOneDay } from "@/utils";
import useIsAnyFilterActive from "../useIsAnyFilterActive";



/**
 * A custom React hook that fetches and manages aggregated news articles using the `useInfiniteQuery` hook from `@tanstack/react-query`.
 * 
 * The hook retrieves news articles based on the current user's filters and preferences, and provides a way to fetch more articles as the user scrolls.
 * 
 * @returns An object containing the necessary properties and methods to work with the aggregated news data, including the ability to fetch more pages of data.
 */
const useAggregatedNews = () => {
  const newsFilters = useSelector((state: RootState) => state.filters);
  const preferences = useSelector((state: RootState) => state.preferences);
  const clientsArray: ClientFactory[] = useSelectedClients();

  // Determine the initial day. Use the user-defined endDate if provided, otherwise today.
  const initialDay = newsFilters.endDate
    ? newsFilters.endDate.slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  const isAnyFiltersActive = useIsAnyFilterActive();
  // If there's no active filters, we use user preferences for fetching teir highlights
  const queryUsed = isAnyFiltersActive ? newsFilters.queryString : "";
  const startDateUsed = isAnyFiltersActive ? newsFilters.startDate : "";
  const endDateUsed = isAnyFiltersActive ? newsFilters.endDate : "";
  const categoriesUsed = isAnyFiltersActive ? newsFilters.categories : preferences.categories;
  const sourcesUsed = isAnyFiltersActive ? newsFilters.sources : preferences.sources;
  const authorsUsed = isAnyFiltersActive ? newsFilters.authors : preferences.authors;

  return useInfiniteQuery({
    queryKey: ["aggregatedArticles", newsFilters, preferences],
    queryFn: async ({ pageParam = initialDay }) => {  // pageParam represents the day (in "YYYY-MM-DD") for which to fetch articles.
      return await fetchAggregatedPosts(
        clientsArray,
        pageParam, // fetch articles for this day
        queryUsed,
        preferences.pageSize,
        startDateUsed,
        endDateUsed,
        categoriesUsed,
        sourcesUsed,
        authorsUsed
      );
    },
    initialPageParam: initialDay,
    getNextPageParam: (lastPage) => {
      // If the last page returned no articles, stop.
      if (!lastPage.length) return undefined;

      // Since our pages are defined by the day we requested, 
      // we can get it from last page's first article's publishedAt date:
      const currentCursor = lastPage[0].publishedAt.slice(0, 10);
      const nextCursor = subtractOneDay(currentCursor); // go back one day

      // If a startDate is provided, stop if nextCursor is before it.
      if (startDateUsed && nextCursor < startDateUsed.slice(0, 10)) {
        return undefined;
      }
      return nextCursor;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export default useAggregatedNews;
