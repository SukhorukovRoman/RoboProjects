import "./project.scss";

const Project = {
    Game: function(props) {
        const {title = '', author, imgSrc, gameSrc, onClick, children} = props;
        const icon = (
            <svg viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H13V10H12V12H11V13H10V14H8V15H6V14H4V13H3V12H2V10H1V1Z" fill="white"/>
                <path d="M5 2H4V4H2V5H4V7H5V5H7V4H5V2Z" fill="black"/>
                <path d="M9 6H10V8H12V9H10V11H9V9H7V8H9V6Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M13 1V0H1V1H0V10H1V12H2V13H3V14H4V15H6V16H8V15H10V14H11V13H12V12H13V10H14V1H13ZM13 1V10H12V12H11V13H10V14H8V15H6V14H4V13H3V12H2V10H1V1H13Z" fill="black"/>
            </svg>
        )
        return (
            <div className="project project__game">
                <div className="project-header">
                    <span></span>
                    <p>
                        <span className="author">
                            <span>** </span>
                            {title}
                            <span> **</span>
                        </span>
                    </p>
                    {icon}
                </div>
                <a href={gameSrc} target='_blank' onClick={onClick} className="project-content">
                    <img className="project-content-img" src={imgSrc} alt={title}/>
                </a>
                <div className="project-footer">
                    {author}
                </div>
                {children ? children : null}
            </div>
        )
    },
    Video: function(props) {
        const {title = '', author, iframe, onClick, children} = props;
        const icon = (
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.999994H0V11H1V0.999994Z" fill="black"/>
                <path d="M1.00003 0L1 0.999994L3.00001 1V0H1.00003Z" fill="black"/>
                <path d="M3.00001 1L3 2.00001L5.00001 1.99999L5.00003 1.00001L3.00001 1Z" fill="black"/>
                <path d="M5.00001 1.99999V2.99999L7.00003 3L7 1.99999H5.00001Z" fill="black"/>
                <path d="M7.00003 3V4L9 4.00001L9.00001 3H7.00003Z" fill="black"/>
                <path d="M9 4.00001V5.00001L11 4.99999L11 4.00001H9Z" fill="black"/>
                <path d="M11 7.00001H12V4.99999H11V7.00001Z" fill="black"/>
                <path d="M9 6.99999V7.99999H11L11 7.00001L9 6.99999Z" fill="black"/>
                <path d="M7.00003 8V9H9.00001L9 7.99999L7.00003 8Z" fill="black"/>
                <path d="M5.00001 9.00001V10H7L7.00003 9L5.00001 9.00001Z" fill="black"/>
                <path d="M3 9.99999L3.00001 11L5.00003 11L5.00001 10L3 9.99999Z" fill="black"/>
                <path d="M1 11L1.00003 12H3.00001V11L1 11Z" fill="black"/>
                <path d="M3 1H1V11H3V10H5V9H7V8H9V7H11V5H9V4H7V3H5V2H3V1Z" fill="white"/>
            </svg>
        )

        function getIframe() {
            return {__html: iframe};
        }
        return (
            <div className="project project__video" onClick={onClick}>
                <div className="project-header">
                    <span></span>
                    <p>
                        <span className="author">
                            <span>** </span>
                            {title}
                            <span> **</span>
                        </span>
                    </p>
                    {icon}
                </div>
                <div className="project-content" dangerouslySetInnerHTML={getIframe()}>
                </div>
                <div className="project-footer">
                    {author}
                </div>
                {children ? children : null}
            </div>
        )
    },
    Website: function(props) {
        const {author, imgSrc, siteSrc, onClick, children} = props;
        const icon = (
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 0.00012207H15V1.00012H18V2.00012H19V3.00012H20V4.00012H21V5.00012H22V6.00012H23V8.00012V9.00012H24V11.0001V12.0001V13.0001V15.0001H23V16.0001V18.0001H22V19.0001H21V20.0001H20V21.0001H19V22.0001H18V23.0001H15V24.0001H9V23.0001H6V22.0001H5V21.0001H4V20.0001H3V19.0001H2V18.0001H1V16.0001V15.0001H0V13.0001V12.0001V11.0001V9.00012H1V8.00012V6.00012H2V5.00012H3V4.00012H4V3.00012H5V2.00012H6V1.00012H9V0.00012207ZM6 13.0001V16.0001H3V15.0001H2V13.0001H6ZM8 13.0001H16V16.0001H8V13.0001ZM18 13.0001V16.0001H21V15.0001H22V13.0001H18ZM6 8.00012V11.0001H2V9.00012H3V8.00012H6ZM8 11.0001H16V8.00012H8V11.0001ZM22 9.00012V11.0001H18V8.00012H21V9.00012H22ZM20 18.0001H17V19.0001V20.0001H16V21.0001H15V22.0001H17V21.0001H18V20.0001H19V19.0001H20V18.0001ZM15 18.0001H9V19.0001V20.0001H10V21.0001H11V22.0001H13V21.0001H14V20.0001H15V19.0001V18.0001ZM7 18.0001H4V19.0001H5V20.0001H6V21.0001H7V22.0001H9V21.0001H8V20.0001H7V19.0001V18.0001ZM7 6.00012H4V5.00012H5V4.00012H6V3.00012H7V2.00012H9V3.00012H8V4.00012H7V5.00012V6.00012ZM15 6.00012H9V5.00012V4.00012H10V3.00012H11V2.00012H13V3.00012H14V4.00012H15V5.00012V6.00012ZM20 6.00012H17V5.00012V4.00012H16V3.00012H15V2.00012H17V3.00012H18V4.00012H19V5.00012H20V6.00012Z" fill="white"/>
            </svg>
        )
        return (
            <div className="project project__website">
                <div className="project-header">
                    <p>
                        <span className="author">
                            <span>** </span>
                            {author}
                            <span> **</span>
                        </span>
                    </p>
                    {icon}
                </div>
                <a className="project-content" href={siteSrc} target='_blank' onClick={onClick}>
                    <img className="project-content-img" src={imgSrc} alt={author}/>
                </a>
                {children ? children : null}
            </div>
        )
    }
}

export default Project;

