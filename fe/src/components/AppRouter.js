import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Account from "./Account";
import SignUp from "./SignUp";

export default function AppRouter() {
    return (
        // <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/accounts/:id'>
                    <Account />
                </Route>
                <Route path='/sign-up'>
                    <SignUp />
                </Route>
            </Switch>
        // </Router>
    )
};
