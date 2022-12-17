import "./tabs.scss";
import {useState, Children, cloneElement} from "react";

const Tabs = function(props) {
    const {tabNavs, tabContent} = props;
    const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || 0);

    const tabNavsEl = Children.map(tabNavs.props.children, (tabNav, i) => {
        return cloneElement(tabNav, {
            setActiveTab: setActiveTab,
            activeTab: activeTab,
            id: i
        })
    });

    const tabContentEl = Children.map(tabContent.props.children, (tabContent, i) => {
        return cloneElement(tabContent, {
            activeTab: activeTab,
            id: i
        })
    });


    return (
        <div className="tabs">
            <div className="tabs__nav">
                {tabNavsEl}
            </div>
            <div className="tabs__content">
                {tabContentEl[activeTab]}
            </div>
        </div>
    )
}

export {
    Tabs
}