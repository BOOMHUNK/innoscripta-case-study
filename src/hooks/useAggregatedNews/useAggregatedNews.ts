import { useSelector } from "react-redux";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ClientFactory } from "@/clients";
import { RootState } from "@/store/store";
import useSelectedClients from "../useSelectedClients";
import { fetchAggregatedPosts, subtractOneDay } from "@/utils";



const useAggregatedNews = () => {
  const newsFilters = useSelector((state: RootState) => state.news);
  const clientsArray: ClientFactory[] = useSelectedClients();

  // Determine the initial day. Use the user-defined endDate if provided, otherwise today.
  const initialDay = newsFilters.endDate
    ? newsFilters.endDate.slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  return useInfiniteQuery({
    queryKey: ["aggregatedArticles", newsFilters],
    // pageParam represents the day (in "YYYY-MM-DD") for which to fetch articles.
    queryFn: async ({ pageParam = initialDay }) => {
      return await fetchAggregatedPosts(
        clientsArray,
        pageParam, // fetch articles for this day
        newsFilters.queryString,
        newsFilters.pageSize,
        newsFilters.startDate,
        newsFilters.endDate,
        newsFilters.categories,
        newsFilters.sources,
        newsFilters.authors
      );
    },
    initialPageParam: initialDay,
    getNextPageParam: (lastPage) => {
      // If the last page returned no articles, stop.
      if (!lastPage.length) return undefined;

      // Since our pages are defined by the day we requested, we can get that from the pageParam we used.
      // Here, we simply use the last page's first article's publishedAt date:
      const currentCursor = lastPage[0].publishedAt.slice(0, 10);
      const nextCursor = subtractOneDay(currentCursor);

      // If a startDate is provided, stop if nextCursor is before it.
      if (newsFilters.startDate && nextCursor < newsFilters.startDate.slice(0, 10)) {
        return undefined;
      }
      return nextCursor;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};

export default useAggregatedNews;
