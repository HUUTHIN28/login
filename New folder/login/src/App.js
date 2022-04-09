import React from 'react';
import { Link, Route, Switch } from "react-router";
import './App.css';
import Login from './component/login/Login';
import Home from './component/home/Home';
import HomePage from './component/HomePage/HomePage';
import Erron from './component/erron/Erron';
import { useDispatch, useSelector } from 'react-redux';
import { namelogin } from './component/login/loginredux'
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import Protected from './component/ProtectedRoute/Protected';
import Loginerror from './component/erron/Loginerror';
import Narbar from './component/narbar/Narbar';
import Course from './component/Course/Course';
import Registration from './component/login/registration/Registration';
import AddCourse from './component/Course/addCourse/AddCourse';
function App() {
  const name = useSelector(namelogin);
  console.log('thinn', name)
  return (
    <div className="App">

      <Narbar />

      <Switch>


        <Protected exact path='/home' component={Home} />

      
        <Protected exact path='/khoahoc' component={Course} />
        <Protected exact path='/khoahoc/addCourse' component={AddCourse} />

        <ProtectedRoute exact path='/registration' component={Registration} />

        <Route exact path='/' component={HomePage} />


        <ProtectedRoute exact path='/login' component={Login} />

        <Route path='/loginerror' exact component={Loginerror} />



        <Route path='*' exact component={Erron} />


      </Switch>





    </div>
  );
}

export default App;
