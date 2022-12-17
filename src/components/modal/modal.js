import "./modal.scss";
import {useEffect, useRef, useState} from "react";
import Button from "../button/button";

const Modal = function(props) {
    const {title = '', onClose, content = null, afterClose} = props;
    const defaultSize = {
        width: 500,
        height: 400
    };
    const size = {...defaultSize, ...props.size};

    const [active, setActive] = useState(false);

    useEffect(() => {
        //для плавной анимации открытия
        setActive(true);
    }, [])

    const ref = useRef();

    const closeModal = (e) => {
        ref.current.style.opacity = 0;
        //задержка для анимации закрытия
        setTimeout(() => {
            setActive(false);
            if (typeof afterClose === 'function') {
                afterClose();
            }
        }, 500);
    }

    const modalStyles = {
        width: `${size.width}px`,
        height: `${size.height}px`
    };

    const totalLength = size.width * 2 + size.height * 2;
    const svgStyles = {
        strokeDashoffset: totalLength,
        strokeDasharray: totalLength
    }

    const header = (
        <div className='modal-container-header'>
            <div className='modal-container-header-text'>
                {title}
            </div>
            <Button.Close onClose={closeModal}/>
        </div>
    );

    return (
        <div ref={ref} className={`window modal ${active ? 'active' : ''}`} onClick={closeModal} >
            <div className='modal-container' style={modalStyles} onClick={event => event.stopPropagation()}>
                <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                    <rect style={svgStyles} x="0" y="0" fill="none" width="100%" height="100%" rx="3" ry="3"/>
                </svg>
                <div className='modal-container-wrapper'>
                    {header}
                    <div className='modal-container-content'>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;