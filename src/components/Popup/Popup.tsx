
import "./style.css";
import { GrClose } from "react-icons/gr";
type PopupProps = {
    children?: React.ReactNode;
    title?: string;
    open?: boolean
    onClose?: () => void;
}

export default function Popup({ children, title, open, onClose }: PopupProps) {

    return (
        <div className="popup-container" style={{ display: open ? "initial" : "none" }} onClick={() => onClose && onClose()}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <>
                    <div className="popup-header"><span className="title"> {title && title}</span> <GrClose style={{ cursor: "pointer" }} onClick={() => onClose && onClose()} /></div>
                    <span className="separator"></span>
                </>
                <div className="popup-content">
                    {children && children}
                </div>
            </div>

        </div>
    )
}