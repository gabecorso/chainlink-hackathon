import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from "./landing/Splash";
import Account from "./user/Account";
import SignUp from "./user/SignUp";
import CompanyProfile from "./company/CompanyProfile";
import ManageCompanies from "./company/CompanyProfile";
import Login from "./user/Login";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Splash />
                </Route>
                <Route path='/accounts/:id'>
                    <Account />
                </Route>
                <Route path='/sign-up'>
                    <SignUp />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/company/:id'>
                    <CompanyProfile />
                </Route>
                <Route path='/manage'>
                    <ManageCompanies />
                </Route>

            </Switch>
        </Router>
    )
};
