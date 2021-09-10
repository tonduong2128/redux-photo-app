import React from 'react';
// import PropTypes from 'prop-types';
import { Button, FormGroup } from 'reactstrap';
import { FastField, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './PhotoForm.scss'

import { PHOTO_CATEGORY_OPTIONS } from 'constans/global'; // đã config ở file jsconfig.js
import InputField from 'customs-fields/InputField/InputField';
import SelectField from 'customs-fields/SelectField/SelectField';
import RandomPhotoField from 'customs-fields/RandomPhotoField/RandomPhotoField';


PhotoForm.propTypes = {
    
};

function PhotoForm(props) {

    const initialValues={
        title:'',
        categoryId: null,
    }

    const validationSchema=Yup.object().shape({
            title: Yup.string()
              .max(50, `Must be {50} characters or less`)
              .required('This field is required'),

            categoryId: Yup.string()
              .required('This field is required').nullable(),
              
            photo: Yup.string().when('categoryId',{
                is: '1',  
                then: Yup.string().required('This field is required'),
                otherwise: Yup.string().notRequired()
            }),
    })


    return (
        <Formik
            initialValues={initialValues} //????
            validationSchema={validationSchema}
            onSubmit={(value)=>{
                console.log(value);
            }}
        >
          {formikProps=>{
            const {values, errors, touched }=formikProps;
            return(<Form>


                    <FastField //chỉ rerender những cái thay đổi còn Fiedl thì rerender lại khi cái khác thay đổi
                        name="title"
                        component={InputField}

                        label="Title"
                        placeholder="Eg: Wow nature..."
                    />
                    
                    <FastField //chỉ rerender những cái thay đổi còn Fiedl thì rerender lại khi cái khác thay đổi
                        name="categoryId"
                        component={SelectField}

                        label="Category"
                        placeholder="What's you photo category?"
                        options={PHOTO_CATEGORY_OPTIONS}
                    />


                    <FastField
                        name="photo"
                        component={RandomPhotoField}
                        
                        label="Photo"
                    />
                    
                    <FormGroup>
                        <Button type="submit" color="primary">Add to album </Button>
                    </FormGroup>
                </Form>)
              }
          }
        </Formik>
        
    );
}

export default PhotoForm;