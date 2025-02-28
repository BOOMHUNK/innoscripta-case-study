import { useSelector } from "react-redux";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ClientFactory } from "@/clients";
import { RootState } from "@/store/store";
import useSelectedClients from "../useSelectedClients";
import { fetchAggregatedPosts } from "@/utils";

const useAggregatedNews = () => {
  const newsFilters = useSelector((state: RootState) => state.news);
  const clientsArray: ClientFactory[] = useSelectedClients();

  // use react query with its pagination features
  return useInfiniteQuery({
    queryKey: ["aggregatedArticles", newsFilters],
    queryFn: async ({ pageParam = 1 }) => {
      return await fetchAggregatedPosts(
        clientsArray,
        newsFilters.queryString,
        newsFilters.pageSize,
        pageParam,
        newsFilters.startDate,
        newsFilters.endDate,
        newsFilters.categories,
        newsFilters.sources,
        newsFilters.authors
      );
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length > 0 ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: false, // disable refetching on window/tab focus
  });
};
export default useAggregatedNews;
