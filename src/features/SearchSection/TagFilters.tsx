import { useCallback } from "react";
import { AutoSuggestTagInput } from "@/components";
import { useSelectedClients } from "@/hooks";
import { setAuthors, setCategories, setSources } from "@/store/filtersSlice";
import { RootState } from "@/store/store";
import { fetchAggregatedCategories, fetchAggregatedSources } from "@/utils";
import fetchAggregatedAuthors from "@/utils/fetchAggregatedAuthors";
import { useDispatch, useSelector } from "react-redux";
import { setPreferedAuthors, setPreferedCategories, setPreferedSources } from "@/store/preferencesSlice";

type TagFiltersProps = {
    altersPreferences?: boolean;
}

{/* Filter(Or change Preferences) based on category, source and authors + Autosuggest */ }
export default function TagFilters({ altersPreferences }: TagFiltersProps) {
    const clients = useSelectedClients();

    const selectedCategories = useSelector((state: RootState) => state.filters.categories);
    const selectedSources = useSelector((state: RootState) => state.filters.sources);
    const selectedAuthors = useSelector((state: RootState) => state.filters.authors);

    const preferedCategories = useSelector((state: RootState) => state.preferences.categories);
    const preferedSources = useSelector((state: RootState) => state.preferences.sources);
    const preferedAuthors = useSelector((state: RootState) => state.preferences.authors);

    const dispatch = useDispatch();

    const fetchCategories = useCallback(async (query: string) => {
        return await fetchAggregatedCategories(clients, query);
    }, [clients]);
    const fetchSources = useCallback(async (query: string) => {
        return await fetchAggregatedSources(clients, query);
    }, [clients]);
    const fetchAuthors = useCallback(async (query: string) => {
        return await fetchAggregatedAuthors(clients, query);
    }, [clients]);
    return (
        <>
            <AutoSuggestTagInput
                label={altersPreferences ? "Prefered Categories:" : "Categories:"}
                placeholder="Type to search categories..."
                debounceTime={300}
                fetchSuggestions={async (query) => await fetchCategories(query)}
                onChange={(tags) => dispatch(altersPreferences ? setPreferedCategories(tags) : setCategories(tags))}
                value={altersPreferences ? preferedCategories : selectedCategories}
            />
            <AutoSuggestTagInput
                label={altersPreferences ? "Prefered Sources:" : "Sources:"}
                placeholder="Type to search sources..."
                debounceTime={300}
                fetchSuggestions={async (query) => await fetchSources(query)}
                onChange={(tags) => dispatch(altersPreferences ? setPreferedSources(tags) : setSources(tags))}
                value={altersPreferences ? preferedSources : selectedSources}
            />
            <AutoSuggestTagInput
                label={altersPreferences ? "Prefered Authors:" : "Authors:"}
                placeholder="Type to search authors..."
                debounceTime={300}
                fetchSuggestions={async (query) => await fetchAuthors(query)}
                onChange={(tags) => dispatch(altersPreferences ? setPreferedAuthors(tags) : setAuthors(tags))}
                value={altersPreferences ? preferedAuthors : selectedAuthors}
            />
        </>
    )
}