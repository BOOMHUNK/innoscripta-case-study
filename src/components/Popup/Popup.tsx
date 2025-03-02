
import "./style.css";
import { GrClose } from "react-icons/gr";
type PopupProps = {
    children?: React.ReactNode;
    title?: string;
    open?: boolean
    onClose?: () => void;
}

/**
 * A simple popup component that renders a modal dialog with a title, content, and close functionality.
 * 
 * @param children - The content to be displayed inside the popup.
 * @param title - The title to be displayed in the popup header.
 * @param open - A boolean indicating whether the popup should be displayed or not.
 * @param onClose - A callback function to be called when the popup is closed.
 * @returns The rendered Popup component.
 */
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