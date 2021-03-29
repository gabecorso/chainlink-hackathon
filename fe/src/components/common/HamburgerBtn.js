import React, { useState} from 'react';
import hamburger from '../../styles/hamburger.sass';

export default function HamburgerBtn({isOpen, setIsOpen, isHomePage}) {
    function burgerClick(e) {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className={isHomePage? "menu-btn" : "menu-btn black"} onClick={burgerClick}>
            <div className={isOpen? "burger-line one open" : "burger-line one"}></div>
            <div className={isOpen? "burger-line two open" : "burger-line two"}></div>
            <div className={isOpen? "burger-line three open" : "burger-line three"}></div>
        </div>
    )
}
