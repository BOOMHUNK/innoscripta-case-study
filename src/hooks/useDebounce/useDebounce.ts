import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value change
 * @param value - The input value to debounce
 * @param delay - Delay in milliseconds
 */
export default function useDebounce<T>(value: T, delay = 100): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}
