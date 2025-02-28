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
import TextInput from "@/components/TextInput";

export default function Filters() {
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

        {/* <TextInput
          autoComplete="off"
          type="text"
          placeholder="Filter by categories"
          debounceTime={700}
          onChange={(v) => dispatch(setCategories(v.split(",")))}
        />
        <TextInput
          autoComplete="off"
          type="text"
          placeholder="Filter by sources"
          debounceTime={700}
          onChange={(v) => dispatch(setSources(v.split(",")))}
        />
        <TextInput
          autoComplete="off"
          type="text"
          placeholder="Filter by authors"
          debounceTime={700}
          onChange={(v) => dispatch(setAuthors(v.split(",")))}
        /> */}

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
      </div>
    </div>
  );
}
