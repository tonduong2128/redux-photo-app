import React from 'react';
// import PropTypes from 'prop-types';
import { Button, FormGroup, Spinner } from 'reactstrap';
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
    
    const {initialValues}=props;

    const validationSchema=Yup.object().shape({
            title: Yup.string()
              .max(100, `Must be {50} characters or less`)
              .required('This field is required'),

            categoryId: Yup.string()
              .required('This field is required').nullable(),
              
            // photo: Yup.string().when('categoryId',{
            //     is: '1',  
            //     then: Yup.string().required('This field is required'),
            //     otherwise: Yup.string().notRequired()
            // })

            photo: Yup.string().required('This field is required'),
    })


    return (
        <Formik
            initialValues={initialValues} //????
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
          {formikProps=>{
            const { isSubmitting }= formikProps;

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
                        <Button type="submit" color={initialValues.title? "success": "primary" } className="mt-2">
                            { isSubmitting && <Spinner size="sm" color="light" >  </Spinner>}   
                            
                           {initialValues.title ? "Update photo":"Add to album" } 
                        </Button>
                    </FormGroup>
                </Form>)
              }
          }
        </Formik>
        
    );
}

export default PhotoForm;