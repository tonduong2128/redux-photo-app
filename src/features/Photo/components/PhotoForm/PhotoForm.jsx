import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select'
// import { PHOTO_CATEGORY_OPTIONS } from '../../../../constans/global';
import { PHOTO_CATEGORY_OPTIONS } from 'constans/global';
// import Images from '../../../../constans/images';
import Images from 'constans/images';
import './PhotoForm.scss'
import { FastField, Form, Formik } from 'formik';
import InputField from 'customs-fields/InputField/InputField';
import SelectField from 'customs-fields/SelectField/SelectField';

PhotoForm.propTypes = {
    
};

function PhotoForm(props) {

    const initialValues={
        title:'',
        categoryId: null,
    }

    return (
        <Formik
            initialValues={initialValues} //????
        >
          {formikProps=>{

            const {values, errors, touched }=formikProps;
            console.log({values, errors, touched });   

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

                    <FormGroup>
                        <Label for="categoryId">Photo</Label>
                        <div><Button type="button" outline color="primary">Random a photo</Button></div>
                        <div>
                            <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="color"></img>
                        </div>
                    </FormGroup>
                    
                    <FormGroup>
                        <Button color="primary">Add to album </Button>
                    </FormGroup>
                </Form>)
              }
          }
        </Formik>
        
    );
}

export default PhotoForm;