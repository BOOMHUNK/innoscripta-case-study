// TextInput.tsx
import { useDebounce } from "@/hooks";
import { useState, useEffect, useDeferredValue, ChangeEvent, InputHTMLAttributes } from "react";
import "./style.css";

export type TextInputProps = {
  label?: string;
  iconElement?: React.ReactNode;
  debounceTime?: number;
  /** Callback fired with the debounced & deferred value */
  onChange?: (value: string) => void;
  /** Initial value (optional) */
  value?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">;

export default function TextInput({
  label,
  iconElement,
  debounceTime = 500,
  value,
  onChange,
  ...props
}: TextInputProps) {
  const [internalValue, setInternalValue] = useState(value || "");

  // Keep internal state in sync if parent value changes.
  useEffect(() => {
    setInternalValue(value || "");
  }, [value]);

  // Apply debouncing.
  const debouncedValue = useDebounce(internalValue, debounceTime);
  // Defer the debounced value for smoother UI.
  const deferredValue = useDeferredValue(debouncedValue);

  // Call onChange when the deferred value changes.
  useEffect(() => {
    if (onChange) {
      onChange(deferredValue);
    }
  }, [deferredValue, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
  };

  return (
    <div className="input-container">
      {label && <span className="label">{label}</span>}
      {iconElement && <div className="icon">{iconElement}</div>}
      <input
        className="text-input"
        {...props}
        value={internalValue}
        onChange={handleChange}
      />
    </div>
  );
}
