import React from 'react';
// import PropTypes from 'prop-types';
import {
    useRouteMatch,
    Switch,
    Route,
  } from "react-router-dom";
// import NotFound from '../../components/NotFound/NotFound';
import AddEditPage from './pages/AddEditPage/AddEdit';
import MainPage from './pages/MainPage/Main'
import NotFound from 'components/NotFound/NotFound';

Photo.propTypes = {
    
};

function Photo(props) {
    const match=useRouteMatch()
    return (
        <div>
            <Switch>
                <Route exact path={match.url}> 
                    <MainPage></MainPage> 
                </Route>
                <Route path={`${match.url}/add`} > 
                    <AddEditPage></AddEditPage> 
                </Route>
                <Route path={`${match.url}/:photoId`} > 
                    <AddEditPage></AddEditPage> 
                </Route>
                <Route>
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </div>
    );
}

export default Photo;