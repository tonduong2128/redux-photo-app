// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import firebase from 'firebase';

const getFirebaseToken = async ()=>{
    const currentUser=firebase.auth().currentUser;
    if (currentUser){
        return currentUser.getIdToken();
    }
    
    //not login
    const hasRememberAccount=window.localStorage.getItem('firebaseui::remeberedAccounts')
    if (!hasRememberAccount){
        return null;
    } 

    // Logged in but current user is not fetch ->wait 10s
    return new Promise((resolve,reject)=>{
        const waitTimer = setTimeout(()=>{
            reject(null);
        },10000)
        //
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            if (!user){
              reject(null);
            }
            const token = user.getIdToken();
            window.localStorage.setItem('firebaseui::remeberedAccounts',JSON.stringify([{
              email:user.email,
              displayName:user.displayName
            }]))
            console.log("await", token);
            resolve(token)
            unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.   
            clearTimeout(waitTimer );
          });
    });
}

// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
//config` for the full list of configs

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
    'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});


axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...// nó gọi trước khi firebase gọi
    // const currentUser=firebase.auth().currentUser;
    // if (currentUser)
    // {
    //     const token =  await currentUser.getIdToken();
    //     config.headers.Authorization=`Bearer ${token}`
    // }

    const token = await getFirebaseToken();
    if (token){
        config.headers.Authorization=`Bearer ${token}`
    }

    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
// Handle errors
    throw error;
});

export default axiosClient;