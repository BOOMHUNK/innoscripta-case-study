import { useEffect } from "react";

/**
 * A React hook that listens for clicks outside of a given DOM element.
 * 
 * @param ref - A React ref object that references the DOM element to listen for outside clicks on.
 * @param callback - A function to be called when a click occurs outside of the referenced DOM element.
 */
export default function useOutsideListener(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
