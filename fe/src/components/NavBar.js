import React, { useState } from 'react'
import navbar from '../styles/navbar.sass'

import Navbar from 'react-bootstrap/Navbar' 
import HamburgerBtn from './common/HamburgerBtn'


export default function Nav({ isLoading, isOpen, setIsOpen }) {
    return (
        <Navbar className={"nav"} bg="light" expand="lg" style={isLoading ? {display: 'none'} : {display: 'flex'}}>
            <Navbar.Brand className="title-logo">iOT</Navbar.Brand>
            <HamburgerBtn isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Navbar>
    )
}

