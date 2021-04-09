import React, { useState } from 'react';
import navbar from '../../styles/navbar.sass';

import Navbar from 'react-bootstrap/Navbar';
import HamburgerBtn from './HamburgerBtn';
import SideBar from './SideBar';
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
            <FontAwesomeIcon />
            <HamburgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
            
        </Navbar>

    )
}

