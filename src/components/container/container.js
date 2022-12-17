import "./container.scss";

const Container = function(props) {
    const {children} = props;
    return (
        <div className="container">
            {children}
        </div>
    )
}

export {
    Container
}