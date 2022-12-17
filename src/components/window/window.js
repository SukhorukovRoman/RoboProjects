import "./window.scss";
import Dots from "../dots/dots";

const Window = function(props) {
    const {title, children, icon, withoutHeader, style = {}} = props;

    const defaultIcon = (
        <svg width="100%" height="100%" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1V0H1V1H0V18H4V17H5V16H6V15H7V14H8H9V15H10V16H11V17H12V18H16V1H15ZM14 15H13V14H12V13H11V12H10V11H6V12H5V13H4V14H3V15H2V3H3V2H13V3H14V15Z" fill="white"/>
        </svg>
    )

    const headerEl = withoutHeader
        ? null
        : (
            <div className="window__header">
                <Dots/>
                <div className="window__header-title">{title}</div>
                <div className="window__header-icon">{icon? icon : defaultIcon}</div>
            </div>
        );

    return (
        <div className="window" style={style}>
            {headerEl}
            <div className="window__content">
                {children}
            </div>
        </div>
    )
}

export {
    Window
}