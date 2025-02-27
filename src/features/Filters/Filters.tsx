import { useState, useEffect, useDeferredValue } from "react";
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

type FiltersProps = {};

export default function Filters({}: FiltersProps) {
  const dispatch = useDispatch();

  // Local state for inputs
  const [query, setQuery] = useState("");
  const [categories, setCategoriesInput] = useState("");
  const [sources, setSourcesInput] = useState("");
  const [authors, setAuthorsInput] = useState("");
  const [startDate, setStartDateInput] = useState("");
  const [endDate, setEndDateInput] = useState("");

  // Deferred values for better performance
  const deferredQuery = useDeferredValue(query);
  const deferredCategories = useDeferredValue(categories);
  const deferredSources = useDeferredValue(sources);
  const deferredAuthors = useDeferredValue(authors);

  // Dispatch actions when deferred values update
  useEffect(() => {
    dispatch(setQueryString(deferredQuery));
  }, [deferredQuery, dispatch]);

  useEffect(() => {
    dispatch(setCategories(deferredCategories.split(",")));
  }, [deferredCategories, dispatch]);

  useEffect(() => {
    dispatch(setSources(deferredSources.split(",")));
  }, [deferredSources, dispatch]);

  useEffect(() => {
    dispatch(setAuthors(deferredAuthors.split(",")));
  }, [deferredAuthors, dispatch]);

  return (
    <div className="filters">
      <h1 className="logo">NA</h1>
      <span className="title">News Aggregator</span>

      {/* Filter Inputs */}
      <div className="inputs-container">
        <input
          type="text"
          placeholder="Search by keyword"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by categories"
          value={categories}
          onChange={(e) => setCategoriesInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by sources"
          value={sources}
          onChange={(e) => setSourcesInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by authors"
          value={authors}
          onChange={(e) => setAuthorsInput(e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => {
            setStartDateInput(e.target.value);
            dispatch(setStartDate(e.target.value));
          }}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => {
            setEndDateInput(e.target.value);
            dispatch(setEndDate(e.target.value));
          }}
        />
      </div>
    </div>
  );
}
