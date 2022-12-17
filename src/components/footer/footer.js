import './footer.scss';

const Footer = function(props) {
    const windowWidth = window.innerWidth;

    const socialLinksIcons = {
        vk: (
            <svg viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 1.33334H4V2.33334H3V1.33334Z" fill="black"/>
                <path d="M5 4.33334H6V5.33334H5V4.33334Z" fill="black"/>
                <path d="M12 1.33334H13V2.33334H12V1.33334Z" fill="black"/>
                <path d="M14 6.33334H15V7.33334H14V6.33334Z" fill="black"/>
                <path d="M15 7.33334H16V8.33334H15V7.33334Z" fill="black"/>
                <path d="M4 7.33334H5V8.33334H4V7.33334Z" fill="black"/>
                <path d="M3 6.33334H4V7.33334H3V6.33334Z" fill="black"/>
                <path d="M3 1.33334V0.333344H0V2.33334H1V1.33334H3Z" fill="black"/>
                <path d="M2 2.33334H1V4.33334H2V2.33334Z" fill="black"/>
                <path d="M5 2.33334H4V4.33334H5V2.33334Z" fill="black"/>
                <path d="M6 4.33334H7V1.33334H9V5.33334H11V4.33334H10V0.333344H6V4.33334Z" fill="black"/>
                <path d="M11 4.33334H12V2.33334H11V4.33334Z" fill="black"/>
                <path d="M13 0.333344V1.33334H15V2.33334H16V0.333344H13Z" fill="black"/>
                <path d="M15 2.33334H14V4.33334H15V2.33334Z" fill="black"/>
                <path d="M14 4.33334H13V6.33334H14V4.33334Z" fill="black"/>
                <path d="M15 9.33334V8.33334H11V9.33334H15Z" fill="black"/>
                <path d="M11 8.33334V7.33334H9V8.33334H11Z" fill="black"/>
                <path d="M5 8.33334V9.33334H9V8.33334H5Z" fill="black"/>
                <path d="M2 6.33334H3V4.33334H2V6.33334Z" fill="black"/>
            </svg>
        ),
        telegram: (
            <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.33334H1V7.33334H0V6.33334Z" fill="black"/>
                <path d="M9 12.3333H10V13.3333H9V12.3333Z" fill="black"/>
                <path d="M8 11.3333H9V12.3333H8V11.3333Z" fill="black"/>
                <path d="M6 7.33334H7V8.33334H6V7.33334Z" fill="black"/>
                <path d="M7 6.33334H8V7.33334H7V6.33334Z" fill="black"/>
                <path d="M8 5.33334H9V6.33334H8V5.33334Z" fill="black"/>
                <path d="M9 4.33334H10V5.33334H9V4.33334Z" fill="black"/>
                <path d="M10 3.33334H11V4.33334H10V3.33334Z" fill="black"/>
                <path d="M11 2.33334H12V3.33334H11V2.33334Z" fill="black"/>
                <path d="M1 5.33334V6.33334H3V5.33334H1Z" fill="black"/>
                <path d="M3 8.33334V7.33334H1V8.33334H3Z" fill="black"/>
                <path d="M6 11.3333H5V9.33334H6V8.33334H3V9.33334H4V13.3333H5V12.3333H6V11.3333Z" fill="black"/>
                <path d="M8 10.3333H7V9.33334H6V11.3333H8V10.3333Z" fill="black"/>
                <path d="M11 9.33334H10V12.3333H11V9.33334Z" fill="black"/>
                <path d="M12 6.33334H11V9.33334H12V6.33334Z" fill="black"/>
                <path d="M3 4.33334V5.33334H5V4.33334H3Z" fill="black"/>
                <path d="M5 3.33334V4.33334H7V3.33334H5Z" fill="black"/>
                <path d="M7 2.33334V3.33334H9V2.33334H7Z" fill="black"/>
                <path d="M11 2.33334V1.33334H9V2.33334H11Z" fill="black"/>
                <path d="M11 0.333344V1.33334H13V0.333344H11Z" fill="black"/>
                <path d="M14 1.33334H13V3.33334H14V1.33334Z" fill="black"/>
                <path d="M13 3.33334H12V6.33334H13V3.33334Z" fill="black"/>
            </svg>

        ),
        viber: (
            <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M200 16.5V33H256H312V50V67H345H378V83.5V100H395H412V117V134H428.5H445V167V200H462H479V272.5V345H495.5H512V272.5V200H495.5H479V167V134H462H445V117V100H428.5H412V83.5V67H395H378V50V33H345H312V16.5V0H256H200V16.5ZM33 83.5V100H16.5H0V189V278H16.5H33V311.5V345H50H67V361.5V378H83.5H100V395V412H117H134V428.5V445H150.5H167V462V479H200.5H234V495.5V512H323H412V495.5V479H428.5H445V412V345H428.5H412V328.5V312H367.5H323V328.5V345H306H289V361.5V378H261.5H234V361.5V345H217H200V328.5V312H183.5H167V295V278H150.5H134V250.5V223H150.5H167V206V189H183.5H200V144.5V100H183.5H167V83.5V67H100H33V83.5ZM167 144.5V189H150.5H134V206V223H117H100V250.5V278H117H134V295V312H150.5H167V328.5V345H183.5H200V361.5V378H217H234V395V412H261.5H289V395V378H306H323V361.5V345H367.5H412V412V479H323H234V462V445H200.5H167V428.5V412H150.524H134.048L133.774 395.25L133.5 378.5L116.75 378.226L100 377.952V361.476V345H83.5H67V311.5V278H50H33V189V100H100H167V144.5ZM245 117.013V134.027L278.25 133.763L311.5 133.5L311.774 116.75L312.048 100H278.524H245V117.013ZM312 150.5V167H328.5H345V183.5V200H361.5H378V183.5V167H361.5H345V150.5V134H328.5H312V150.5ZM378.667 200.667C378.3 201.033 378 216.108 378 234.167V267H395H412V233.5V200H395.667C386.683 200 379.033 200.3 378.667 200.667Z" fill="black"/>
            </svg>
        ),
        whatsapp: (
            <svg viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_0_1" fill="white">
                    <path d="M15 9H14V10H15V9Z"/>
                    <path d="M2 1H1V2H2V1Z"/>
                    <path d="M15 1H14V2H15V1Z"/>
                    <path d="M3 11H2V12H3V11Z"/>
                    <path d="M2 12H1V13H2V12Z"/>
                    <path d="M0 12H1V2H0V12Z"/>
                    <path d="M14 1V0H2V1H14Z"/>
                    <path d="M15 9H16V2H15V9Z"/>
                    <path d="M14 11V10H3V11H14Z"/>
                </mask>
                <path d="M15 9H14V10H15V9Z" fill="#D9D9D9"/>
                <path d="M2 1H1V2H2V1Z" fill="#D9D9D9"/>
                <path d="M15 1H14V2H15V1Z" fill="#D9D9D9"/>
                <path d="M3 11H2V12H3V11Z" fill="#D9D9D9"/>
                <path d="M2 12H1V13H2V12Z" fill="#D9D9D9"/>
                <path d="M0 12H1V2H0V12Z" fill="#D9D9D9"/>
                <path d="M14 1V0H2V1H14Z" fill="#D9D9D9"/>
                <path d="M15 9H16V2H15V9Z" fill="#D9D9D9"/>
                <path d="M14 11V10H3V11H14Z" fill="#D9D9D9"/>
                <path d="M14 9V8H13V9H14ZM15 10V11H16V10H15ZM1 1V0H0V1H1ZM2 2V3H3V2H2ZM14 0H15V-1H14V0ZM2 0V-1H1V0H2ZM16 9V10H17V9H16ZM16 2H17V1H16V2ZM15 1H16V0H15V1ZM14 2H13V3H14V2ZM0 12H-1V13H0V12ZM14 11V12H15V11H14ZM3 10V9H2V10H3ZM2 11V10H1V11H2ZM3 12V13H4V12H3ZM1 13H0V14H1V13ZM2 13V14H3V13H2ZM0 2V1H-1V2H0ZM15 8H14V10H15V8ZM13 9V10H15V9H13ZM14 11H15V9H14V11ZM16 10V9H14V10H16ZM2 0H1V2H2V0ZM0 1V2H2V1H0ZM1 3H2V1H1V3ZM3 2V1H1V2H3ZM15 1V0H13V1H15ZM1 0V1H3V0H1ZM15 10H16V8H15V10ZM16 1H15V3H16V1ZM15 0H14V2H15V0ZM13 1V2H15V1H13ZM14 3H15V1H14V3ZM16 2V1H14V2H16ZM0 13H1V11H0V13ZM15 11V10H13V11H15ZM2 10V11H4V10H2ZM3 10H2V12H3V10ZM1 11V12H3V11H1ZM2 13H3V11H2V13ZM4 12V11H2V12H4ZM2 11H1V13H2V11ZM0 12V13H2V12H0ZM1 14H2V12H1V14ZM3 13V12H1V13H3ZM1 1H0V3H1V1ZM14 -1H2V1H14V-1ZM2 2H14V0H2V2ZM14 9H3V11H14V9ZM3 12H14V10H3V12ZM14 2V9H16V2H14ZM17 9V2H15V9H17ZM-1 2V12H1V2H-1ZM2 12V2H0V12H2Z" fill="black" mask="url(#path-1-inside-1_0_1)"/>
                <path d="M5.23529 5.9375L4.41176 5.0625L4 4.625L4.41176 4.1875L4 3.75L4.82353 2.875L5.64706 2L6.47059 2.875L7.29412 3.75L6.47059 4.625L6.88235 5.0625L7.70588 5.9375L8.52941 6.8125L8.94118 6.375L9.35294 5.9375L9.76471 6.375L10.1765 6.8125L10.5882 7.25L11 7.6875L10.5882 8.125L9.76471 8.5625L8.94118 9L8.52941 8.5625L8.11765 8.125L7.70588 8.5625L6.88235 7.6875L6.05882 6.8125L5.23529 5.9375Z" stroke="black"/>
            </svg>
        ),
        odnoklassniki: (
            <svg viewBox="0 0 16 25" className="odnoklassniki" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8V4V3H4V2H5V1H11V2H12V3H13V4V8H12V10H11V11.5H6H5V10H4V8H3Z" stroke="white" fill="none"/>
                <path d="M1 15V14V12.5H4V13V13.5H5.5V14H8H11V13.5H13V12.5H15V14V15H14V16H12V17H10V18H11V19H12V20H13V21H14V22H15V24H12V23H11V22H10V21H9V20H7V21H6V22H5V23H4V24H1V22H2V21H3V20H4V19H5V18H6V17H4V16H2V15H1Z" stroke="white" fill="none"/>
            </svg>


        )
    }

    const getFooterDescr = () => {
        if (windowWidth > 576) {
            return (
                <div className="footer__descr">
                    <a href="tel:+74812564075">Телефон администратора 56-40-75</a>
                    <span>Часы работы: пн-пт с 15-20, сб-вс с 9-20</span>
                    <div>
                        <a href="https://vk.com/ska777" target="_blank">Директор: Клищ Андрей Андреевич</a>
                        <a href="tel:+79203016020"> +7 (920) 301-60-20</a>
                    </div>
                    <a href="mailto:info@robosmol.ru">info@robosmol.ru</a>
                </div>
            )
        } else {
            return (
                <div className="footer__descr">
                    <a href="tel:+74812564075">56-40-75</a>
                    <span>пн-пт с 15-20, сб-вс с 9-20</span>
                    <div>
                        <a href="https://vk.com/ska777" target="_blank">Клищ Андрей Андреевич</a>
                        <br/>
                        <a href="tel:+79203016020"> +7 (920) 301-60-20</a>
                    </div>
                    <a href="mailto:info@robosmol.ru">info@robosmol.ru</a>
                </div>
            )
        }
    }

    const getFooterCreater = () => {
        if (windowWidth > 576) {
            return (
                <div className="footer__creater">
                    <span>@ 2022 Created by</span><a href="https://vk.com/3p141592" target="_blank">Сухоруков Роман</a>
                </div>
            )
        } else {
            return (
                <div className="footer__creater">
                    <span>@2022 </span><a href="https://vk.com/3p141592" target="_blank">Сухоруков Роман</a>
                </div>
            )
        }
    }

    const footerDescrEl = getFooterDescr();
    const footerCreaterEl = getFooterCreater();



    return (
        <footer className="footer">
            <div className="footer__social">
                <a href="https://vk.com/roborabbit" target="_blank" title="vk">
                    {socialLinksIcons.vk}
                </a>
                <a href="https://t.me/RoboRabbit67" target="_blank" title="telegram">
                    {socialLinksIcons.telegram}
                </a>
                <a href="viber://add?number=79203016020" target="_blank" title='viber'>
                    {socialLinksIcons.viber}
                </a>
                <a href="https://wa.me/79203016020" target="_blank" title="whatsapp">
                    {socialLinksIcons.whatsapp}
                </a>
                <a href="https://ok.ru/group/58092951240747" target="_blank" title="odnoklassniki">
                    {socialLinksIcons.odnoklassniki}
                </a>
            </div>
            {footerDescrEl}
            {footerCreaterEl}
        
        </footer>
    )
}

export {
    Footer
}