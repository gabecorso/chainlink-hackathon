import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Splash from "./landing/Splash";
import Account from "./user/Account";
import About from "./landing/About";
import Login from "./user/Login";
import SignUp from "./user/SignUp";
import CompanyProfile from "./company/CompanyProfile";
import ManageCompanies from "./company/ManageCompanies";
import ManageCompaniesCharles from "./company/ManageCompaniesCharles"
import CreateCompanyForm from "./company/CreateCompany";
import NotificationsPage from "./notifications/NotificationsPage";
import TasksPage from "./tasks/TasksPage";
import Dashboard from "./dashboard/Dashboard";
import ExplorePage from "./explore/ExplorePage"

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
                <Route path='/your-companies'>
                    <ManageCompanies />
                </Route>
                {/* Get rid of this one */}
                <Route path='/your-ccompanies/1'>
                    <ManageCompaniesCharles />
                </Route>
                <Route path='/create'>
                    <CreateCompanyForm />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/tasks'>
                    <TasksPage />
                </Route>
                <Route path='/notifications'>
                    <NotificationsPage />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/explore'>
                    <ExplorePage />
                </Route>
            </Switch>
        </Router>
    )
};
