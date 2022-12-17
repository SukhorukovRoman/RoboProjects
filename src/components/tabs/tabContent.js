import "./tabs.scss";

const TabContent= function(props) {
    const {children} = props;

    return (
        <div className={`tab__content`}>
            {children}
        </div>
    )
}

export default TabContent;