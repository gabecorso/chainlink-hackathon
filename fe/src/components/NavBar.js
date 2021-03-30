import React, { useState } from 'react'
import navbar from '../styles/navbar.sass'
import { useHistory } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar' 
import HamburgerBtn from './common/HamburgerBtn'


export default function Nav({ isLoading, isOpen, setIsOpen }) {
    // To determine how we style the logo and menu button. 
    // Once we switch to redux this hack can be factored out.
    let isHomePage = useHistory().location.pathname == "/";
    
    return (
        <Navbar className={"nav"} bg="light" expand="lg" style={isLoading ? {display: 'none'} : {display: 'flex'}}>
            <Navbar.Brand className="title-logo" style={isHomePage ? {color: '#eee'} : {color: '#111'}}>iOT</Navbar.Brand>
            <HamburgerBtn isOpen={isOpen} setIsOpen={setIsOpen} isHomePage={isHomePage} />
        </Navbar>
    )
}

