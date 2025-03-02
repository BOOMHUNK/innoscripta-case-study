import { Tag } from "@/types";
import "./style.css";

type TagchipProps = {
    value: Tag;
    overrideDisplayName?: string;
    onClick?: (value: Tag) => any;
}

/**
 * Renders a tag chip component with the provided props.
 * 
 * used to render tags(categories, sources, authors) in the application.
 * @param overrideDisplayName - An optional string to override the display name of the tag.
 * @param value - The tag object to be displayed.
 * @param onClick - An optional callback function to be called when the tag chip is clicked.
 */
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