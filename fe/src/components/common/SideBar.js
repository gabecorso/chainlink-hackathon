import React from 'react'
import sidebar from '../../styles/sidebar.sass'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export default function SideBar({isOpen, setIsOpen}) {
    const menuItems = ["Home", "Account", "About", "Sign Up"];

    const sideBarAnimation = useSpring({ 
            transform: isOpen ?  `translate3d(0,0,0) scale(1)`
            : `translate3d(6000px, -100vw,0) scale(0.6)`
      });

    return (
        <animated.div 
            className={isOpen ? "side-menu open" : "side-menu"} 
            style={sideBarAnimation}
        >
            <ul className="menu-items">
                {
                menuItems.map( item => {
                    return (
                        <animated.div
                            className={isOpen ?  "open" : "closed"} 
                            style={sideBarAnimation}
                        >
                            <li className= {"nav-item"} 
                                onClick={() => {setIsOpen(!isOpen)}}
                            >
                                <NavLink to={"/".concat(item.includes(" ") ? 
                                            item.toLowerCase().split(" ").join("-") 
                                            : item.toLowerCase())} 
                                >
                                    {item}
                                </NavLink>
                            </li>
                        </animated.div>
                    )
                })
                }
            </ul>
        </animated.div>
    )
}
