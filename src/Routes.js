import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import Dashboard from './user/UserDashboard';
import AdminDashboard from './user/AdminDashboard';
import JavaScript from './user/CoursesPages/JavaScript';
import ReactJs from './user/CoursesPages/ReactJs';
import Aws from './user/CoursesPages/Aws';
import Html from './user/CoursesPages/Html';
import ReactNative from './user/CoursesPages/ReactNative';
import Python from './user/CoursesPages/Python';


const Routes = () => {
    return (
        /*All the required routes are shown here.
          Routes for user and admin are separate. */
         
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <Route path='/user/dashboard/course/javascript' excat component={JavaScript} />
                <Route path='/user/dashboard/course/reactJs' excat component={ReactJs} />
                <Route path='/user/dashboard/course/aws' excat component={Aws} />
                <Route path='/user/dashboard/course/python' excat component={Python} />
                <Route path='/user/dashboard/course/reactnative' excat component={ReactNative} />
                <Route path='/user/dashboard/course/html' excat component={Html} />
            </Switch>
            
            <footer className="footer">
            CopyRight @ 2020 DEXTER
        </footer>
        </BrowserRouter>
      
    )
}

export default Routes;