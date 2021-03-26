import React, { useState } from 'react'
import navbar from '../../assets/styles/navbar.sass'

import Navbar from 'react-bootstrap/Navbar' 
import HamburgerBtn from './HamburgerBtn'


export default function Nav({ isLoading }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar className="nav" bg="light" expand="lg" style={isLoading ? {display: 'none'} : {display: 'flex'}}>
            <Navbar.Brand className="title-logo">iOT</Navbar.Brand>
            <HamburgerBtn isOpen={isOpen} setIsOpen={setIsOpen}/>
        </Navbar>
    )
}

