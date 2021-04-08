import React, { useState } from 'react';
import navbar from '../../styles/navbar.sass';

import Navbar from 'react-bootstrap/Navbar';
import HamburgerBtn from './HamburgerBtn';
import SideBar from './SideBar';


export default function Nav({ isLoading }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar 
        className={"nav mt-1 ml-1"}  
        expand="lg" 
        style={isLoading ? {display: 'none'} : {display: 'flex'}}
        >
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Navbar.Brand className="title-logo ">iOT</Navbar.Brand>
            <HamburgerBtn isOpen={isOpen} setIsOpen={setIsOpen} />
            
        </Navbar>

    )
}

