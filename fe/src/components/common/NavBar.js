import React, { useState } from 'react';
import navbar from '../../styles/navbar.sass';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import SideBar from './SideBar';
import HamburgerBtn from './HamburgerBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';


export default function Nav({ isLoading }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar 
        className={"top-nav d-none d-md-flex mt-1 ml-1"}  
        expand="lg" 
        style={isLoading ? {display: 'none'} : {display: 'flex'}}
        >
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Navbar.Brand className="title-logo ">iOT</Navbar.Brand>
            <div className="nav-items">
                <NavLink className="mx-auto" to="/explore"><FontAwesomeIcon icon={faSearch} /></NavLink>
                <HamburgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            
        </Navbar>

    )
}

