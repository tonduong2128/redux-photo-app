import React from 'react';
// import PropTypes from 'prop-types';
// import Images from '../../../../constans/images';
// import Banner from '../../../../components/Banner/Banner';
import Banner from 'components/Banner/Banner';
import Images from 'constans/images';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

Main.propTypes = {
    
};  

function Main(props) {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photos " backgroundUrl={Images.PINK_BG}/>
            <Container  className="text-center">
                    <Link to="/photos/add" > Add new photo </Link>
            </Container>
        </div>
    );
}

export default Main;