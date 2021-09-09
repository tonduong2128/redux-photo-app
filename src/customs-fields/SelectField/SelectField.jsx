import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
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
        field,
        options, placeholder, label, disabled
    }=props
    const {name, value} = field;
    const selectedOption = options.find(option=> options.value===value)
    
    const handleSelectedOptionChange=(selectedOption)=>{
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
                onChange={handleSelectedOptionChange}
                value={selectedOption}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
            ></Select>
        </FormGroup>
    );
}

export default SelectField;