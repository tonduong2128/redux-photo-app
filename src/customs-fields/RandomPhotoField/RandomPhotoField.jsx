import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto/RandomPhoto';

RandomPhotoField.propTypes = {
    field:PropTypes.object.isRequired,
    form:PropTypes.object.isRequired,

    label: PropTypes.string
};

RandomPhotoField.defaultProps={
    label:''
}

function RandomPhotoField(props) {
    const { field, form, label} = props;
    const { name, value, onBlur} = field;

    const showError = form.errors[name];

    const handleImageUrlChange=(newImageUrl)=>{
        form.setFieldValue(name, newImageUrl);
    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur = {onBlur}
            ></RandomPhoto>

            <div className={showError? 'is-invalid':''}></div>
            <FormFeedback>{form.errors[name]}</FormFeedback>    
        </FormGroup>
    );
}

export default RandomPhotoField;