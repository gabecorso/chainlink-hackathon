import React from 'react'
import navbar from '../../styles/navbar.sass'
import { NavLink, useHistory } from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTh, faSearch, faBell, faStar } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({isMobile}) {
    let locale = useHistory().location.pathname;
    console.log(locale)
    return (
        <Navbar fixed={isMobile? 'bottom': 'top'} className={isMobile? "d-flex nav mobile-nav" : "d-flex nav"} bg="light" expand="lg">
            <Nav className="flex-row w-100">
                <NavLink className="mx-auto" to="/tasks" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faPencilAlt} /></NavLink>
                <NavLink className="mx-auto" to="/your-companies" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faTh} /></NavLink>
                {isMobile && <NavLink className="mx-auto" to="/dashboard" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faStar} /></NavLink>}
                {!isMobile && <NavLink className="mx-auto" to="/dashboard" activeStyle={{color:"gold"}}><h2 style={locale === "/dashboard"? {color: "gold"} : {color: "#242424"}}>IOT</h2></NavLink>}
                <NavLink className="mx-auto" to="/explore" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faSearch} /></NavLink>
                <NavLink className="mx-auto" to="/notifications" activeStyle={{color:"gold"}}><FontAwesomeIcon icon={faBell} /></NavLink>
            </Nav>
        </Navbar>
    )
}


