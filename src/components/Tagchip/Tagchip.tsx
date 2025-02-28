import { Tag } from "@/types";
import "./style.css";

type TagchipProps = {
    value: Tag;
    overrideDisplayName?: string;
    onClick?: (value: Tag) => any;
}

export default function Tagchip({ overrideDisplayName: label, value, onClick }: TagchipProps) {
    return (
        <button key={value.displayName} onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick && onClick(value);
        }}
            className="tagchip">{label ? label : value.displayName}
        </button>
    )
}