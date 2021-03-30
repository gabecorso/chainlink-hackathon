import React, { useState } from 'react'
import {Navbar, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTh, faSearch, faBell, faStar } from '@fortawesome/free-solid-svg-icons';

export default function MobileFooter() {
    return (
        <Navbar fixed={'bottom'} className="d-flex d-md-none nav" bg="light" expand="lg">
            <Nav className="flex-row w-100">
                <Nav.Link className="mx-auto" href="#home"><FontAwesomeIcon icon={faPencilAlt} /></Nav.Link>
                <Nav.Link className="mx-auto" href="#companies"><FontAwesomeIcon icon={faTh} /></Nav.Link>
                <Nav.Link className="mx-auto" href="#search"><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                <Nav.Link className="mx-auto" href="#link"><FontAwesomeIcon icon={faStar} /></Nav.Link>
                <Nav.Link className="mx-auto" href="#notifications"><FontAwesomeIcon icon={faBell} /></Nav.Link>
            </Nav>
        </Navbar>
    )
}

