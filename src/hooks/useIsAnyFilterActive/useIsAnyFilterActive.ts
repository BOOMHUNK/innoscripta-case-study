import { RootState } from "@/store/store";
import { useSelector } from "react-redux";


export default function useIsAnyFilterActive() {
    const filters = useSelector((state: RootState) => state.filters);
    const isAnyFiltersActive = filters.authors?.length > 0 || filters.categories?.length > 0 || filters.sources?.length > 0 || filters.queryString?.length > 0 || filters.endDate?.length > 0 || filters.startDate?.length > 0;

    return isAnyFiltersActive
}