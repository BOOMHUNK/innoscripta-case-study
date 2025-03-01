import { TextInput } from "@/components"
import { setQueryString } from "@/store/filtersSlice";
import { RootState } from "@/store/store";
import { FiSearch } from "react-icons/fi"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

type SearchProps = {}

export default function Search({ }: SearchProps) {
    const dispatch = useDispatch();
    const queryString = useSelector((state: RootState) => state.filters.queryString);
    return (
        <TextInput
            iconElement={<FiSearch />}
            autoComplete="off"
            type="text"
            placeholder="Search by keyword"
            debounceTime={700}
            onChange={(v) => dispatch(setQueryString(v))}
            value={queryString}
        />
    )
}