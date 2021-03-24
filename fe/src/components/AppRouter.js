import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from "./Splash";
import Account from "./Account";
import SignUp from "./SignUp";

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Splash />
                </Route>
                <Route>
                    <Account />
                </Route>
                <Route>
                    <SignUp />
                </Route>
                <Route>
                    
                </Route>
            </Switch>
        </Router>
    )
};