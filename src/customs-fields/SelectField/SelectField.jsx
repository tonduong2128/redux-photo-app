import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    options:PropTypes.array,
    label:PropTypes.string,
    placeholder:PropTypes.string,
    disabled:PropTypes.bool,
};
SelectField.defaultProps={
    options:[],
    label:"",
    placeholder:"",
    disabled:false,
}

function SelectField(props) {
    const {
        field,form,
        options, placeholder, label, disabled
    }=props
    var { name, value} = field;
    var selectedOption = options.find(option=> option.value===value)
    const showError = form.errors[name] && form.touched[name]

    
    var handleSelectedOptionChange=(selectedOption)=>{
        const selectedValue=selectedOption? selectedOption.value:selectedOption;

        const changeEvent= {
            target:{
                name:name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent);
    }
    return (
        <FormGroup>
           {label && <Label for={name}>{label}</Label> }
            <Select 
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}

                className={showError? 'is-invalid':''}
            ></Select>
            <FormFeedback>{form.errors[name]}</FormFeedback>
        </FormGroup>
    );
}

export default SelectField;