import { TextInput } from "@/components";
import { setEndDate, setStartDate } from "@/store/filtersSlice";
import { useDispatch } from "react-redux";

type DateFiltersProps = {}

{/* Filter based date range */ }
export default function DateFilters({ }: DateFiltersProps) {
    const dispatch = useDispatch();

    return (
        <>
            <TextInput
                label="From:"
                type="date"
                placeholder="Start Date"
                debounceTime={500}
                onChange={(v) => dispatch(setStartDate(v))}
            />
            <TextInput
                label="To:"
                type="date"
                placeholder="End Date"
                debounceTime={500}
                onChange={(v) => dispatch(setEndDate(v))}
            />
        </>
    )
}