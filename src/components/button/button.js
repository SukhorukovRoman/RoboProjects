import './button.scss';

const Button = {
    Close: (props) => {
        const {onClose} = props;
        return (
            <div className="button button__close" onClick={onClose}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
                </svg>
            </div>
        )
    },
    Regular: (props) => {
        const {text, type, action, disabled = false} = props;
        return (
            <button 
            type={type ? type : null} 
            onClick={"function" === typeof action ? action : null} 
            className="button button__regular"
            disabled={disabled}
            >
                {text || ''}
            </button>
        )
    },
    Delete: (props) => {
        const {action, data, loading} = props;
        const btnHandler = function(e) {
            e.stopPropagation();

            if (typeof action === 'function' && !loading) {
                action(data);
            }
        }
        const btnIcon = loading
            ? (
            <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                 preserveAspectRatio="xMidYMid" className="uil-spiral">
                <rect width="25" height="25" className="bk" fill="none"/>
                <path
                    d="M54.5 89.9c-9.6 0-18.6-3.9-25.4-11 -6.8-7.1-10.5-16.6-10.5-26.7 0-8.9 3.3-17.2 9.2-23.5S41.7 19 50.2 19c8.4 0 16.4 3.4 22.3 9.7 6 6.3 9.2 14.6 9.2 23.5 0 15.8-12.2 28.7-27.3 28.7 -15 0-27.3-12.9-27.3-28.7 0-13.3 10.3-24.2 23-24.2s23 10.8 23 24.2c0 10.8-8.4 19.6-18.7 19.6 -10.3 0-18.7-8.8-18.7-19.6 0-8.3 6.5-15.1 14.4-15.1 7.9 0 14.4 6.8 14.4 15.1 0 5.8-4.5 10.6-10.1 10.6s-10.1-4.8-10.1-10.6c0-3.4 2.6-6.1 5.8-6.1 3.2 0 5.8 2.7 5.8 6.1 0 0.9-0.7 1.6-1.5 1.6 -0.8 0-1.5-0.7-1.5-1.6 0-1.6-1.3-2.9-2.8-2.9 -1.5 0-2.8 1.3-2.8 2.9 0 4.1 3.2 7.4 7.1 7.4s7.1-3.3 7.1-7.4c0-6.6-5.1-12-11.4-12 -6.3 0-11.4 5.4-11.4 12 0 9.1 7 16.5 15.7 16.5 8.6 0 15.7-7.4 15.7-16.5 0-11.6-9-21-20-21s-20 9.4-20 21c0 14.1 10.9 25.5 24.3 25.5s24.3-11.4 24.3-25.5c0-16.6-12.8-30-28.6-30 -15.8 0-28.6 13.5-28.6 30 0 9.2 3.4 17.9 9.6 24.4 6.2 6.5 14.5 10.1 23.2 10.1s17-3.6 23.2-10.1c6.2-6.5 9.6-15.2 9.6-24.4 0-10.4-3.9-20.2-10.9-27.6 -7-7.4-16.3-11.4-26.3-11.4s-19.3 4.1-26.3 11.4S13 41.8 13 52.2c0 0.9-0.7 1.6-1.5 1.6S10 53.1 10 52.2c0-11.3 4.2-21.9 11.8-29.9 7.6-8 17.7-12.4 28.4-12.4 10.7 0 20.8 4.4 28.4 12.4 7.6 8 11.8 18.6 11.8 29.9 0 10.1-3.7 19.5-10.5 26.7C73.1 86 64.1 89.9 54.5 89.9z"
                    fill="#fff">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s"
                                      repeatCount="indefinite"/>
                </path>
            </svg>
            )
            : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.9995 0H13.9998V2H13.9995V4H15.9995H17.9995H19.9995V6H17.9995V18H17.9998V20L17.9995 20H15.9995H3.99976L1.99976 20V18V6H-0.000488281V4H1.99976H3.99976H5.99976V2V0H7.99976H11.9995H13.9995ZM11.9995 2H7.99976V4H11.9995V2ZM11.9995 6H7.99976H5.99976L3.99976 6V18H15.9995V6L13.9995 6H11.9995Z" fill="black"/>
                </svg>
            )
        return (
            <div className="button delete" onClick={btnHandler}>
                {btnIcon}
            </div>
        )
    },

    Loader: () => {
        return (
            <div className="button loader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}

export default Button