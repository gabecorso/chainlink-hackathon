import React from 'react';
import {Container} from "react-bootstrap";
import Navbar from "./Navbar";
import MobileFooter from "./MobileFooter";

export default function Layout(props) {
    const {showMobileFooter = true, showNav = true} = props;
    return (
        <Container fluid>
            {showNav && <Navbar isLoading={false} />}
            {props.children}
            {showMobileFooter && <MobileFooter />}
        </Container>
    )

}