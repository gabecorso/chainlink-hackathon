import React from 'react';
import layout from "../../styles/layout.sass";
import {Container} from "react-bootstrap";
import Navbar from "./NavBar";
import MobileFooter from "./MobileFooter";

export default function Layout(props) {
    const {showMobileFooter= true, showNav=true, cName=''} = props;
    return (
        <Container fluid className={`${cName} layout`}>
            {showNav && <Navbar isLoading={false} />}
            {props.children}
            {showMobileFooter && <MobileFooter />}
        </Container>
    )

}