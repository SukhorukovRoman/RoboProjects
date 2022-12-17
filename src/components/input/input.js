import "./input.scss";
import {useState} from "react";

const Input = {
    Text: function(props) {
        const {name = '', text = '', value, maxLength = 100, minLength = 0, onChange, mandatory = false} = props;

        const onInputChange = (e) => {
            const value = e.currentTarget?.value || ''
            isValid = !mandatory || (value && value.length >= minLength);
            if (typeof onChange === 'function') {
                onChange({
                    value,
                    name,
                    isValid
                });
            }
        }

        let isValid = !mandatory || value && value.length >= minLength;
        const inputClass = `input input__text ${!isValid ? 'error' : ''}`

        return (
            <div className={inputClass}>
                <input
                    type="text"
                    value={value}
                    name={name}
                    id={name}
                    onChange={onInputChange}
                />
                <label htmlFor={name}>{text}</label>
            </div>
        )
    },
    Password: function(props) {
        const {name = '', text = '', value, maxLength = 100, minLength = 0, onChange, mandatory = false} = props;

        const onInputChange = (e) => {
            const value = e.currentTarget?.value || ''
            isValid = !mandatory || (value && value.length >= minLength);
            if (typeof onChange === 'function') {
                onChange({
                    value,
                    name,
                    isValid
                });
            }
        }

        let isValid = !mandatory || value && value.length >= minLength;
        const inputClass = `input input__password ${!isValid ? 'error' : ''}`

        return (
            <div className={inputClass}>
                <input
                    type="password"
                    value={value}
                    name={name}
                    id={name}
                    onChange={onInputChange}
                />
                <label htmlFor={name}>{text}</label>
            </div>
        )
    },

    Select: function(props) {
        const {name, text, mandatory, onChange, value, onSelect} = props;
        let {store = []} = props;
        const emptyValue = {
            id: '',
            value: ''
        };
        store = [emptyValue, ...store];
        const defaultValue = store.find(item => !!item.default)?.id || store[0]?.id || '';

        const renderOptions = () => {
            return store.map(option => {
                const {id, value} = option;
                return (
                    <option value={id} key={id}>{value}</option>
                )
            })
        };

        const onInputChange = (e) => {
            const value = e.currentTarget?.value || '';
            if (typeof onChange === 'function') {
                isValid = !mandatory || !!value;
                onChange({
                    value,
                    name,
                    isValid
                });
            }
            if (typeof onSelect === 'function') {
                onSelect(value);
            }
        }

        let isValid = !mandatory || !!value;
        const inputClass = `input input__select ${!isValid ? 'error' : ''}`;
        const optionsEl = renderOptions();

        return (
            <div className={inputClass}>
                <select name={name} onChange={onInputChange} defaultValue={value}>
                    {optionsEl}
                </select>
                <label htmlFor={name}>{text}</label>
            </div>
        )
    },
    File: function(props) {
        const {name, text, onChange, value, mandatory, types, icon} = props;
        const [isFileUploaded, setIsFileUploaded] = useState(false);
        let fileName = '';

        let isValid = !mandatory || value;
        const inputClass = `input input__file ${!isValid ? 'error' : ''}`

        const onInputChange = (e) => {
            const file = e.currentTarget?.files[0];
            fileName = file?.name || '';
            setIsFileUploaded(fileName);
            let isValid = !!fileName;
            if (typeof onChange === 'function') {
                onChange(file, name, isValid);
                onChange({
                    value: file,
                    name,
                    isValid,
                    type: 'file'
                })
            }
        }

        let fileIcon;
        switch (icon) {
            case "img":
                fileIcon = (
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M3.25 3C3.25 2.0335 4.0335 1.25 5 1.25H15C15.4142 1.25 15.75 1.58579 15.75 2V6.25H20C20.4142 6.25 20.75 6.58579 20.75 7V21C20.75 21.9665 19.9665 22.75 19 22.75H5C4.03351 22.75 3.25 21.9665 3.25 21V3ZM5 2.75C4.86193 2.75 4.75 2.86193 4.75 3V21C4.75 21.1381 4.86192 21.25 5 21.25H19C19.1381 21.25 19.25 21.1381 19.25 21V7.75H15C14.5858 7.75 14.25 7.41421 14.25 7V2.75H5Z"
                              fill="#1C1B1F"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.4697 1.46967C14.7626 1.17678 15.2374 1.17678 15.5303 1.46967L20.5303 6.46967C20.8232 6.76256 20.8232 7.23744 20.5303 7.53033C20.2374 7.82322 19.7626 7.82322 19.4697 7.53033L14.4697 2.53033C14.1768 2.23744 14.1768 1.76256 14.4697 1.46967Z"
                              fill="#1C1B1F"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M9 7.25C8.30964 7.25 7.75 7.80964 7.75 8.5C7.75 9.19036 8.30964 9.75 9 9.75C9.69036 9.75 10.25 9.19036 10.25 8.5C10.25 7.80964 9.69036 7.25 9 7.25ZM6.25 8.5C6.25 6.98122 7.48122 5.75 9 5.75C10.5188 5.75 11.75 6.98122 11.75 8.5C11.75 10.0188 10.5188 11.25 9 11.25C7.48122 11.25 6.25 10.0188 6.25 8.5Z"
                              fill="#1C1B1F"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M16.7698 9.80024C17.0592 9.9118 17.25 10.1899 17.25 10.5V18.5C17.25 18.9142 16.9142 19.25 16.5 19.25H7.5C7.08579 19.25 6.75 18.9142 6.75 18.5V14C6.75 13.7498 6.87483 13.516 7.08281 13.3768C7.29078 13.2376 7.55449 13.2113 7.78587 13.3066L11.5429 14.8556L15.9441 9.99654C16.1523 9.7667 16.4805 9.68868 16.7698 9.80024ZM15.75 12.4452L12.3006 16.2535C12.0881 16.4881 11.7514 16.564 11.4588 16.4434L8.25 15.1205V17.75H15.75V12.4452Z"
                              fill="#1C1B1F"/>
                    </svg>
                )
                break;
            case "archive":
                fileIcon = (
                    <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 5V6H5V5H4ZM6 2H5V3H6V2ZM4 3V4H5V3H4ZM6 4H5V5H6V4ZM11.5312 3.0625L8.9375 0.4375C8.65625 0.15625 8.25 0 7.875 0H1.5C0.65625 0 0 0.6875 0 1.5V14.5C0 15.3438 0.65625 16 1.5 16H10.5C11.3125 16 12 15.3438 12 14.5V4.125C12 3.75 11.8125 3.34375 11.5312 3.0625ZM8 1.625L10.375 4H8V1.625ZM10.5 14.5H1.5V1.5H3.96875V2H4.96875V1.5H6.5V4.75C6.5 5.1875 6.8125 5.5 7.25 5.5H10.5V14.5ZM6.0625 8.3125C6.03125 8.15625 5.875 8 5.6875 8H5V7H4V8L3.375 11.0625C3.1875 12.0625 3.9375 13 5 13C6.03125 13 6.78125 12.0625 6.59375 11.0625L6.0625 8.3125ZM5 12.2188C4.4375 12.2188 3.96875 11.8125 3.96875 11.375C3.96875 10.9062 4.4375 10.5312 5 10.5312C5.5625 10.5312 6 10.9062 6 11.375C6 11.8125 5.5625 12.2188 5 12.2188ZM6 6H5V7H6V6Z" fill="#333333"/>
                    </svg>
                )
                break;
            case "pdf":
                fileIcon = (
                    <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5312 3.0625L8.9375 0.4375C8.65625 0.15625 8.25 0 7.875 0H1.5C0.65625 0 0 0.6875 0 1.5V14.5C0 15.3438 0.65625 16 1.5 16H10.5C11.3125 16 12 15.3438 12 14.5V4.125C12 3.75 11.8125 3.34375 11.5312 3.0625ZM10.375 4H8V1.625L10.375 4ZM1.5 14.5V1.5H6.5V4.75C6.5 5.1875 6.8125 5.5 7.25 5.5H10.5V14.5H1.5ZM9.3125 10.0312C8.9375 9.65625 7.84375 9.75 7.28125 9.8125C6.75 9.5 6.40625 9.03125 6.15625 8.375C6.25 7.875 6.46875 7.09375 6.3125 6.625C6.1875 5.8125 5.125 5.875 4.96875 6.4375C4.84375 6.9375 4.96875 7.65625 5.1875 8.53125C4.875 9.28125 4.40625 10.2812 4.09375 10.875C3.46875 11.1875 2.625 11.6875 2.5 12.3125C2.40625 12.8125 3.3125 14.0312 4.875 11.3438C5.5625 11.0938 6.34375 10.8125 7 10.6875C7.59375 11.0312 8.28125 11.2188 8.75 11.2188C9.5625 11.2188 9.625 10.3438 9.3125 10.0312ZM3.125 12.4688C3.28125 12.0312 3.875 11.5312 4.0625 11.375C3.46875 12.3125 3.125 12.4688 3.125 12.4688ZM5.65625 6.5C5.90625 6.5 5.875 7.5 5.71875 7.78125C5.59375 7.34375 5.59375 6.5 5.65625 6.5ZM4.90625 10.7812C5.21875 10.25 5.46875 9.625 5.6875 9.0625C5.9375 9.53125 6.25 9.90625 6.625 10.1562C5.96875 10.3125 5.40625 10.5625 4.90625 10.7812ZM9 10.625C9 10.625 8.84375 10.8125 7.84375 10.375C8.9375 10.2812 9.125 10.5312 9 10.625Z" fill="#333333"/>
                    </svg>
                )
                break;
            default:
                fileIcon = (
                    <svg viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5312 3.0625L8.9375 0.4375C8.65625 0.15625 8.25 0 7.875 0H1.5C0.65625 0 0 0.6875 0 1.5V14.5C0 15.3438 0.65625 16 1.5 16H10.5C11.3125 16 12 15.3438 12 14.5V4.125C12 3.75 11.8125 3.34375 11.5312 3.0625ZM10.375 4H8V1.625L10.375 4ZM1.5 14.5V1.5H6.5V4.75C6.5 5.1875 6.8125 5.5 7.25 5.5H10.5V14.5H1.5Z" fill="#333333"/>
                    </svg>
                )

        }


        return (
            <div className={inputClass}>
                <input type="file" name={name} id={name} onChange={onInputChange} accept={types}/>
                <label htmlFor={name} className={isFileUploaded ? "file-added" : ""}>
                    <span>{isFileUploaded ? isFileUploaded : text}</span>
                    {fileIcon}
                </label>
            </div>
        )
    },
}


export default Input