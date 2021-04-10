import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTh, faSearch, faBell, faStar } from '@fortawesome/free-solid-svg-icons';

export default function MobileFooter() {
    return (
        <Navbar fixed='bottom' className="d-flex d-md-none nav mobile-footer" bg="light" expand="lg">
            <Nav className="flex-row w-100">
                <Link className="mx-auto" to="/tasks"><FontAwesomeIcon icon={faPencilAlt} /></Link>
                <Link className="mx-auto" to="/your-companies"><FontAwesomeIcon icon={faTh} /></Link>
                <Link className="mx-auto" to="/dashboard"><FontAwesomeIcon icon={faStar} /></Link>
                <Link className="mx-auto" to="/explore"><FontAwesomeIcon icon={faSearch} /></Link>
                <Link className="mx-auto" to="/notifications"><FontAwesomeIcon icon={faBell} /></Link>
            </Nav>
        </Navbar>
    )
}

