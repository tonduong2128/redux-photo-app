import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner/Banner';
import PhotoForm from '../../components/PhotoForm/PhotoForm';
import './AddEdit.scss'

AddEdit.propTypes = {
    
};

function AddEdit(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo"></Banner>
            <div className="photo-edit__form">
                <PhotoForm onSubmit={value=> console.log('form submit value:',value)} ></PhotoForm>
            </div>
        </div>
    );
}

export default AddEdit;