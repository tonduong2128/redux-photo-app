import React from 'react';
// import PropTypes from 'prop-types';
import firebase from 'firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';
SignIn.propTypes = {
    
};

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '/photos',
    callbacks: {
        // Avoid redirects after sign-in.
        // signInSuccessWithAuthResult: () => false,
    },
};

function SignIn(props) {

    const currentUser =  firebase.auth().currentUser;
    console.log(currentUser);

    return (
        <div>
            <div className="text-center">
                <h2>Login Form</h2>
                <p>or login w</p>
            </div>
                <StyledFirebaseAuth 
                    uiConfig={uiConfig} 
                    firebaseAuth={firebase.auth()} 
                />
        </div>
    );
}

export default SignIn;