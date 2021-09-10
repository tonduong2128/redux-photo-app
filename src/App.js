import React, {Suspense} from 'react';
import './App.css';
import {
  BrowserRouter,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header'

const Photo=React.lazy( ()=> import('./features/Photo')) //không load ngay chỉ khi vào đường dẫn mới load

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Redirect exact from='/' to='/photos'></Redirect>

            <Route path='/photos' component={Photo}/>

            <Route component={NotFound}></Route>
          </Switch>

        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
