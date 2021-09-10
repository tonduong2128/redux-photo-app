import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,
};
InputField.defaultProps={
    type:"text",
    label:"",
    placeholder:"",
    disabled:false,
}

function InputField(props) {
    const {
        field, form,
        placeholder, label, type, disabled
    }=props
    const {name, value, onChange, onBlur} = field;

    const showError = form.errors[name] && form.touched[name]


    return (
        <FormGroup>
           {label && <Label for={name}>{label}</Label> }
            <Input 
                placeholder={placeholder}
                type={type}
                disabled={disabled}

                id={name} 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                invalid={showError}
                //{...field}  tương ứng 4 dòng trên
            ></Input>
            <FormFeedback>{form.errors[name]}</FormFeedback>
        </FormGroup>
    );
}

export default InputField;