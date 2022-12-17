import "./tabs.scss";

const TabNavItem = function(props) {
    const {children, setActiveTab, activeTab, id} = props;
    const isActiveTab = activeTab === id;
    return (
        <li className={`tab__nav ${isActiveTab ? 'active' : ''}`}  onClick={() => {
            localStorage.setItem('activeTab', id);
            setActiveTab(id);
        }}>
            {children}
        </li>
    )
}

export default TabNavItem;