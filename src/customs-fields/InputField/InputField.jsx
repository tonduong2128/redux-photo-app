import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

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
                //{...field}  tương ứng 4 dòng trên
            ></Input>
        </FormGroup>
    );
}

export default InputField;