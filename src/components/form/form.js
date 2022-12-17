import "./form.scss";
import Button from "../button/button";
import React, {cloneElement} from "react";
import {useEffect, useState} from "react";

const Form = (props) => {
    const {inputsConf, title, collapsible, onSubmit, children, submitState} = props;
    //Если дочерний элемент 1 завернем его в массив
    const childEl = Array.isArray(children) ? children : [children];
    const [formData, setFormData] = useState({});
    let isDisabled = false;

    useEffect(() => {

    })

    const titleEl = (
        <span className="form__title">
            {title}
        </span>
    );

    const transformFormDataToSend = (formData, e) => {
        let transformedFormData = {
            files: {},
            data:{}
        };
        for (let key in formData) {
            const {value, type, isValid} = formData[key]
            if (type === 'file') {
                transformedFormData['files'][key] = value;
            } else {
                transformedFormData['data'][key] = value;
            }
        }
        return transformedFormData;
    }

    const onSubmitFn = async (e) => {
        e.preventDefault();
        if (typeof onSubmit === 'function') {
            onSubmit(transformFormDataToSend(formData, e))
        }
    }

    const isAllMandatoryFieldsHasValue = () => {
        const mandatoryFieldsWithoutValue = childEl.filter(child => {
            const isMandatoryField = !!child?.props?.mandatory;
            const filedName = child?.props?.name;
            const filedValue = formData[filedName]?.value;
            if (isMandatoryField) {
                const isValueValid = formData[filedName]?.isValid
                return !isValueValid;
            }
            return false
        })
        return !mandatoryFieldsWithoutValue?.length
    }

    const onInputChange = (config) => {
        const {value, name, isValid, type = ''} = config;
        const inputState = {
            [name]: {
                value,
                isValid,
                type
            }
        }
        setFormData(() => {
            return {...formData, ...inputState}
        })
    }

    const renderInputs = ()  => {
        return childEl.map(child => {
            const inputName = child.props.name || '';
            const inputValue = inputName ? formData[inputName]?.value || '' : null;

            return cloneElement(child, {
                onChange: onInputChange,
                value: inputValue || '',
                key: inputName
            })
        })
    }

    const inputs = renderInputs();

    let formBtn = (function () {
        if (submitState?.loading) {
            return (
                <Button.Loader/>
            )
        } else {
            return (
                <Button.Regular
                    text={'Отправить'}
                    type="submit"
                    disabled={!isAllMandatoryFieldsHasValue()}
                />
            )
        }
    }());

    return (
        <form className="form"
              onSubmit={onSubmitFn}
        >
            {title ? titleEl : null}
            <div className="form__wrapper">
                {inputs}
            </div>
            {formBtn}
        </form>

    )
};

export default Form;