import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from "./landing/Splash";
import Account from "./user/Account";
import About from "./landing/About";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import CompanyProfile from "./company/CompanyProfile";
import ManageCompanies from "./company/CompanyProfile";
import CreateCompanies from "./company/CreateCompany";

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
                <Route path='/create'>
                    <CreateCompanies />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
            </Switch>
        </Router>
    )
};
