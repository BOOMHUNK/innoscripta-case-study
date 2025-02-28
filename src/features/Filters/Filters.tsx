// Filters.tsx
import { useDispatch } from "react-redux";
import {
  setQueryString,
  setCategories,
  setSources,
  setAuthors,
  setStartDate,
  setEndDate,
} from "@/store/newsSlice";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import { AutoSuggestTagInput, TextInput } from "@/components";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useSelectedClients } from "@/hooks";
import { fetchAggregatedCategories, fetchAggregatedSources } from "@/utils";
import fetchAggregatedAuthors from "@/utils/fetchAggregatedAuthors";


export default function Filters() {
  const clients = useSelectedClients();

  const selectedCategories = useSelector((state: RootState) => state.news.categories);
  const selectedSources = useSelector((state: RootState) => state.news.sources);
  const selectedAuthors = useSelector((state: RootState) => state.news.authors);

  const dispatch = useDispatch();
  return (
    <div className="filters">
      <div className="inputs-container">
        <TextInput
          iconElement={<FiSearch />}
          autoComplete="off"
          type="text"
          placeholder="Search by keyword"
          debounceTime={700}
          onChange={(v) => dispatch(setQueryString(v))}
        />
        {/* Filter based date range */}
        <div className="date-filters">
          <TextInput
            label="From:"
            type="date"
            placeholder="Start Date"
            debounceTime={700}
            onChange={(v) => dispatch(setStartDate(v))}
          />
          <TextInput
            label="To:"
            type="date"
            placeholder="End Date"
            debounceTime={700}
            onChange={(v) => dispatch(setEndDate(v))}
          />
        </div>

        {/* Filter based on category, source and authors + Autosuggest */}
        <div className="more-filters">
          <AutoSuggestTagInput
            label="Categories:"
            placeholder="Type to search categories..."
            debounceTime={700}
            fetchSuggestions={async (query) => await fetchAggregatedCategories(clients, query)}
            onChange={(tags) => dispatch(setCategories(tags))}
            value={selectedCategories}
          />
          <AutoSuggestTagInput
            label="Sources:"
            placeholder="Type to search sources..."
            debounceTime={700}
            fetchSuggestions={async (query) => await fetchAggregatedSources(clients, query)}
            onChange={(tags) => dispatch(setSources(tags))}
            value={selectedSources}
          />
          <AutoSuggestTagInput
            label="Authors:"
            placeholder="Type to search authors..."
            debounceTime={700}
            fetchSuggestions={async (query) => await fetchAggregatedAuthors(clients, query)}
            onChange={(tags) => dispatch(setAuthors(tags))}
            value={selectedAuthors}
          />
        </div>


      </div>
    </div>
  );
}
