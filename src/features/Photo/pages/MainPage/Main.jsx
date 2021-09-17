import React from 'react';
// import PropTypes from 'prop-types';
// import Images from '../../../../constans/images';
// import Banner from '../../../../components/Banner/Banner';
import Banner from 'components/Banner/Banner';
import Images from 'constans/images';
import { Link , useHistory} from 'react-router-dom';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

Main.propTypes = {
    
};  

function Main(props) {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos);
    const history = useHistory();
    // console.log('List of photos: ', photos);

    const handlePhotoEditClick = (photo) => {
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    }

    const handlePhotoRemoveClick = (photo) => {
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos " backgroundUrl={Images.PINK_BG}/>
            <Container  className="text-center">
            <div className="py-5">
                <Link to="/photos/add">Add new photo</Link>
            </div>
                    <PhotoList
                        photoList={photos}
                        onPhotoEditClick={handlePhotoEditClick}
                        onPhotoRemoveClick={handlePhotoRemoveClick}
                    />
            </Container>
        </div>
    );
}

export default Main;