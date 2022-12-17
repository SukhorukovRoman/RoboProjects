import "./special.scss";

const Special = {
    File: function(props) {
        const {text, color = "#FF5C5C", children} = props;
        return (
            <div className="special special__file">
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M72 4H4V124H96V28H72V4Z" fill={color}/>
                    <path d="M80 4H76V24H96V20H92V16H88V12H84V8H80V4Z" fill={color}/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H80V4H76V24H96V20H100V104H112V108H120V112H128V128H0V0ZM96 28H72V4H4V124H96V28Z" fill="black"/>
                    <path d="M92 16H96V20H92V16Z" fill="black"/>
                    <path d="M88 12H92V16H88V12Z" fill="black"/>
                    <path d="M84 8H88V12H84V8Z" fill="black"/>
                    <path d="M84 8V4H80V8H84Z" fill="black"/>
                </svg>
                <span className="text">{text}</span>
                <div className="img">
                    {children}
                </div>
            </div>
        )
    },
    Folder: function(props) {
        const {text, color = "#FF5C5C", children} = props;
        return (
            <div className="special special__folder">
                <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 4V12H4V84H8V88H16V92H24V96H32V100H40V104H48V108H56V112H64V116H72V120H80V124H88V52H92V124H96V36H92V32H88V28H80V24H72V20H56V24H52V20H48V16H44V12H36V8H28V4H12ZM84 48H88V52H84V48ZM76 44H84V48H76V44ZM68 40H76V44H68V40ZM60 36H68V40H60V36ZM52 32H60V36H52V32ZM44 28H52V32H44V28ZM36 24H44V28H36V24ZM28 20H36V24H28V20ZM20 16H28V20H20V16ZM20 16V12H12V16H20Z" fill={color}/>
                        <path d="M8 0H28V4H12V12H4V84H8V88H0V8H8V0Z" fill="black"/>
                        <path d="M16 92V88H8V92H16Z" fill="black"/>
                        <path d="M24 96V92H16V96H24Z" fill="black"/>
                        <path d="M32 100V96H24V100H32Z" fill="black"/>
                        <path d="M40 104V100H32V104H40Z" fill="black"/>
                        <path d="M48 108V104H40V108H48Z" fill="black"/>
                        <path d="M56 112V108H48V112H56Z" fill="black"/>
                        <path d="M64 116V112H56V116H64Z" fill="black"/>
                        <path d="M72 120V116H64V120H72Z" fill="black"/>
                        <path d="M80 124V120H72V124H80Z" fill="black"/>
                        <path d="M88 52V124H80V128H108V124H112V120H116V116H120V112H124V108H128V88H120V84H112V80H100V36H96V32H92V28H88V24H80V20H72V16H56V20H52V16H48V12H44V8H36V4H28V8H36V12H44V16H48V20H52V24H56V20H72V24H80V28H88V32H92V36H96V124H92V52H88Z" fill="black"/>
                        <path d="M84 48V52H88V48H84Z" fill="black"/>
                        <path d="M76 44H84V48H76V44Z" fill="black"/>
                        <path d="M68 40H76V44H68V40Z" fill="black"/>
                        <path d="M60 36H68V40H60V36Z" fill="black"/>
                        <path d="M52 32H60V36H52V32Z" fill="black"/>
                        <path d="M44 28H52V32H44V28Z" fill="black"/>
                        <path d="M36 24H44V28H36V24Z" fill="black"/>
                        <path d="M28 20H36V24H28V20Z" fill="black"/>
                        <path d="M20 16H28V20H20V16Z" fill="black"/>
                        <path d="M20 16V12H12V16H20Z" fill="black"/>
                    </g>
                </svg>
                <span className="text">{text}</span>
                <div className="img">
                    {children}
                </div>
            </div>
        )
    }
}

export default Special;