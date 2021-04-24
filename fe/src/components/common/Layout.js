import React, { useState } from 'react';
import layout from "../../styles/layout.sass";
import {Container} from "react-bootstrap";
import Navbar from "./NavBar";

let initIsMobile = /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

export default function Layout(props) {
    const {cName=''} = props;
    const [isMobile, setIsMobile ] = useState(initIsMobile)
    return (
        <Container fluid className={`${cName} layout`}>
            <Navbar isMobile={isMobile} />
            {props.children}
        </Container>
    )

}