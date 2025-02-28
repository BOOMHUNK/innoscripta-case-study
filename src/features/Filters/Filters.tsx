import { useState, useDeferredValue, useEffect } from "react";
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
import { useDebounce } from "@/hooks";
import { FiSearch } from "react-icons/fi";
import { TextInput } from "@/components";

type FiltersProps = {};

export default function Filters({ }: FiltersProps) {
  const dispatch = useDispatch();

  // Local state for inputs
  const [query, setQueryInput] = useState("");
  // const [categories, setCategoriesInput] = useState("");
  // const [sources, setSourcesInput] = useState("");
  // const [authors, setAuthorsInput] = useState("");
  const [startDate, setStartDateInput] = useState("");
  const [endDate, setEndDateInput] = useState("");

  // Apply debouncing to prevent frequent updates
  const debouncedQuery = useDebounce(query, 700);
  // const debouncedCategories = useDebounce(categories, 700);
  // const debouncedSources = useDebounce(sources, 700);
  // const debouncedAuthors = useDebounce(authors, 700);
  const debouncedStartDate = useDebounce(startDate, 700);
  const debouncedEndDate = useDebounce(endDate, 700);

  // Defer rendering for smoother UI
  const deferredQuery = useDeferredValue(debouncedQuery);
  // const deferredCategories = useDeferredValue(debouncedCategories);
  // const deferredSources = useDeferredValue(debouncedSources);
  // const deferredAuthors = useDeferredValue(debouncedAuthors);

  // Dispatch actions only when debounced & deferred values change
  useEffect(() => {
    console.log(deferredQuery);

    dispatch(setQueryString(deferredQuery));
  }, [deferredQuery, dispatch]);

  // useEffect(() => {
  //   dispatch(setCategories(deferredCategories.split(",")));
  // }, [deferredCategories, dispatch]);

  // useEffect(() => {
  //   dispatch(setSources(deferredSources.split(",")));
  // }, [deferredSources, dispatch]);

  // useEffect(() => {
  //   dispatch(setAuthors(deferredAuthors.split(",")));
  // }, [deferredAuthors, dispatch]);

  useEffect(() => {
    dispatch(setStartDate(debouncedStartDate));
  }, [debouncedStartDate, dispatch]);

  useEffect(() => {
    dispatch(setEndDate(debouncedEndDate));
  }, [debouncedEndDate, dispatch]);

  return (
    <div className="filters">
      {/* Filter Inputs */}
      <div className="inputs-container">
        <TextInput
          iconElement={<FiSearch />}
          autoComplete="off"
          type="text"
          placeholder="Search by keyword"
          value={query}
          onChange={(e) => setQueryInput(e.target.value)}
        />

        {/* <input
          type="text"
          autoComplete="off"
          placeholder="Filter by categories"
          value={categories}
          onChange={(e) => setCategoriesInput(e.target.value)}
        />
        <input
          type="text"
          autoComplete="off"
          placeholder="Filter by sources"
          value={sources}
          onChange={(e) => setSourcesInput(e.target.value)}
        />
        <input
          type="text"
          autoComplete="off"
          placeholder="Filter by authors"
          value={authors}
          onChange={(e) => setAuthorsInput(e.target.value)}
        /> */}

        <div className="date-filters">
          <TextInput
            label="From:"
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => {
              setStartDateInput(e.target.value);
            }}
          />


          <TextInput
            label="To:"
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => {
              setEndDateInput(e.target.value);
            }}
          />

        </div>
      </div>
    </div >
  );
}
