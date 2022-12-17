import "./dots.scss";

const Dots = function(props) {
    const onClickFn = function() {
        if (typeof props.onClick == "function") {
            props.onClick()
        }
    }
    return (
        <div className="dots" onClick={onClickFn}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Dots;