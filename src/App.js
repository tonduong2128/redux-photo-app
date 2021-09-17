import React, {Suspense, useEffect} from 'react';
// import {useState} from 'react' 
import './App.css';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header'
import productApi from 'api/productsApi';
import SignIn from 'features/Auth/pages/SignIn/SignIn';

import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { getMe } from 'app/userSlice';
import { current, unwrapResult } from '@reduxjs/toolkit';

const Photo=React.lazy( ()=> import('./features/Photo')) //không load ngay chỉ khi vào đường dẫn mới load




// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {

  const dispatch = useDispatch();
  // const [productList, setProductList]=useState([]);

  useEffect(() => {
    const fetchProductList= async ()=>{
      try {
        const params={
          _page:1,
          _limit:10
        }
        const response=await productApi.getAll(params)
        console.log(response);
      } catch(error) {
        console.log("fail to fetch products",error);
      }
    }
    fetchProductList();  
  }, [])

  //handle firebase auth changed
  useEffect(()=>{
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      if (!user){
        //user logs out, handle something here
        console.log("user not login ");
        return
      }

      // const token = user.getIdToken();
      window.localStorage.setItem('firebaseui::remeberedAccounts',JSON.stringify([{
        email:user.email,
        displayName:user.displayName
      }]))

      //get me when signed
      const actionResult = dispatch(getMe());
      actionResult.unwrap().then(current=>{
        console.log("login user: ",current);
      })
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  },[])


  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Redirect exact from='/' to='/photos'></Redirect>

            <Route path='/photos' component={Photo}/>
            <Route path='/sign-in' component={SignIn}/>
            <Route component={NotFound}></Route>
          </Switch>

        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
