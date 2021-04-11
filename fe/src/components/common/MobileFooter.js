import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTh, faSearch, faBell, faStar } from '@fortawesome/free-solid-svg-icons';

export default function MobileFooter() {
    return (
        <Navbar fixed='bottom' className="d-flex d-md-none nav mobile-footer" bg="light" expand="lg">
            <Nav className="flex-row w-100">
                <NavLink className="mx-auto" to="/tasks" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faPencilAlt} /></NavLink>
                <NavLink className="mx-auto" to="/your-companies" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faTh} /></NavLink>
                <NavLink className="mx-auto" to="/dashboard" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faStar} /></NavLink>
                <NavLink className="mx-auto" to="/explore" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faSearch} /></NavLink>
                <NavLink className="mx-auto" to="/notifications" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faBell} /></NavLink>
            </Nav>
        </Navbar>
    )
}

