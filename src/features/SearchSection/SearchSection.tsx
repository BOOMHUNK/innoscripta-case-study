import Search from "./Search";

import "./style.css";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import ModalFilters from "../ModalFilters";
import { useIsAnyFilterActive } from "@/hooks";

export default function SearchSection() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const isAnyFiltersActive = useIsAnyFilterActive();
  return (
    <div className="SearchSection">
      <div className="SearchSection-container">
        <div className="inputs-container">
          <Search />
          <span className={`more-filters-button ${isAnyFiltersActive ? "active" : ""}`} onClick={() => setIsFiltersOpen(true)} title="more filters"> <FiFilter /> </span>
        </div>
      </div>
      <ModalFilters isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} />
    </div>
  );
}
