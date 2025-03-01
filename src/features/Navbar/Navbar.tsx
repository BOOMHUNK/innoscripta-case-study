import "./style.css";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import ModalFilters from "../ModalFilters";
import { Search } from "../SearchSection";

export default function Navbar() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="inputs-container">
          <Search />
          <span className="more-filters-button" onClick={() => setIsFiltersOpen(true)} title="more filters">
            <FiFilter />
          </span>
        </div>
      </div>

      <ModalFilters isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} />
    </div>
  );
}
