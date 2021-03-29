import React from 'react'
import sidebar from '../styles/sidebar.sass'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export default function SideBar({isOpen, setIsOpen}) {
    const sideBarAnimation = useSpring({
        transform: isOpen
          ? `translate3d(0,0,0) scale(1)`
          : `translate3d(100%,-100%,0) scale(0.6)`
      });
    const menuItems = ["Home", "Services", "Account", "Sign Up"];
    return (
        <animated.div className={isOpen ? "side-menu open" : "side-menu"} style={sideBarAnimation}>
            <ul className="menu-items">
                {
                    menuItems.map( item => {
                        return (
                        <li className= {"nav-item"} onClick={() => {setIsOpen(!isOpen)}}>
                            <NavLink to={"/".concat(item.includes(" ") ? 
                                                        item.toLowerCase().split(" ").join("-") 
                                                        : item.toLowerCase())} 
                                    >
                                {item}
                            </NavLink>
                        </li>
                        )
                    })
                }
            </ul>
        </animated.div>
    )
}
