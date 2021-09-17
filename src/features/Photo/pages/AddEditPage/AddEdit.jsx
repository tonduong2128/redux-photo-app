import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory, useParams } from 'react-router';
// import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner/Banner';
import PhotoForm from '../../components/PhotoForm/PhotoForm';
import './AddEdit.scss'
import uniqid from 'uniqid';

AddEdit.propTypes = {
    
};

function AddEdit(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const {photoId} = useParams()
    const editPhoto=useSelector(state=>state.photos.find((photo)=>photo.id.toString()===photoId))
    const initialValues=editPhoto || {
            title:'',
            categoryId: null,
            photo:''
        }

    const handleSubmit=(value)=>{
        return new Promise((resolve)=>{
            console.log(value);
            setTimeout(()=>{
                value={
                    ...value,
                    id: photoId || uniqid()
                }
                photoId ? dispatch(updatePhoto(value)) : dispatch(addPhoto(value));
                history.push("/photos");
                resolve(true)
            },1500)
        })
    }

    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo"></Banner>
            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmit} initialValues={initialValues}></PhotoForm>
            </div>
        </div>
    );
}

export default AddEdit;