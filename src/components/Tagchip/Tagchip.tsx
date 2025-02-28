import "./style.css";

type TagchipProps = {
    value: string;
    onClick?: (...args: any[]) => any;
}

export default function Tagchip({ value, onClick }: TagchipProps) {
    return (
        <button key={value} onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onClick && onClick();
        }}
            className="tagchip">{value}
        </button>
    )
}