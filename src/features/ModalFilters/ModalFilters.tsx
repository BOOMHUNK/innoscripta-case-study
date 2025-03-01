import { Popup } from "@/components"
import { DateFilters, TagFilters } from "../SearchSection";
import "./style.css"

type ModalFiltersProps = {
    title?: string;
    isPreferencesMenu?: boolean;
    isFiltersOpen: boolean
    setIsFiltersOpen: (state: boolean) => void;
}

export default function ModalFilters({ title, isPreferencesMenu, isFiltersOpen, setIsFiltersOpen }: ModalFiltersProps) {
    return (
        <Popup title={title || (isPreferencesMenu ? "preferences" : "filters")} open={isFiltersOpen} onClose={() => setIsFiltersOpen(false)}>
            {/* Filter based date range */}
            {!isPreferencesMenu && <div className="date-filters">
                <DateFilters />
            </div>}

            {/* Filter based on category, source and authors + Autosuggest */}
            <div className="more-filters">
                <TagFilters altersPreferences={isPreferencesMenu} />
            </div>
        </Popup>
    )
}