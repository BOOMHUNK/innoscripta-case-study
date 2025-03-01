import { useState, useEffect, useDeferredValue, useRef } from "react";
import { useDebounce, useOutsideListener } from "@/hooks";
import Tagchip from "@/components/Tagchip";
import "@/components/inputs/style.css";
import "./style.css";
import { CgSpinnerAlt } from "react-icons/cg";
import { Tag } from "@/types";

export interface AutoSuggestTagInputProps {
  label?: string;
  placeholder?: string;
  /** Async function that returns suggestions given a query */
  fetchSuggestions: (query: string) => Promise<Tag[]>;
  /** Controlled selected tags value */
  value: Tag[];
  /** Callback fired when the selected tags change */
  onChange: (tags: Tag[]) => void;
  /** Debounce delay in milliseconds */
  debounceTime?: number;
}

export default function AutoSuggestTagInput({
  label,
  placeholder,
  fetchSuggestions,
  value,
  onChange,
  debounceTime = 200,
}: AutoSuggestTagInputProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Hide suggestions when clicking outside.
  useOutsideListener(ref, () => {
    setInputValue("");
    setSuggestions([]);
    setFetchingState("idle");
  });

  // State for the current input text and suggestions.
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<Tag[]>([]);
  const [fetchingState, setFetchingState] = useState<"fetching" | "idle" | "error">("idle");

  // Debounce and defer the current input.
  const debouncedInput = useDebounce(inputValue, debounceTime);
  const deferredInput = useDeferredValue(debouncedInput);


  // When the deferred input changes, fetch suggestions if non-empty.
  useEffect(() => {
    if (deferredInput.trim() !== "") {
      setFetchingState("fetching");
      fetchSuggestions(deferredInput)
        .then((results) => {
          setSuggestions(results);
          setFetchingState("idle");
        })
        .catch(() => {
          setFetchingState("error");
        });
    } else {
      setSuggestions([]);
      setFetchingState("idle");
    }
  }, [deferredInput, fetchSuggestions]);

  // Adds a tag if not already present and calls onChange.
  const addTag = (tag: Tag) => {
    if (tag && !value.some(t => t.displayName === tag.displayName)) {
      onChange([...value, tag]);
    }
    setInputValue("");
    setSuggestions([]);
    setFetchingState("idle");
  };

  // Remove a tag and call onChange.
  const removeTag = (tag: Tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="autosuggest input-container" ref={ref}>
      {label && <span className="label">{label}</span>}
      <div className="autosuggest-tag-input">
        <div className="tag-input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
          />
          {value.length > 0 && (
            <div className="selected-tags">
              {value.map((tag) => (
                <Tagchip key={tag.displayName}
                  onClick={() => removeTag(tag)}
                  value={tag}
                  overrideDisplayName={`${tag.displayName} ×`} />
              ))}
            </div>
          )}
        </div>
        {(deferredInput) && (
          <div className="suggestions-dropdown">
            {fetchingState !== "fetching" && suggestions.length == 0 && <span className="no-results">no results</span>}
            <CgSpinnerAlt className={`spinner ${fetchingState !== "fetching" ? "hidden" : ""}`} />

            {suggestions.map((suggestion) => (
              <Tagchip key={suggestion.displayName} onClick={() => addTag(suggestion)} value={suggestion} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
