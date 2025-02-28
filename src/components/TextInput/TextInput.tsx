import { InputHTMLAttributes } from "react"
import "./style.css";

type TextInputProps = {
    label?: string;
    iconElement?: React.ReactNode;

} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ label, iconElement, ...props }: TextInputProps) {
    return (
        <div className="input-container">
            {label && <span className="label">{label}</span>}
            {iconElement && <div className="icon">{iconElement}</div>}
            <input className="text-input"
                {...props}
            />
        </div>
    )
}